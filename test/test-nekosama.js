const getVideoFromIframe = require('../iframe-to-video');

(async function(){
    const test = await getVideoFromIframe('https://streamtape.com/e/M9qOrXwYyRSm8yA/Fullmetal_Alchemist_Brotherhood_-_E01_-_L%27alchimiste_Fullmetal_%5BMULTI%5D%5BDB-RIP%5D%5B1080p%5D%5BH265_10b%5D%5BHE-AAC%5D_-_K-LITY.mkv'
    , {wait: 1000});
    console.log(test);
})();