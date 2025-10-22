import { getTranslations, type Locale } from '@/lib/i18n';
import Link from 'next/link';
import Image from 'next/image';
import { FiGithub, FiMail, FiInstagram, FiArrowRight } from 'react-icons/fi';

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const t = getTranslations(params.locale);

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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div className="flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-8 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700">
          <Image
            src="/avatar.jpg"
            alt="Romain Chen"
            width={160}
            height={160}
            className="w-full h-full object-cover object-[center_20%]"
            priority
          />
        </div>

        {/* Introduction */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
          {t.home.greeting}{' '}
          <span className="text-gray-900 dark:text-white">
            {t.home.name}
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-6">
          {t.home.title}
        </p>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-8">
          {t.home.description}
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-6 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
              aria-label={link.name}
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={`/${params.locale}/blog`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-gray-900 rounded-lg font-medium transition-colors"
          >
            {t.home.viewBlog}
            <FiArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href={`/${params.locale}/projects`}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 rounded-lg font-medium transition-colors"
          >
            {t.home.viewProjects}
            <FiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

