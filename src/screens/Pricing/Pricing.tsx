import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { SideBarSection } from "../Frame/sections/SideBarSection/SideBarSection";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    tokens: "1,000",
    overageRate: "N/A",
    features: ["Basic AI assistance", "Limited chat history", "Standard response time"],
  },
  {
    name: "Pro",
    price: "$19.99",
    tokens: "10,000",
    overageRate: "$0.002 per 100 tokens",
    features: ["Advanced AI models", "Extended chat history", "Priority response time", "Custom AI training"],
  },
  {
    name: "Business",
    price: "$49.99",
    tokens: "50,000",
    overageRate: "$0.0015 per 100 tokens",
    features: ["Enterprise-grade AI", "Unlimited chat history", "24/7 priority support", "API access", "Team collaboration"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    tokens: "Custom",
    overageRate: "Volume discounts available",
    features: ["Tailored AI solutions", "Dedicated account manager", "On-premise deployment options", "Custom integrations"],
  },
];

export const Pricing = (): JSX.Element => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleUpgrade = (planName: string) => {
    setSelectedPlan(planName);
    setShowCheckout(true);
  };

  return (
    <div className="flex h-screen w-full bg-white">
      <SideBarSection />
      <div className="flex-grow overflow-hidden [background:linear-gradient(90deg,rgba(255,245,242,1)_0%,rgba(248,240,255,1)_100%)]">
        <div className="h-full overflow-y-auto px-[10%] md:px-[3%] py-6">
          <h1 className="text-2xl font-bold mb-6">Choose Your Plan</h1>
          {!showCheckout ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingPlans.map((plan) => (
                <Card key={plan.name} className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-3xl font-bold mb-4">{plan.price}</p>
                    <ul className="list-disc list-inside mb-4 space-y-2">
                      <li>Tokens: {plan.tokens}</li>
                      <li>Overage: {plan.overageRate}</li>
                      {plan.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-4 mt-auto">
                    <Button 
                      className="w-full" 
                      variant={plan.name === "Free" ? "outline" : "default"}
                      onClick={() => plan.name !== "Free" && handleUpgrade(plan.name)}
                    >
                      {plan.name === "Free" ? "Current Plan" : plan.name === "Enterprise" ? "Contact Sales" : "Upgrade"}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="max-w-md mx-auto">
              <h2 className="text-xl font-bold mb-4">Checkout for {selectedPlan} Plan</h2>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
                <div>
                  <Label htmlFor="card">Card Number</Label>
                  <Input id="card" placeholder="1234 5678 9012 3456" required />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" required />
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Billing Address</Label>
                  <Input id="address" placeholder="123 Main St, City, Country" required />
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <img src="https://c.animaapp.com/cAaX3PH2/img/visa.svg" alt="Visa" className="h-8" />
                    <img src="https://c.animaapp.com/cAaX3PH2/img/mastercard.svg" alt="Mastercard" className="h-8" />
                    <img src="https://c.animaapp.com/cAaX3PH2/img/amex.svg" alt="American Express" className="h-8" />
                  </div>
                  <Button type="submit">Complete Purchase</Button>
                </div>
              </form>
              <Button variant="outline" className="mt-4 w-full" onClick={() => setShowCheckout(false)}>
                Back to Plans
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
