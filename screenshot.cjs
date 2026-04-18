const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('https://blitz-digital.vercel.app/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'screenshot-live-desktop.png' });

  await page.goto('https://blitz-digital.vercel.app/privacy', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'screenshot-live-privacy.png' });

  await page.goto('https://blitz-digital.vercel.app/terms', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'screenshot-live-terms.png' });

  await browser.close();
  console.log('done');
})();
