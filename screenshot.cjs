const { chromium } = require('playwright');
const out = __dirname;
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });

  await page.goto('http://localhost:5173/privacy', { waitUntil: 'networkidle' });
  await page.screenshot({ path: `${out}/screenshot-privacy.png` });

  await page.goto('http://localhost:5173/terms', { waitUntil: 'networkidle' });
  await page.screenshot({ path: `${out}/screenshot-terms.png` });

  await browser.close();
  console.log('done');
})();
