import { cn } from "@/lib/utils";

interface ApiEndpointProps {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  endpoint: string;
  description: string;
}

const methodStyles = {
  GET: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  POST: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  PUT: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  DELETE: "bg-red-500/20 text-red-400 border-red-500/30",
  PATCH: "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

const ApiEndpoint = ({ method, endpoint, description }: ApiEndpointProps) => {
  return (
    <div className="group flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-lg bg-background/50 border border-border hover:border-primary/30 hover:bg-secondary/30 transition-all duration-300">
      <span
        className={cn(
          "inline-flex items-center justify-center px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider w-fit border",
          methodStyles[method]
        )}
      >
        {method}
      </span>
      <code className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
        {endpoint}
      </code>
      <span className="text-sm text-muted-foreground sm:ml-auto">{description}</span>
    </div>
  );
};

export default ApiEndpoint;
