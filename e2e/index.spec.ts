/*
 * Index page
 */

import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/hyattoku");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/百徳/);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/ホーム/);

  // Header
  const el1 = page.locator("header");
  await expect(el1).toHaveText(/百徳/);

  // Footer
  const el2 = page.locator("footer li:first-child");
  await expect(el2).toHaveText(/百徳/);
});
