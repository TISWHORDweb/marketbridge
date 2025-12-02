import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Lightbulb, Target, Rocket, CheckCircle2, Activity, Brain, Heart, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import heroImage from "@/assets/images/hero.jpg";
import challengeImage from "@/assets/images/istockphoto-1327568875-612x612.jpg";
import solutionImage from "@/assets/images/istockphoto-1719538017-612x612.jpg";
import processImage from "@/assets/images/pexels-pixabay-236380.jpg";
import useCaseImage1 from "@/assets/images/pexels-pixabay-263337.jpg";
import useCaseImage2 from "@/assets/images/pexels-pixabay-40568.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-10">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="text-center md:text-left animate-fade-in order-1">
                <div className="inline-block mb-4 md:mb-6 px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 rounded-full">
                  <span className="text-primary font-semibold text-xs sm:text-sm">MarketBridge Studio</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
                  Accelerating Adoption of Healthcare Innovations
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0">
                  Data-driven strategies that transform healthcare innovation into market success
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button size="lg" className="group shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="group w-full sm:w-auto border-2 hover:bg-primary/5"
                    onClick={() => {
                      const element = document.getElementById("solutions");
                      if (element) {
                        const offset = 80;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;
                        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              
              {/* Hero Image - Shows on all screens, below content on mobile */}
              <div className="relative order-2">
                <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={heroImage} 
                    alt="Healthcare Innovation" 
                    className="w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-primary/10 rounded-full blur-3xl hidden sm:block"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl hidden sm:block"></div>
      </section>

      {/* Understanding the Challenges */}
      <section className="py-12 sm:py-16 md:py-20 bg-card">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-10 md:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Understanding the Challenges</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            <Card className="p-6 md:p-8 hover:shadow-lg transition-all animate-fade-in border-2 border-border hover:border-primary/30 overflow-hidden">
              <div className="relative h-40 sm:h-48 mb-4 md:mb-6 rounded-lg overflow-hidden">
                <img 
                  src={challengeImage} 
                  alt="Healthcare Challenges" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent"></div>
              </div>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Adoption Challenges</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                The healthcare sector faces significant barriers to innovation, including regulatory hurdles, 
                resistance to change, and a fragmented market, which complicates the widespread adoption of new technologies.
              </p>
            </Card>
            
            <Card className="p-6 md:p-8 hover:shadow-lg transition-all animate-fade-in border-2 border-border hover:border-accent/30 overflow-hidden">
              <div className="relative h-40 sm:h-48 mb-4 md:mb-6 rounded-lg overflow-hidden">
                <img 
                  src={solutionImage} 
                  alt="Our Solution" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent"></div>
              </div>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Our Solution</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                We provide data-driven go-to-market strategies that streamline the adoption process, 
                focusing on targeted messaging and precise market segmentation to enhance engagement and ensure successful implementation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Data-Driven Solutions */}
      <section id="solutions" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-10 md:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Data-Driven Solutions</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              A comprehensive approach to accelerate healthcare innovation adoption
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
            <Card className="p-6 md:p-8 text-center hover:shadow-xl transition-all group border-2 border-border hover:border-primary/50 hover:-translate-y-1 md:hover:-translate-y-2">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Insight</h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                Analyze data to understand tailored approaches for market needs
              </p>
            </Card>
            
            <Card className="p-6 md:p-8 text-center hover:shadow-xl transition-all group border-2 border-border hover:border-accent/50 hover:-translate-y-1 md:hover:-translate-y-2">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-accent to-accent/60 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Strategy</h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                Develop targeted approaches for maximum market impact
              </p>
            </Card>
            
            <Card className="p-6 md:p-8 text-center hover:shadow-xl transition-all group border-2 border-border hover:border-primary/50 hover:-translate-y-1 md:hover:-translate-y-2">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary via-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Execution</h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                Implement plans with precision and care
              </p>
            </Card>
            
            <Card className="p-6 md:p-8 text-center hover:shadow-xl transition-all group border-2 border-border hover:border-accent/50 hover:-translate-y-1 md:hover:-translate-y-2">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Optimization</h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                Continuously improve based on success feedback
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section id="process" className="py-12 sm:py-16 md:py-20 bg-card">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-10 md:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">The Process</h2>
            <p className="text-muted-foreground uppercase tracking-wider text-xs md:text-sm font-semibold">
              Next Steps and Goals
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto mb-8 md:mb-12">
            <div className="relative h-48 sm:h-56 md:h-64 rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={processImage} 
                alt="Our Process" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-accent/40"></div>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            <div className="space-y-3 md:space-y-4">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                <span className="text-xl md:text-2xl font-bold text-primary">01</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold">Insight</h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                Analyze data trends to identify key market insights and opportunities
              </p>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                <span className="text-xl md:text-2xl font-bold text-accent">02</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold">Segment</h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                Define target segments to tailor our approach and optimize outreach
              </p>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                <span className="text-xl md:text-2xl font-bold text-primary">03</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold">Design</h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                Develop innovative concepts that resonate with targeted healthcare
              </p>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                <span className="text-xl md:text-2xl font-bold text-accent">04</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold">Test</h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                Implement rigorous testing to validate strategies and refine solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-background via-secondary/30 to-background">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-10 md:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Use Cases</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            <Card className="p-6 md:p-8 hover:shadow-xl transition-all group border-2 border-border hover:border-primary/50 overflow-hidden">
              <div className="relative h-40 sm:h-48 mb-4 md:mb-6 rounded-lg overflow-hidden">
                <img 
                  src={useCaseImage1} 
                  alt="Remote Patient Monitoring" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              </div>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <Activity className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Remote Patient Monitoring</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Empowering healthcare providers with real-time patient data and insights
              </p>
            </Card>
            
            <Card className="p-6 md:p-8 hover:shadow-xl transition-all group border-2 border-border hover:border-accent/50 overflow-hidden">
              <div className="relative h-40 sm:h-48 mb-4 md:mb-6 rounded-lg overflow-hidden">
                <img 
                  src={useCaseImage2} 
                  alt="Digital Therapeutics" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/60 to-transparent"></div>
              </div>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Digital Therapeutics</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Innovative solutions to enhance patient engagement and outcomes
              </p>
            </Card>
            
            <Card className="p-6 md:p-8 hover:shadow-xl transition-all group border-2 border-border hover:border-primary/50">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary via-accent to-primary rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Precision Medicine</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Tailoring treatments to individual patient profiles and needs
              </p>
            </Card>
            
            <Card className="p-6 md:p-8 hover:shadow-xl transition-all group border-2 border-border hover:border-accent/50">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Value-Based Care</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Focusing on patient outcomes rather than service volume
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-16 md:py-20 bg-card">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-10 md:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Timeline of Progress</h2>
          </div>
          
          {/* Mobile/Tablet View */}
          <div className="md:hidden space-y-4 max-w-2xl mx-auto">
            {[
              { milestone: "Insight gathering", year: 2023 },
              { milestone: "Market segmentation", year: 2024 },
              { milestone: "Design prototypes", year: 2025 },
              { milestone: "Testing with target users", year: 2026, noCheck: true },
              { milestone: "Scaling solutions", year: 2027, pending: true },
            ].map((item, idx) => (
              <Card key={idx} className="p-4 bg-secondary/50 hover:bg-secondary transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium text-sm">{item.milestone}</div>
                  <div className="text-xs font-semibold text-muted-foreground">{item.year}</div>
                </div>
                <div className="flex justify-end">
                  {item.pending ? (
                    <div className="w-5 h-5 border-2 border-primary rounded-full"></div>
                  ) : item.noCheck ? (
                    <div></div>
                  ) : (
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  )}
                </div>
              </Card>
            ))}
          </div>
          
          {/* Desktop View */}
          <div className="hidden md:block max-w-5xl mx-auto overflow-x-auto">
            <div className="min-w-[600px] lg:min-w-[800px]">
              <div className="grid grid-cols-6 gap-3 lg:gap-4 mb-6 lg:mb-8">
                <div className="font-semibold text-sm lg:text-base text-muted-foreground">Milestone</div>
                {[2023, 2024, 2025, 2026, 2027].map((year) => (
                  <div key={year} className="text-center font-bold text-base lg:text-lg">{year}</div>
                ))}
              </div>
              
              <div className="space-y-3 lg:space-y-4">
                <div className="grid grid-cols-6 gap-3 lg:gap-4 p-3 lg:p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
                  <div className="font-medium text-sm lg:text-base">Insight gathering</div>
                  <div className="text-center"><CheckCircle2 className="w-4 h-4 lg:w-5 lg:h-5 text-accent mx-auto" /></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                
                <div className="grid grid-cols-6 gap-3 lg:gap-4 p-3 lg:p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
                  <div className="font-medium text-sm lg:text-base">Market segmentation</div>
                  <div></div>
                  <div className="text-center"><CheckCircle2 className="w-4 h-4 lg:w-5 lg:h-5 text-accent mx-auto" /></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                
                <div className="grid grid-cols-6 gap-3 lg:gap-4 p-3 lg:p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
                  <div className="font-medium text-sm lg:text-base">Design prototypes</div>
                  <div></div>
                  <div></div>
                  <div className="text-center"><CheckCircle2 className="w-4 h-4 lg:w-5 lg:h-5 text-accent mx-auto" /></div>
                  <div></div>
                  <div></div>
                </div>
                
                <div className="grid grid-cols-6 gap-3 lg:gap-4 p-3 lg:p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
                  <div className="font-medium text-sm lg:text-base">Testing with target users</div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                
                <div className="grid grid-cols-6 gap-3 lg:gap-4 p-3 lg:p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
                  <div className="font-medium text-sm lg:text-base">Scaling solutions</div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div className="text-center"><div className="w-4 h-4 lg:w-5 lg:h-5 border-2 border-primary rounded-full mx-auto"></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Success Stories in Healthcare Innovation</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
              Transforming healthcare through data-driven strategies and innovative solutions
            </p>
          </div>
        </div>
      </section>

      {/* About Dara */}
      <section id="about" className="py-12 sm:py-16 md:py-20 bg-card">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6 md:mb-8">
              <div className="inline-block mb-4 md:mb-6 px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 rounded-full">
                <span className="text-primary font-semibold text-xs md:text-sm">INSIGHTS AND EXPERTISE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">About Us</h2>
            </div>
            
            <Card className="p-6 md:p-8 lg:p-10 border-2 border-border hover:border-primary/30 transition-all">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Experienced Data Driven Marketing Strategist</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Dara combines a deep understanding of data analytics with healthcare innovation, 
                driving impactful strategies that enhance market adoption and improve patient outcomes 
                through informed decision-making and effective messaging.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 sm:py-14 md:py-16 bg-black text-white">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
              <div className="sm:col-span-2 md:col-span-1">
                <div className="flex items-center space-x-2 md:space-x-3 mb-4 md:mb-6">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm md:text-lg">MB</span>
                  </div>
                  <span className="text-lg md:text-xl font-bold">MarketBridge</span>
                </div>
                <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                  Accelerating adoption of healthcare innovations through data-driven strategies.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold mb-4 md:mb-6 text-base md:text-lg">Quick Links</h3>
                <ul className="space-y-2 md:space-y-3">
                  <li>
                    <button
                      onClick={() => {
                        const element = document.getElementById("home");
                        if (element) {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                      className="text-white/80 hover:text-white transition-colors text-xs md:text-sm"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        const element = document.getElementById("about");
                        if (element) {
                          const offset = 80;
                          const elementPosition = element.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - offset;
                          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                        }
                      }}
                      className="text-white/80 hover:text-white transition-colors text-xs md:text-sm"
                    >
                      About Us
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        const element = document.getElementById("solutions");
                        if (element) {
                          const offset = 80;
                          const elementPosition = element.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - offset;
                          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                        }
                      }}
                      className="text-white/80 hover:text-white transition-colors text-xs md:text-sm"
                    >
                      Solutions
                    </button>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold mb-4 md:mb-6 text-base md:text-lg">Resources</h3>
                <ul className="space-y-2 md:space-y-3">
                  <li>
                    <button
                      onClick={() => {
                        const element = document.getElementById("process");
                        if (element) {
                          const offset = 80;
                          const elementPosition = element.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - offset;
                          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                        }
                      }}
                      className="text-white/80 hover:text-white transition-colors text-xs md:text-sm"
                    >
                      Process
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        const element = document.getElementById("use-cases");
                        if (element) {
                          const offset = 80;
                          const elementPosition = element.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - offset;
                          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                        }
                      }}
                      className="text-white/80 hover:text-white transition-colors text-xs md:text-sm"
                    >
                      Use Cases
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/20 pt-6 md:pt-8 text-center">
              <p className="text-white/60 text-xs md:text-sm">
                © {new Date().getFullYear()} MarketBridge Studio. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
