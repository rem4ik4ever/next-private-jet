import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigateToDemo = () => {
    window.location.href = '/demo';
  };

  const trustLogos = [
    { name: 'Microsoft', src: '/logos/microsoft.svg' },
    { name: 'Wealthsimple', src: '/logos/wealthsimple.svg' },
    { name: 'Linear', src: '/logos/linear.svg' },
    { name: 'Ramp', src: '/logos/ramp.svg' },
    { name: 'Vercel', src: '/logos/vercel.svg' },
    { name: 'Segment', src: '/logos/segment.svg' },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Ship features 3&times; faster with AI&shy;assisted engineering flow
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Compose PRDs, generate tasks, orchestrate agents, and merge with confidence. Purpose&shy;built for fast&shy;moving product teams.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={scrollToPricing}
                className="px-8"
              >
                Get started — Free trial
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={navigateToDemo}
                className="px-8"
              >
                Book a demo
              </Button>
            </div>
            
            <p className="text-sm text-gray-500">
              No credit card required
            </p>
            
            {/* Trust Logos */}
            <div className="pt-8">
              <div className="flex flex-wrap items-center gap-8">
                {trustLogos.map((logo) => (
                  <div key={logo.name} className="grayscale opacity-60 hover:opacity-100 transition-opacity">
                    <Image
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      width={120}
                      height={40}
                      className="h-8 w-auto"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Product Mockup */}
          <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {/* Browser Mockup */}
            <div className="relative mb-4 rounded-lg overflow-hidden shadow-2xl border border-gray-200">
              <div className="bg-gray-100 px-4 py-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="bg-white p-8 min-h-[300px] flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <p className="text-sm">Product dashboard preview</p>
                  <p className="text-xs mt-1">Replace with actual product image</p>
                </div>
              </div>
            </div>
            
            {/* Mobile Mockup */}
            <div className="absolute -bottom-16 -right-8 w-48 h-80 bg-gray-900 rounded-[30px] p-3 shadow-2xl border border-gray-700">
              <div className="bg-gray-800 w-full h-full rounded-[25px] flex items-center justify-center">
                <div className="text-gray-400 text-center text-xs">
                  <p>Mobile app preview</p>
                  <p className="text-[10px] mt-1">Replace with actual mobile image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;