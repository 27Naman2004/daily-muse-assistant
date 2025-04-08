
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, List, MessageSquare } from "lucide-react";

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-secondary to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">
              Your AI <span className="text-primary">Daily Planning</span> Assistant
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '100ms' }}>
              Let AI help you organize your day, boost productivity, and achieve more with intelligent scheduling and planning.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <Link to="/chat">
                <Button size="lg" className="w-full sm:w-auto">
                  <MessageSquare className="mr-2 h-4 w-4" /> Start Planning
                </Button>
              </Link>
              <Link to="/register">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Plan Smarter, Not Harder</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-secondary rounded-lg p-6 text-center">
              <div className="bg-primary/10 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Scheduling</h3>
              <p className="text-muted-foreground">
                Get AI-powered suggestions for optimizing your daily schedule based on your productivity patterns.
              </p>
            </div>
            
            <div className="bg-secondary rounded-lg p-6 text-center">
              <div className="bg-primary/10 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Time Management</h3>
              <p className="text-muted-foreground">
                Learn effective time management techniques tailored to your specific workstyle and goals.
              </p>
            </div>
            
            <div className="bg-secondary rounded-lg p-6 text-center">
              <div className="bg-primary/10 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
                <List className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Priority Setting</h3>
              <p className="text-muted-foreground">
                Get guidance on identifying your most important tasks and organizing them effectively.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/30 ml-6 hidden sm:block"></div>
              
              {/* Step 1 */}
              <div className="flex mb-12">
                <div className="relative">
                  <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center text-white font-bold z-10 relative">
                    1
                  </div>
                </div>
                <div className="ml-6 mt-2">
                  <h3 className="text-xl font-semibold mb-2">Chat with Daily Muse</h3>
                  <p className="text-muted-foreground">
                    Start a conversation with our AI assistant about your daily schedule, priorities, or productivity challenges.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex mb-12">
                <div className="relative">
                  <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center text-white font-bold z-10 relative">
                    2
                  </div>
                </div>
                <div className="ml-6 mt-2">
                  <h3 className="text-xl font-semibold mb-2">Get Personalized Advice</h3>
                  <p className="text-muted-foreground">
                    Receive customized planning strategies and productivity tips based on your specific needs and challenges.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex">
                <div className="relative">
                  <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center text-white font-bold z-10 relative">
                    3
                  </div>
                </div>
                <div className="ml-6 mt-2">
                  <h3 className="text-xl font-semibold mb-2">Implement and Track</h3>
                  <p className="text-muted-foreground">
                    Apply the suggested techniques to your daily routine and track your productivity improvements over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Daily Planning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Start chatting with Daily Muse now and discover how effective planning can change your productivity and focus.
          </p>
          <Link to="/chat">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <MessageSquare className="mr-2 h-4 w-4" /> Start Planning Now
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
