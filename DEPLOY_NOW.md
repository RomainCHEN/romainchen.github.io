# 🚀 立即部署指南

## ✅ 已完成的准备工作

您的代码已经完全准备好，并且已经提交到本地 Git 仓库：
- ✅ 所有文件已添加
- ✅ 本地提交已完成（Commit ID: 94300ef）
- ✅ 分支设置为 main
- ✅ 远程仓库已配置

---

## 📤 第一步：推送代码到 GitHub

### 方法 1：使用命令行（推荐）

在项目目录打开终端，执行：

```bash
git push -u origin main
```

如果遇到网络问题，可以稍等几分钟后重试。

### 方法 2：使用 GitHub Desktop（如果命令行有问题）

1. 打开 GitHub Desktop
2. 添加现有仓库：File → Add Local Repository
3. 选择项目目录：`C:\Users\ASUS\Documents\GitHub\romainchen.github.io`
4. 点击 "Publish repository" 按钮
5. 确保仓库名为 `romainchen.github.io`
6. 点击发布

### 方法 3：手动上传（最简单但较慢）

1. 访问 https://github.com/new
2. 仓库名：`romainchen.github.io`
3. 设置为 Public（公开）
4. **不要**勾选 "Add a README file"
5. 创建仓库
6. 在新页面选择 "uploading an existing file"
7. 拖拽整个项目文件夹的所有内容上传

---

## ⚙️ 第二步：配置 GitHub Pages

推送成功后：

1. 访问仓库：https://github.com/RoaminCHEN/romainchen.github.io

2. 点击 **Settings** (设置)

3. 在左侧菜单找到 **Pages**

4. 在 **Source** 部分：
   - 选择 **GitHub Actions**
   
5. 等待 2-3 分钟，GitHub Actions 会自动部署

6. 部署完成后访问：https://romainchen.github.io

---

## 🌐 第三步：申请 romain.is-a.dev 域名

### 3.1 确认网站已部署

先确保 https://romainchen.github.io 可以正常访问。

### 3.2 Fork is-a.dev 注册仓库

1. 访问：https://github.com/is-a-dev/register
2. 点击右上角的 **Fork** 按钮

### 3.3 创建域名申请文件

在您 fork 的仓库中：

1. 点击 `domains` 文件夹
2. 点击 **Add file** → **Create new file**
3. 文件名输入：`romain.json`
4. 文件内容复制以下内容：

```json
{
    "owner": {
        "username": "RoaminCHEN",
        "email": "blog@woiwd.com"
    },
    "records": {
        "CNAME": "romainchen.github.io"
    }
}
```

5. 在底部 Commit message 输入：`Add romain.is-a.dev domain`
6. 点击 **Commit new file**

### 3.4 提交 Pull Request

1. 在您的 fork 页面，点击 **Contribute** → **Open pull request**
2. PR 标题：`Add romain.is-a.dev`
3. PR 描述：
```
## Domain Information
- Domain: romain.is-a.dev
- Target: romainchen.github.io
- Purpose: Personal blog and portfolio website

I have read and agree to the is-a.dev policies.
```
4. 点击 **Create pull request**

### 3.5 等待审核

- 通常 1-3 天内会有回复
- 审核通过后 PR 会被合并

---

## 🔧 第四步：配置自定义域名（PR 合并后）

**⚠️ 重要：只在 is-a.dev 的 PR 被合并后执行！**

1. 访问：https://github.com/RoaminCHEN/romainchen.github.io/settings/pages

2. 在 **Custom domain** 字段输入：`romain.is-a.dev`

3. 点击 **Save**

4. 稍等片刻后，勾选 **Enforce HTTPS**

5. 等待 DNS 生效（最多 24 小时）

6. 完成！访问：https://romain.is-a.dev

---

## 📋 快速检查清单

### 立即执行：
- [ ] 推送代码到 GitHub（`git push -u origin main`）
- [ ] 在 GitHub 仓库中配置 Pages（选择 GitHub Actions）
- [ ] 确认网站可通过 https://romainchen.github.io 访问

### 申请域名：
- [ ] Fork is-a-dev/register 仓库
- [ ] 创建 `domains/romain.json` 文件
- [ ] 提交 Pull Request
- [ ] 等待 PR 合并

### PR 合并后：
- [ ] 在 GitHub Pages 设置中添加自定义域名 `romain.is-a.dev`
- [ ] 启用 HTTPS
- [ ] 等待 DNS 生效
- [ ] 访问 https://romain.is-a.dev

---

## 💡 重要提示

1. **仓库必须是公开的 (Public)** 才能使用 GitHub Pages
2. **仓库名必须是** `romainchen.github.io` 或 `RoaminCHEN.github.io`
3. **只在 PR 合并后** 才在 GitHub Pages 设置自定义域名
4. 已为您准备好的文件：
   - ✅ `public/CNAME` - 自定义域名配置
   - ✅ `IS-A-DEV-DOMAIN-REQUEST.json` - 域名申请模板
   - ✅ `.github/workflows/deploy.yml` - 自动部署配置

---

## 🆘 遇到问题？

### 推送失败
```bash
# 检查远程仓库
git remote -v

# 如果 URL 不对，更新它
git remote set-url origin https://github.com/RoaminCHEN/romainchen.github.io.git

# 重新推送
git push -u origin main
```

### GitHub Pages 404 错误
- 等待 3-5 分钟让部署完成
- 检查 Actions 选项卡查看部署状态
- 确认仓库是公开的

### is-a.dev 域名不工作
- 确认 PR 已经被合并（检查 PR 状态）
- 确认已在 GitHub Pages 设置中添加自定义域名
- 等待 DNS 传播（最多 24 小时）
- 清除浏览器缓存

---

## 📞 支持资源

- **GitHub Pages 文档**: https://docs.github.com/en/pages
- **is-a.dev 文档**: https://docs.is-a.dev/
- **您的仓库**: https://github.com/RoaminCHEN/romainchen.github.io
- **is-a.dev 注册**: https://github.com/is-a-dev/register

---

## ✨ 预期结果

完成所有步骤后，您的博客将可以通过以下地址访问：

- **GitHub Pages**: https://romainchen.github.io ⚡
- **自定义域名**: https://romain.is-a.dev 🌐

祝您部署顺利！🎉

