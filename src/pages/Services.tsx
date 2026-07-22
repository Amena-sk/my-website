import { Sparkles, Code, LineChart, Megaphone } from "lucide-react";
import Card from "../components/Card";

export default function Services() {
  return (
    <section>
      <header className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Services
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-lg text-gray-600">
          What I can help you with.
        </p>
      </header>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          icon={Sparkles}
          name="Branding"
          title="Brand Strategy"
          description="Positioning, identity, and messaging that make your product feel premium and unmistakable."
        />
        <Card
          icon={Code}
          name="Development"
          title="Web Development"
          description="Fast, modern websites and web apps built with React, TypeScript, and Tailwind."
        />
        <Card
          icon={LineChart}
          name="Strategy"
          title="Business Strategy"
          description="From corporate structuring to go-to-market plans, grounded in 15+ years of experience."
        />
        <Card
          icon={Megaphone}
          name="Marketing"
          title="Growth & Marketing"
          description="Campaigns and content that reach the right audience and convert."
        />
      </div>
    </section>
  );
}