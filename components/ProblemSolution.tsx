"use client";

import { Card, CardContent } from "@/components/ui/card";

interface ProblemSolutionCard {
  icon: string;
  problem: string;
  solution: string;
  benefit: string;
}

const cardsData: ProblemSolutionCard[] = [
  {
    icon: "/icons/time.svg",
    problem: "Slow development cycles",
    solution: "Automated workflows & CI/CD",
    benefit: "Ship features 3x faster"
  },
  {
    icon: "/icons/complexity.svg",
    problem: "Complex infrastructure",
    solution: "Simplified cloud architecture",
    benefit: "80% reduction in ops overhead"
  },
  {
    icon: "/icons/scale.svg",
    problem: "Scaling bottlenecks",
    solution: "Auto-scaling & optimization",
    benefit: "Handle 10x traffic seamlessly"
  }
];

export function ProblemSolution() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {cardsData.map((card, index) => (
            <Card 
              key={index}
              className="group cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-within:-translate-y-0.5 focus-within:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              tabIndex={0}
              role="button"
              aria-label={`${card.problem}: ${card.solution} - ${card.benefit}`}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <img 
                      src={card.icon} 
                      alt="" 
                      className="w-5 h-5 opacity-70"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden w-5 h-5 bg-primary rounded opacity-70"></div>
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{card.problem}</h3>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    <span className="text-primary">Solution:</span> {card.solution}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-primary">Benefit:</span> {card.benefit}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}