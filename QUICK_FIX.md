# 🔧 快速修复 - 在 GitHub 网页直接修改

## 问题
Action 构建失败，错误在 `app/[locale]/blog/[slug]/page.tsx` 第 130 行

## ✅ 解决方案（3 步完成）

### 第 1 步：打开文件
访问此链接：
https://github.com/RoaminCHEN/romainchen.github.io/blob/main/app/%5Blocale%5D/blog/%5Bslug%5D/page.tsx

### 第 2 步：编辑文件
1. 点击右上角的 **铅笔图标** ✏️ (Edit this file)
2. 找到第 **130 行**（可以用 Ctrl+F 搜索 `rehypeHighlight,`）
3. 将这一行：
   ```typescript
   rehypeHighlight,
   ```
   改为：
   ```typescript
   rehypeHighlight as any,
   ```
   （就是在后面添加 ` as any`）

### 第 3 步：提交修改
1. 滚动到页面底部
2. 在 "Commit message" 填写：`Fix: Resolve type compatibility issue`
3. 点击绿色的 **"Commit changes"** 按钮

## 🎯 完成！

修改后 GitHub Actions 会自动重新运行，大约 2-5 分钟后：
1. 访问：https://github.com/RoaminCHEN/romainchen.github.io/actions
2. 查看最新的工作流（应该会显示绿色对勾 ✅）
3. 访问：https://romainchen.github.io
4. 您的网站应该正常显示了！

---

## 📋 修改前后对比

**修改前（错误）：**
```typescript
rehypePlugins: [
  rehypeSlug,
  [rehypeAutolinkHeadings, { behavior: 'wrap' }],
  rehypeHighlight,  // ❌ 这行有问题
],
```

**修改后（正确）：**
```typescript
rehypePlugins: [
  rehypeSlug,
  [rehypeAutolinkHeadings, { behavior: 'wrap' }],
  rehypeHighlight as any,  // ✅ 添加了 as any
],
```

就这一个小改动！

