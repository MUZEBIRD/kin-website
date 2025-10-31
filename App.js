import React, { useState, useEffect } from 'react';
import { Search, Calendar, Video, MessageCircle, ChevronDown, Menu, X, ArrowRight, Star } from 'lucide-react';

export default function GrowthMentorClone() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Color scheme matching GrowthMentor's branding
  const colors = {
    primary: '#4F46E5',
    secondary: '#818CF8',
    dark: '#1E293B',
    light: '#F8FAFC',
    gray: '#64748B',
    white: '#FFFFFF',
    success: '#10B981',
  };

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Navigation */}
      <nav 
        style={{ 
          backgroundColor: scrolled ? colors.white : 'transparent',
          boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
          transition: 'all 0.3s ease'
        }}
        className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 py-4"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div 
              style={{ 
                backgroundColor: colors.primary,
                color: colors.white 
              }}
              className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl mr-2"
            >
              G
            </div>
            <span 
              style={{ color: scrolled ? colors.dark : colors.white }}
              className="font-bold text-xl"
            >
              GrowthMentor
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" style={{ color: scrolled ? colors.dark : colors.white }} className="hover:opacity-80 transition">Features</a>
            <a href="#mentors" style={{ color: scrolled ? colors.dark : colors.white }} className="hover:opacity-80 transition">Mentors</a>
            <a href="#use-cases" style={{ color: scrolled ? colors.dark : colors.white }} className="hover:opacity-80 transition">Use Cases</a>
            <a href="#pricing" style={{ color: scrolled ? colors.dark : colors.white }} className="hover:opacity-80 transition">Pricing</a>
            
            <button
              style={{ 
                backgroundColor: colors.primary,
                color: colors.white
              }}
              className="px-6 py-2 rounded-lg font-medium hover:opacity-90 transition"
            >
              Get Started
            </button>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
            style={{ color: scrolled ? colors.dark : colors.white }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div 
            style={{ backgroundColor: colors.white }}
            className="md:hidden absolute w-full left-0 top-16 shadow-lg"
          >
            <div className="px-4 py-6 flex flex-col space-y-4">
              <a href="#features" style={{ color: colors.dark }} className="hover:opacity-80">Features</a>
              <a href="#mentors" style={{ color: colors.dark }} className="hover:opacity-80">Mentors</a>
              <a href="#use-cases" style={{ color: colors.dark }} className="hover:opacity-80">Use Cases</a>
              <a href="#pricing" style={{ color: colors.dark }} className="hover:opacity-80">Pricing</a>
              <button
                style={{ 
                  backgroundColor: colors.primary,
                  color: colors.white
                }}
                className="px-6 py-2 rounded-lg font-medium w-full"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        style={{ 
          backgroundColor: colors.light,
          backgroundImage: `linear-gradient(135deg, ${colors.white} 0%, ${colors.light} 100%)`,
        }}
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1
            style={{ color: colors.dark }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Startup Mentors for Growth-Addicted Founders & Marketers
          </h1>
          
          <p
            style={{ color: colors.gray }}
            className="text-xl mb-10"
          >
            Get unlimited growth and startup advice from experts who've been there.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <div className="relative flex-1">
              <Search 
                style={{ color: colors.gray }} 
                className="absolute left-4 top-3.5" 
              />
              <input
                type="text"
                placeholder="What do you need help with?"
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              style={{ backgroundColor: colors.primary }}
              className="px-8 py-3 rounded-lg font-medium text-white hover:opacity-90 transition"
            >
              Search Mentors
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm" style={{ color: colors.gray }}>
            <span>1:1 Mentorship ·</span>
            <span>AI-Powered Matching ·</span>
            <span>10,000+ Mentors ·</span>
            <span>40+ Industries</span>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: colors.white }}>
        <div className="max-w-6xl mx-auto">
          <p 
            style={{ color: colors.gray }}
            className="text-center mb-8"
          >
            TRUSTED BY GROWTH-FOCUSED TEAMS AT
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
            {['Airbnb', 'Shopify', 'Notion', 'Stripe', 'HubSpot', 'Dropbox'].map((company, i) => (
              <div 
                key={i}
                style={{ color: colors.dark }}
                className="text-center font-bold text-lg opacity-70 hover:opacity-100 transition"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              style={{ color: colors.dark }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Features that make it easy
            </h2>
            <p 
              style={{ color: colors.gray }}
              className="text-xl max-w-3xl mx-auto"
            >
              No more awkward outreach emails. Just choose a time, and connect.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Calendar size={32} style={{ color: colors.primary }} />,
                title: "Focus on growing, not scheduling",
                subtitle: "No more back and forth with calendar tools.",
                items: [
                  { 
                    number: "1", 
                    title: "Calendar Sync", 
                    description: "Automatic sync sessions with your Google Calendar",
                    detail: "Never miss a session with calls pushed directly to your Google Calendar."
                  },
                  { 
                    number: "2", 
                    title: "in-app Video Calls", 
                    description: "Built-in video rooms lets you join a session with 1 click from any device",
                    detail: "Your sessions recorded and summarized by AI, ready to rewatch and review anytime."
                  },
                  { 
                    number: "3", 
                    title: "Messenger", 
                    description: "Keep this conversation going, all in one place",
                    detail: "Communicate with your mentor directly from within the platform."
                  }
                ]
              }
            ].map((section, i) => (
              <div key={i} className="space-y-8">
                {section.items.map((item, j) => (
                  <div 
                    key={j}
                    className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
                  >
                    <div className="flex items-start gap-4">
                      <div 
                        style={{ 
                          backgroundColor: colors.primary,
                          color: colors.white
                        }}
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 font-bold mt-1"
                      >
                        {item.number}
                      </div>
                      <div>
                        <h3 
                          style={{ color: colors.dark }}
                          className="font-bold text-lg mb-2"
                        >
                          {item.title}
                        </h3>
                        <p 
                          style={{ color: colors.gray }}
                          className="mb-2"
                        >
                          {item.description}
                        </p>
                        <p 
                          style={{ color: colors.gray }}
                          className="text-sm"
                        >
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: colors.light }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              style={{ color: colors.dark }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Expertise across all growth areas
            </h2>
            <p 
              style={{ color: colors.gray }}
              className="text-xl max-w-3xl mx-auto"
            >
              Find mentors with experience in your specific industry and challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Product Marketing", count: "2,450+" },
              { name: "Growth Marketing", count: "3,120+" },
              { name: "SEO & Content", count: "1,870+" },
              { name: "PPC Advertising", count: "1,540+" },
              { name: "Product Management", count: "1,980+" },
              { name: "UX/UI Design", count: "1,320+" },
              { name: "Sales Strategy", count: "1,760+" },
              { name: "Fundraising", count: "980+" }
            ].map((category, i) => (
              <div
                key={i}
                style={{ backgroundColor: colors.white }}
                className="p-6 rounded-xl shadow hover:shadow-md transition cursor-pointer border border-gray-100"
              >
                <h3 
                  style={{ color: colors.dark }}
                  className="font-bold text-lg mb-2"
                >
                  {category.name}
                </h3>
                <p 
                  style={{ color: colors.gray }}
                  className="text-sm"
                >
                  {category.count} mentors available
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button
              style={{ 
                backgroundColor: colors.primary,
                color: colors.white
              }}
              className="px-8 py-3 rounded-lg font-medium inline-flex items-center"
            >
              Browse All Categories <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2
              style={{ color: colors.dark }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Where people help people because it feels good to be a nice person
            </h2>
            <p 
              style={{ color: colors.gray }}
              className="text-xl"
            >
              Join the most uplifting community on the internet
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "GrowthMentor helped me find a mentor who had exactly the experience I needed. Within 2 weeks of our first call, I implemented changes that increased our conversion rate by 37%.",
                name: "Sarah Chen",
                title: "Founder, SaaS Startup"
              },
              {
                quote: "As a first-time founder, I was overwhelmed by all the marketing channels. My mentor helped me focus on just 2 that actually moved the needle for my business.",
                name: "Marcus Johnson",
                title: "CEO, E-commerce Brand"
              },
              {
                quote: "The ability to search for mentors by specific experience (like 'Shopify stores with $1M+ revenue') saved me hours of outreach and mismatched calls.",
                name: "Priya Patel",
                title: "Marketing Director"
              },
              {
                quote: "I've tried other mentorship platforms, but none have the quality of mentors and seamless booking experience that GrowthMentor offers.",
                name: "David Kim",
                title: "Startup Founder"
              }
            ].map((testimonial, i) => (
              <div
                key={i}
                style={{ 
                  backgroundColor: colors.white,
                  border: `1px solid ${colors.gray}20`
                }}
                className="p-8 rounded-xl shadow"
              >
                <div className="flex
