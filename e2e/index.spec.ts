/*
 * Index page
 */

import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/hyakutoku");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/百徳/);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/ホーム/);
});
