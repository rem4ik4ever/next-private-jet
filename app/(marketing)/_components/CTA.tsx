import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-primary/90 to-primary/70 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to transform your business?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/90">
            Join thousands of companies already using our platform to build amazing products.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button 
              size="lg" 
              variant="secondary" 
              className="px-8"
              aria-disabled="true"
              aria-describedby="cta-signup-coming-soon"
            >
              Sign up
            </Button>
            <span id="cta-signup-coming-soon" className="sr-only">
              Sign up coming soon
            </span>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 bg-white/10 px-8 text-primary-foreground hover:bg-white/20">
              Schedule demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}