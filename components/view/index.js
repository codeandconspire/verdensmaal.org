var assert = require('assert')
var html = require('choo/html')
var Component = require('choo/component')
var { asText } = require('prismic-richtext')
var { Predicates } = require('prismic-javascript')
var Flag = require('../flag')
var error = require('./error')
var share = require('../share')
var Header = require('../header')
var footer = require('../footer')
var player = require('../embed/player')
var { i18n, isSameDomain } = require('../base')

var text = i18n()

if (typeof window !== 'undefined') {
  require('focus-visible')
}

var DEFAULT_TITLE = text`SITE_TITLE`
var GOAL_SLUG = /^(\d{1,2})-(.+)$/

module.exports = View

// view constructor doubles as view factory
// if not called with the `new` keyword it will just return a wrapper function
// (str|fn, fn?) -> View|fn
function View (view, meta) {
  if (!(this instanceof View)) return createView(view, meta)
  var id = view
  assert(typeof id === 'string', 'View: id should be type string')
  Component.call(this, id)
  this.createElement = createView(this.createElement, this.meta)
}

View.prototype = Object.create(Component.prototype)
View.prototype.constructor = View
View.prototype.meta = function () {
  throw new Error('View: meta should be implemented')
}
View.createView = createView
View.createClass = createClass

function createClass (Class, id) {
  return function (state, emit) {
    return state.cache(Class, id).render(state, emit)
  }
}

function createView (view, meta) {
  return function (state, emit) {
    var self = this

    return state.docs.getSingle('website', function (err, doc) {
      if (err) throw err

      var children
      try {
        children = view.call(self, state, emit)
        let next = meta.call(self, state)

        // forward nested promises for deep prefetching to work
        if (state.prefetch) return Promise.all([children, next])

        if (next.title !== DEFAULT_TITLE) {
          next.title = `${next.title} | ${DEFAULT_TITLE}`
        }
        emit('meta', next)
      } catch (err) {
        if (state.prefetch) throw err
        err.status = err.status || 500
        children = error(err)
        emit('meta', { title: `${text`Oops`} | ${DEFAULT_TITLE}` })
      }

      var menu = doc && doc.data.main_menu.map(link)

      return html`
        <body class="View" id="view">
          ${doc ? getHeader() : null}
          ${children}
          ${doc ? getFooter() : null}
          ${player.render(null)}
          ${share.render(null)}
        </body>
      `

      function getHeader () {
        var opts = { isHighContrast: state.ui.isHighContrast }
        var isGoal
        if (state.params.wildcard) {
          let [, num] = (state.params.wildcard.match(GOAL_SLUG) || [])
          var predicate = Predicates.at('my.goal.number', +num)
          isGoal = num && state.docs.get(predicate, (err) => !err)
          if (isGoal) {
            opts.theme = +num === 7 ? 'black' : 'white'
            opts.static = true
            if (state.referrer === '') {
              opts.back = { href: '/', text: text`Back to Goals` }
            }
          }
        }
        if (state.route === 'mission') {
          opts.theme = 'white'
          opts.static = true
        }

        opts.slot = function () {
          return getFlag({
            white: isGoal || state.route === 'mission',
            id: `header${isGoal ? '-white' : ''}}`
          })
        }

        // determine selected menu item by caluclating href match
        var scores = [] // href match score [<score>, <index>]
        var segments = state.href.split('/')
        for (let i = 0, len = menu.length; i < len; i++) {
          let href = menu[i].href.replace(/\/$/, '')
          scores.push([href.split('/').reduce(function (score, segment, index) {
            return segments[index] === segment ? score + 1 : score
          }, 0), i])
        }

        // sort scores and pick out top score
        var topscore = scores.sort(([a], [b]) => a > b ? -1 : 1)[0]
        var links = menu.slice()
        links[topscore[1]].selected = true

        return html`
          <div class="View-header ${opts.static ? 'View-header--stuck View-header--appear' : ''}">
            ${state.cache(Header, 'header').render(links, state.href, opts)}
          </div>
        `
      }

      function getFooter () {
        var opts = doc && {
          shortcuts: [{
            links: menu,
            heading: asText(doc.data.main_menu_label)
          }].concat(doc.data.shortcuts.map(shortcut).filter(Boolean)).slice(0, 4),
          credits: {
            heading: asText(doc.data.credits_label),
            links: doc.data.credits.map(function (item) {
              return Object.assign({ logo: item.logo, role: item.role }, link(item))
            })
          },
          social: doc.data.social_networks.map(function (item) {
            return {
              type: item.type,
              href: resolve(item.link)
            }
          })
        }

        return html`
          <div class="View-footer">
            ${footer(opts, () => getFlag({ id: 'footer', vertical: true }))}
          </div>
        `
      }

      function getFlag (opts) {
        opts = Object.assign({
          href: '/mission',
          title: text`Denmark`,
          text: text`Greenland, Faroe Islands`
        }, opts)
        return state.cache(Flag, `${opts.id}-flag`).render(html`
          <svg viewBox="0 0 192 128">
            <path fill="#E81C35" fill-rule="nonzero" d="M0 76h52v52H0V76zM0 0h52v52H0V0zm192 52H76V0h116v52zm0 76H76V76h116v52z"/>
          </svg>
        `, opts)
      }
    })

    function shortcut (slice) {
      if (slice.slice_type !== 'shortcuts') return null
      return {
        heading: asText(slice.primary.heading),
        links: slice.items.map(link)
      }
    }

    function link (item) {
      var href = resolve(item.link)
      return {
        href: href,
        title: item.title,
        external: !isSameDomain(href)
      }
    }

    function resolve (link) {
      switch (link.link_type) {
        case 'Document': return state.docs.resolve(link)
        case 'Web':
        case 'Media':
        default: return link.url
      }
    }
  }
}
