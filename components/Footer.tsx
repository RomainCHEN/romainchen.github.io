'use client';

import { FiGithub, FiMail, FiInstagram } from 'react-icons/fi';

interface FooterProps {
  t: any;
}

export default function Footer({ t }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/RoaminCHEN',
      icon: FiGithub,
    },
    {
      name: 'Email',
      url: 'mailto:blog@woiwd.com',
      icon: FiMail,
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/zaaming.can',
      icon: FiInstagram,
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-500 dark:text-gray-500">
            <p>
              © {currentYear} Romain Chen. {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

