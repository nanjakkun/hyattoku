/*
 * QR page
 */

import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/hyattoku/qr");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/QR/);

  // SVG
  const svg = page.locator("main svg");
  await expect(svg).toBeVisible();
});
