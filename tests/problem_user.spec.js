const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

test('problem_user sees incorrect product images', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('problem_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);

  const images = await page.locator('.inventory_item_img img').all();

  for (const img of images) {
    const src = await img.getAttribute('src');
    expect(src).toContain('sl-404'); // known broken image behavior
  }
});