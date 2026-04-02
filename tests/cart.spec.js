const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { InventoryPage } = require('../pages/inventoryPage');

test('standard_user can add item to cart', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await inventory.addFirstItemToCart();

  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});

test('error_user can add item to cart', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('error_user', 'secret_sauce');

  await page.click('.inventory_item button');

  const badge = page.locator('.shopping_cart_badge');

  await expect(page.locator('.shopping_cart_badge')).toHaveText('1'); 
});

test('problem_user can add item to cart', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('problem_user', 'secret_sauce');

  await page.click('.inventory_item button');

  const badge = page.locator('.shopping_cart_badge');

  
  if (await badge.isVisible()) {
    console.log('Item added (unexpected success)');
  } else {
    console.log('Item not added (expected failure)');
  }

  await expect(page.locator('.shopping_cart_badge')).toHaveText('1'); 
});

test('problem_user can add all items to cart', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('problem_user', 'secret_sauce');

  const buttons = page.locator('.inventory_item button');
  const count = await buttons.count();
  

  for (let i = 0; i < count; i++) {
    await buttons.nth(i).click();
  }

  await expect(page.locator('.shopping_cart_badge')).toHaveText(count.toString()); 
});

test('problem_user can remove item from cart', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('problem_user', 'secret_sauce');

  await page.locator('.inventory_item button').first().click();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // Remove it
  await page.locator('.inventory_item button').first().click(); // button now says "Remove"
  
  // Badge should be gone entirely
  await expect(page.locator('.shopping_cart_badge')).not.toBeVisible();
});