import { getTranslations, type Locale } from '@/lib/i18n';
import { projects } from '@/data/projects';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function ProjectsPage({ params }: { params: { locale: Locale } }) {
  const t = getTranslations(params.locale);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t.projects.title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {t.projects.subtitle}
        </p>
      </div>

      {/* Projects Grid */}
      {projects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">{t.projects.noProjects}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all hover:shadow-md"
            >
              {/* Project Image Placeholder */}
              {project.image && (
                <div className="w-full h-48 bg-gray-100 dark:bg-gray-800 rounded-lg mb-4" />
              )}

              {/* Title */}
              <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white transition-colors">
                {project.title[params.locale]}
              </h2>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description[params.locale]}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    {t.projects.viewProject}
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <FiGithub className="w-4 h-4" />
                    {t.projects.sourceCode}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

