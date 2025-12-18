import { Github, Database, Server, FileJson, BookOpen, Layers, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import TechBadge from "@/components/TechBadge";
import FeatureCard from "@/components/FeatureCard";
import CodeBlock from "@/components/CodeBlock";
import GlowOrb from "@/components/GlowOrb";

const Index = () => {
  const sampleCode = `// Audio Content API - Golang
type AudioContent struct {
    ID          uint64    \`json:"id"\`
    Title       string    \`json:"title"\`
    CreatorID   uint64    \`json:"creator_id"\`
    Duration    int       \`json:"duration"\`
    Category    string    \`json:"category"\`
    CreatedAt   time.Time \`json:"created_at"\`
}

func (s *Service) GetAudioContent(
    ctx context.Context,
    page, limit int,
    filters ContentFilters,
) ([]AudioContent, error) {
    return s.repo.FindWithPagination(
        ctx, page, limit, filters,
    )
}`;

  const features = [
    {
      title: "RESTful API Design",
      description: "Clean, well-structured APIs built with Golang for managing audio content and creator workflows efficiently.",
      icon: Server,
    },
    {
      title: "MySQL Database",
      description: "Relational schemas with optimized CRUD operations ensuring data consistency and integrity.",
      icon: Database,
    },
    {
      title: "Pagination & Filtering",
      description: "Scalable content access with advanced pagination and flexible filtering capabilities.",
      icon: Layers,
    },
    {
      title: "Structured Error Handling",
      description: "Comprehensive error handling patterns for robust and maintainable service architecture.",
      icon: FileJson,
    },
  ];

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <GlowOrb className="top-0 left-1/4 -translate-x-1/2 -translate-y-1/2" size="lg" />
      <GlowOrb className="bottom-1/4 right-0 translate-x-1/2" size="md" />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-20 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Project Label */}
            <div className="animate-fade-up mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Backend Project
              </span>
            </div>

            {/* Title */}
            <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-foreground">Audio Content</span>
              <br />
              <span className="text-gradient">Service</span>
            </h1>

            {/* Description */}
            <p className="animate-fade-up-delay-2 text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              A high-performance backend service built with Golang and MySQL for managing 
              audio content and creator workflows at scale.
            </p>

            {/* Tech Stack */}
            <div className="animate-fade-up-delay-3 flex flex-wrap justify-center gap-3 mb-10">
              <TechBadge name="Golang" icon={<Server className="w-4 h-4" />} />
              <TechBadge name="MySQL" icon={<Database className="w-4 h-4" />} />
              <TechBadge name="REST API" icon={<FileJson className="w-4 h-4" />} />
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-up-delay-4 flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a 
                  href="https://github.com/yourname/pocketfm-backend-audio-service" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="github" size="lg">
                <BookOpen className="w-5 h-5" />
                Read Documentation
              </Button>
            </div>
          </div>
        </section>

        {/* Code Preview Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="gradient-border rounded-xl overflow-hidden glow-subtle">
              <CodeBlock code={sampleCode} language="main.go" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Key Features</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Built with best practices for scalability, maintainability, and performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  delay={index + 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* API Endpoints Preview */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="gradient-border rounded-xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <FileJson className="w-5 h-5 text-primary" />
                API Endpoints
              </h3>
              
              <div className="space-y-4 font-mono text-sm">
                {[
                  { method: "GET", endpoint: "/api/v1/content", desc: "List audio content with pagination" },
                  { method: "POST", endpoint: "/api/v1/content", desc: "Create new audio content" },
                  { method: "GET", endpoint: "/api/v1/content/:id", desc: "Get content by ID" },
                  { method: "PUT", endpoint: "/api/v1/content/:id", desc: "Update existing content" },
                  { method: "DELETE", endpoint: "/api/v1/content/:id", desc: "Delete content" },
                  { method: "GET", endpoint: "/api/v1/creators/:id/content", desc: "Get creator's content" },
                ].map((api, index) => (
                  <div 
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 rounded-lg bg-background/50 hover:bg-secondary/50 transition-colors"
                  >
                    <span className={`inline-flex items-center justify-center px-2 py-0.5 rounded text-xs font-semibold w-fit
                      ${api.method === 'GET' ? 'bg-green-500/20 text-green-400' : ''}
                      ${api.method === 'POST' ? 'bg-blue-500/20 text-blue-400' : ''}
                      ${api.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' : ''}
                      ${api.method === 'DELETE' ? 'bg-red-500/20 text-red-400' : ''}
                    `}>
                      {api.method}
                    </span>
                    <code className="text-foreground">{api.endpoint}</code>
                    <span className="text-muted-foreground text-xs sm:ml-auto">{api.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Interested in the implementation?
            </h2>
            <p className="text-muted-foreground mb-8">
              Check out the full source code and documentation on GitHub.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a 
                href="https://github.com/yourname/pocketfm-backend-audio-service" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                Explore Repository
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-8">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            Built with Golang + MySQL
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Index;
