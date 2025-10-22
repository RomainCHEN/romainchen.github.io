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
    id: 'project-1',
    title: {
      en: 'Sample Project 1',
      zh: '示例项目 1',
    },
    description: {
      en: 'This is a sample project demonstrating the project showcase feature. Replace this with your actual projects.',
      zh: '这是一个展示项目功能的示例项目。请用您的实际项目替换此内容。',
    },
    github: 'https://github.com/yourusername/project1',
    tags: ['React', 'TypeScript', 'Next.js'],
  },
  {
    id: 'project-2',
    title: {
      en: 'Sample Project 2',
      zh: '示例项目 2',
    },
    description: {
      en: 'Another sample project showcasing different technologies. Add your own projects here.',
      zh: '另一个展示不同技术的示例项目。在此处添加您自己的项目。',
    },
    link: 'https://example.com',
    github: 'https://github.com/yourusername/project2',
    tags: ['Python', 'Machine Learning', 'Data Science'],
  },
];

