import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('should load home page and display hero section', async ({ page }) => {
    await page.goto('/')
    
    // Check hero headline
    await expect(page.locator('h1')).toContainText('Build amazing products with our powerful platform')
    
    // Check hero description
    await expect(page.locator('section').first().locator('p').first()).toContainText('Transform your ideas into reality')
    
    // Check primary CTA buttons
    const heroSection = page.locator('section').first()
    await expect(heroSection.getByRole('button', { name: 'Sign up' })).toBeVisible()
    await expect(heroSection.getByRole('button', { name: 'Learn more' })).toBeVisible()
  })

  test('should display features section', async ({ page }) => {
    await page.goto('/')
    
    // Scroll to features section
    await page.locator('#features').scrollIntoViewIfNeeded()
    
    // Check features heading
    await expect(page.getByRole('heading', { name: 'Everything you need to succeed' })).toBeVisible()
    
    // Check that all feature cards are present
    const featureCards = page.locator('#features').locator('h3')
    const expectedTitles = ['Lightning Fast', 'Easy Integration', 'Scalable Architecture', '24/7 Support', 'Advanced Analytics', 'Secure & Reliable']
    
    for (const title of expectedTitles) {
      await expect(page.locator('#features').getByRole('heading', { name: title })).toBeVisible()
    }
  })

  test('should display FAQ section with working accordion', async ({ page }) => {
    await page.goto('/')
    
    // Scroll to FAQ section
    await page.locator('#faq').scrollIntoViewIfNeeded()
    
    // Check FAQ heading
    await expect(page.getByRole('heading', { name: 'Frequently asked questions' })).toBeVisible()
    
    // Test first FAQ accordion
    const firstQuestion = page.locator('#faq button').first()
    await expect(firstQuestion).toContainText('What makes your platform different from competitors?')
    
    // Click to open accordion
    await firstQuestion.click()
    
    // Check that the answer becomes visible after opening
    const answerText = page.locator('text=Our platform combines enterprise-grade reliability with consumer-friendly ease of use')
    await expect(answerText).toBeVisible()
  })

  test('should display CTA section', async ({ page }) => {
    await page.goto('/')
    
    // Scroll to CTA section
    await page.locator('section').filter({ hasText: 'Ready to transform your business?' }).scrollIntoViewIfNeeded()
    
    // Check CTA heading
    await expect(page.getByRole('heading', { name: 'Ready to transform your business?' })).toBeVisible()
    
    // Check CTA buttons
    const ctaSection = page.locator('section').filter({ hasText: 'Ready to transform your business?' })
    await expect(ctaSection.getByRole('button', { name: 'Sign up' })).toBeVisible()
    await expect(ctaSection.getByRole('button', { name: 'Schedule demo' })).toBeVisible()
  })

  test('should scroll to features when Learn more is clicked', async ({ page }) => {
    await page.goto('/')
    
    // Click Learn more button in hero
    await page.locator('section').first().getByRole('button', { name: 'Learn more' }).click()
    
    // Check that we scrolled to features section
    const featuresElement = page.locator('#features')
    await expect(featuresElement).toBeInViewport()
  })
})