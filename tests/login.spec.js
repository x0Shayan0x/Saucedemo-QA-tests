const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

test('standard_user logs in successfully', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);
});

test('locked_out_user cannot log in', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('locked_out_user', 'secret_sauce');

  await expect(page.toHaveURL(/inventory/));
});

