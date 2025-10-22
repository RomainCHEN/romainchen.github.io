# Romain Chen's Personal Blog

一个现代化的双语（中英文）个人博客，基于 Next.js 构建，部署在 GitHub Pages。

A modern, bilingual (Chinese/English) personal blog built with Next.js and deployed on GitHub Pages.

## 🚀 快速开始 Quick Start

```bash
# 安装依赖 Install dependencies
npm install

# 启动开发服务器 Start dev server
npm run dev

# 打开浏览器访问 Open browser
# http://localhost:3000
```

详细说明请查看 [快速启动指南](./QUICKSTART.md) | See [Quick Start Guide](./QUICKSTART.md)

## Features

- 🌍 **Bilingual Support**: Full Chinese and English language support
- 🌓 **Dark Mode**: Toggle between light and dark themes
- 📝 **Markdown Blog**: Write posts in Markdown/MDX with syntax highlighting
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- 🚀 **Fast Performance**: Static site generation for optimal loading speed
- 🎨 **Modern UI**: Clean and professional design
- 📊 **Reading Stats**: Word count and estimated reading time
- 🔗 **Social Links**: Easy access to GitHub, Email, and Instagram

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

The site is configured to automatically deploy to GitHub Pages. Just push to the main branch.

## Adding Content

### Adding a Blog Post

1. Create a new `.md` or `.mdx` file in `posts/` directory
2. Add frontmatter with metadata:

```markdown
---
title: "Your Post Title"
date: "2025-10-22"
description: "Brief description"
lang: "en"
---

Your content here...
```

3. The post will automatically appear in the blog list

### Adding a Project

Edit the `data/projects.ts` file to add or modify projects.

## Project Structure

```
├── app/              # Next.js app directory
├── components/       # React components
├── posts/           # Blog posts in Markdown
├── public/          # Static assets (images, PDFs)
├── lib/             # Utility functions
├── data/            # Static data files
└── locales/         # Translation files
```

## License

MIT License - feel free to use this template for your own blog!

