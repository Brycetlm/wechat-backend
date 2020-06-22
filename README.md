# 求职者画像小程序后端仓库

## 本地环境部署
### 依赖

- Node.js
- MySQL

### 使用
- Node 相关依赖安装：`npm i`
- 运行：`npm run start`
- 目前数据库连接本地数据库，数据库的连接在文件 `src/app.module.ts` 中定义。为避免版本控制问题，密码请统一为 `8705A07896b`，数据库名称请统一为 `wechat-interview-db`。
- 后端运行成功之后，可以在浏览器中输入 `localhost:3000/graphql`，查看 GraphQL 生成的 Playground 面板，里面可以浏览后端提供的接口。

## 技术栈及相关文档
- TypeScript (https://www.typescriptlang.org/docs/home.html)
- Nest.js (https://docs.nestjs.cn/7/firststeps)
- TypeORM (https://typeorm.io/#/)
- GraphQL (https://graphql.org/)
