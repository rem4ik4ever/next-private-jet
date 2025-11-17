import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  avatar: string
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechFlow Inc.",
      content: "This platform has completely transformed how we manage our development workflow. The integration was seamless and the performance improvements have been remarkable.",
      avatar: "SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "Nexus Systems",
      content: "The scalability and reliability of this platform is outstanding. We've been able to handle massive traffic spikes without any issues. Highly recommended for any growing business.",
      avatar: "MC"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Head of Engineering",
      company: "DataSphere",
      content: "The support team is fantastic and the feature set is exactly what we needed. It's rare to find a platform that checks all the boxes for enterprise requirements.",
      avatar: "ER"
    }
  ]

  return (
    <section className="bg-muted/30 py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What our customers say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of satisfied customers who have transformed their businesses with our platform.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col rounded-2xl bg-card p-8 shadow-lg ring-1 ring-border/10">
              <div className="flex items-center gap-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.avatar}`} />
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              <blockquote className="relative mt-6 flex flex-auto text-gray-600">
                <p className="flex-auto text-left text-muted-foreground">"{testimonial.content}"</p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}