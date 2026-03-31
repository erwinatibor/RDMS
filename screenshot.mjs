/**
 * screenshot.mjs — Take a screenshot of a URL and save to ./temporary screenshots/
 *
 * Usage:
 *   node screenshot.mjs http://localhost:3000
 *   node screenshot.mjs http://localhost:3000 label
 *
 * Output: ./temporary screenshots/screenshot-N.png (or screenshot-N-label.png)
 */

import puppeteer from 'puppeteer';
// puppeteer imported from local node_modules
import { existsSync, readdirSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const url   = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

// Output directory
const outDir = join(__dirname, 'temporary screenshots');
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

// Auto-increment filename
function getNextFilename() {
  const existing = existsSync(outDir)
    ? readdirSync(outDir).filter(f => f.startsWith('screenshot-') && f.endsWith('.png'))
    : [];
  const numbers = existing.map(f => parseInt(f.replace('screenshot-', '').replace(/(-.*)?\.png$/, ''))).filter(n => !isNaN(n));
  const next = numbers.length > 0 ? Math.max(...numbers) + 1 : 1;
  const suffix = label ? `-${label}` : '';
  return `screenshot-${next}${suffix}.png`;
}

// Try to find a working Chrome executable
function findChrome() {
  const candidates = [
    // Puppeteer bundled cache
    'C:/Users/nateh/.cache/puppeteer/chrome/win64-131.0.6778.204/chrome-win64/chrome.exe',
    'C:/Users/admin/.cache/puppeteer/chrome/win64-131.0.6778.204/chrome-win64/chrome.exe',
    // Puppeteer test folder
    'C:/Users/nateh/AppData/Local/Temp/puppeteer-test/node_modules/puppeteer/.local-chromium/win64-1108766/chrome-win/chrome.exe',
    // Standard Chrome installs
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    process.env.LOCALAPPDATA && `${process.env.LOCALAPPDATA}/Google/Chrome/Application/chrome.exe`,
  ].filter(Boolean);

  for (const p of candidates) {
    if (existsSync(p)) return p;
  }
  return null; // Let puppeteer use its bundled browser
}

(async () => {
  const filename = getNextFilename();
  const outPath  = join(outDir, filename);

  const chromeExec = findChrome();
  const launchOpts = {
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    defaultViewport: { width: 1440, height: 900 },
  };
  if (chromeExec) launchOpts.executablePath = chromeExec;

  console.log(`Navigating to ${url} ...`);
  const browser = await puppeteer.launch(launchOpts);
  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    // Small delay for animations to settle
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: outPath, fullPage: false });
    console.log(`Screenshot saved: ${outPath}`);
  } finally {
    await browser.close();
  }
})();
