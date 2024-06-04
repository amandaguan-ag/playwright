import { test, expect } from '@playwright/test';

//Test Isolation: "page" in this second test is completely isolated from the first test.
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  // ## getByRole method call that instructs the testing library to find an element on the page that has the role of a 'link' and the accessible name 'Get started'. The role 'link' typically refers to an anchor (<a>) element, and the name 'Get started' refers to the accessible name of the element, which is often the text content of the element.

// ## await: This keyword is used to pause the execution of the function until the Promise returned by page.getByRole('link', { name: 'Get started' }) is settled. This is necessary because finding an element on the page can take some time, and you want to wait until the element is found before you try to interact with it.
// ## simulates a mouse click event on the element that 
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});
