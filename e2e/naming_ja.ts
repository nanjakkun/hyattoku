/*
 * QR page
 */

import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/hyattoku");

  await page.getByRole("link", { name: "ランダム名前生成" }).click();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/ランダム名前生成/);

});
