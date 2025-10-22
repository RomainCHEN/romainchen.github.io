# 🔍 检查 GitHub Actions 错误

## 查看详细错误日志

请按照以下步骤查看具体错误：

### 1. 访问 Actions 页面
https://github.com/RoaminCHEN/romainchen.github.io/actions

### 2. 点击最新失败的工作流
找到最新的红色 X 标记的工作流，点击它

### 3. 查看错误详情
1. 点击左侧的 "build" 或 "deploy" 任务
2. 展开失败的步骤（会有红色 X 标记）
3. 查看完整的错误信息

### 4. 复制错误信息
将完整的错误日志复制给我，这样我可以准确诊断问题

---

## 常见问题快速修复

### 如果看到 "Update page.tsx" 失败
这个提交可能在网页上编辑时出错了。请告诉我具体的错误信息。

### 如果看到类型错误
访问并编辑：
https://github.com/RoaminCHEN/romainchen.github.io/edit/main/app/[locale]/blog/[slug]/page.tsx

确保第 130 行是：
```typescript
rehypeHighlight as any,
```

### 如果看到 Node 版本错误
可能需要更新 `.github/workflows/deploy.yml`

---

## 💡 提示

从截图看：
- ✅ "Fix: Resolve rehype-highlight type compatibility issue" (252c3f9) 显示为 **Verified**
- ❌ "Update page.tsx" 和 "Merge branch 'main'" 失败

这表明可能有多个问题需要修复。

请访问 Actions 页面查看最新的错误日志！

