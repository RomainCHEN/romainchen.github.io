import { getTranslations, type Locale } from '@/lib/i18n';
import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';
import { FiClock, FiFileText } from 'react-icons/fi';

export default function BlogPage({ params }: { params: { locale: Locale } }) {
  const t = getTranslations(params.locale);
  const posts = getAllPosts(params.locale);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t.blog.title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {t.blog.subtitle}
        </p>
      </div>

      {/* Posts List */}
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">{t.blog.noPosts}</p>
        </div>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all hover:shadow-md"
            >
              <Link href={`/${params.locale}/blog/${post.slug}`}>
                <div className="flex flex-col gap-3">
                  {/* Date */}
                  <time className="text-sm text-gray-500 dark:text-gray-500">
                    {new Date(post.date).toLocaleDateString(
                      params.locale === 'zh' ? 'zh-CN' : 'en-US',
                      {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }
                    )}
                  </time>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">
                    {post.title}
                  </h2>

                  {/* Description */}
                  {post.description && (
                    <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                      {post.description}
                    </p>
                  )}

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                    <div className="flex items-center gap-1">
                      <FiClock className="w-4 h-4" />
                      <span>
                        {post.readingTime} {t.blog.readTime}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiFileText className="w-4 h-4" />
                      <span>
                        {post.wordCount} {t.blog.words}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

