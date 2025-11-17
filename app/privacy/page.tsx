import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read our privacy policy to understand how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Privacy Policy
        </h1>
        
        <p className="mt-6 text-sm text-muted-foreground">
          Last updated: January 1, 2024
        </p>

        <div className="prose prose-gray mt-12 max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, 
              contact us, or otherwise interact with the services.
            </p>
            <p className="text-muted-foreground">
              We also collect information automatically when you use our services, including log information, device information, 
              and information collected through cookies and other tracking technologies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Information</h2>
            <p className="text-muted-foreground">
              We use the information we collect to provide, maintain, and improve our services, to process transactions and send related 
              information, to provide customer support, and to communicate with you about updates, offers, and promotions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Information Sharing</h2>
            <p className="text-muted-foreground mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>With your consent</li>
              <li>To trusted third parties who assist us in operating our website and conducting our business, as long as they agree to keep this information confidential</li>
              <li>When we believe release is appropriate to comply with the law, enforce our site policies, or protect our or others&rsquo; rights, property, or safety</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
            <p className="text-muted-foreground">
              We implement a variety of security measures to maintain the safety of your personal information. Your personal information 
              is contained behind secured networks and is only accessible by a limited number of persons who have special access rights 
              to such systems, and are required to keep the information confidential.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Cookies</h2>
            <p className="text-muted-foreground mb-4">
              We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic 
              and site interactions in order to offer better site experiences and tools in the future.
            </p>
            <p className="text-muted-foreground">
              You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. 
              You do this through your browser settings. If you disable cookies off, some features will be disabled that make your site 
              experience more efficient and some of our services will not function properly.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Third-Party Disclosure</h2>
            <p className="text-muted-foreground">
              We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide 
              users with advance notice. This does not include website hosting partners and other parties who assist us in operating our 
              website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>The right to access your personal information</li>
              <li>The right to rectify inaccurate personal information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to object to processing of your personal information</li>
              <li>The right to data portability</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy 
              on this page and updating the &ldquo;last updated&rdquo; date at the top of this policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions about this privacy policy, please contact us through our contact form or email us at privacy@company&period;com.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}