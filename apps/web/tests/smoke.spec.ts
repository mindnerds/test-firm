import { test, expect } from "@playwright/test";

test("homepage renders with correct title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Test Firm");
});

test("homepage has navigation bar with brand", async ({ page }) => {
  await page.goto("/");
  const nav = page.locator("nav");
  await expect(nav).toBeVisible();
  await expect(nav).toContainText("Test Firm");
});

test("homepage has CTA buttons", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Our Services" })).toBeVisible();
  await expect(page.getByRole("link", { name: "About Us" })).toBeVisible();
});

test("homepage has service cards", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Service One")).toBeVisible();
  await expect(page.getByText("Service Two")).toBeVisible();
  await expect(page.getByText("Service Three")).toBeVisible();
});

test("homepage has footer with contact info", async ({ page }) => {
  await page.goto("/");
  const footer = page.locator("footer");
  await expect(footer).toContainText("Test Firm");
  await expect(footer).toContainText("(555) 123-4567");
});

test("primary color is applied to navigation", async ({ page }) => {
  await page.goto("/");
  const nav = page.locator("nav");
  const bg = await nav.evaluate((el) => getComputedStyle(el).backgroundColor);
  // Should have a non-transparent background (the primary color)
  expect(bg).not.toBe("rgba(0, 0, 0, 0)");
  expect(bg).not.toBe("transparent");
});
