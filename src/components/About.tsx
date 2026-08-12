import { Award, BookOpen, FileText, Trophy, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'SAFe 5 POPM', description: 'Certified SAFe Program Consultant' },
    { icon: Trophy, label: 'PMP', description: 'Project Management Professional' },
    { icon: Users, label: 'edX Statistics/R', description: 'Advanced Analytics Certification' },
    { icon: FileText, label: 'Six Sigma', description: 'Yellow/White Belt Certified' },
    { icon: BookOpen, label: 'Informatica', description: 'Developer Certified' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-blue-50/50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16"> 
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-700 mb-4">
            About <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-700 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-white backdrop-blur-sm border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary-700 mb-6">Executive Summary</h3>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Senior AI Product Leader with 18+ years of Fortune 100 experience driving AI-first transformation across Healthcare, Fintech, and Life Sciences sectors. Proven track record of delivering $100M+ in measurable value through strategic product innovation and operational excellence.
                </p>
                <p>
                  Expert in building and scaling AI/ML platforms, with deep expertise in Generative AI, RAG architectures, and enterprise-grade product development. Successfully led cross-functional teams of 200+ members, managing P&L budgets exceeding $60M while consistently achieving 95% on-time delivery rates.
                </p>
                <p>
                  Patent holder for Predictive Retrieval-Augmented Generation (P-RAG) technology and active Forbes Technology Council contributor. Demonstrated excellence in translating complex AI capabilities into business outcomes, including 30% AHT reduction, $104M in operational savings, and 40K+ AI agent deployments impacting 13M+ members.
                </p>
                <p>
                  Strategic leader with comprehensive technical acumen spanning cloud architectures (AWS, Snowflake), contact center platforms (Genesys, Amazon Connect), and regulatory compliance (HIPAA, GDPR, SOC2). Recognized for ability to drive digital transformation initiatives while maintaining focus on customer experience, with proven results including 18% CX improvement and 25% CSAT increases.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white backdrop-blur-sm border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary-700 mb-6">Professional Achievements</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-white via-blue-50/50 to-slate-50 rounded-lg p-6 hover:border-success transition-all duration-300 hover:scale-105"
                    >
                      <Icon className="w-10 h-10 text-primary-600 mb-3" />
                      <div className="text-lg font-semibold text-primary-900 mb-1">{stat.label}</div>
                      <div className="text-sm text-text-secondary">{stat.description}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white backdrop-blur-sm border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold text-primary-700 mb-4">Core Competencies</h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>AI/ML Product Strategy & Execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>Enterprise Digital Transformation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>P&L Management & Business Development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>Contact Center Platform Modernization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>Regulatory Compliance & Risk Management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>Cross-Functional Leadership & Stakeholder Management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
