import { Brain, Briefcase, Code, Shield, Users } from 'lucide-react';

interface SkillCategory {
  icon: typeof Brain;
  title: string;
  skills: string[];
  color: string;
}

const Skills = () => {
  const categories: SkillCategory[] = [
    {
      icon: Brain,
      title: 'AI/ML Expertise',
      color: 'from-purple-600 to-purple-700',
      skills: [
        'Generative AI & LLMs',
        'RAG Architecture',
        'P-RAG (Patent)',
        'AI Governance',
        'ML Operations',
        'NLP & Sentiment Analysis',
        'Predictive Analytics',
        'Model Deployment'
      ]
    },
    {
      icon: Briefcase,
      title: 'Product Leadership',
      color: 'from-blue-600 to-blue-700',
      skills: [
        'P&L Management ($60M+)',
        'Product Strategy',
        'Go-to-Market',
        'Roadmap Planning',
        'Stakeholder Management',
        'Business Development',
        'Value Delivery',
        'Portfolio Management'
      ]
    },
    {
      icon: Code,
      title: 'Technical Stack',
      color: 'from-indigo-600 to-indigo-700',
      skills: [
        'AWS Cloud',
        'Snowflake',
        'Genesys Cloud',
        'Amazon Connect',
        'Azure',
        'Databricks',
        'API Design',
        'Microservices'
      ]
    },
    {
      icon: Shield,
      title: 'Domain Knowledge',
      color: 'from-cyan-600 to-cyan-700',
      skills: [
        'HIPAA Compliance',
        'GDPR',
        'SOC2',
        'Healthcare Tech',
        'Fintech',
        'Life Sciences',
        'Contact Centers',
        'Risk Management'
      ]
    },
    {
      icon: Users,
      title: 'Leadership',
      color: 'from-teal-600 to-teal-700',
      skills: [
        'Team Building (200+)',
        'Agile/SAFe',
        'Change Management',
        'Executive Communication',
        'Cross-functional Leadership',
        'PMP Certified',
        'Strategic Planning',
        'Performance Optimization'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white via-blue-50/50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-700 mb-4">
            Skills & <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-700 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary-500 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-primary-700 mb-4">{category.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-primary-50 text-primary-700 rounded-lg text-sm border border-primary-200 hover:border-primary-400 hover:bg-primary-100 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-primary-50 backdrop-blur-sm border border-blue-200 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-primary-700 mb-2">18+</div>
            <div className="text-text-secondary">Years Experience</div>
          </div>

          <div className="bg-primary-50 backdrop-blur-sm border border-blue-200 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-primary-700 mb-2">200+</div>
            <div className="text-text-secondary">Team Members Led</div>
          </div>

          <div className="bg-primary-50 backdrop-blur-sm border border-blue-200 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-primary-700 mb-2">$100M+</div>
            <div className="text-text-secondary">Value Delivered</div>
          </div>
        </div>

        <div className="mt-12 bg-white backdrop-blur-sm border border-border rounded-xl p-8">
          <h3 className="text-2xl font-bold text-primary-700 mb-4 text-center">Certifications & Memberships</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'SAFe 5 POPM',
              'PMP - Project Management Professional',
              'edX Statistics/R',
              'Six Sigma Yellow/White Belt',
              'Informatica Developer',
              'Lynda Project Management'
            ].map((cert, idx) => (
              <div
                key={idx}
                className="px-4 py-2 bg-primary-50 border border-primary-200 rounded-lg text-primary-700"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
