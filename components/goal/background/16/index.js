var html = require('choo/html')
var Component = require('choo/component')

module.exports = class Background extends Component {
  update () {
    return false
  }

  createElement (opts = {}) {
    return html`
      <div class="Background16 ${opts.size === 'small' ? 'Background16--small' : ''}" id="background-16">
        <svg class="u-hiddenVisually">
          <symbol viewBox="0 0 94 145" id="background16-building">
            <path d="M91.86 67.54H1.76c-.9 0-1.6.7-1.6 1.57v3.67c0 .87.7 1.58 1.6 1.58h90.1c.87 0 1.6-.7 1.6-1.57V69.1c0-.85-.73-1.56-1.6-1.56m0 67.28H1.76c-.9 0-1.6.7-1.6 1.58v7.2c0 .85.7 1.56 1.6 1.56h90.1c.87 0 1.6-.7 1.6-1.57v-7.2c0-.9-.73-1.6-1.6-1.6M93.2 61c-4.78-21-23.7-36.68-46.3-36.68-22.67 0-41.6 15.74-46.36 36.8-.1.2-.15.4-.15.62v.06c0 .74.6 1.3 1.3 1.37l.12.03.1-.03h90.02c.76-.06 1.35-.66 1.35-1.43l-.1-.74zm-28.4 63.1h14.4V85.6H64.8v38.5zm-24.4 0h14.4V85.6H40.4v38.5zm-24.22 0h14.4V85.6h-14.4v38.5zM89.2 79.03H5.1c-.88 0-1.6.72-1.6 1.6v48.43c0 .88.72 1.58 1.6 1.58h84.1c.88 0 1.6-.7 1.6-1.58V80.63c0-.87-.72-1.6-1.6-1.6zm-42.5-60.9V.93h4.38S55.35.7 58.5 2.87c3.15 2.17 5.27 4.07 10.35 4.07h6.63V24h-6.8s-4.64-.16-7.73-2.52c-1.42-1.1-3.37-2.8-8.9-3.17-5.64-.33-5.34-.13-5.34-.13" fill="#FFF" fill-rule="evenodd"/>
          </symbol>
          <symbol viewBox="0 0 20 50" id="background16-man">
            <path d="M5.88 5C5.88 2.68 7.73.8 10 .8c2.28 0 4.12 1.88 4.12 4.2 0 2.32-1.84 4.2-4.12 4.2-2.27 0-4.12-1.88-4.12-4.2m9.02 5.43c2.86.25 5.1 2.66 5.1 5.6V27.7c0 .9-.73 1.6-1.63 1.6-.9 0-1.63-.72-1.63-1.62V17.66c0-.38-.1-.9-.8-.9-.47 0-.57.5-.6.84v30.05c0 1.3-1.03 2.35-2.32 2.35-1.3 0-2.35-1.05-2.35-2.35v-17.3c0-.2-.07-.7-.67-.7-.6 0-.67.5-.68.7v17.3C9.32 48.95 8.28 50 7 50c-1.3 0-2.36-1.05-2.36-2.35V17.6c0-.32-.12-.82-.6-.82-.68 0-.78.5-.78.9v10c0 .9-.73 1.64-1.63 1.64-.9 0-1.63-.73-1.63-1.63V16c0-2.94 2.24-5.35 5.1-5.6l.3-.03h9.2c.1 0 .2 0 .3.02" fill="#FFF" fill-rule="evenodd"/>
          </symbol>
          <symbol viewBox="0 0 46 94" id="background16-woman">
            <path d="M30.5 8c0 4.3-3.5 7.8-8 7.8-4.2 0-7.7-3.5-7.7-8 0-4.3 3.5-7.8 7.8-7.8 4.4 0 8 3.5 8 8zM6.8 25.7s2.3-6.2 7.5-6.2H31c5.2 0 7.5 6.2 7.5 6.2L45 47s1.3 4-2 5c-3.4 1-4.4-2.8-4.4-2.8l-5.3-18s-.2-1.2-1.3-1c-1 .4-.6 1.8-.6 1.8l9.2 33.4H32v24c0 2.2-1.8 4-4 4-2.4 0-4.2-1.8-4.2-4v-24h-2.3v24c0 2.2-2 4-4 4-2.4 0-4.2-1.8-4.2-4v-24H4.7L14 32s.3-1.4-.7-1.7c-1-.3-1.4 1-1.4 1l-5.3 18S5.7 53 2.4 52C-1 51 .2 47 .2 47L6.8 26z" fill="#FFF" fill-rule="evenodd"/>
          </symbol>
          <svg viewBox="0 0 30 55" id="background16-child">
            <path d="M22.6 24s-.4.8-.4 1.6v2.2L25.7 42h-3.5v9.3c0 1.8-1.4 3.5-3.2 3.5-1.8 0-3.3-1-3.3-3v-9.7h-2v10c0 2-1.4 2.8-3.2 2.8-1.8 0-3.2-1-3.2-3V42H3.8l2.7-14v-2.4V24L.2 12 0 11c0-1.3 1-2.4 2.4-2.4.8 0 1.6.6 2 1.3.2.2 3.3 6 4.3 7s2 1.6 2 1.6h8s1-.6 2-1.6 4-7.2 4.3-7.3c.4-.7 1.2-1 2-1 1.4 0 2.4 1 2.4 2.3l-.7 2-6 11zm-8-11c-3.5 0-6.5-2.8-6.5-6.4C8 3 11 0 14.8 0c3.6 0 6.6 3 6.6 6.6 0 3.6-3 6.5-6.6 6.5z" fill="#FFF" fill-rule="evenodd"/>
          </svg>
          <svg viewBox="0 0 46 93" id="background16-elderly">
            <path d="M22.5 4.2c-2.3 1.2-4 4-4 7 0 4.2 3.2 7.6 7 7.6 4 0 7-3.4 7-7.7 0-2.8-1.4-5.3-3.5-6.6.2-.4.3-1 .3-1.3 0-1.6-1.5-3-3.5-3s-3.5 1.4-3.5 3c0 .5 0 .8.2 1.2zM9 51.8c1.8-.3 2.4-3 2.4-3L16 31.7s.4-1.4 1.3-1c1 .2.5 1.6.5 1.6l-8 32.6h7.5V88c0 2.4 1.6 4.2 3.6 4.2s3.6-1.8 3.6-4V64.7h2V88c0 2.4 1.6 4.2 3.7 4.2 2 0 3.6-1.8 3.6-4V64.7h7.5l-8.2-32.6s-.3-1.4.6-1.7c.8-.3 1 1 1 1L39.8 49s1 3.7 4 2.7c2.8-1 1.8-4.8 1.8-4.8l-5.8-21s-2-6-6.7-6H18.2c-4.6 0-6.7 6-6.7 6L5.7 47s-1 3 1.2 4.4l-.2.3L0 91c0 .6.3 1.2 1 1.3.6 0 1-.3 1-1l7-39.2V52z" fill="#FFF" fill-rule="evenodd"/>
          </svg>
          <symbol viewBox="0 0 27 43" id="background16-judge">
            <g fill="none" fill-rule="evenodd">
              <path fill="#FFF" d="M.46 20h26.32v-2.97H.46M2.38 43h22.48v-2.98H2.38m1.55-1.12H23.3V21.13H3.94"/>
              <path d="M14.8 30.46c0-.2-.06-.37-.15-.52-.1-.14-.2-.27-.38-.38-.15-.1-.36-.22-.63-.33l-.7-.3c-.13.12-.25.3-.34.5-.1.23-.14.44-.14.63 0 .2.04.4.14.53s.23.2.4.3c.17.1.37.2.6.3l.7.3c.18-.2.3-.4.38-.6.07-.2.1-.4.1-.6m1.48-.4c0 .4-.13.7-.4 1-.28.3-.64.5-1.1.6.4.1.7.3.9.6.2.3.3.6.3.9 0 .5-.25 1-.73 1.3-.5.3-1.15.5-2 .5-.4 0-.73-.1-1-.1-.26-.1-.47-.2-.64-.3l-.4-.4c-.1-.2-.1-.3-.1-.4 0-.2 0-.4.2-.5.1-.2.3-.2.5-.2.1 0 .3 0 .4.1l.3.3.2.42.1.5h.2c.3 0 .6-.05.9-.2s.3-.36.3-.7c0-.16-.1-.3-.1-.44-.1-.13-.2-.25-.4-.35l-.6-.3-.7-.3c-.6-.24-1-.5-1.3-.8-.3-.3-.5-.68-.5-1.1 0-.4.1-.7.3-1s.6-.55 1.1-.75c-.4-.2-.77-.4-.9-.7-.2-.3-.3-.6-.3-1 0-.5.2-.9.7-1.22s1.15-.5 1.95-.5c.4 0 .7 0 1 .1.3.04.5.14.63.3.16.1.3.2.34.34s.1.3.1.4c0 .2-.03.4-.15.55-.1.16-.3.2-.57.2-.18 0-.3 0-.44-.1-.1-.07-.2-.2-.3-.34-.1-.1-.13-.3-.2-.5l-.1-.42c0-.05-.04-.05-.06-.05-.36 0-.66.1-.9.28-.23.16-.34.38-.34.68 0 .2.1.35.17.47s.2.24.4.34l.6.3.8.3c.6.26 1 .5 1.3.8.3.3.4.7.4 1.17" fill="#00689D"/>
              <path d="M17.02 13.45c.37-.1.47.4.47.4l1.4 5.06h2.5l-2.2-7.1s-.8-2.2-2.7-2.2h-6c-1.9 0-2.8 2.3-2.8 2.3l-2.2 7h2.6l1.5-5s.1-.5.4-.4c.3.1.2.7.2.7L9.1 19h8.94l-1.3-4.8s-.15-.6.22-.7m-7.8-6.8c-.34.26-.56.66-.56 1.13 0 .8.7 1.45 1.5 1.45s1.5-.65 1.5-1.45c0-.48-.24-.9-.6-1.16.07-.04.12-.1.17-.15.47.96 1.43 1.62 2.56 1.62s2.1-.66 2.56-1.62l.1.15c-.4.27-.6.68-.6 1.16 0 .8.6 1.45 1.4 1.45.8 0 1.4-.65 1.4-1.45 0-.47-.2-.87-.6-1.14.3-.3.6-.7.6-1.2 0-.6-.4-1.2-.9-1.4.2-.3.4-.6.4-1 0-.8-.7-1.5-1.5-1.5 0-.7-.6-1.3-1.4-1.3-.2 0-.5 0-.6.1-.3-.3-.7-.4-1.1-.4-.4 0-.7.1-1 .3-.2-.1-.3-.1-.5-.1-.8 0-1.5.6-1.5 1.4-.8 0-1.5.65-1.5 1.45 0 .4.1.8.3 1-.6.2-1 .8-1 1.4 0 .5.2.9.5 1.2" fill="#FFF"/>
            </g>
          </symbol>
        </svg>

        <div class="Background16-sky">
          <svg viewBox="0 0 50 50" width="50" height="50" class="Background16-cloud Background16-cloud--md Background16-cloud--light"><circle r="25" cx="25" cy="25" fill="currentColor" /></svg>
          <svg viewBox="0 0 50 50" width="50" height="50" class="Background16-cloud Background16-cloud--sm"><circle r="25" cx="25" cy="25" fill="currentColor" /></svg>
          <svg viewBox="0 0 50 50" width="50" height="50" class="Background16-cloud Background16-cloud--sm Background16-cloud--dark"><circle r="25" cx="25" cy="25" fill="currentColor" /></svg>
          <svg viewBox="0 0 50 50" width="50" height="50" class="Background16-cloud Background16-cloud--md"><circle r="25" cx="25" cy="25" fill="currentColor" /></svg>
          <svg viewBox="0 0 50 50" width="50" height="50" class="Background16-cloud Background16-cloud--lg"><circle r="25" cx="25" cy="25" fill="currentColor" /></svg>
          <svg viewBox="0 0 50 50" width="50" height="50" class="Background16-cloud Background16-cloud--sm Background16-cloud--light"><circle r="25" cx="25" cy="25" fill="currentColor" /></svg>
          <svg viewBox="0 0 50 50" width="50" height="50" class="Background16-cloud Background16-cloud--sm Background16-cloud--dark"><circle r="25" cx="25" cy="25" fill="currentColor" /></svg>
          <svg viewBox="0 0 50 50" width="50" height="50" class="Background16-cloud Background16-cloud--lg Background16-cloud--light"><circle r="25" cx="25" cy="25" fill="currentColor" /></svg>
          <svg viewBox="0 0 50 50" width="50" height="50" class="Background16-cloud Background16-cloud--md"><circle r="25" cx="25" cy="25" fill="currentColor" /></svg>
        </div>

        <div class="Background16-container">
          <div>
            <svg class="Background16-person Background16-person--citizen" width="46" height="94"><use xlink:href="#background16-woman" /></svg>
            <svg class="Background16-person Background16-person--citizen" width="46" height="94"><use xlink:href="#background16-woman" /></svg>
            <svg class="Background16-person Background16-person--citizen" width="20" height="50"><use xlink:href="#background16-man" /></svg>
            <svg class="Background16-person Background16-person--citizen" width="46" height="93"><use xlink:href="#background16-elderly" /></svg>
            <svg class="Background16-person Background16-person--citizen" width="30" height="55"><use xlink:href="#background16-child" /></svg>
            <svg class="Background16-person Background16-person--citizen" width="20" height="50"><use xlink:href="#background16-man" /></svg>
            <svg class="Background16-person Background16-person--citizen" width="46" height="94"><use xlink:href="#background16-woman" /></svg>
            <svg class="Background16-person Background16-person--citizen" width="46" height="94"><use xlink:href="#background16-woman" /></svg>
            <svg class="Background16-person Background16-person--citizen" width="20" height="50"><use xlink:href="#background16-man" /></svg>
          </div>
          <svg class="Background16-person Background16-person--judge" width="27" height="43"><use xlink:href="#background16-judge" /></svg>
          <svg class="Background16-building Background16-building--left" width="94" height="145"><use xlink:href="#background16-building" /></svg>
          <svg class="Background16-building Background16-building--right" width="94" height="145"><use xlink:href="#background16-building" /></svg>
          <svg viewBox="0 0 249 167" width="249" height="167" class="Background16-institution">
            <g fill="none" fill-rule="evenodd">
              <path fill="#FFF" d="M112.82 55.77h25.02v-25h-25.02m12-20.2V.17h2.64s2.58-.13 4.5 1.18c1.9 1.32 3.17 2.46 6.24 2.46h4v10.35h-4.1s-2.8-.1-4.67-1.53c-.86-.64-2.04-1.67-5.38-1.9-3.4-.23-3.22-.1-3.22-.1"/>
              <path fill="#FFF" d="M120.97 33.52h8.72V27h-8.75"/>
              <path fill="#FFF" d="M124.28 31.03h2.1V0h-2.1"/>
              <path fill="#00689D" d="M119.24 50.36h12.18V38.2h-12.18"/>
              <path fill="#FFF" d="M89.8 167.14h66.26V100.9H89.8"/>
              <path fill="#FFF" d="M97.9 108.34h50.05V55.77H97.9m47.76 111.37h102.5V112.4h-102.5M0 167.14h102.5V112.4H0"/>
              <path fill="#00689D" d="M79.53 157.6H91.7v-12.16H79.53M55.98 157.6h12.17v-12.16H55.98m-22.9 12.16h12.17v-12.16H33.08m-22.9 12.16h12.16v-12.16H10.17m69.36-9.14H91.7v-12.17H79.53M55.98 136.3h12.17v-12.17H55.98m-22.9 12.17h12.17v-12.17H33.08m-22.9 12.17h12.16v-12.17H10.17M225.5 157.6h12.18v-12.16H225.5m-23.54 12.16h12.17v-12.16h-12.17m-22.9 12.16h12.17v-12.16h-12.17m-22.9 12.16h12.17v-12.16h-12.18m69.35-9.14h12.18v-12.17H225.5m-23.54 12.17h12.17v-12.17h-12.17m-22.9 12.17h12.17v-12.17h-12.17m-22.9 12.17h12.17v-12.17h-12.18M128.8 96.1h12.17V83.93H128.8M105.9 96.1h12.17V83.93H105.9m22.9-6.6h12.17V65.18H128.8m-22.9 12.17h12.17V65.17H105.9m4.84 93.38h25.38v-31.9h-25.38"/>
              <path d="M110.75 127.37c0 7 5.67 12.7 12.68 12.7 7 0 12.7-5.7 12.7-12.7 0-7-5.7-12.68-12.7-12.68-7 0-12.68 5.65-12.68 12.65m-6.67 36.86h39.8v-2.75h-39.8" fill="#00689D"/>
            </g>
          </svg>
        </div>
      </div>
    `
  }
}
