import Image from 'next/image';

const steps = [
  {
    id: 1,
    title: 'Compose PRD',
    description: 'Write your product requirements in plain language',
    timeSaved: 'Save ~2h/spec',
    illustration: '/illustrations/compose-prd.svg',
  },
  {
    id: 2,
    title: 'Generate Tasks',
    description: 'AI breaks down your PRD into actionable tasks',
    timeSaved: 'Save ~4h/spec',
    illustration: '/illustrations/generate-tasks.svg',
  },
  {
    id: 3,
    title: 'Spawn Agents',
    description: 'Intelligent agents execute tasks autonomously',
    timeSaved: 'Save ~8h/spec',
    illustration: '/illustrations/spawn-agents.svg',
  },
  {
    id: 4,
    title: 'Review & Merge',
    description: 'Review completed work and merge with confidence',
    timeSaved: 'Save ~1h/spec',
    illustration: '/illustrations/review-merge.svg',
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-lg text-muted-foreground">
          From idea to implementation in four simple steps
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="flex flex-col items-center text-center group"
            aria-current={index === 0 ? 'step' : undefined}
            aria-describedby={`step-${step.id}`}
          >
            <div className="mb-6">
              <div className="w-20 h-20 rounded-full border-2 border-border bg-background flex items-center justify-center group-hover:border-primary transition-colors">
                <Image
                  src={step.illustration}
                  alt={step.title}
                  width={48}
                  height={48}
                  className="text-primary"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                  Step {step.id}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              
              <p className="text-xs font-medium text-green-600 dark:text-green-400">
                {step.timeSaved}
              </p>
            </div>
            
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute translate-x-[8.5rem] translate-y-[-6rem] w-24 h-px bg-border" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}