"use client";

import { Bot, Globe, MessageSquare, BarChart3, Sparkles, CheckCircle2, ArrowRight, Brain } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: Bot,
      title: "AI Automations",
      description: "Streamline your business processes with intelligent automation tailored to your needs"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Advanced ML solutions to unlock insights and predictions from your data"
    },
    {
      icon: Globe,
      title: "Website Creation & Redesign",
      description: "Modern, responsive websites built with cutting-edge technology"
    },
    {
      icon: MessageSquare,
      title: "AI Callers & Messages",
      description: "Intelligent communication systems that engage customers 24/7"
    },
    {
      icon: BarChart3,
      title: "Dashboard Management",
      description: "Comprehensive analytics and management dashboards for data-driven decisions"
    },
    {
      icon: Sparkles,
      title: "Social Media & Marketing",
      description: "End-to-end social media and market management powered by AI"
    }
  ];

  const benefits = [
    "Custom solutions tailored to your specific needs",
    "End-to-end service from A to Z",
    "Cutting-edge AI and ML technology",
    "Scalable solutions that grow with your business",
    "Expert consultation and ongoing support",
    "Fast turnaround and reliable delivery"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold text-white">Nexia</span>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Solutions for
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Every Business</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We deliver custom AI solutions tailored to your needs - from automations and machine learning to websites, AI callers, and complete business management systems
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all backdrop-blur-sm border border-white/20">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            Comprehensive AI solutions tailored to transform your business
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <service.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Why Choose Nexia?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-slate-800/30 p-6 rounded-xl backdrop-blur-sm border border-purple-500/10"
              >
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's discuss how our custom AI solutions can take your business to the next level
          </p>
          <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl">
            Get a Free Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <span className="text-xl font-bold text-white">Nexia</span>
          </div>
          <p className="text-gray-400">
            © 2025 Nexia AI Agency. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
