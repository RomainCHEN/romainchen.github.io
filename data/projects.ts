export interface Project {
  id: string;
  title: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  link?: string;
  github?: string;
  tags: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'personal-blog',
    title: {
      en: 'Personal Blog & Portfolio',
      zh: '个人博客与作品集',
    },
    description: {
      en: 'A modern bilingual blog built with Next.js, featuring technical articles, project showcases, and dark mode support. Deployed on GitHub Pages.',
      zh: '使用 Next.js 构建的现代化双语博客，包含技术文章、项目展示和深色模式支持。部署在 GitHub Pages 上。',
    },
    link: 'https://romainchen.github.io',
    github: 'https://github.com/RomainCHEN/romainchen.github.io',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX'],
  },
  {
    id: 'tech-research',
    title: {
      en: 'Technology Research',
      zh: '技术研究',
    },
    description: {
      en: 'Research and exploration in web development, covering topics like React Hooks, Next.js best practices, and modern frontend architecture.',
      zh: 'Web 开发领域的研究与探索，涵盖 React Hooks、Next.js 最佳实践以及现代前端架构等主题。',
    },
    link: 'https://romainchen.github.io/en/blog',
    tags: ['React', 'JavaScript', 'Web Development'],
  },
];

