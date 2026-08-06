const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
    page.on('pageerror', error => console.log('BROWSER ERROR:', error.message));
    page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure().errorText));

    const file = `file:///${path.join(__dirname, 'index.html').replace(/\\/g, '/')}`;
    console.log(`Abriendo ${file}...`);
    
    await page.goto(file, { waitUntil: 'networkidle0' });
    
    setTimeout(async () => {
        await browser.close();
    }, 2000);
})();
