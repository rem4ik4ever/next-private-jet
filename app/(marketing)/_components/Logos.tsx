export default function Logos() {
  const logos = [
    "Acme Corp",
    "TechFlow",
    "Nexus Systems",
    "Quantum Leap",
    "DataSphere",
    "InnoVate"
  ]

  return (
    <section className="border-y border-border bg-muted/30 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-muted-foreground">
          Trusted by teams at the world's best companies
        </p>
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex h-12 items-center justify-center rounded-lg bg-background/50 px-4 text-sm font-medium text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}