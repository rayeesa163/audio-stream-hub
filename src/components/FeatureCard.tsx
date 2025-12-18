import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

const FeatureCard = ({ title, description, icon: Icon, delay = 0 }: FeatureCardProps) => {
  const delayClass = delay === 1 
    ? "animate-fade-up-delay-1" 
    : delay === 2 
    ? "animate-fade-up-delay-2" 
    : delay === 3 
    ? "animate-fade-up-delay-3" 
    : delay === 4 
    ? "animate-fade-up-delay-4" 
    : "animate-fade-up";

  return (
    <div
      className={cn(
        "group relative p-6 rounded-xl",
        "gradient-border",
        "transition-all duration-500",
        "hover:scale-[1.02] hover:glow-subtle",
        delayClass
      )}
    >
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
