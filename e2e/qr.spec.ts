/*
 * QR page
 */

import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/hyattoku");

  await page.getByRole("link", { name: "QRコード作成" }).click();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/QR/);

  // SVG
  const svg = page.locator("main svg");
  await expect(svg).toBeVisible();
});
