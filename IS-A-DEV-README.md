# 📋 is-a.dev 域名申请文件

当您准备申请 `romain.is-a.dev` 域名时，请使用以下内容：

## 文件位置
在 is-a-dev/register 仓库的 `domains` 目录下创建 `romain.json`

## 文件内容

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

## 申请步骤

1. Fork https://github.com/is-a-dev/register
2. 在 `domains/` 目录创建 `romain.json` 文件
3. 复制上面的内容
4. 提交并创建 Pull Request
5. 等待审核通过

## 注意事项

- ⚠️ 确保您的 GitHub Pages 网站已经可以通过 https://romainchen.github.io 访问
- ⚠️ 只在 PR 合并后才在 GitHub Pages 设置中添加自定义域名
- ⚠️ Pull Request 的标题建议为：`Add romain.is-a.dev`

更多详情请查看 `DEPLOY_NOW.md` 文件。

