import { Database, Server, Globe, Users, FileAudio, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArchitectureNodeProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  className?: string;
}

const ArchitectureNode = ({ icon, label, description, className }: ArchitectureNodeProps) => (
  <div
    className={cn(
      "relative p-4 rounded-xl bg-card border border-border",
      "hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)]",
      "transition-all duration-300 group",
      className
    )}
  >
    <div className="flex flex-col items-center text-center gap-2">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <h4 className="font-semibold text-foreground text-sm">{label}</h4>
      <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </div>
);

const ArchitectureDiagram = () => {
  return (
    <div className="relative">
      {/* Connection Lines - SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 800 400"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(175, 85%, 50%)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(175, 85%, 50%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(175, 85%, 50%)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* Horizontal lines */}
        <path
          d="M 200 200 L 400 200"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 4"
          className="hidden md:block"
        />
        <path
          d="M 400 200 L 600 200"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 4"
          className="hidden md:block"
        />
        
        {/* Vertical lines */}
        <path
          d="M 400 100 L 400 200"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 4"
          className="hidden md:block"
        />
        <path
          d="M 400 200 L 400 300"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 4"
          className="hidden md:block"
        />
      </svg>

      {/* Architecture Nodes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {/* Top Row */}
        <div className="md:col-start-2">
          <ArchitectureNode
            icon={<Globe className="w-6 h-6 text-primary" />}
            label="API Gateway"
            description="Rate limiting, authentication, request routing"
          />
        </div>

        {/* Middle Row */}
        <ArchitectureNode
          icon={<Users className="w-6 h-6 text-primary" />}
          label="Creator Service"
          description="Manage creator profiles and permissions"
        />
        <ArchitectureNode
          icon={<Server className="w-6 h-6 text-primary" />}
          label="Content Service"
          description="Core Golang service handling all content operations"
        />
        <ArchitectureNode
          icon={<FileAudio className="w-6 h-6 text-primary" />}
          label="Audio Processor"
          description="Handle audio metadata and file references"
        />

        {/* Bottom Row */}
        <ArchitectureNode
          icon={<Shield className="w-6 h-6 text-primary" />}
          label="Auth Layer"
          description="JWT validation and access control"
        />
        <ArchitectureNode
          icon={<Database className="w-6 h-6 text-primary" />}
          label="MySQL Database"
          description="Relational storage with optimized schemas"
        />
        <div className="flex items-center justify-center">
          <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
            <span className="text-sm font-mono text-primary">REST API v1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
