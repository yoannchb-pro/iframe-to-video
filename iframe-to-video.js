const playwright = require('playwright');
const { PlaywrightBlocker } = require('@cliqz/adblocker-playwright');
const fetch = require('cross-fetch');

async function getVideoFromIframe(url, options){
      //options
      const finalOptions = Object.assign({wait: 2000, playBtn: 'div,section,button,input', headless: true}, options);

      //browser
      const browser = await playwright.webkit.launch({ headless: finalOptions.headless });
      const context = await browser.newContext();
      const page = await context.newPage();

      //Adblocker
      const blocker = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
      blocker.enableBlockingInPage(page);

      //navigation
      await page.goto(url, { waitUntil: 'networkidle' });

      //clicking playbtn
      const btn = await page.locator(finalOptions.playBtn);
      const count = await btn.count();

      for(let i=0; i<count; ++i){
        try { btn.nth(i).click(); } catch(e) {};
      }

      //waiting time
      await new Promise((r) => setTimeout(r, finalOptions.wait + 1));

      //getting video
      const result = await page.evaluate(async () => {
        const video = document.querySelector('video');

        function getAttributes (el) {
          return el ? Array.from(el.attributes)
            .map(a => [a.name, a.value])
            .reduce((acc, attr) => {
              acc[attr[0]] = attr[1]
              return acc
            }, {}) : {};
        }

        return getAttributes(video);
      });

      //browser closing
      await browser.close();

      //result
      return result;
}

module.exports = getVideoFromIframe;