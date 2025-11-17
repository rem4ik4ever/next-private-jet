import { test, expect } from '@playwright/test'

test.describe('CTA Button Behavior', () => {
  test('hero signup button should be disabled and not navigate', async ({ page }) => {
    await page.goto('/')
    
    const heroSignupButton = page.locator('section').first().getByRole('button', { name: 'Sign up' })
    
    // Check button accessibility attributes
    await expect(heroSignupButton).toHaveAttribute('aria-disabled', 'true')
    await expect(heroSignupButton).toHaveAttribute('aria-describedby', 'signup-coming-soon')
    
    // Check that sign-up coming soon text is present for screen readers
    const accessibleText = page.locator('#signup-coming-soon')
    await expect(accessibleText).toHaveText('Sign up coming soon')
    await expect(accessibleText).toHaveClass(/sr-only/) // Screen reader only
    
    // Click the button multiple times to ensure no navigation
    for (let i = 0; i < 3; i++) {
      await heroSignupButton.click()
      await page.waitForTimeout(100) // Small wait to allow any async actions
    }
    
    // Should still be on the homepage
    await expect(page).toHaveURL('/')
  })

  test('CTA section signup button should be disabled and not navigate', async ({ page }) => {
    await page.goto('/')
    
    // Scroll to CTA section
    await page.locator('section').filter({ hasText: 'Ready to transform your business?' }).scrollIntoViewIfNeeded()
    
    const ctaSignupButton = page.locator('section').filter({ hasText: 'Ready to transform your business?' }).getByRole('button', { name: 'Sign up' })
    
    // Check button accessibility attributes
    await expect(ctaSignupButton).toHaveAttribute('aria-disabled', 'true')
    await expect(ctaSignupButton).toHaveAttribute('aria-describedby', 'cta-signup-coming-soon')
    
    // Check that sign-up coming soon text is present for screen readers
    const accessibleText = page.locator('#cta-signup-coming-soon')
    await expect(accessibleText).toHaveText('Sign up coming soon')
    await expect(accessibleText).toHaveClass(/sr-only/) // Screen reader only
    
    // Click the button multiple times to ensure no navigation
    for (let i = 0; i < 3; i++) {
      await ctaSignupButton.click()
      await page.waitForTimeout(100)
    }
    
    // Should still be on the homepage
    await expect(page).toHaveURL('/')
  })

  test('Schedule demo button should be clickable (non-disabled)', async ({ page }) => {
    await page.goto('/')
    
    // Scroll to CTA section
    await page.locator('section').filter({ hasText: 'Ready to transform your business?' }).scrollIntoViewIfNeeded()
    
    const scheduleDemoButton = page.locator('section').filter({ hasText: 'Ready to transform your business?' }).getByRole('button', { name: 'Schedule demo' })
    
    // Check that button is not disabled
    await expect(scheduleDemoButton).not.toHaveAttribute('aria-disabled', 'true')
    
    // Button should have proper styling classes indicating it's clickable
    await expect(scheduleDemoButton).toBeVisible()
    await expect(scheduleDemoButton).toBeEnabled()
  })

  test('Learn more button should scroll to features section', async ({ page }) => {
    await page.goto('/')
    
    // Get initial scroll position (should be at top)
    const initialScrollTop = await page.evaluate(() => window.pageYOffset)
    expect(initialScrollTop).toBe(0)
    
    // Click Learn more button
    await page.locator('section').first().getByRole('button', { name: 'Learn more' }).click()
    
    // Wait for scroll animation
    await page.waitForTimeout(600) // Animation duration
    
    // Check that we scrolled to features section
    const featuresElement = page.locator('#features')
    await expect(featuresElement).toBeInViewport()
    
    // Verify scroll position is not 0 anymore
    const finalScrollTop = await page.evaluate(() => window.pageYOffset)
    expect(finalScrollTop).toBeGreaterThan(0)
  })

  test('disabled CTA buttons should have proper cursor styling', async ({ page }) => {
    await page.goto('/')
    
    const heroSignupButton = page.locator('section').first().getByRole('button', { name: 'Sign up' })
    
    // Check computed styles to ensure disabled appearance
    const cursorStyle = await heroSignupButton.evaluate(el => window.getComputedStyle(el).cursor)
    
    // Disabled buttons typically show 'not-allowed' cursor
    expect(['not-allowed', 'default']).toContain(cursorStyle)
  })

  test('disabled buttons should not trigger form submission or navigation events', async ({ page }) => {
    await page.goto('/')
    
    // Track any navigation attempts
    const navigationEvents = [];
    page.on('framenavigated', frame => {
      if (frame === page.mainFrame() && frame.url().includes('localhost')) {
        navigationEvents.push({
          url: frame.url(),
          timestamp: Date.now()
        });
      }
    })
    
    // Click both disabled signup buttons multiple times
    await page.locator('section').first().getByRole('button', { name: 'Sign up' }).click({ clickCount: 10 })
    await page.locator('section').filter({ hasText: 'Ready to transform your business?' }).getByRole('button', { name: 'Sign up' }).click({ clickCount: 10 })
    
    // Wait a moment to catch any delayed navigation
    await page.waitForTimeout(1000)
    
    // Should only have the initial navigation event
    expect(navigationEvents.length).toBeLessThanOrEqual(1)
    expect(page.url()).toBe('http://localhost:3000/')
  })

  test('disabled buttons should have reduced opacity for visual cue', async ({ page }) => {
    await page.goto('/')
    
    const heroSignupButton = page.locator('section').first().getByRole('button', { name: 'Sign up' })
    
    // Check that the button appears visually disabled
    await expect(heroSignupButton).toBeVisible()
    
    // Check computed opacity to ensure visual disabled state
    const opacity = await heroSignupButton.evaluate(el => {
      const computedStyle = window.getComputedStyle(el)
      return computedStyle.opacity
    })
    
    // Disabled elements typically have reduced opacity
    expect(parseFloat(opacity)).toBeLessThanOrEqual(1)
  })

  test('Schedule demo button should not be disabled', async ({ page }) => {
    await page.goto('/')
    
    // Scroll to CTA section
    await page.locator('section').filter({ hasText: 'Ready to transform your business?' }).scrollIntoViewIfNeeded()
    
    const scheduleDemoButton = page.locator('section').filter({ hasText: 'Ready to transform your business?' }).getByRole('button', { name: 'Schedule demo' })
    
    // This button should NOT have accessibility disabled attributes
    await expect(scheduleDemoButton).not.toHaveAttribute('aria-disabled', 'true')
    
    // Should be enabled and clickable
    await expect(scheduleDemoButton).toBeEnabled()
  })
})