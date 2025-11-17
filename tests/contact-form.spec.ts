import { test, expect } from '@playwright/test'

test.describe('Contact Form', () => {
  test('should show validation errors on empty submit', async ({ page }) => {
    await page.goto('/contact')
    
    // Click submit button without filling any fields
    await page.getByRole('button', { name: 'Send Message' }).click()
    
    // Check validation errors for all required fields
    await expect(page.locator('#name-error')).toHaveText('Name is required')
    await expect(page.locator('#email-error')).toHaveText('Email is required')
    await expect(page.locator('#message-error')).toHaveText('Message is required')
    
    // Check that form fields have error styling
    await expect(page.locator('#name')).toHaveClass(/border-red-500/)
    await expect(page.locator('#email')).toHaveClass(/border-red-500/)
    await expect(page.locator('#message')).toHaveClass(/border-red-500/)
    
    // Check aria-invalid attributes
    await expect(page.locator('#name')).toHaveAttribute('aria-invalid', 'true')
    await expect(page.locator('#email')).toHaveAttribute('aria-invalid', 'true')
    await expect(page.locator('#message')).toHaveAttribute('aria-invalid', 'true')
  })

  test('should validate email format', async ({ page }) => {
    await page.goto('/contact')
    
    // Fill form with invalid email
    await page.getByLabel('Name *').fill('John Doe')
    await page.getByLabel('Email *').fill('invalid-email')
    await page.getByLabel('Message *').fill('Test message')
    
    // Submit form
    await page.getByRole('button', { name: 'Send Message' }).click()
    
    // Check email validation error
    await expect(page.locator('#email-error')).toHaveText('Please enter a valid email address')
    const emailField = page.locator('#email')
    await expect(emailField).toHaveClass(/border-red-500/)
    await expect(emailField).toHaveAttribute('aria-invalid', 'true')
  })

  test('should clear validation error when user starts typing', async ({ page }) => {
    await page.goto('/contact')
    
    // Submit with empty form to show errors
    await page.getByRole('button', { name: 'Send Message' }).click()
    
    // Verify error is shown
    await expect(page.locator('#name-error')).toBeVisible()
    
    // Start typing in the name field
    await page.getByLabel('Name *').fill('J')
    
    // Error should be cleared
    await expect(page.locator('#name-error')).not.toBeVisible()
    await expect(page.locator('#name')).not.toHaveClass(/border-red-500/)
  })

  test('should successfully submit valid form', async ({ page }) => {
    await page.goto('/contact')
    
    // Fill form with valid data
    await page.getByLabel('Name *').fill('John Doe')
    await page.getByLabel('Email *').fill('john.doe@example.com')
    await page.getByLabel('Message *').fill('This is a test message for the contact form.')
    
    // Submit form
    await page.getByRole('button', { name: 'Send Message' }).click()
    
    // Check that submit button shows loading state
    await expect(page.getByRole('button', { name: 'Sending...' })).toBeVisible()
    
    // Wait for success message (mock response takes 1 second)
    await expect(page.locator('[role="alert"]')).toBeVisible()
    await expect(page.locator('text=Thank you for your message!')).toBeVisible()
    await expect(page.locator('text=We&rsquo;ve received your inquiry and will get back to you within 24 hours.')).toBeVisible()
    
    // Check that form is cleared after successful submission
    await expect(page.getByLabel('Name *')).toHaveValue('')
    await expect(page.getByLabel('Email *')).toHaveValue('')
    await expect(page.getByLabel('Message *')).toHaveValue('')
  })

  test('should disable submit button during submission', async ({ page }) => {
    await page.goto('/contact')
    
    // Fill form with valid data
    await page.getByLabel('Name *').fill('Jane Smith')
    await page.getByLabel('Email *').fill('jane.smith@example.com')
    await page.getByLabel('Message *').fill('Message text')
    
    const submitButton = page.getByRole('button', { name: 'Send Message' })
    
    // Click submit
    await submitButton.click()
    
    // Button should be disabled during submission
    await expect(submitButton).toBeDisabled()
  })

  test('should handle form submission with special characters', async ({ page }) => {
    await page.goto('/contact')
    
    // Fill form with data containing special characters
    await page.getByLabel('Name *').fill('O\'Brien-Smith \\n*ü*')
    await page.getByLabel('Email *').fill('test+tag@example.com')
    await page.getByLabel('Message *').fill('Message with special chars: !@#$%^&*()_+-=[]{}|;:,.<>?')
    
    // Submit form
    await page.getByRole('button', { name: 'Send Message' }).click()
    
    // Should show success
    await expect(page.locator('[role="alert"]')).toBeVisible()
    await expect(page.locator('text=Thank you for your message!')).toBeVisible()
  })

  test('should hide success message after 5 seconds', async ({ page }) => {
    await page.goto('/contact')
    
    // Fill form with valid data
    await page.getByLabel('Name *').fill('John Doe')
    await page.getByLabel('Email *').fill('john@example.com')
    await page.getByLabel('Message *').fill('Success message test')
    
    // Submit form
    await page.getByRole('button', { name: 'Send Message' }).click()
    
    // Verify success message appears
    await expect(page.locator('[role="alert"]')).toBeVisible()
    
    // Wait for 5 seconds (setTimeout in component is 5 seconds)
    // Note: This might make test slower, but validates the timeout behavior
    await page.waitForTimeout(5100)
    
    // Success message should be hidden
    await expect(page.locator('[role="alert"]')).not.toBeVisible()
  })
})