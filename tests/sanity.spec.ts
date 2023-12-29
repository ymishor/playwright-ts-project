import { test, expect } from '@playwright/test';
import  LoginPage  from '../pages/LoginPage';
import UserCredientials from '../helpers/UserCredentials';
import ApplicationURL from '../helpers/ApplicationURL';



test('test', async ({ page }) => {
  const loginpage = new LoginPage(page);
  await loginpage.loginToApplication( UserCredientials.STANDARD_USER,UserCredientials.CORRECT_PASSWORD,ApplicationURL.BASEURL);
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('body').press('Tab');
  await page.locator('a').filter({ hasText: '3' }).click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('yuval');
  await page.locator('[data-test="firstName"]').press('Tab');
  await page.locator('[data-test="lastName"]').fill('cohen');
  await page.locator('[data-test="lastName"]').press('Tab');
  await page.locator('[data-test="postalCode"]').fill('12345678');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Reset App State' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});