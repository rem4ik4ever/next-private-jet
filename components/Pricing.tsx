import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import Button from './ui/button';

interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  cta: string;
  href: string;
  highlighted?: boolean;
}

const plans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: 19,
    yearlyPrice: 190,
    features: [
      '1 project',
      '5k AI tokens/mo',
      'Email support'
    ],
    cta: 'Start free',
    href: '/signup'
  },
  {
    id: 'team',
    name: 'Team',
    monthlyPrice: 79,
    yearlyPrice: 790,
    features: [
      '5 projects',
      '50k tokens/mo',
      'Shared billing',
      'Priority support'
    ],
    cta: 'Start trial',
    href: '/signup',
    highlighted: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      'Unlimited projects',
      'Dedicated support',
      'SSO',
      'Custom integrations'
    ],
    cta: 'Contact sales',
    href: '/demo'
  }
];

type BillingPeriod = 'monthly' | 'yearly';

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('monthly');

  const handleBillingChange = (value: string) => {
    const newPeriod = value as BillingPeriod;
    setBillingPeriod(newPeriod);
    if (window.analytics) {
      window.analytics.track('pricing_toggle_change', {
        billing_period: newPeriod
      });
    }
  };

  const handleCtaClick = (plan: PricingPlan) => {
    if (window.analytics) {
      window.analytics.track('pricing_cta_click', {
        plan: plan.id,
        billing_period: billingPeriod
      });
    }
    // Navigation is handled by href in the Button component
  };

  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Choose the perfect plan for your team
          </p>
          
          <Tabs
            defaultValue="monthly"
            value={billingPeriod}
            onValueChange={handleBillingChange}
            className="justify-center"
          >
            <TabsList className="grid w-[240px] grid-cols-2">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">
                Yearly
                <Badge variant="secondary" className="ml-2 text-xs">
                  2 months free
                </Badge>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.id} className={`relative ${plan.highlighted ? 'border-primary' : ''}`}>
              {plan.highlighted && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  Most popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{plan.name}</CardTitle>
                <CardDescription className="text-2xl font-bold">
                  {plan.id === 'enterprise' ? (
                    'Custom'
                  ) : (
                    <>
                      ${billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      {billingPeriod === 'yearly' && plan.id !== 'enterprise' && (
                        <span className="text-sm text-muted-foreground ml-1">
                          /month, billed annually
                        </span>
                      )}
                      {billingPeriod === 'monthly' && plan.id !== 'enterprise' && (
                        <span className="text-sm text-muted-foreground ml-1">/month</span>
                      )}
                    </>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-4 h-4 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  variant={plan.highlighted ? 'default' : 'outline'} 
                  className="w-full"
                  onClick={() => handleCtaClick(plan)}
                  asChild
                >
                  <a href={plan.href}>{plan.cta}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#compare" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            onClick={(e) => {
              e.preventDefault();
              if (window.analytics) {
                window.analytics.track('pricing_cta_click', {
                  plan: 'compare',
                  billing_period: 'n/a'
                });
              }
            }}
          >
            Compare plans
          </a>
        </div>
      </div>
    </section>
  );
}