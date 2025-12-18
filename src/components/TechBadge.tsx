import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  icon?: React.ReactNode;
  className?: string;
}

const TechBadge = ({ name, icon, className }: TechBadgeProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-lg",
        "bg-secondary/50 border border-border",
        "font-mono text-sm text-foreground",
        "transition-all duration-300",
        "hover:border-primary/50 hover:bg-secondary",
        className
      )}
    >
      {icon && <span className="text-primary">{icon}</span>}
      <span>{name}</span>
    </div>
  );
};

export default TechBadge;
