import { useState } from 'react';
import { ChevronDown, ChevronUp, Briefcase } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
}

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const experiences: ExperienceItem[] = [
    {
      company: 'Humana',
      role: 'Enterprise Product Leader',
      period: 'May 2023 – Present',
      location: 'Tampa, FL',
      achievements: [
        '$104M total value delivered within 18 months through Contact Center Platform & Service Systems (CPSS) modernization, managing $60M annual CAPEX/OPEX budget serving 13M+ members, 100+ contact centers, and 40K+ agents',
        '$90M projected annual savings achieved through Enterprise Agent Assist AI platform deployment, reducing average handle time (AHT) by 30% via GenAI-powered real-time guidance for 40K+ agents across the enterprise',
        '$8M savings generated in the first 60 days by identifying redundant vendor contracts and consolidating data product architecture, demonstrating immediate operational efficiency improvements',
        '$500M projected savings enabled through enrollment modernization initiative impacting 17M+ members and 60M+ annual calls via eligibility and demographic intelligence automation',
        '18% customer experience improvement delivered by spearheading the migration of 50+ line-of-business data products to the Genesys omnichannel platform with a unified engagement architecture',
        '95% objective delivery rate maintained across Agile Release Train (ART) while scaling cross-functional product teams throughout the enterprise contact center ecosystem using SAFe methodology',
        'Real-time data product architected integrating Genesys, Salesforce, and CGX platforms, enabling semantic search across medical records and claims history for 13M+ members with GDPR/CCPA/NIST compliance'
      ]
    },
    {
      company: 'Global Lending Solutions',
      role: 'Senior Director, Product Management',
      period: 'Mar 2022 – Apr 2023',
      location: 'Greenville, SC',
      achievements: [
        '12% revenue increase ($480M) driven for $4B consumer lending business through a data architecture strategy enabling real-time customer journey analytics for third-party lead generation',
        '$2M annual cost savings delivered by developing and scaling 35 continuously-improved data products, reducing manual processing and improving operational efficiency by 30%',
        '20% customer acquisition time reduction achieved through AI-driven application processing models, accelerating loan origination and improving conversion rates',
        '18% customer loyalty increase enabled through a real-time analytics platform for customer journey mapping, supporting rapid iteration on engagement strategies',
        '90% team retention rate maintained while managing a cross-functional team of engineers, data scientists, and business analysts through a continuous improvement culture and clear product vision',
        'CIAM platform managed, ensuring secure, compliant customer interactions across digital touchpoints, maintaining GDPR/CCPA regulatory requirements'
      ]
    },
    {
      company: 'Thermo Fisher Scientific',
      role: 'Director, Global Product Management',
      period: 'Sep 2013 – Mar 2022',
      location: 'Asheville, NC',
      achievements: [
        '$10M cost savings achieved by leading business strategy separation for Laboratory Products Group (LPG), optimizing implementation and ongoing maintenance architecture',
        '$4B→$18B revenue growth supported through 6 major M&A integrations, developing enterprise data warehouses, enabling a hyper-growth strategy, and seamless business combinations',
        '$11M cost avoidance and $2.4M new revenue generated through a global data harmonization initiative across 3.8M SKUs and 120+ ERP systems leveraging an NLP-powered platform',
        '15% customer retention increase delivered through cloud-based omnichannel engagement architecture while reducing operational costs across commercial operations',
        'Legacy-to-cloud transformation executed, modernizing a 10-year-old data integration architecture into a cloud-native analytics platform leveraging microservices and real-time processing for business users and BI teams',
        'Enterprise data science service built to deliver AI/ML solutions across forecasting, customer analytics, operations research, and digital twin simulations, serving global teams across the US, Canada, and Europe'
      ]
    },
    {
      company: 'Vedicsoft',
      role: 'Consultant, Data & Analytics',
      period: 'Jun 2010 – Sep 2013',
      location: 'Islain, NJ',
      achievements: [
        '25% customer satisfaction increase and 5% acquisition boost achieved through Mortgage Banking Operational Data Store (ODS) design and implementation, providing real-time insights and compliance automation',
        'Fraud detection accuracy improved by leading suspicious activity management initiatives enhancing transaction monitoring frameworks, reducing false positives across $40B+ card volume'
      ]
    },
    {
      company: 'Various Technical & Consulting Roles',
      role: 'Technical & Consulting Roles',
      period: 'Jun 2005 – Sep 2010',
      location: '',
      achievements: [
        'Customer sentiment analysis led to synthesizing J.D. Power survey data, enhancing auto loan product strategies, and improving borrower experience across consumer lending operations'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-white via-blue-50/50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-700 mb-4">
            Professional <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-700 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-primary-500 to-primary-600 hidden md:block"></div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative"
              >
                <div className="hidden md:flex absolute left-6 top-8 w-5 h-5 bg-primary-600 rounded-full border-4 border-surface z-10"></div>

                <div className="md:ml-20">
                  <div className="bg-white backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-primary-500/50 transition-all duration-300">
                    <button
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-primary-50 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-2">
                          <Briefcase className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-primary-700 mb-1">{exp.role}</h3>
                            <div className="text-lg text-primary-600 font-semibold mb-2">{exp.company}</div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-text-secondary">
                              <span>{exp.period}</span>
                              <span className="hidden sm:inline">•</span>
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {expandedIndex === index ? (
                        <ChevronUp className="w-6 h-6 text-text-secondary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-text-secondary flex-shrink-0" />
                      )}
                    </button>

                    {expandedIndex === index && (
                      <div className="px-6 pb-6 border-t border-border">
                        <div className="pt-6 space-y-3">
                          <h4 className="text-lg font-semibold text-primary-700 mb-3">Key Achievements:</h4>
                          <ul className="space-y-3">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-text-secondary">
                                <span className="text-primary-600 mt-1.5 flex-shrink-0">▸</span>
                                <span className="leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
