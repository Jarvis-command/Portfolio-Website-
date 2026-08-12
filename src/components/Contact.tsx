import { useState } from 'react';
import { Linkedin, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          message: formData.message,
          to_email: 'gowthamchila@gmail.com' // Your email address
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', company: '', message: '' });
      }, 3000);
    } catch (error) {
      console.error('Email send failed:', error);
      alert('Failed to send message. Please try again or contact me directly via LinkedIn.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white via-blue-50/50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-700 mb-4">
            Get In <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-700 mx-auto rounded-full"></div>
          <p className="text-text-secondary mt-6 text-lg">Open VP Product roles + linkedin.com/in/gchil</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white backdrop-blur-sm border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary-700 mb-4">Why Connect?</h3>
              <ul className="space-y-4 text-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>Strategic AI product leadership for enterprise transformation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>Proven track record with Fortune 100 companies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>Deep expertise in Healthcare, Fintech, and Life Sciences</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>Demonstrated $100M+ value delivery capability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>P-RAG patent holder and Forbes contributor</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <a
                href="https://www.linkedin.com/in/gchil"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-text-secondary">LinkedIn</div>
                  <div className="text-primary-700 font-semibold">linkedin.com/in/gchil</div>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white backdrop-blur-sm border border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold text-primary-700 mb-6">Send a Message</h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-16 h-16 text-success mb-4" />
                <h4 className="text-xl font-semibold text-primary-700 mb-2">Message Sent!</h4>
                <p className="text-text-secondary">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-primary-700 placeholder-text-secondary focus:outline-none focus:border-primary-600 transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-primary-700 placeholder-text-secondary focus:outline-none focus:border-primary-600 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-text-secondary mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-primary-700 placeholder-text-secondary focus:outline-none focus:border-primary-600 transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-primary-700 placeholder-text-secondary focus:outline-none focus:border-primary-600 transition-colors resize-none"
                    placeholder="Tell me about the opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
