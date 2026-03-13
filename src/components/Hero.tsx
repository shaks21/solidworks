'use client';

import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500 rounded-full opacity-10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-700/50 rounded-full px-4 py-2 mb-6 backdrop-blur-sm border border-blue-600/30">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue-100">Live Online Training Available</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Professional{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                SolidWorks
              </span>{' '}
              Training
            </h1>

            <p className="text-xl sm:text-2xl text-blue-200 font-light mb-4">
              Flexible Timings • Learn from Anywhere
            </p>

            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Master SolidWorks with live online training from certified professionals. 
              From fundamentals to advanced techniques, we offer comprehensive courses 
              designed for engineers, designers, and manufacturers worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#enquiry">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:scale-105">
                  Enquire Now
                </Button>
              </a>
              <a href="#courses">
                <Button size="lg" className="bg-white/10 backdrop-blur-sm border border-white/40 text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold rounded-xl transition-all">
                  View Courses
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-blue-300">Students Trained</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">8</div>
                <div className="text-sm text-blue-300">Course Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-sm text-blue-300">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hidden lg:block relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* CAD-like visual representation */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl backdrop-blur-sm border border-white/10" />
              <div className="absolute inset-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-white/5">
                {/* CAD Grid */}
                <div className="absolute inset-0 opacity-30">
                  <div className="grid grid-cols-8 grid-rows-8 h-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div key={i} className="border border-blue-400/20" />
                    ))}
                  </div>
                </div>
                {/* CAD Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* 3D Cube representation */}
                    <div className="w-40 h-40 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 transform rotate-45 scale-75 opacity-80" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-blue-400 transform -rotate-12 scale-90 opacity-60" />
                      <div className="absolute inset-4 bg-gradient-to-bl from-cyan-300 to-blue-500 transform rotate-12 scale-90 opacity-70" />
                    </div>
                  </div>
                </div>
                {/* Dimension Lines */}
                <div className="absolute top-8 left-8 right-8 h-px bg-cyan-400/50" />
                <div className="absolute left-8 top-8 bottom-8 w-px bg-cyan-400/50" />
                <div className="absolute bottom-8 left-8 right-8 h-px bg-cyan-400/50" />
                <div className="absolute right-8 top-8 bottom-8 w-px bg-cyan-400/50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
