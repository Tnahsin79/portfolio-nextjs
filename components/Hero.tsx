import { personalInfo } from "@/data/constants";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20 pb-10 sm:pt-16 sm:pb-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Hello
                <span className="text-accent">.</span>
              </h1>
              <div className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                <div className="w-8 sm:w-12 h-0.5 bg-accent" />
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
                  I&apos;m {personalInfo.name}
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {personalInfo.role}
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button variant="primary" href="#contact">
                Got a project?
              </Button>
              <Button variant="outline" href={personalInfo.resumeUrl}>
                My resume
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Circular Glow Ring - responsive sizes */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Outer Glow Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent via-accent/50 to-orange-600 opacity-80 blur-sm animate-pulse-slow" />
                
                {/* Inner Ring */}
                <div className="absolute inset-1.5 sm:inset-2 rounded-full bg-gradient-to-br from-accent/80 to-orange-500/60" />
                
                {/* Dark Inner Circle */}
                <div className="absolute inset-3 sm:inset-4 rounded-full bg-primary" />

                {/* Profile Image Placeholder */}
                <div className="absolute inset-4 sm:inset-6 rounded-full overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800">
                  {/* You can add an actual image here */}
                  <div className="w-full h-full flex items-center justify-center text-4xl sm:text-5xl md:text-6xl">
                    👨‍💻
                  </div>
                </div>

                {/* Decorative Arc */}
                <svg
                  className="absolute inset-0 w-full h-full animate-spin-slow"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="0.5"
                    strokeDasharray="20 80"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#e07a5f" />
                      <stop offset="100%" stopColor="#f4a261" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations - hidden on very small screens */}
      <div className="hidden sm:block absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
      <div className="hidden sm:block absolute bottom-20 right-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
}
