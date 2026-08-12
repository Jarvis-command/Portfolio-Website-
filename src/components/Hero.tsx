import {
  TrendingUp,
  Users,
  DollarSign,
  CheckCircle,
  Award
} from 'lucide-react';
import ThoughtLeadershipCarousel from './ThoughtLeadershipCarousel';
import { leadershipItems } from '../data/leadershipItems';

const Hero = () => {
  const scrollToInsights = () => {
    const element = document.getElementById('insights');
    if (!element) return;

    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  // Hero metrics for carousel (4 items)
  const heroMetrics = [
    { icon: Users, value: '13M+', label: 'Members Impacted' },
    { icon: DollarSign, value: '$104M', label: 'Value Delivered' },
    { icon: CheckCircle, value: 'P-RAG', label: 'Patent Holder' },
    { icon: TrendingUp, value: '$1B+', label: 'Impact' }
  ];

  // Info cards for carousel (3 items)
  const infoCards = [
    { icon: Award, value: '18+', label: 'Years Experience', description: 'Fortune 100 Leadership' },
    { icon: Users, value: '200+', label: 'Team Members Led', description: 'Cross-functional Teams' },
    { icon: DollarSign, value: '$100M+', label: 'Value Delivered', description: 'Measurable Impact' }
  ];

  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pb-24 lg:pb-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-[length:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-24 relative z-10">
        {/* PREMIUM HERO MAIN SECTION - 2 COLUMN LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mb-24">
          {/* Left Column - Hero Content */}
          <div className="space-y-8 flex flex-col justify-center min-w-0">
            {/* Name and Title Hierarchy */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                  Gowtham Chilakapati
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-primary-700 to-primary-600 bg-clip-text text-transparent leading-snug">
                  Ex-Thermo Fisher, Chase | $1B+ Impact | AI/ML Patent Holder
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full"></div>
                <h3 className="text-lg lg:text-xl font-semibold text-primary-600">
                  AI-first Transformation | $100M+ Delivered
                </h3>
              </div>

              {/* Professional Summary */}
              <div className="max-w-xl">
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed font-light">
                  I build AI products that deliver measurable value at enterprise scale. Humana: AI transformation 13M+ members ($90M GenAI savings, $60M portfolio, $104M value, 80+ headcount). Thermo Fisher: 6 M&A scaling ($4B→$18B). GLS: AI/ML revenue +12% ($480M). P-RAG patent. Forbes Tech Council. IEEE Sr Member.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Featured Thought Leadership Carousel */}
          <div className="relative min-w-0">
            <div
              className="bg-gradient-to-br from-white via-blue-50/30 to-white border border-gray-200 rounded-2xl overflow-hidden backdrop-blur-sm shadow-lg shadow-blue-500/10 h-full flex flex-col cursor-pointer"
              onClick={scrollToInsights}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  scrollToInsights();
                }
              }}
            >
              {/* Header */}
              <div className="px-6 pt-6 pb-4 border-b border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary-600">
                    Featured Insights
                  </h3>
                  <span className="text-xs px-3 py-1 bg-primary-100 text-primary-700 rounded-full font-semibold">
                    New
                  </span>
                </div>
                <p className="text-xs text-gray-500">Scroll to explore thought leadership (click here to view all insights)</p>
              </div>

              {/* Carousel Container */}
              <div className="flex-1 overflow-hidden px-6 pb-6 pt-4">
                <ThoughtLeadershipCarousel
                  items={leadershipItems}
                  autoScrollSpeed={10}
                />
              </div>
            </div>
          </div>
        </div>

        {/* FULL-WIDTH STATIC SECTIONS */}
        <div className="space-y-20">
          {/* Impact Metrics Grid */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Impact Metrics
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-primary-600/50 to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {heroMetrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={index} className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/50 transition-all duration-300 text-center">
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary-600 mx-auto mb-4" />
                    <div className="text-3xl sm:text-4xl font-bold text-primary-700 mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm sm:text-base text-gray-600 font-medium">
                      {metric.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Professional Highlights Grid */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Professional Highlights
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-primary-600/50 to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {infoCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div key={index} className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/50 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 flex-shrink-0" />
                      <div className="text-2xl sm:text-3xl font-bold text-primary-700">
                        {card.value}
                      </div>
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                      {card.label}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
