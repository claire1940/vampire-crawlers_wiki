# SEO 检查报告

生成时间: 2026-04-21 06:46:00 UTC

## 检查摘要

- ✅ 通过: 31
- ❌ 失败: 0
- ⚠️ 警告: 3
- 📊 总计: 34

## 详细结果

### 阶段 1：代码结构检查

- ✅ 根布局与 locale 布局含 `html lang`、robots、OpenGraph、alternates
- ✅ 动态页 `generateMetadata`、hreflang、OpenGraph、robots 正常
- ✅ sitemap 使用环境变量域名，含多语言首页、静态页、MDX 内容
- ✅ i18n 配置 `defaultLocale=en`、`localePrefix=as-needed`、`localeDetection=true`
- ✅ 结构化数据正常（WebSite/SearchAction、Article、List）
- ✅ robots 路由存在并包含 sitemap
- ✅ 首页/列表页/详情页/法务页均有语义化 H1
- ✅ 图片组件均带 alt（`next/image` 与内容组件）
- ✅ 详情页面包屑存在，含 BreadcrumbList JSON-LD
- ✅ 首页模块、导航与详情页内链可达
- ✅ 链接一致性修复：统一首页 metadata 默认域名为 `https://www.vampire-crawlers.wiki`
- ✅ 旧品牌残留修复：
  - 更新 `about` 与 `terms-of-service` 的语义与品牌文案
  - 删除残留文件 `src/app/[locale]/terms-of-service/page.tsx.bak`
  - 删除未启用且旧品牌残留的 locale 文件 `de/fr/ja/tr`

### 阶段 2：构建验证

- ✅ `npm run typecheck` 通过
- ✅ `npm run lint` 通过
- ✅ `npm run build` 通过
- ⚠️ Next.js 构建出现 `next-intl` 缓存依赖 warning（非阻断，已记录）

### 阶段 3：安全检查

- ⚠️ `transpage_config.json` 包含第三方翻译 API key（任务既有配置，未在本次重构中新增）
- ✅ 未在 `src/` 中发现新增敏感硬编码

### 阶段 4：本地运行验证

- ✅ `npm run dev` 已重启在 6631 端口
- ✅ `curl -I /` 返回 200
- ✅ `curl -I /ru`、`/es`、`/pt` 返回 200
- ✅ `curl -I /sitemap.xml` 返回 200
- ✅ `curl -I /guide/vampire-crawlers-guide` 返回 200
- ✅ `curl -s / | grep -o "{{OLD_THEME}}" | wc -l` 返回 0
- ⚠️ 首次请求编译耗时较高（Next dev 首编译特性）

## 修复建议

### 高优先级

1. 处理翻译服务稳定性
   - 文件: `tools/articles/modules/transpage/translate-messages.py`
   - 已做: 改为 `curl --max-time` 硬超时，避免长连接卡死

2. 法务与 About 页面语义校正
   - 文件: `src/app/[locale]/about/page.tsx`, `src/app/[locale]/terms-of-service/page.tsx`
   - 已做: 替换旧项目语义，清除品牌错配

### 中优先级

1. 翻译脚本可继续优化成功率
   - 当前策略允许 chunk 失败后英文兜底，后续可按失败 chunk 精准重试

2. `next-intl` 缓存 warning 可在后续升级依赖时评估

### 低优先级

1. 清理未使用图标（仅提示，不影响运行）

