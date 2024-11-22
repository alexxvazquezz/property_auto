// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { PropertyPage } = require('../pages/PropertyPage');
const { randMovie } = require('@ngneat/falso');

const exp = require('constants');

const propTitle = randMovie();
const description = 'This is a new prop';
const rent = '1200';

test('Register Property', async({ page }) => {
  const loginPage = new LoginPage(page);
  const propertyPage = new PropertyPage(page);

  await page.goto('https://qa-app.dev.turbotenant.com/');


  await loginPage.login('ale', 'terrada');

  await propertyPage.clickAddProperty();

  await propertyPage.addProperty(propTitle, description, rent);

  const newPropTitle = await page.getByRole('heading', { name: propTitle }).textContent();

  await expect(newPropTitle).toContain(propTitle);
});
