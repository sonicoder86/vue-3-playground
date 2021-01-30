import 'expect-puppeteer';

describe('Google', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000')
  });

  it('should display playground text on page', async () => {
    await expect(page).toMatch('Vue 3.0.5 Playground');
  });
});
