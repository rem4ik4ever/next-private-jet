import { Badge } from '@/components/ui/badge';

const MetricsStrip = () => {
  const metrics = [
    {
      label: '90% faster PR delivery',
      ariaLabel: 'Teams using our platform deliver pull requests 90 percent faster',
    },
    {
      label: '200+ teams',
      ariaLabel: 'Over 200 teams trust our platform',
    },
    {
      label: '4.8/5 average rating',
      ariaLabel: 'Users rate our platform 4 point 8 out of 5 stars on average',
    },
  ];

  return (
    <section 
      className="py-8 md:py-12 bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-900/20"
      aria-label="Platform metrics and statistics"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="animate-fade-up opacity-0"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'forwards',
              }}
              aria-label={metric.ariaLabel}
            >
              <Badge 
                variant="secondary" 
                className="text-base md:text-lg px-4 py-2 md:px-6 md:py-3 font-semibold"
              >
                {metric.label}
              </Badge>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-up {
          animation: fade-up 0.6s ease-out;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-up {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default MetricsStrip;