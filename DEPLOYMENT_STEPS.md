# 🚀 部署到 GitHub Pages 和申请 is-a.dev 域名

## 第一步：部署到 GitHub Pages

### 1. 初始化 Git 仓库并推送代码

在项目根目录执行以下命令：

```bash
# 初始化 Git 仓库（如果还没初始化）
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Personal blog website"

# 添加远程仓库（确保仓库名为 romainchen.github.io）
git remote add origin https://github.com/RoaminCHEN/romainchen.github.io.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 2. 配置 GitHub Pages

1. 访问您的 GitHub 仓库：https://github.com/RoaminCHEN/romainchen.github.io
2. 点击 **Settings** (设置)
3. 在左侧菜单找到 **Pages**
4. 在 **Source** 下选择 **GitHub Actions**
5. 保存设置

### 3. 等待部署完成

- GitHub Actions 会自动运行（配置文件在 `.github/workflows/deploy.yml`）
- 大约 2-3 分钟后，网站会部署完成
- 访问：https://romainchen.github.io

---

## 第二步：申请 romain.is-a.dev 域名

### 1. 确认 GitHub Pages 已成功部署

访问 https://romainchen.github.io 确保网站正常显示。

### 2. Fork is-a.dev 仓库

1. 访问：https://github.com/is-a-dev/register
2. 点击右上角的 **Fork** 按钮，将仓库 fork 到您的 GitHub 账户

### 3. 在您 fork 的仓库中创建域名申请文件

在 fork 的仓库中：

1. 进入 `domains` 目录
2. 创建新文件：`domains/romain.json`
3. 复制以下内容到文件中：

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

4. 提交文件（Commit 信息：`Add romain.is-a.dev domain`）

### 4. 创建 Pull Request

1. 在您的 fork 仓库页面，点击 **Contribute** → **Open pull request**
2. 填写 PR 标题：`Add romain.is-a.dev`
3. 填写 PR 描述：
   ```
   ## Domain Information
   - Domain: romain.is-a.dev
   - Target: romainchen.github.io
   - Purpose: Personal blog and portfolio website
   
   I have read and agree to the is-a.dev policies.
   ```
4. 点击 **Create pull request**

### 5. 等待 PR 审核和合并

- is-a.dev 团队会审核您的 PR（通常 1-3 天）
- 审核通过后会合并您的 PR
- **注意：只有在 PR 合并后才能进行下一步！**

---

## 第三步：配置自定义域名（PR 合并后）

### 1. 在 GitHub Pages 中添加自定义域名

**重要：只在 PR 被合并后执行此步骤！**

1. 访问您的 GitHub 仓库：https://github.com/RoaminCHEN/romainchen.github.io
2. 进入 **Settings** → **Pages**
3. 在 **Custom domain** 字段中输入：`romain.is-a.dev`
4. 点击 **Save**
5. 勾选下方的 **Enforce HTTPS** 复选框

### 2. 等待 DNS 生效

- DNS 可能需要几分钟到 24 小时生效
- 完成后访问：https://romain.is-a.dev

---

## 📋 检查清单

### GitHub Pages 部署
- [ ] 代码已推送到 GitHub
- [ ] GitHub Actions 工作流运行成功
- [ ] 网站可以通过 https://romainchen.github.io 访问

### is-a.dev 域名申请
- [ ] 已 fork is-a-dev/register 仓库
- [ ] 已创建 `domains/romain.json` 文件
- [ ] 已提交 Pull Request
- [ ] PR 已被合并（等待审核）
- [ ] 已在 GitHub Pages 设置中添加自定义域名
- [ ] 已启用 HTTPS
- [ ] 网站可以通过 https://romain.is-a.dev 访问

---

## 🔧 故障排除

### GitHub Pages 404 错误
- 确保 `.github/workflows/deploy.yml` 配置正确
- 检查 Actions 选项卡是否有错误
- 等待几分钟让部署完成

### 自定义域名无法访问
- 确认 PR 已经被 is-a.dev 团队合并
- 检查 GitHub Pages 设置中的自定义域名配置
- 等待 DNS 传播（最多 24 小时）
- 清除浏览器缓存

### HTTPS 证书错误
- GitHub 需要时间生成 SSL 证书
- 等待 10-30 分钟
- 如果持续错误，尝试取消并重新勾选 "Enforce HTTPS"

---

## 📚 相关链接

- **GitHub Pages 文档**: https://docs.github.com/en/pages
- **is-a.dev 文档**: https://docs.is-a.dev/guides/github-pages/
- **is-a.dev 注册仓库**: https://github.com/is-a-dev/register
- **您的网站**: https://romainchen.github.io (部署后)
- **您的自定义域名**: https://romain.is-a.dev (配置后)

---

## ✨ 完成后

恭喜！您的个人博客现在可以通过以下地址访问：
- 主域名：https://romainchen.github.io
- 自定义域名：https://romain.is-a.dev

开始分享您的技术文章吧！🎉

