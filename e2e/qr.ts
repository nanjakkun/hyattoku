/*
 * Index page
 */

import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/hyakutoku/qr");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/QR/);
});
