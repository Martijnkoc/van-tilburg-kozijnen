import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate to all main pages', async ({ page }) => {
    // Home page
    await page.goto('/');
    await expect(page).toHaveTitle(/Van Tilburg Kozijnen/);
    
    // Over ons
    await page.getByRole('link', { name: /over ons/i }).click();
    await expect(page).toHaveURL(/.*over-ons/);
    
    // Contact
    await page.getByRole('link', { name: /contact/i }).click();
    await expect(page).toHaveURL(/.*contact/);
    
    // Check if contact form is present
    await expect(page.getByRole('form')).toBeVisible();
  });

  test('should have working mobile navigation', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });
    
    await page.goto('/');
    
    // Open mobile menu
    await page.getByRole('button', { name: /menu/i }).click();
    
    // Check if menu items are visible
    await expect(page.getByRole('navigation')).toBeVisible();
    
    // Close menu
    await page.getByRole('button', { name: /sluit/i }).click();
    
    // Check if menu is hidden
    await expect(page.getByRole('navigation')).toBeHidden();
  });
});
