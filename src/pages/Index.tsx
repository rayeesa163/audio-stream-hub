import { Github, Database, Server, FileJson, BookOpen, Layers, ArrowRight, ExternalLink, Code2, Zap, Shield, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import TechBadge from "@/components/TechBadge";
import FeatureCard from "@/components/FeatureCard";
import CodeBlock from "@/components/CodeBlock";
import GlowOrb from "@/components/GlowOrb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import StatsCard from "@/components/StatsCard";
import ContactForm from "@/components/ContactForm";
import ApiEndpoint from "@/components/ApiEndpoint";

const Index = () => {
  const sampleCode = `// Audio Content API - Golang
package service

import (
    "context"
    "time"
)

type AudioContent struct {
    ID          uint64    \`json:"id" db:"id"\`
    Title       string    \`json:"title" db:"title"\`
    CreatorID   uint64    \`json:"creator_id" db:"creator_id"\`
    Duration    int       \`json:"duration" db:"duration"\`
    Category    string    \`json:"category" db:"category"\`
    Status      string    \`json:"status" db:"status"\`
    CreatedAt   time.Time \`json:"created_at" db:"created_at"\`
    UpdatedAt   time.Time \`json:"updated_at" db:"updated_at"\`
}

type ContentFilters struct {
    Category  string
    CreatorID uint64
    Status    string
}

func (s *AudioService) GetAudioContent(
    ctx context.Context,
    page, limit int,
    filters ContentFilters,
) ([]AudioContent, *Pagination, error) {
    return s.repo.FindWithPagination(ctx, page, limit, filters)
}`;

  const features = [
    {
      title: "RESTful API Design",
      description: "Clean, well-structured APIs following REST principles with proper HTTP methods, status codes, and resource naming.",
      icon: Server,
    },
    {
      title: "MySQL Database",
      description: "Optimized relational schemas with indexed queries, foreign key constraints, and transaction support.",
      icon: Database,
    },
    {
      title: "Pagination & Filtering",
      description: "Efficient cursor-based pagination with flexible filtering and sorting for large datasets.",
      icon: Layers,
    },
    {
      title: "Error Handling",
      description: "Structured error responses with proper HTTP status codes, error messages, and debugging info.",
      icon: Shield,
    },
    {
      title: "Clean Architecture",
      description: "Layered architecture with separation of concerns: handlers, services, repositories, and models.",
      icon: Code2,
    },
    {
      title: "High Performance",
      description: "Golang's concurrency model enables handling thousands of requests with minimal resource usage.",
      icon: Zap,
    },
  ];

  const apiEndpoints = [
    { method: "GET" as const, endpoint: "/api/v1/content", description: "List audio content with pagination & filters" },
    { method: "POST" as const, endpoint: "/api/v1/content", description: "Create new audio content" },
    { method: "GET" as const, endpoint: "/api/v1/content/:id", description: "Get content details by ID" },
    { method: "PUT" as const, endpoint: "/api/v1/content/:id", description: "Update existing content" },
    { method: "DELETE" as const, endpoint: "/api/v1/content/:id", description: "Soft delete content" },
    { method: "GET" as const, endpoint: "/api/v1/creators/:id/content", description: "Get all content by creator" },
    { method: "POST" as const, endpoint: "/api/v1/creators", description: "Register new creator" },
    { method: "GET" as const, endpoint: "/api/v1/categories", description: "List available categories" },
  ];

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <GlowOrb className="top-0 left-1/4 -translate-x-1/2 -translate-y-1/2" size="lg" />
      <GlowOrb className="bottom-1/4 right-0 translate-x-1/2" size="md" />
      <GlowOrb className="top-1/2 left-0 -translate-x-1/2" size="sm" />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Header */}
      <Header />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Project Label */}
            <div className="animate-fade-up mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Backend Project • Production Ready
              </span>
            </div>

            {/* Title */}
            <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="text-foreground">Audio Content</span>
              <br />
              <span className="text-gradient">Service</span>
            </h1>

            {/* Description */}
            <p className="animate-fade-up-delay-2 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              A high-performance backend service built with <span className="text-primary font-semibold">Golang</span> and <span className="text-primary font-semibold">MySQL</span> for managing 
              audio content and creator workflows at enterprise scale.
            </p>

            {/* Tech Stack */}
            <div className="animate-fade-up-delay-3 flex flex-wrap justify-center gap-3 mb-10">
              <TechBadge name="Golang" icon={<Server className="w-4 h-4" />} />
              <TechBadge name="MySQL" icon={<Database className="w-4 h-4" />} />
              <TechBadge name="REST API" icon={<FileJson className="w-4 h-4" />} />
              <TechBadge name="Clean Architecture" icon={<GitBranch className="w-4 h-4" />} />
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
              <Button variant="github" size="lg" asChild>
                <a href="#api">
                  <BookOpen className="w-5 h-5" />
                  Explore API
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatsCard value="15" suffix="+" label="API Endpoints" delay={0} />
            <StatsCard value="10" suffix="ms" label="Avg Response Time" delay={100} />
            <StatsCard value="99.9" suffix="%" label="Uptime SLA" delay={200} />
            <StatsCard value="100" suffix="%" label="Test Coverage" delay={300} />
          </div>
        </section>

        {/* Code Preview Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground mb-4">Clean, Maintainable Code</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Built with Go's idiomatic patterns for maximum readability and performance.
              </p>
            </div>
            <div className="gradient-border rounded-xl overflow-hidden shadow-[0_0_60px_hsl(var(--primary)/0.1)]">
              <CodeBlock code={sampleCode} language="service/audio.go" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4">
                Features
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Built for Scale</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Enterprise-grade features designed for reliability, performance, and developer experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Architecture Section */}
        <section id="architecture" className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4">
                Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">System Design</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Modular microservice architecture designed for horizontal scaling and maintainability.
              </p>
            </div>

            <div className="gradient-border rounded-xl p-8">
              <ArchitectureDiagram />
            </div>
          </div>
        </section>

        {/* API Endpoints Section */}
        <section id="api" className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4">
                API Reference
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">RESTful Endpoints</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Well-documented API endpoints following REST best practices.
              </p>
            </div>

            <div className="gradient-border rounded-xl p-6 sm:p-8">
              <div className="space-y-3">
                {apiEndpoints.map((api, index) => (
                  <ApiEndpoint
                    key={index}
                    method={api.method}
                    endpoint={api.endpoint}
                    description={api.description}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://github.com/yourname/pocketfm-backend-audio-service#api-documentation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileJson className="w-4 h-4" />
                  View Full Documentation
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4">
                Get in Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Interested in This Project?
              </h2>
              <p className="text-muted-foreground">
                Have questions about the implementation or want to collaborate? Let's connect.
              </p>
            </div>

            <div className="gradient-border rounded-xl p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="gradient-border rounded-2xl p-10 sm:p-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Ready to Explore the Code?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Check out the full source code, setup instructions, and comprehensive documentation on GitHub.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a 
                    href="https://github.com/yourname/pocketfm-backend-audio-service" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                    Star on GitHub
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
};

export default Index;
