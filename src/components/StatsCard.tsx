import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface StatsCardProps {
  value: string;
  label: string;
  suffix?: string;
  delay?: number;
}

const StatsCard = ({ value, label, suffix = "", delay = 0 }: StatsCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={cn(
        "text-center p-6 rounded-xl bg-card/50 border border-border",
        "hover:border-primary/30 transition-all duration-500",
        "transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
    >
      <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
        {value}
        {suffix && <span className="text-primary">{suffix}</span>}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

export default StatsCard;
