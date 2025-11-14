'use client';

import { Card } from '@/components/ui/card';

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    icon: '/icons/compose-prd.svg',
    title: 'AI PRD Composer',
    description: 'Turn ideas into actionable specs in minutes.'
  },
  {
    icon: '/icons/spawn-agents.svg',
    title: 'Agent orchestration',
    description: 'Parallelize tasks with guardrails.'
  },
  {
    icon: '/icons/complexity.svg',
    title: 'Secure Git integrations',
    description: 'GitHub/GitLab with least-privilege scopes.'
  },
  {
    icon: '/icons/preview-sandbox.svg',
    title: 'Preview sandboxes',
    description: 'Ephemeral environments for every change.'
  },
  {
    icon: '/icons/scale.svg',
    title: 'Role-based access',
    description: 'Granular permissions for teams.'
  },
  {
    icon: '/icons/webhooks.svg',
    title: 'Webhooks & events',
    description: 'Automate your pipeline with ease.'
  }
];

export default function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <Card key={index} className="p-6 flex flex-col items-center text-center rounded-lg">
          <img 
            src={feature.icon} 
            alt="" 
            aria-hidden="true"
            className="w-12 h-12 mb-4 text-primary"
          />
          <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
          <p className="text-sm text-muted-foreground">{feature.description}</p>
        </Card>
      ))}
    </div>
  );
}