import React from 'react';
import { ChevronRight, Star } from 'lucide-react';

export default function AboutPage() {
  const testimonials = [
    {
      text: "StartRight UK made navigating the benefits system so much easier. The guidance was clear, professional, and genuinely helpful.",
      author: "Sarah M.",
      rating: 5,
      service: "PIP Application"
    },
    {
      text: "Excellent service. They helped me set up my business structure properly while I was claiming benefits. Really knowledgeable.",
      author: "James K.",
      rating: 5,
      service: "Limited Company Formation"
    },
    {
      text: "Best money I've spent. They saved me hours of confusion and got me the support I actually qualified for.",
      author: "Maria P.",
      rating: 5,
      service: "UC Appeal"
    },
    {
      text: "Finally someone who actually understands the system. Not just forms, but real expert guidance.",
      author: "David H.",
      rating: 5,
      service: "Benefits Consultation"
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-white">Start<span className="text-amber-400">Right</span>®</h1>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="/services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="/prices" className="text-gray-300 hover:text-white transition-colors">Prices</a>
              <a href="/university" className="text-gray-300 hover:text-white transition-colors">University</a>
              <a href="/about" className="text-white font-semibold">About</a>
              <a 
                href="/chat"
                className="px-6 py-2 bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold rounded-full transition-colors"
              >
                Chat with Charlie
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with White Background */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                About <span className="text-amber-400">StartRight UK</span>
              </h2>
              <p className="text-xl text-slate-700 mb-6 leading-relaxed">
                We believe everyone deserves expert guidance navigating UK government services. StartRight exists because the system is confusing, and people shouldn't miss out on benefits, business support, or housing help they're entitled to.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our mission: Make government services accessible to everyone. Plain English. Expert advice. Real results.
              </p>
              <div className="flex gap-4">
                <a 
                  href="/chat"
                  className="px-8 py-3 bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold rounded-full transition-colors inline-flex items-center gap-2"
                >
                  Chat with Charlie
                </a>
                <a 
                  href="/services"
                  className="px-8 py-3 border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-semibold rounded-full transition-colors"
                >
                  View Services
                </a>
              </div>
            </div>

            <div className="relative">
              <img 
                src="williamfounder-1.jpeg" 
                alt="William, Founder" 
                className="w-full rounded-2xl shadow-lg border-4 border-amber-400/30"
              />
              <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-xl p-6 shadow-xl border border-gray-200">
                <h3 className="text-xl font-bold text-slate-900 mb-1">William Sanchez</h3>
                <p className="text-amber-600 font-semibold mb-3">Founder & CEO</p>
                <p className="text-slate-700 text-sm">51 years old. Health & Social Care student. Built StartRight from lived experience navigating the benefits system.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-slate-900 mb-12 text-center">Why We Exist</h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl border-2 border-amber-400/30 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-amber-400 mb-4">68+</div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Government Services</h4>
              <p className="text-slate-700">We cover everything from PIP to business formation to housing support. One place for all your government needs.</p>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-amber-400/30 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-amber-400 mb-4">Plain English</div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">No Jargon</h4>
              <p className="text-slate-700">Government services use deliberately confusing language. We translate that into plain English you actually understand.</p>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-amber-400/30 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-amber-400 mb-4">Results</div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">What Actually Works</h4>
              <p className="text-slate-700">Expert guidance based on real experience. We help you get what you're genuinely entitled to.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Office & Testimonials */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <h3 className="text-4xl font-bold text-slate-900 mb-12 text-center">What Our Customers Say</h3>
          
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Office Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-full min-h-96">
              <img 
                src="about-office.jpg" 
                alt="StartRight UK Office" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                <div>
                  <p className="text-white text-2xl font-bold">Professional. Expert. Accessible.</p>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-4">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all">
                  <div className="flex gap-2 mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-slate-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex justify-between items-center">
                    <p className="text-amber-600 font-semibold">{testimonial.author}</p>
                    <p className="text-slate-500 text-sm">{testimonial.service}</p>
                  </div>
                </div>
              ))}
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 text-center shadow-sm">
                <p className="text-slate-700 font-semibold mb-3">Trusted by hundreds on Trustpilot</p>
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm mb-4">4.9/5 Customer Rating</p>
                <a 
                  href="https://www.trustpilot.com"
                  className="text-amber-600 hover:text-amber-700 font-semibold text-sm transition-colors inline-flex items-center gap-2"
                >
                  View all reviews <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-amber-600 mb-2">70%</div>
              <p className="text-slate-600 font-semibold">PIP Appeals Won</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-600 mb-2">24hr</div>
              <p className="text-slate-600 font-semibold">Response Time</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-600 mb-2">4.9<span className="text-2xl">/5</span></div>
              <p className="text-slate-600 font-semibold">Customer Rating</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-600 mb-2">50%</div>
              <p className="text-slate-600 font-semibold">Discount for Claimants</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
          <h3 className="text-5xl font-bold text-slate-900 mb-6">Ready to Get Started?</h3>
          <p className="text-xl text-slate-700 mb-8">Get expert guidance on 68+ government services. Chat free with Charlie or book a consultation.</p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="/chat"
              className="px-8 py-3 bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold rounded-full transition-colors"
            >
              Chat with Charlie
            </a>
            <a 
              href="/services"
              className="px-8 py-3 border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-semibold rounded-full transition-colors"
            >
              View All Services
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center text-slate-600 text-sm">
          <p>&copy; 2026 StartRight UK (Mankind Reuse Limited). All rights reserved.</p>
          <p className="mt-2">We are not a government agency. We help you access government services.</p>
        </div>
      </div>
    </div>
  );
}
