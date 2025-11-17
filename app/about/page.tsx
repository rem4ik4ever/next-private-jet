import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our mission, values, and commitment to delivering exceptional products and services.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          About Us
        </h1>
        
        <div className="mt-8 space-y-6 text-lg text-muted-foreground">
          <p>
            We are dedicated to creating innovative solutions that make a real difference in people&rsquo;s lives. 
            Our journey began with a simple belief: technology should empower, not complicate.
          </p>
          
          <p>
            Today, we serve thousands of customers worldwide, helping them achieve their goals through 
            our cutting-edge products and unwavering commitment to excellence.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
          <p className="text-muted-foreground">
            To deliver exceptional products and services that solve real problems and create lasting value 
            for our customers, partners, and communities.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Our Values</h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Innovation - We constantly push boundaries and embrace new ideas</li>
            <li>Integrity - We build trust through honest and transparent relationships</li>
            <li>Excellence - We strive for the highest standards in everything we do</li>
            <li>Customer Focus - We put our customers at the heart of every decision</li>
          </ul>
        </div>
      </div>
    </div>
  )
}