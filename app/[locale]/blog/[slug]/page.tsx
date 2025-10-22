import { getTranslations, type Locale } from '@/lib/i18n';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import { FiClock, FiFileText, FiCalendar, FiArrowLeft } from 'react-icons/fi';
import TableOfContents from '@/components/TableOfContents';
import Link from 'next/link';
import type { Metadata } from 'next';
import 'highlight.js/styles/github-dark.css';

export async function generateStaticParams() {
  const enPosts = getAllPosts('en');
  const zhPosts = getAllPosts('zh');
  
  return [
    ...enPosts.map((post) => ({ locale: 'en', slug: post.slug })),
    ...zhPosts.map((post) => ({ locale: 'zh', slug: post.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale; slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  return {
    title: `${post.title} - Romain Chen`,
    description: post.description,
    keywords: [post.title, 'blog', 'Romain Chen'],
    authors: [{ name: 'Romain Chen' }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      locale: params.locale === 'zh' ? 'zh_CN' : 'en_US',
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { locale: Locale; slug: string };
}) {
  const t = getTranslations(params.locale);
  const post = getPostBySlug(params.slug);

  if (!post || post.lang !== params.locale) {
    notFound();
  }

  return (
    <div className="relative py-12">
      {/* Main Content - Always Centered */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href={`/${params.locale}/blog`}
          className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors"
        >
          <FiArrowLeft className="w-5 h-5" />
          {t.blog.allPosts}
        </Link>

        {/* Header */}
        <header className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {post.title}
            </h1>

            {post.description && (
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                {post.description}
              </p>
            )}

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <FiCalendar className="w-4 h-4" />
                <time>
                  {new Date(post.date).toLocaleDateString(
                    params.locale === 'zh' ? 'zh-CN' : 'en-US',
                    {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    }
                  )}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <FiClock className="w-4 h-4" />
                <span>
                  {post.readingTime} {t.blog.readTime}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FiFileText className="w-4 h-4" />
                <span>
                  {post.wordCount} {t.blog.words}
                </span>
              </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  rehypeSlug,
                  [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                  rehypeHighlight as any,
                ],
              },
            }}
          />
        </article>
      </div>

      {/* Table of Contents - Absolutely positioned on the left */}
      <aside className="hidden xl:block fixed top-32 left-8 w-64">
        <TableOfContents />
      </aside>
    </div>
  );
}

