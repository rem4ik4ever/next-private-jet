import { test, expect } from '@playwright/test'

test.describe('Signup Button Accessibility', () => {
  test('Hero section signup button is disabled', async ({ page }) => {
    await page.goto('/')
    
    const signupButton = page.locator('section').first().getByRole('button', { name: 'Sign up' })
    
    // Check that the button has aria-disabled="true" (for screen readers and accessibility)
    await expect(signupButton).toHaveAttribute('aria-disabled', 'true')
    
    // Verify that clicking the button does not navigate anywhere
    await signupButton.click()
    
    // Should still be on the homepage - no navigation should occur
    await expect(page).toHaveURL('/')
  })

  test('CTA section signup button is disabled', async ({ page }) => {
    await page.goto('/')
    
    const ctaSignupButton = page.locator('section').filter({ hasText: 'Ready to transform your business?' }).getByRole('button', { name: 'Sign up' })
    
    // Check that the button has aria-disabled="true"
    await expect(ctaSignupButton).toHaveAttribute('aria-disabled', 'true')
    
    // Verify that clicking the button does not navigate anywhere
    await ctaSignupButton.click()
    
    // Should still be on the homepage - no navigation should occur
    await expect(page).toHaveURL('/')
  })

  test('Signup buttons have proper accessibility descriptions', async ({ page }) => {
    await page.goto('/')
    
    const heroButton = page.locator('section').first().getByRole('button', { name: 'Sign up' })
    const ctaButton = page.locator('section').filter({ hasText: 'Ready to transform your business?' }).getByRole('button', { name: 'Sign up' })
    
    // Check aria-describedby attributes
    await expect(heroButton).toHaveAttribute('aria-describedby', 'signup-coming-soon')
    await expect(ctaButton).toHaveAttribute('aria-describedby', 'cta-signup-coming-soon')
    
    // Check that the descriptive text exists for screen readers
    await expect(page.locator('#signup-coming-soon.sr-only')).toHaveText('Sign up coming soon')
    await expect(page.locator('#cta-signup-coming-soon.sr-only')).toHaveText('Sign up coming soon')
  })
})

export {}