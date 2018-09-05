var html = require('choo/html')
var { asText } = require('prismic-richtext')
var asElement = require('prismic-element')
var splitRequire = require('split-require')
var View = require('../components/view')
var Goal = require('../components/goal')
var { i18n } = require('../components/base')
var Engager = require('../components/engager')
var TargetGrid = require('../components/target-grid')

var text = i18n()
var backgrounds = [
  (callback) => splitRequire('../components/goal/background/1', callback),
  (callback) => splitRequire('../components/goal/background/2', callback),
  (callback) => splitRequire('../components/goal/background/3', callback),
  (callback) => splitRequire('../components/goal/background/4', callback),
  (callback) => splitRequire('../components/goal/background/5', callback),
  (callback) => splitRequire('../components/goal/background/6', callback),
  (callback) => splitRequire('../components/goal/background/7', callback),
  (callback) => splitRequire('../components/goal/background/8', callback),
  (callback) => splitRequire('../components/goal/background/9', callback),
  (callback) => splitRequire('../components/goal/background/10', callback),
  (callback) => splitRequire('../components/goal/background/11', callback),
  (callback) => splitRequire('../components/goal/background/12', callback),
  (callback) => splitRequire('../components/goal/background/13', callback),
  (callback) => splitRequire('../components/goal/background/14', callback),
  (callback) => splitRequire('../components/goal/background/15', callback),
  (callback) => splitRequire('../components/goal/background/16', callback),
  (callback) => splitRequire('../components/goal/background/17', callback)
]

class GoalPage extends View {
  constructor (id) {
    super(id)
    this.backgrounds = []
  }

  meta (state) {
    var [, uid] = state.params.wildcard.match(/^\d{1,2}-(.+)$/)
    return state.docs.getByUID('goal', uid, function (err, doc) {
      if (err) throw err
      if (!doc) return { title: text`LOADING_TEXT_SHORT` }
      return {
        title: asText(doc.data.title),
        description: asText(doc.data.description),
        'og:image': doc.data.social_image.url,
        goal: doc.data.number
      }
    })
  }

  background (num, opts) {
    if (typeof window === 'undefined') return null

    var index = num - 1
    var background = this.backgrounds[index]
    if (background) return background.render(opts)

    background = backgrounds[index]
    background((err, Background) => {
      if (err) background = { render () { throw err } }
      else background = new Background(`background-${num}`)
      this.backgrounds[index] = background
      this.rerender()
    })
  }

  update (state, emit) {
    return !state.ui.transitions.includes('goal-page')
  }

  createElement (state, emit) {
    var [, num, uid] = state.params.wildcard.match(/^(\d{1,2})-(.+)$/)
    var background = this.background(+num)

    return state.docs.getByUID('goal', uid, onresponse)

    // handle goal document response
    // (Error, obj) -> HTMLElement
    function onresponse (err, doc) {
      if (err) throw err

      var goal = state.cache(Goal, state.params.wildcard)
      var props = { format: 'fullscreen', number: +num, static: true }
      if (!doc) {
        return html`
          <main class="View-main">
            ${goal.render(props, background)}
          </main>
        `
      }

      props.number = doc.data.number
      props.label = asText(doc.data.label)

      var targets = doc.data.targets.map((target) => {
        return Object.assign({}, target, {
          title: asText(target.title),
          body: asElement(target.body, state.docs.resolve)
        })
      })

      return html`
        <main class="View-main">
          ${goal.render(props, () => html`
            <div>
              ${background}
              <div class="Text u-slideUp">
                <p><strong>${asText(doc.data.description)}</strong></p>
              </div>
            </div>
          `)}
          <section class="u-container u-spaceT8" id="targets">
            <div class="Text u-spaceB4">
              <h2>${asText(doc.data.targets_title)}</h2>
              ${asElement(doc.data.targets_description, state.docs.resolve)}
            </div>
            ${state.cache(TargetGrid, `${doc.data.number}-targets`).render(doc.data.number, targets)}
          </section>
          <section class="u-container u-spaceV8">
            ${/* eslint-disable indent */
            state.cache(Engager, 'goal-cta').render([
              { id: 'my-tab1', label: 'Noget inhold', content: () => html`<p>Nullam eget mattis nibh. Fusce sit amet feugiat massa, eu tincidunt orci.</p>` },
              { id: 'my-tab2', label: 'Mere inhold at se', content: () => html`<p>Integer ut eros velit. Nulla pharetra id magna ut congue. Phasellus non varius nisi, nec porta ligula.</p>` },
              { id: 'my-tab3', label: 'Indhold for alle', content: () => html`<p>Ut sodales sit amet lorem molestie porttitor. Donec vel neque fringilla magna fringilla cursus ac vitae diam.</p>` },
              { id: 'my-tab4', label: 'Endu en', content: () => html`<p>Aenean vitae felis purus. Aliquam lobortis neque nec ante aliquam, vitae finibus enim posuere.</p>` }
            ])
            /* eslint-enable indent */}
          </section>
          ${doc.data.interlink_heading && doc.data.interlink_heading.length ? html`
            <div class="u-container u-spaceV8">
              <div class="Text">
                <h3 class="u-spaceB0">
                  <span class="Text-h2 Text-gray">${asText(doc.data.interlink_heading)}</span>
                </h3>
                <div class="Text-h2 u-spaceT0">${asElement(doc.data.interlink_text, state.docs.resolve)}</div>
              </div>
            </div>
          ` : null}
        </main>
      `
    }
  }
}

module.exports = View.createClass(GoalPage, 'goal-page')
