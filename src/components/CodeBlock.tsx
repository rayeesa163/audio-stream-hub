import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

const CodeBlock = ({ code, language = "go", className }: CodeBlockProps) => {
  return (
    <div className={cn("relative rounded-xl overflow-hidden", className)}>
      {/* Window Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-card border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <span className="ml-2 text-xs text-muted-foreground font-mono">{language}</span>
      </div>
      
      {/* Code Content */}
      <div className="p-4 bg-background/50 overflow-x-auto">
        <pre className="font-mono text-sm text-foreground leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
