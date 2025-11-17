import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read our terms of service and conditions for using our platform and services.',
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Terms of Service
        </h1>
        
        <p className="mt-6 text-sm text-muted-foreground">
          Last updated: January 1, 2024
        </p>

        <div className="prose prose-gray mt-12 max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using this service, you accept and agree to be bound by the terms and provisions of this agreement. 
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Use License</h2>
            <p className="text-muted-foreground mb-4">
            <p className="text-muted-foreground">
              Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, 
              non-commercial transitory viewing only.
            </p>
            </p>
            <p className="text-muted-foreground">
              This is the grant of a license, not a transfer of title, and under this license you may not modify or copy the materials; 
              use the materials for any commercial purpose, or for any public display (commercial or non-commercial); attempt to decompile 
              or reverse engineer any software contained on our website; remove any copyright or other proprietary notations from the materials; 
              or transfer the materials to another person or "mirror" the materials on any other server.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Disclaimer</h2>
            <p className="text-muted-foreground">
              The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby 
              disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, 
              fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Limitations</h2>
            <p className="text-muted-foreground">
              In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data 
              or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, 
              even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Revisions and Errata</h2>
            <p className="text-muted-foreground">
              The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that 
              any of the materials on its website are accurate, complete or current. We may make changes to the materials contained on 
              its website at any time without notice. However we do not make any commitment to update the materials.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Links</h2>
            <p className="text-muted-foreground">
              We have not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. 
              The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Modifications</h2>
            <p className="text-muted-foreground">
              We may revise these terms of service for our website at any time without notice. By using this website you are agreeing to 
              be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Governing Law</h2>
            <p className="text-muted-foreground">
              These terms and conditions are governed by and construed in accordance with the laws of our jurisdiction and you irrevocably 
              submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}