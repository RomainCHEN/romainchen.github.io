import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  lang: 'en' | 'zh';
  readingTime: string;
  wordCount: number;
}

export interface Post extends PostMeta {
  content: string;
}

export function getAllPosts(locale?: 'en' | 'zh'): PostMeta[] {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPosts = fileNames
      .filter((fileName: string) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
      .map((fileName: string) => {
        const slug = fileName.replace(/\.(md|mdx)$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        const stats = readingTime(content);

        return {
          slug,
          title: data.title || slug,
          date: data.date || '',
          description: data.description || '',
          lang: data.lang || 'en',
          readingTime: Math.ceil(stats.minutes).toString(),
          wordCount: stats.words,
        } as PostMeta;
      })
      .filter((post: PostMeta) => !locale || post.lang === locale)
      .sort((a: PostMeta, b: PostMeta) => (a.date > b.date ? -1 : 1));

    return allPosts;
  } catch (error) {
    console.error('Error reading posts:', error);
    return [];
  }
}

export function getPostBySlug(slug: string): Post | null {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return null;
    }

    const mdPath = path.join(postsDirectory, `${slug}.md`);
    const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
    
    let fullPath: string;
    if (fs.existsSync(mdxPath)) {
      fullPath = mdxPath;
    } else if (fs.existsSync(mdPath)) {
      fullPath = mdPath;
    } else {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      description: data.description || '',
      lang: data.lang || 'en',
      content,
      readingTime: Math.ceil(stats.minutes).toString(),
      wordCount: stats.words,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

