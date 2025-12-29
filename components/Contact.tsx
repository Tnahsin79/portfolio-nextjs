"use client";

import { personalInfo, socialLinks } from "@/data/constants";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import AnimatedSection from "./ui/AnimatedSection";
import {
  EmailIcon,
  LocationIcon,
  PhoneIcon,
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from "./ui/Icons";

const socialIcons: Record<string, React.FC<{ className?: string }>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
};

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="reveal-up">
          <SectionTitle
            title="Get in Touch"
            subtitle="Have a project in mind? Let's work together to bring your ideas to life."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Info */}
          <AnimatedSection animation="reveal-left" delay={100}>
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 sm:gap-4 group hover-lift p-3 -m-3 rounded-xl"
                >
                  <div className="p-2.5 sm:p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 flex-shrink-0 group-hover:scale-110">
                    <EmailIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-400 text-xs sm:text-sm">Email</p>
                    <span className="text-white group-hover:text-accent transition-colors text-sm sm:text-base truncate block">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-3 sm:gap-4 group hover-lift p-3 -m-3 rounded-xl"
                >
                  <div className="p-2.5 sm:p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 flex-shrink-0 group-hover:scale-110">
                    <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Phone</p>
                    <span className="text-white group-hover:text-accent transition-colors text-sm sm:text-base">
                      {personalInfo.phone}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 sm:gap-4 group p-3 -m-3 rounded-xl">
                  <div className="p-2.5 sm:p-3 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                    <LocationIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Location</p>
                    <p className="text-white text-sm sm:text-base">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-2 sm:pt-4">
                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">Follow me</p>
                <div className="flex gap-3 sm:gap-4">
                  {socialLinks.map((link, index) => {
                    const Icon = socialIcons[link.icon];
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 sm:p-3 rounded-lg bg-white/5 text-gray-400 hover:bg-accent hover:text-white transition-all duration-300 border border-white/10 hover:border-accent hover:scale-110 hover:-translate-y-1"
                        aria-label={link.name}
                        style={{ transitionDelay: `${index * 50}ms` }}
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="reveal-right" delay={200}>
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="group">
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm text-gray-400 mb-1.5 sm:mb-2 group-focus-within:text-accent transition-colors"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm sm:text-base placeholder-gray-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-300 focus:bg-white/10"
                    placeholder="Your name"
                  />
                </div>
                <div className="group">
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm text-gray-400 mb-1.5 sm:mb-2 group-focus-within:text-accent transition-colors"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm sm:text-base placeholder-gray-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-300 focus:bg-white/10"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="group">
                <label
                  htmlFor="subject"
                  className="block text-xs sm:text-sm text-gray-400 mb-1.5 sm:mb-2 group-focus-within:text-accent transition-colors"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm sm:text-base placeholder-gray-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-300 focus:bg-white/10"
                  placeholder="Project inquiry"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm text-gray-400 mb-1.5 sm:mb-2 group-focus-within:text-accent transition-colors"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm sm:text-base placeholder-gray-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-300 resize-none focus:bg-white/10"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button variant="primary" className="w-full sm:w-auto hover:scale-105 transition-transform">
                Send Message
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </div>

      {/* Background Decoration - hidden on mobile */}
      <div className="hidden sm:block absolute top-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 animate-float-slow" />
    </section>
  );
}
