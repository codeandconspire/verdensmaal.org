module.exports = ui

function ui (state, emitter) {
  state.ui = state.ui || {}
  state.ui.transitions = []
  state.ui.isLoading = false
  state.ui.hasOverlay = false
  state.ui.isHighContrast = false
  state.ui.theme = null
  state.ui.scrollOffset = 0
  state.ui.gridLayout = state.ui.gridLayout || Math.ceil(Math.random() * 9)
  state.ui.clock = { ref: 1 }

  // generic (optionally namespaced) vector clock for tracking changes
  emitter.on('tick', function (key) {
    state.ui.clock.ref++
    if (key) {
      if (!state.ui.clock[key]) state.ui.clock[key] = 1
      else state.ui.clock[key]++
    }
  })

  emitter.on('header:toggle', function (isOpen) {
    state.ui.hasOverlay = isOpen
    document.documentElement.classList[isOpen ? 'add' : 'remove']('has-overlay')
    emitter.emit('render')
  })

  emitter.on('header:resize', function (height) {
    state.ui.scrollOffset = height
  })

  emitter.on('contrast:toggle', function (isHighContrast) {
    if (typeof window === 'undefined') return
    state.ui.isHighContrast = isHighContrast
    var root = document.documentElement
    root.classList[isHighContrast ? 'add' : 'remove']('theme-highContrast')
    if (state.ui.theme) {
      root.classList[isHighContrast ? 'remove' : 'add'](`theme-${state.ui.theme}`)
    }
    emitter.emit('render')
  })

  emitter.on('theme', function (theme) {
    if (typeof window === 'undefined') return
    if (theme && state.ui.isHighContrast) return
    var root = document.documentElement
    if (theme) root.classList.add(`theme-${theme}`)
    else root.classList.remove(`theme-${state.ui.theme}`)
    state.ui.theme = theme || null
    emitter.emit('render')
  })

  emitter.prependListener('goal:transitionstart', function (id) {
    emitter.emit('transition:start', 'goal-page')
  })

  emitter.prependListener('goal:transitionend', function (id) {
    emitter.emit('transition:end', 'goal-page')
  })

  emitter.prependListener('navigate', function () {
    state.ui.hasOverlay = false
    document.documentElement.classList.remove('has-overlay')
  })

  emitter.on('transition:start', function (name) {
    state.ui.transitions.push(name)
  })

  emitter.on('transition:end', function (name) {
    var next = state.ui.transitions.filter((transition) => transition !== name)
    state.ui.transitions = next
  })

  emitter.on('navigate', function () {
    state.ui.transitions = []
  })

  var requests = 0
  emitter.on('prismic:request', start)
  emitter.on('prismic:response', end)
  emitter.on('prismic:error', end)

  function start () {
    requests++
    state.ui.isLoading = true
  }

  function end () {
    requests--
    state.ui.isLoading = requests > 0
  }
}
