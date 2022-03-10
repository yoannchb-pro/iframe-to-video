const getVideoFromIframe = require('../iframe-to-video');

(async function(){
    const test = await getVideoFromIframe('https://mavavid.com/v/13g7qij4w347163', {wait: 500});
    console.log(test);
})();