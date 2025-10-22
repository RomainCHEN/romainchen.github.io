# 快速启动指南 / Quick Start Guide

## 🚀 快速开始（仅需 3 步）

### 1️⃣ 安装依赖
```bash
npm install
```

### 2️⃣ 启动开发服务器
```bash
npm run dev
```

### 3️⃣ 打开浏览器
访问 http://localhost:3000

---

## ✨ 你会看到什么

- 🏠 **主页**: 个人介绍和导航
- 📝 **博客**: 4 篇示例文章（2篇英文 + 2篇中文）
- 💼 **项目**: 项目展示页面
- 🌓 **深色模式**: 点击顶部的太阳/月亮图标切换
- 🌍 **语言切换**: 点击顶部的 "中文/EN" 按钮切换语言

---

## 📝 快速添加内容

### 添加新博客文章

在 `posts/` 目录创建 `.md` 文件：

```markdown
---
title: "我的新文章"
date: "2025-10-23"
description: "文章简介"
lang: "zh"
---

# 文章内容

这是我的新文章...
```

保存后刷新浏览器即可看到！

### 修改个人信息

1. **社交链接**: 编辑 `components/Footer.tsx` 和 `app/[locale]/page.tsx`
2. **简历**: 替换 `public/resume_en.pdf` 和 `public/resume_zh.pdf`
3. **项目**: 编辑 `data/projects.ts`

---

## 🐛 遇到问题？

### 端口被占用
```bash
# 使用其他端口
npm run dev -- -p 3001
```

### 安装失败
```bash
# 清理缓存重试
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### 页面空白
1. 检查浏览器控制台是否有错误
2. 确保 Node.js 版本 >= 18
3. 重启开发服务器

---

## 📚 更多文档

- [完整使用指南](./USAGE.md)
- [部署指南](./DEPLOYMENT.md)
- [README](./README.md)

---

## 💡 提示

- 开发服务器支持热重载，修改文件后自动刷新
- 按 `Ctrl + C` 停止开发服务器
- 构建生产版本: `npm run build`

开始创作吧！🎉

