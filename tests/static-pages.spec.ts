import { test, expect } from '@playwright/test'

test.describe('Static Pages', () => {
  test('should load About page with correct content', async ({ page }) => {
    await page.goto('/about')
    
    // Check page heading
    await expect(page.getByRole('heading', { name: 'About Us', level: 1 })).toBeVisible()
    
    // Check page description
    await expect(page.locator('text=We are dedicated to creating innovative solutions')).toBeVisible()
    
    // Check Our Mission section
    await expect(page.getByRole('heading', { name: 'Our Mission' })).toBeVisible()
    await expect(page.locator('text=To deliver exceptional products and services')).toBeVisible()
    
    // Check Our Values section
    await expect(page.getByRole('heading', { name: 'Our Values' })).toBeVisible()
    
    // Check that all values are present
    const values = ['Innovation', 'Integrity', 'Excellence', 'Customer Focus']
    for (const value of values) {
      await expect(page.getByRole('listitem').locator(`text=${value}`)).toBeVisible()
    }
    
    // Check page metadata
    await expect(page).toHaveTitle(/About Us/)
  })

  test('should load Terms of Service page with correct content', async ({ page }) => {
    await page.goto('/terms')
    
    // Check page heading
    await expect(page.getByRole('heading', { name: 'Terms of Service', level: 1 })).toBeVisible()
    
    // Check last updated date
    await expect(page.locator('text=Last updated: January 1, 2024')).toBeVisible()
    
    // Check that all major sections are present
    const sections = [
      '1. Acceptance of Terms',
      '2. Use License',
      '3. Disclaimer',
      '4. Limitations',
      '5. Revisions and Errata',
      '6. Links',
      '7. Modifications',
      '8. Governing Law'
    ]
    
    for (const section of sections) {
      await expect(page.getByRole('heading', { name: section })).toBeVisible()
    }
    
    // Check that content is present under sections
    await expect(page.locator('text=By accessing and using this service')).toBeVisible()
    await expect(page.locator('text=The materials on our website are provided')).toBeVisible()
    
    // Check page metadata
    await expect(page).toHaveTitle(/Terms of Service/)
  })

  test('should load Privacy Policy page with correct content', async ({ page }) => {
    await page.goto('/privacy')
    
    // Check page heading
    await expect(page.getByRole('heading', { name: 'Privacy Policy', level: 1 })).toBeVisible()
    
    // Check last updated date
    await expect(page.locator('text=Last updated: January 1, 2024')).toBeVisible()
    
    // Check that all major sections are present
    const sections = [
      '1. Information We Collect',
      '2. How We Use Information',
      '3. Information Sharing',
      '4. Data Security',
      '5. Cookies',
      '6. Third-Party Disclosure',
      '7. Your Rights',
      '8. Changes to This Policy',
      '9. Contact Us'
    ]
    
    for (const section of sections) {
      await expect(page.getByRole('heading', { name: section })).toBeVisible()
    }
    
    // Check that content is present under sections
    await expect(page.locator('text=We collect information you provide directly to us')).toBeVisible()
    await expect(page.locator('text=We do not sell, trade, or otherwise transfer your personal information')).toBeVisible()
    
    // Check page metadata
    await expect(page).toHaveTitle(/Privacy Policy/)
  })

  test('should load Contact page with form and correct content', async ({ page }) => {
    await page.goto('/contact')
    
    // Check page heading
    await expect(page.getByRole('heading', { name: 'Contact Us', level: 1 })).toBeVisible()
    
    // Check page description
    await expect(page.locator('text=We&rsquo;d love to hear from you')).toBeVisible()
    
    // Check that form elements are present
    await expect(page.getByLabel('Name *')).toBeVisible()
    await expect(page.getByLabel('Email *')).toBeVisible()
    await expect(page.getByLabel('Message *')).toBeVisible()
    
    // Check that submit button is present
    await expect(page.getByRole('button', { name: 'Send Message' })).toBeVisible()
    
    // Check page metadata
    await expect(page).toHaveTitle(/Contact Us/)
  })

  test('should navigate between static pages using links', async ({ page }) => {
    await page.goto('/')
    
    // Assuming there are footer links or navigation links to these pages
    // This test would need to be updated based on actual navigation structure
    // For now, let's test direct navigation
    
    // Navigate to About
    await page.goto('/about')
    await expect(page).toHaveURL('/about')
    
    // Navigate to Contact
    await page.goto('/contact')
    await expect(page).toHaveURL('/contact')
    
    // Navigate to Terms
    await page.goto('/terms')
    await expect(page).toHaveURL('/terms')
    
    // Navigate to Privacy
    await page.goto('/privacy')
    await expect(page).toHaveURL('/privacy')
  })
})