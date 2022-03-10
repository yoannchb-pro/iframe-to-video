# iframe-to-video v1.0.0

Get original link from iframe on streaming website

```
npm i iframe-to-video
```

## Result
```js
{
  class: 'jw-video jw-reset',
  tabindex: '-1',
  poster: "",
  disableremoteplayback: '',
  'webkit-playsinline': '',
  playsinline: '',
  preload: 'auto',
  src: 'https://fvs.io/redirector?token=eifezoifzefjezfiezjfezfezifhezfihefhefiezfhiezfhezfhezoifhezoifhezifh'
}
```

## How to use ?

- Default

```js
const getVideoFromIframe = require('iframe-to-video');

(async function(){
    const test = await getVideoFromIframe('https://mavavid.com/v/13g7qij4w347163');
    console.log(test);
})();
```

- With options

```js
const getVideoFromIframe = require('../iframe-to-video');

(async function(){
    const test = await getVideoFromIframe('https://mavavid.com/v/13g7qij4w347163', {
        wait: 500, //Waiting time in ms after the play button had been click (default 2000)
        playBtn: 'button, div', //Selector for the play button (default 'div,section,button,input')
        headless: false, //Hide the browser ? (default true)
    });
    console.log(test);
})();
```