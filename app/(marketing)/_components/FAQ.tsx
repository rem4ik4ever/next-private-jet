import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "What makes your platform different from competitors?",
      answer: "Our platform combines enterprise-grade reliability with consumer-friendly ease of use. We focus on performance, security, and seamless integration with your existing tools and workflows."
    },
    {
      question: "How long does it take to get started?",
      answer: "Most customers can be up and running within minutes. Our quick-start guides and tutorials help you get familiar with the platform quickly. For complex integrations, our support team is available to help."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We implement industry-leading security practices including end-to-end encryption, regular security audits, and compliance with major security standards. Your data is stored in secure data centers with 24/7 monitoring."
    },
    {
      question: "Can I try it before committing?",
      answer: "Yes! We offer a free trial so you can experience all our features before making any commitment. No credit card required for the trial period."
    },
    {
      question: "What support options are available?",
      answer: "We offer 24/7 support via email, chat, and phone for our premium customers. All customers have access to our comprehensive documentation, tutorials, and community forum."
    },
    {
      question: "How does pricing work?",
      answer: "We offer flexible pricing plans based on your usage and feature requirements. Our plans scale with your needs, and you can upgrade or downgrade at any time. Contact our sales team for enterprise pricing."
    }
  ]

  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            If you have anything else you want to ask, reach out to us.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}