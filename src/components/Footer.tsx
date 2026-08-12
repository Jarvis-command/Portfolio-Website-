import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-text-secondary">
            <span>© 2026 Gowtham Chilakapati. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 text-text-secondary">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-primary-600 fill-primary-600" />
            <span>for innovation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
