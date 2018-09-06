# Goal

The goal component comes in several forms and sizes. It can be used both as a
link or as astandalone graphical component.

## API
The class constructor takes three arguments:

- __id__ (_string_): unique component id.
- __state__ (_object_): an object onto which member property `components` the internal component state will be reflected, usefull for debugging.
- __emit__ (_function_): a function which is used for communicating component events.

### Background
To customize the goal background, extend of the Goal class overwriting the `background` method. It takes two arguments, the goal number and an options object.

The default behavour of `background` is to lazily fetch the a background component and call `this.rerender()` once the component is loaded.

### Events
Events are emitted using the emit constructor argument function.

- __pushState:__ emitted when page transition finishes, event argument will be the href.

### Render arguments
The render method takes two arguments; an object with goal properties and a function for rendering children.

#### Render props

- __href__ (_string_): render goal as a link and attach href attribute.
- __onclick__ (_function_): called when goal is clicked, forwarding the event. Will prevent page transition if `event.preventDefault()` is called.
- __format__ (_string_): one of `square`, `landscape`, `portrait` or `fullscreen`.
- __blank__ (_boolean_): the goal will render as a grey box with no text, icon or background.
- __number__ (_number_): the goal number
- __label__ (_string_): the goal icon label, newline (`\n`) is used to compose SVG label.
- __description__ (_string_): short description of the goal, displayed in `fullscreen` format.

#### Children
Will render in all formats but the `square` format.