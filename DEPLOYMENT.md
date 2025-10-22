# Deployment Guide

This guide will help you deploy your blog to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Node.js 18+ installed locally

## Setup Steps

### 1. Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `romainchen.github.io` (or `yourusername.github.io`)
3. Set as **Public**
4. **Do not** initialize with README, .gitignore, or license

### 3. Push to GitHub

```bash
git remote add origin https://github.com/romainchen/romainchen.github.io.git
git branch -M main
git push -u origin main
```

### 4. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**

### 5. Deploy

The site will automatically deploy when you push to the `main` branch. The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:

1. Install dependencies
2. Build the Next.js site
3. Deploy to GitHub Pages

### 6. Access Your Site

After deployment (usually 2-3 minutes), your site will be available at:
- `https://romainchen.github.io/` (if repository name is `romainchen.github.io`)
- `https://yourusername.github.io/repository-name/` (for other repository names)

## Local Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 to view your site.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `out` directory.

## Updating Content

### Add a New Blog Post

1. Create a new `.md` file in the `posts/` directory
2. Add frontmatter:

```markdown
---
title: "Your Post Title"
date: "2025-10-22"
description: "Post description"
lang: "en"  # or "zh"
---

Your content here...
```

3. Commit and push:

```bash
git add posts/your-new-post.md
git commit -m "Add new blog post"
git push
```

The site will automatically rebuild and redeploy.

### Update Projects

Edit `data/projects.ts` and push the changes.

### Update Personal Information

- **Social links**: Edit `components/Navbar.tsx` and `components/Footer.tsx`
- **Homepage content**: Edit `app/[locale]/page.tsx`
- **Translations**: Edit `locales/en.json` and `locales/zh.json`
- **Resumes**: Replace `public/resume_en.pdf` and `public/resume_zh.pdf`
- **Avatar**: Add your image to `public/` and update `app/[locale]/page.tsx`

## Troubleshooting

### Build Fails

Check the Actions tab on GitHub to see the error logs.

### Site Not Updating

1. Wait a few minutes for the deployment to complete
2. Clear your browser cache
3. Check if the Actions workflow completed successfully

### 404 Error

Make sure:
- The repository name is correct (e.g., `username.github.io`)
- GitHub Pages is enabled in repository settings
- The deployment workflow completed successfully

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public/` directory with your domain
2. Configure DNS settings with your domain provider
3. Enable custom domain in GitHub Pages settings

## Support

For issues or questions:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
- Open an issue in your repository

Happy blogging! 🎉

