---
title: "Getting Started with Next.js 14"
date: "2025-10-20"
description: "A comprehensive guide to building modern web applications with Next.js 14 and the App Router."
lang: "en"
---

## Introduction to Next.js 14

Next.js 14 is a powerful React framework that makes building modern web applications a breeze. In this tutorial, we'll explore its key features and build a simple application.

### Why Next.js?

Next.js offers several advantages:

- **Server-Side Rendering (SSR)**: Improved SEO and performance
- **Static Site Generation (SSG)**: Lightning-fast page loads
- **File-based Routing**: Intuitive and easy to manage
- **API Routes**: Build your backend in the same project
- **Image Optimization**: Automatic image optimization

## Setting Up Your Project

First, create a new Next.js project:

```bash
npx create-next-app@latest my-app
cd my-app
npm run dev
```

### Project Structure

The new App Router uses a different structure:

```
app/
├── layout.tsx
├── page.tsx
└── blog/
    ├── page.tsx
    └── [slug]/
        └── page.tsx
```

## Key Features

### Server Components

By default, all components in the `app` directory are Server Components:

```tsx
// app/page.tsx
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Next.js 14</h1>
      <p>This is a Server Component!</p>
    </div>
  );
}
```

### Client Components

Use `'use client'` for interactive components:

```tsx
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

### Data Fetching

Fetch data directly in Server Components:

```tsx
async function getData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function Page() {
  const data = await getData();
  
  return <div>{/* Render data */}</div>;
}
```

## Routing

### Dynamic Routes

Create dynamic routes with brackets:

```tsx
// app/blog/[slug]/page.tsx
export default function BlogPost({ 
  params 
}: { 
  params: { slug: string } 
}) {
  return <h1>Post: {params.slug}</h1>;
}
```

### Layouts

Shared layouts wrap multiple pages:

```tsx
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>{/* Navigation */}</nav>
        {children}
        <footer>{/* Footer */}</footer>
      </body>
    </html>
  );
}
```

## Styling

Next.js supports various styling methods:

### Tailwind CSS

```tsx
<div className="flex items-center justify-center min-h-screen bg-gray-100">
  <h1 className="text-4xl font-bold text-blue-600">
    Hello Tailwind!
  </h1>
</div>
```

### CSS Modules

```tsx
import styles from './page.module.css';

export default function Page() {
  return <div className={styles.container}>Content</div>;
}
```

## Deployment

Deploy to Vercel with one command:

```bash
npm run build
vercel deploy
```

Or export as a static site:

```bash
npm run build
```

## Conclusion

Next.js 14 brings powerful features that make web development more efficient and enjoyable. The App Router, Server Components, and improved performance make it an excellent choice for modern web applications.

Happy coding! 🚀

