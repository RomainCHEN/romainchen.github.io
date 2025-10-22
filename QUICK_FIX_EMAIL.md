# ⚡ 快速修复邮箱格式问题

## 🎯 核心问题

您 fork 的 is-a-dev/register 仓库中的 `domains/romain.json` 文件，邮箱格式错误。

## 🔧 快速修复（3 步完成）

### 1️⃣ 访问文件
直接点击：https://github.com/RomainCHEN/register/edit/main/domains/romain.json

### 2️⃣ 修改邮箱
找到这一行：
```json
"email": "[romain.c@foxmail.com]"
```

改为（去掉方括号）：
```json
"email": "romain.c@foxmail.com"
```

### 3️⃣ 提交
- Commit message: `Fix: Remove brackets from email`
- 点击 **"Commit changes"**

---

## ✅ 完成后

修改会自动更新到您的 PR (#28452)，然后：

1. 在 PR 中留言告知已修复
2. 等待审核人员重新检查
3. PR 通过后即可使用 romain.is-a.dev 域名

就这么简单！🎉

