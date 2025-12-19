import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import heroImage from "@/assets/images/hero.jpg";
import processImage from "@/assets/images/pexels-pixabay-236380.jpg";
import solutionImage1 from "@/assets/images/pexels-eko-agalarov-589021945-18798923.jpg";
import solutionImage2 from "@/assets/images/pexels-mikhail-nilov-7682106-modified.jpg";
import solutionImage3 from "@/assets/images/pexels-mikhail-nilov-9301249-modified.jpg";
import solutionImage4 from "@/assets/images/pexels-tima-miroshnichenko-7567561-modified.jpg";
import useCaseImage1 from "@/assets/images/pexels-shkrabaanthony-5214958-modified.jpg";
import useCaseImage2 from "@/assets/images/pexels-fauxels-3183131-modified.jpg";
import useCaseImage3 from "@/assets/images/pexels-kampus-7551644-modified.jpg";
import useCaseImage4 from "@/assets/images/pexels-kampus-8353793-modified.jpg";
import successImage1 from "@/assets/images/pexels-karola-g-7195310-modified.jpg";
import successImage2 from "@/assets/images/pexels-olly-3779701-modified.jpg";
import successImage3 from "@/assets/images/pexels-rdne-6129494-modified.jpg";
import aboutImage from "@/assets/images/hero.jpeg";
import contactImage from "@/assets/images/pexels-pixabay-221537-modified.jpg";

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
                    fetchPriority="high"
                    decoding="async"
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
            <Card className="p-6 md:p-8 hover:shadow-lg transition-all animate-fade-in border-2 border-border hover:border-primary/30">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Adoption Challenges</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                The healthcare sector faces significant barriers to innovation, including regulatory hurdles, 
                resistance to change, and a fragmented market, which complicates the widespread adoption of new technologies.
              </p>
            </Card>
            
            <Card className="p-6 md:p-8 hover:shadow-lg transition-all animate-fade-in border-2 border-border hover:border-accent/30">
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
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            <div className="text-center hover:shadow-xl transition-all group">
              <div className="mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Insight</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  Analyze data to understand tailored approaches for market needs
                </p>
              </div>
              <div className="relative w-full h-48 md:h-56 rounded-lg overflow-hidden group-hover:scale-105 transition-transform">
                <img 
                  src={solutionImage1} 
                  alt="Insight" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            
            <div className="text-center hover:shadow-xl transition-all group">
              <div className="mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Strategy</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  Develop targeted approaches for maximum market impact
                </p>
              </div>
              <div className="relative w-full h-48 md:h-56 rounded-lg overflow-hidden group-hover:scale-105 transition-transform">
                <img 
                  src={solutionImage2} 
                  alt="Strategy" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            
            <div className="text-center hover:shadow-xl transition-all group">
              <div className="mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Execution</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  Implement plans with precision and care
                </p>
              </div>
              <div className="relative w-full h-48 md:h-56 rounded-lg overflow-hidden group-hover:scale-105 transition-transform">
                <img 
                  src={solutionImage3} 
                  alt="Execution" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            
            <div className="text-center hover:shadow-xl transition-all group">
              <div className="mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Optimization</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  Continuously improve based on success feedback
                </p>
              </div>
              <div className="relative w-full h-48 md:h-56 rounded-lg overflow-hidden group-hover:scale-105 transition-transform">
                <img 
                  src={solutionImage4} 
                  alt="Optimization" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
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
                loading="lazy"
                decoding="async"
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
            <div className="group cursor-pointer">
              <div className="relative h-56 sm:h-64 md:h-72 rounded-lg overflow-hidden mb-4 md:mb-6">
                <img 
                  src={useCaseImage1} 
                  alt="Remote Patient Monitoring" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-primary transition-colors">Remote Patient Monitoring</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Empowering healthcare providers with real-time patient data and insights
              </p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="relative h-56 sm:h-64 md:h-72 rounded-lg overflow-hidden mb-4 md:mb-6">
                <img 
                  src={useCaseImage2} 
                  alt="Digital Therapeutics" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-primary transition-colors">Digital Therapeutics</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Innovative solutions to enhance patient engagement and outcomes
              </p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="relative h-56 sm:h-64 md:h-72 rounded-lg overflow-hidden mb-4 md:mb-6">
                <img 
                  src={useCaseImage3} 
                  alt="Precision Medicine" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-primary transition-colors">Precision Medicine</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Tailoring treatments to individual patient profiles and needs
              </p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="relative h-56 sm:h-64 md:h-72 rounded-lg overflow-hidden mb-4 md:mb-6">
                <img 
                  src={useCaseImage4} 
                  alt="Value-Based Care" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-primary transition-colors">Value-Based Care</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Focusing on patient outcomes rather than service volume
              </p>
            </div>
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
              { milestone: "Scaling solutions", year: 2027, noCheck: true },
            ].map((item, idx) => (
              <Card key={idx} className="p-4 bg-secondary/50 hover:bg-secondary transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium text-sm">{item.milestone}</div>
                  <div className="text-xs font-semibold text-muted-foreground">{item.year}</div>
                </div>
                <div className="flex justify-end">
                  {item.noCheck ? (
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
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Success Stories in Healthcare Innovation</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
              Transforming healthcare through data-driven strategies and innovative solutions
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden group cursor-pointer">
              <img 
                src={successImage1} 
                alt="Success Story 1" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden group cursor-pointer">
              <img 
                src={successImage2} 
                alt="Success Story 2" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden group cursor-pointer">
              <img 
                src={successImage3} 
                alt="Success Story 3" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Dara */}
      <section id="about" className="py-12 sm:py-16 md:py-20 bg-card">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">About Dara</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Experienced Data Driven Marketing Strategist</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Dara combines a deep understanding of data analytics with healthcare innovation, 
                  driving impactful strategies that enhance market adoption and improve patient outcomes 
                  through informed decision-making and effective messaging.
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <img 
                  src={aboutImage} 
                  alt="Dara" 
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Healthcare Adoption */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Transform Healthcare Adoption</h2>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
                  Connect with us to drive innovative solutions forward
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p className="text-base md:text-lg">123-456-7890</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-base md:text-lg">hello@MarketBridgeStudio.com</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <p className="text-base md:text-lg">www.MarketBridgeStudio.com</p>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <img 
                  src={contactImage} 
                  alt="Contact" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
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
