import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function Hero() {
  const router = useRouter()

  const handleGetStarted = () => {
    router.push("/signup")
  }

  const handleLearnMore = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Build amazing products with our{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              powerful platform
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Transform your ideas into reality with our comprehensive suite of tools designed for modern developers and teams.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="px-8">
              Get started
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Learn more
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
    </section>
  )
}