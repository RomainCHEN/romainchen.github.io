# 使用指南 / Usage Guide

[中文](#中文) | [English](#english)

---

## 中文

### 快速开始

#### 1. 安装依赖

```bash
npm install
```

#### 2. 启动开发服务器

```bash
npm run dev
```

在浏览器中打开 http://localhost:3000 查看网站。

#### 3. 构建生产版本

```bash
npm run build
```

### 内容管理

#### 添加博客文章

1. 在 `posts/` 目录下创建新的 `.md` 文件
2. 添加文章头部信息（frontmatter）：

```markdown
---
title: "文章标题"
date: "2025-10-22"
description: "文章简介"
lang: "zh"  # 中文文章使用 "zh"，英文文章使用 "en"
---

在这里写你的文章内容...
```

3. 支持的 Markdown 功能：
   - 标题 (H1-H6)
   - 代码块（带语法高亮）
   - 图片
   - 链接
   - 列表
   - 引用
   - 表格
   - 更多...

#### 添加项目

编辑 `data/projects.ts` 文件：

```typescript
{
  id: 'my-project',
  title: {
    en: 'Project Title in English',
    zh: '项目中文标题',
  },
  description: {
    en: 'Description in English',
    zh: '中文描述',
  },
  link: 'https://example.com',
  github: 'https://github.com/username/repo',
  tags: ['React', 'TypeScript', 'Next.js'],
}
```

#### 更新个人信息

1. **社交媒体链接**：
   - 编辑 `components/Navbar.tsx`
   - 编辑 `components/Footer.tsx`
   - 更新 GitHub、Email、Instagram 链接

2. **首页内容**：
   - 编辑 `app/[locale]/page.tsx`
   - 修改个人介绍、标题等

3. **翻译文本**：
   - 编辑 `locales/en.json`（英文）
   - 编辑 `locales/zh.json`（中文）

4. **简历文件**：
   - 替换 `public/resume_en.pdf`（英文简历）
   - 替换 `public/resume_zh.pdf`（中文简历）

5. **头像**：
   - 将你的头像图片放到 `public/` 目录
   - 在 `app/[locale]/page.tsx` 中更新图片引用

### 功能说明

#### 双语支持

- 网站支持中文和英文两种语言
- 通过导航栏右上角的语言切换按钮切换语言
- 每篇博客文章需要指定语言（`lang: "en"` 或 `lang: "zh"`）

#### 深色模式

- 点击导航栏的太阳/月亮图标切换主题
- 主题设置会保存在本地存储中
- 自动检测系统主题偏好

#### 代码高亮

支持多种编程语言的语法高亮：

\`\`\`python
def hello():
    print("Hello, World!")
\`\`\`

\`\`\`javascript
function hello() {
  console.log("Hello, World!");
}
\`\`\`

#### 嵌入视频

##### Bilibili 视频

```html
<div class="video-container">
  <iframe src="https://player.bilibili.com/player.html?bvid=BV号" 
          frameborder="0" 
          allowfullscreen>
  </iframe>
</div>
```

##### YouTube 视频

```html
<div class="video-container">
  <iframe src="https://www.youtube.com/embed/视频ID" 
          frameborder="0" 
          allowfullscreen>
  </iframe>
</div>
```

### 项目结构

```
romainchen.github.io/
├── app/                    # Next.js App Router 页面
│   ├── [locale]/          # 语言路由
│   │   ├── blog/         # 博客页面
│   │   ├── projects/     # 项目页面
│   │   └── page.tsx      # 首页
│   ├── layout.tsx        # 根布局
│   └── globals.css       # 全局样式
├── components/            # React 组件
│   ├── Navbar.tsx        # 导航栏
│   ├── Footer.tsx        # 页脚
│   └── TableOfContents.tsx  # 目录
├── posts/                # 博客文章（Markdown）
├── public/               # 静态资源
│   ├── resume_en.pdf     # 英文简历
│   └── resume_zh.pdf     # 中文简历
├── lib/                  # 工具函数
│   ├── i18n.ts          # 国际化
│   ├── theme.ts         # 主题管理
│   └── posts.ts         # 文章处理
├── data/                 # 数据文件
│   └── projects.ts      # 项目数据
├── locales/             # 翻译文件
│   ├── en.json          # 英文翻译
│   └── zh.json          # 中文翻译
└── .github/             # GitHub Actions
    └── workflows/
        └── deploy.yml   # 部署配置
```

### 部署

详细的部署指南请查看 [DEPLOYMENT.md](./DEPLOYMENT.md)。

---

## English

### Quick Start

#### 1. Install Dependencies

```bash
npm install
```

#### 2. Start Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser to view the site.

#### 3. Build for Production

```bash
npm run build
```

### Content Management

#### Add a Blog Post

1. Create a new `.md` file in the `posts/` directory
2. Add frontmatter:

```markdown
---
title: "Your Post Title"
date: "2025-10-22"
description: "Post description"
lang: "en"  # Use "en" for English, "zh" for Chinese
---

Write your content here...
```

3. Supported Markdown features:
   - Headings (H1-H6)
   - Code blocks (with syntax highlighting)
   - Images
   - Links
   - Lists
   - Blockquotes
   - Tables
   - And more...

#### Add a Project

Edit the `data/projects.ts` file:

```typescript
{
  id: 'my-project',
  title: {
    en: 'Project Title in English',
    zh: '项目中文标题',
  },
  description: {
    en: 'Description in English',
    zh: '中文描述',
  },
  link: 'https://example.com',
  github: 'https://github.com/username/repo',
  tags: ['React', 'TypeScript', 'Next.js'],
}
```

#### Update Personal Information

1. **Social Media Links**:
   - Edit `components/Navbar.tsx`
   - Edit `components/Footer.tsx`
   - Update GitHub, Email, Instagram links

2. **Homepage Content**:
   - Edit `app/[locale]/page.tsx`
   - Modify personal introduction, title, etc.

3. **Translation Text**:
   - Edit `locales/en.json` (English)
   - Edit `locales/zh.json` (Chinese)

4. **Resume Files**:
   - Replace `public/resume_en.pdf` (English resume)
   - Replace `public/resume_zh.pdf` (Chinese resume)

5. **Avatar**:
   - Place your avatar image in the `public/` directory
   - Update the image reference in `app/[locale]/page.tsx`

### Features

#### Bilingual Support

- Site supports Chinese and English
- Switch languages using the button in the top-right corner
- Each blog post must specify a language (`lang: "en"` or `lang: "zh"`)

#### Dark Mode

- Click the sun/moon icon in the navbar to toggle theme
- Theme preference is saved in local storage
- Automatically detects system theme preference

#### Code Highlighting

Supports syntax highlighting for multiple programming languages:

\`\`\`python
def hello():
    print("Hello, World!")
\`\`\`

\`\`\`javascript
function hello() {
  console.log("Hello, World!");
}
\`\`\`

#### Embed Videos

##### Bilibili Videos

```html
<div class="video-container">
  <iframe src="https://player.bilibili.com/player.html?bvid=BV_ID" 
          frameborder="0" 
          allowfullscreen>
  </iframe>
</div>
```

##### YouTube Videos

```html
<div class="video-container">
  <iframe src="https://www.youtube.com/embed/VIDEO_ID" 
          frameborder="0" 
          allowfullscreen>
  </iframe>
</div>
```

### Project Structure

```
romainchen.github.io/
├── app/                    # Next.js App Router pages
│   ├── [locale]/          # Language routes
│   │   ├── blog/         # Blog pages
│   │   ├── projects/     # Projects page
│   │   └── page.tsx      # Homepage
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/            # React components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Footer
│   └── TableOfContents.tsx  # Table of contents
├── posts/                # Blog posts (Markdown)
├── public/               # Static assets
│   ├── resume_en.pdf     # English resume
│   └── resume_zh.pdf     # Chinese resume
├── lib/                  # Utility functions
│   ├── i18n.ts          # Internationalization
│   ├── theme.ts         # Theme management
│   └── posts.ts         # Post processing
├── data/                 # Data files
│   └── projects.ts      # Projects data
├── locales/             # Translation files
│   ├── en.json          # English translations
│   └── zh.json          # Chinese translations
└── .github/             # GitHub Actions
    └── workflows/
        └── deploy.yml   # Deployment config
```

### Deployment

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

