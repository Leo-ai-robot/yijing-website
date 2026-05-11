# 易学书院 · SEO 与内容传播体系优化方案

> 适配 GitHub Pages 静态站特性 · 不改动导航、内容结构和现有 UI
> 全部可纯前端落地，零后台依赖

---

## 一、全站 SEO 规范

### 1.1 标题格式标准

**统一格式：** `{页面标题} | 易学书院 · 周易国学文化学习平台`

| 页面 | 当前标题 | 优化后标题 | 说明 |
|------|----------|-----------|------|
| index.html | 首页 | 易学书院 · 周易六十四卦五运六气学习平台 | 核心词前置，提升品牌+业务词权重 |
| basics.html | 易经入门基础 | 易经入门基础 · 从零开始学周易 | 增加长尾"从零开始" |
| yinyang-bagua.html | 阴阳八卦知识 | 阴阳八卦知识详解 · 太极两仪四象先天后天 | 核心词+衍生词 |
| wuxing-ganzhi.html | 五行干支体系 | 五行干支体系 · 天干地支六十甲子二十四节气 | 罗列核心长尾 |
| liuyao.html | 六爻基础知识 | 六爻基础知识 · 爻位承乘比应当位不当位 | 专业词前置 |
| hexagrams.html | 六十四卦全解 | 六十四卦全解 · 周易六十四卦卦辞爻辞象传 | 核心词+类型词 |
| daily-quotes.html | 每日易学语录 | 周易每日一卦 · 易经经典名句每日易学语录 | 改版+增词 |
| wuyun-liuqi-2026.html | 2026五运六气专题 | 2026丙午年五运六气详解 · 少阴君火司天 | 年份+专业词 |
| glossary.html | 易学术语词典 | 易学专业术语词典 · 太极两仪八卦五行速查 | 增加工具属性词 |
| daily-fortune.html | 每日宜忌 | 每日黄历宜忌 · 今日干支吉凶查询 | 增加"黄历""吉凶"搜索词 |
| ganzhi-converter.html | 干支纪年转换器 | 干支纪年转换器 · 公历转农历四柱八字查询 | 增加高频搜索"四柱八字" |
| divination.html | 简易起卦 | 在线金钱卦起卦 · 周易六十四卦占卜模拟 | 增加"在线""占卜"搜索 |
| wuxing-chart.html | 五行格局速查 | 五行属性查询 · 天干地支五行纳音生克速查 | 功能词前置 |
| solar-terms.html | 节气对照 | 二十四节气与五运六气对照 · 全年气运查询 | 整合搜索词 |
| tools.html | 易学工具 | 易学工具大全 · 宜忌起卦五行干支节气查询 | 增加"大全"聚合词 |

### 1.2 Meta Description 规范

**规则：** 每个页面 80-120 字，包含核心关键词 + 价值主张 + 行动号召，不重复标题。

| 页面 | 优化描述（示例） |
|------|-----------------|
| index.html | 易学书院专注周易国学文化科普，提供六十四卦全解、阴阳五行、天干地支、五运六气等系统学习内容，从零开始学易经。 |
| basics.html | 从零开始学易经：周易是什么、伏羲画卦文王演卦孔子作传的成书历程、阴阳五行八卦核心概念、四步学习法与推荐书目。 |
| hexagrams.html | 周易六十四卦完整图文详解，乾卦坤卦屯卦蒙卦至既济未济，每卦含卦辞爻辞象传原文及白话释义，系统学习易经经典。 |
| wuyun-liuqi-2026.html | 2026丙午年五运六气详解，太羽水运太过少阴君火司天阳明燥金在泉，六气分步气候特征与传统文化养生指导。 |

当前描述的共性问题：
- 部分页面的 description 太短（< 60字），如 daily-fortune.html
- 工具页缺少行动号召（如"立即查询"、"在线使用"）
- 内容页缺少"学习"、"系统"等用户意图词

### 1.3 Keywords 语义布局

**规则：** 每页 8-15 个词，按语义相关度排序，不堆砌。

通用关键词池（每页选用）：

| 分类 | 关键词 |
|------|--------|
| 品牌词 | 易学书院、周易学习、国学文化 |
| 通用词 | 易经、周易、国学、传统文化 |
| 栏目词 | 六十四卦、阴阳五行、天干地支、五运六气 |
| 长尾词 | 易经入门教程、六十四卦全解、天干地支对照表、五行生克关系 |

### 1.4 元标签实施清单

每个页面新增以下标签：

```html
<!-- 已有 -->
<meta name="description" content="...">
<meta name="keywords" content="...">
<link rel="canonical" href="https://yijing.academy/{filename}">

<!-- 新增：语言与地区 -->
<meta http-equiv="content-language" content="zh-CN">
<html lang="zh-CN">

<!-- 新增：Robots（全站统一） -->
<meta name="robots" content="index, follow">

<!-- 新增：OG 社交分享 -->
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:type" content="website">
<meta property="og:url" content="https://yijing.academy/{filename}">
<meta property="og:image" content="https://yijing.academy/img/og-share.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:site_name" content="易学书院">

<!-- 新增：Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="https://yijing.academy/img/og-share.jpg">

<!-- 新增：通用社交分享图（OG Image） -->
<!-- 自行设计一张 1200×630 极简国风图片：太极暗纹+「易学书院」品牌文字 -->
```

---

## 二、标签体系与内链建设

### 2.1 全站内容标签分类

基于现有 `window._SEARCH_INDEX` 中的 tags 字段，建立标准标签体系：

| 标签 | 覆盖页面 | 说明 |
|------|---------|------|
| 易经入门 | basics, yinyang-bagua | 初学者入口 |
| 周易 | basics, hexagrams, daily-quotes, glossary | 核心品牌词 |
| 六十四卦 | hexagrams, daily-quotes | 核心内容 |
| 阴阳 | yinyang-bagua, basics | 理论基础 |
| 八卦 | yinyang-bagua, basics, hexagrams | 延伸 |
| 五行 | wuxing-ganzhi, wuxing-chart | 体系+工具 |
| 天干地支 | wuxing-ganzhi, ganzhi-converter, daily-fortune | 体系+工具 |
| 五运六气 | wuyun-liuqi-2026, solar-terms | 专题+工具 |
| 六爻 | liuyao, divination | 方法+工具 |
| 术语 | glossary | 词典 |
| 黄历 | daily-fortune | 每日工具 |
| 节气 | solar-terms, wuxing-ganzhi | 横向关联 |

### 2.2 内链建设规则

| 规则 | 说明 | 示例 |
|------|------|------|
| 上下篇 | 内容页必须包含上一节/下一节链接（已有） | basics ← → yinyang-bagua |
| 相关推荐 | 每页底部展示3篇标签重叠最高的页面（已有） | 基于 `_SEARCH_INDEX.tags` 匹配 |
| 工具联动 | 内容页底部引导至对应工具 | basics → glossary / hexagrams → divination |
| 栏目入口 | 每个内容页底部展示所属栏目全部子页面 | 易学入门栏目列出所有5子页 |
| 交叉链接 | 不同栏目的关联内容互链 | 五运六气 → 五行干支 / 六爻入门 → 六十四卦 |

### 2.3 内链密度建议

每篇文章正文中自然插入 2-3 个内链，链接到相关概念页面。例如：

```
basics.html 中 "八卦由三个爻组成" → 链接到 yinyang-bagua.html#八卦
hexagrams.html 中 "每一卦的六爻分析" → 链接到 liuyao.html
```

这部分主要通过现有正文中的已有链接实现（正文已有一定内链），无需大规模改动。

---

## 三、语义结构与收录优化

### 3.1 结构化数据（JSON-LD）

GitHub Pages 纯静态站最适合的实现方式：在每个 HTML 页面的 `<head>` 末尾添加 JSON-LD 脚本。

**首页（网站级 Schema）：**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "易学书院",
  "url": "https://yijing.academy/",
  "description": "专注易经国学哲学、传统文化科普的在线学习平台。周易六十四卦、阴阳五行、天干地支、五运六气、六爻基础知识深入学习。",
  "inLanguage": "zh-CN",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://yijing.academy/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
</script>
```

**内容页（文章级 Schema）：**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "阴阳八卦知识详解 · 太极两仪四象先天后天",
  "description": "阴阳哲学核心概念、八卦体系详解、先天后天八卦图、三才之道与太极图文化内涵。",
  "author": {
    "@type": "Organization",
    "name": "易学书院"
  },
  "datePublished": "2026-01-01",
  "dateModified": "2026-05-11",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://yijing.academy/yinyang-bagua.html"
  }
}
</script>
```

**工具页（WebApplication 级 Schema）：**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "干支纪年转换器",
  "url": "https://yijing.academy/ganzhi-converter.html",
  "description": "公历日期与干支纪年实时互转，含四柱、生肖、纳音五行查询。",
  "applicationCategory": "ReferenceApplication",
  "operatingSystem": "All"
}
</script>
```

### 3.2 面包屑结构化

当前面包屑仅用于 UI 展示，需要补充 JSON-LD 面包屑：

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "首页", "item": "https://yijing.academy/"},
    {"@type": "ListItem", "position": 2, "name": "易学入门", "item": "https://yijing.academy/basics.html"},
    {"@type": "ListItem", "position": 3, "name": "阴阳八卦知识", "item": "https://yijing.academy/yinyang-bagua.html"}
  ]
}
</script>
```

**面包屑映射表（每个页面需配置）：**

| 页面 | position 1 | position 2 | position 3 |
|------|------------|------------|------------|
| index.html | —（首页不设） | — | — |
| basics.html | 首页 | 易学入门 | 入门基础 |
| yinyang-bagua.html | 首页 | 易学入门 | 阴阳八卦 |
| wuxing-ganzhi.html | 首页 | 易学入门 | 五行干支 |
| liuyao.html | 首页 | 易学入门 | 六爻入门 |
| hexagrams.html | 首页 | 六十四卦 | 全部卦象 |
| daily-quotes.html | 首页 | 六十四卦 | 卦辞金句 |
| wuyun-liuqi-2026.html | 首页 | 五运六气 | 丙午年专题 |
| glossary.html | 首页 | 易学工具 | 术语词典 |
| daily-fortune.html | 首页 | 易学工具 | 每日宜忌 |
| ganzhi-converter.html | 首页 | 易学工具 | 干支转换器 |
| divination.html | 首页 | 易学工具 | 简易起卦 |
| wuxing-chart.html | 首页 | 易学工具 | 五行格局 |
| solar-terms.html | 首页 | 易学工具 | 节气对照 |

### 3.3 语义化 HTML 建议

保留现有语义结构（`<header>`, `<main>`, `<section>`, `<footer>`），仅补充：

- 各 `<section>` 增加可选 `aria-label` 属性提高可访问性
- `<nav>` 包裹导航栏（已有 `class="nav-menu"`，可增加 `<nav>` 标签）
- 文章区域使用 `<article>` 替代 `<section>`（内容页）
- 确保 `<h1>` → `<h2>` → `<h3>` 层级连续，无跳级

### 3.4 Sitemap 生成

GitHub Pages 要求手动维护 `sitemap.xml`：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://yijing.academy/</loc><priority>1.0</priority><changefreq>daily</changefreq></url>
  <url><loc>https://yijing.academy/basics.html</loc><priority>0.9</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://yijing.academy/yinyang-bagua.html</loc><priority>0.9</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://yijing.academy/wuxing-ganzhi.html</loc><priority>0.9</priority><changefreq>monthly</changefreq></url>
  <!-- ... 每个页面一条记录 ... -->
</urlset>
```

**优先级规则：**
- 首页: 1.0
- 核心内容页（basics, hexagrams, wuyun等）: 0.9
- 工具页: 0.8
- 功能页（bookmarks, notes等）: 0.3（noindex 也可）

**更新频率：**
- 首页: daily
- 内容页: monthly
- 工具页: weekly（每日宜忌内容变化）

### 3.5 Robots.txt

```
User-agent: *
Allow: /

Sitemap: https://yijing.academy/sitemap.xml
```

---

## 四、社交传播体系

### 4.1 分享内容矩阵

基于现有网站内容，设计 4 种可传播内容形式：

| 形式 | 来源 | 内容 | 适合渠道 | 生成方式 |
|------|------|------|----------|----------|
| 每日语录 | daily-quotes.html | 经典名句 + 出处 + 译文（140字内） | 朋友圈、微信群 | JS 生成纯文本，一键复制 |
| 每日一卦 | index.html 每日卦象 | 卦名 + 卦符 + 卦辞 + 简解 | 朋友圈、社群 | JS 生成图文卡片 |
| 知识卡片 | 各内容页 | 核心知识点浓缩（术语/概念/关系图） | 微信、小红书 | 手动制作模板，JS 填充 |
| 工具截图 | 各工具页 | 工具使用结果（宜忌/转换/起卦结果） | 私聊、社群 | 用户自行截图 |

### 4.2 社交分享文案模板

**每日语录分享文案：**

```
📜 今日易学

「天行健，君子以自强不息」
—— 《周易·乾卦·象传》

天道运行刚健不息，君子应效法天道，奋发向上、永不停歇。

—— 来自「易学书院」
https://yijing.academy/daily-quotes.html
```

**每日一卦分享文案：**

```
☯ 今日卦象 · ䷀ 乾为天

天行健，自强不息。
纯阳至刚，象征天、创造、刚健。

—— 来自「易学书院」
https://yijing.academy/divination.html
```

### 4.3 社交分享图（OG Image）

设计一张品牌社交分享图（静态即可）：

```
规格: 1200×630px
风格: 极简国风，与网站视觉一致
元素: 
  - 底色: 宣纸米白 #f5f0e8
  - 上方: 极简太极线条 SVG（与网站Logo一致）
  - 中央: 「易学书院」四个字（ZCOOL XiaoWei 字体，暗赭石 #8b4513）
  - 底部: 「周易国学文化学习平台」副标题
  - 右下角: 网站地址 yijing.academy
```

> 设计方式：用 HTML + CSS 渲染页面后截图，或使用 Canva 等在线工具制作。不需要每次动态生成，一张通用图即可满足所有页面的 OG 需求。

### 4.4 已实现功能的传播出口

| 已有功能 | 传播出口 | 优化建议 |
|----------|----------|----------|
| 每日语录复制 | 复制按钮 → 剪贴板 | 复制时自动追加来源和链接（已实现） |
| 每日语录分享 | Web Share API | 移动端调用原生分享（已实现） |
| 起卦结果 | 截图分享 | 用户手动截图，无自动方案 |
| 收藏内容 | 本地存储 | 建议增加"导出收藏"功能（JSON导出） |

### 4.5 微信生态适配

| 场景 | 操作 | 说明 |
|------|------|------|
| 微信内打开 | 自动识别 | OG 标签确保微信分享卡片显示标题+描述+图片 |
| 朋友圈分享 | 用户手动 | 提供"复制链接" + "复制文案"两个按钮（部分页面已有） |
| 微信群分享 | 用户手动 | 同上，文案包含链接和引导语 |
| 微信小程序 | 不开发 | 超出本站范围，但可以引导用户保存到浮窗 |

---

## 五、SEO 关键词布局

### 5.1 核心词赛道

| 核心词 | 百度搜索量级（估） | 竞争度 | 目标页面 |
|--------|-------------------|--------|----------|
| 易经 | 极高 | 极高（百科类、培训机构） | index / basics |
| 周易 | 极高 | 极高 | index / hexagrams |
| 六十四卦 | 高 | 中 | hexagrams |
| 八卦 | 高 | 中 | yinyang-bagua |
| 五行 | 高 | 中 | wuxing-ganzhi |
| 天干地支 | 中高 | 低 | wuxing-ganzhi |
| 五运六气 | 中 | 低 | wuyun-liuqi-2026 |
| 每日宜忌 | 中高 | 中 | daily-fortune |
| 起卦 | 中 | 低 | divination |
| 金钱卦 | 低中 | 低 | divination |
| 八字 | 极高 | 极高 | 不覆盖（无此内容） |

### 5.2 长尾词矩阵

| 长尾词 | 目标页面 | 说明 |
|--------|----------|------|
| 易经入门基础知识 | basics | 初学者最常用搜索 |
| 易经学习方法步骤 | basics | 信息型搜索 |
| 六十四卦完整列表 | hexagrams | 工具型搜索 |
| 乾卦六爻详解 | hexagrams | 具体卦象搜索 |
| 五行相生相克表 | wuxing-ganzhi | 表格型内容 |
| 天干地支五行对照表 | wuxing-ganzhi | 速查搜索 |
| 2026年五运六气分析 | wuyun-liuqi-2026 | 时效型搜索 |
| 六爻是什么意思 | liuyao | 概念问答 |
| 阴阳八卦图解 | yinyang-bagua | 图片搜索 |
| 十二生肖对应地支 | wuxing-ganzhi | 交叉索引 |
| 每日干支查询 | daily-fortune | 日常搜索 |
| 在线金钱卦占卜 | divination | 工具搜索 |
| 公历转农历干支 | ganzhi-converter | 工具搜索 |
| 太极两仪四象八卦的关系 | yinyang-bagua | 概念关系搜索 |
| 易经中的变易简易不易 | basics / glossary | 经典概念搜索 |
| 三枚硬币起卦方法 | divination / liuyao | 方法搜索 |
| 易经经典名句100句 | daily-quotes | 语录搜索 |
| 二十四节气与养生 | solar-terms | 养生搜索 |
| 2026年各月运势 | wuyun-liuqi-2026 | 时效搜索 |

### 5.3 栏目内容编排

| 栏目 | 内容定位 | SEO 重点 |
|------|----------|----------|
| 首页 | 品牌门户+内容导航 | 品牌词+通用词 |
| 易学入门 | 零基础学习路径 | 长尾教学词 |
| 六十四卦 | 核心内容+系统解读 | 六十四卦+单卦搜索 |
| 五运六气 | 年度专题+时效内容 | 年份+气运词 |
| 易学工具 | 交互工具+高频使用 | 工具词+查询词 |

---

## 六、实施优先级

| 优先级 | 任务 | 涉及文件 | 预估工时 | SEO 影响 |
|--------|------|----------|----------|----------|
| P0 | 统一标题格式（15页） | 所有 HTML 的 `<title>` | 1h | 标题是排名第一因素 |
| P0 | 补充 OG 标签（6个新工具页缺 OG） | daily-fortune, divination 等 | 0.5h | 社交分享必需 |
| P0 | 新增通用 OG Image | 设计一张 1200×630 图片 | 0.5h | 社交分享体验 |
| P1 | 补充 description（优化短描述页） | daily-fortune, bookmarks 等 | 0.5h | 点击率影响 |
| P1 | canonical 标签（6个新工具页缺） | 新工具页 | 0.3h | 避免重复内容 |
| P1 | sitemap.xml | 新建文件 | 0.3h | 搜索引擎收录 |
| P1 | robots.txt | 新建文件 | 0.1h | 爬虫引导 |
| P2 | JSON-LD 结构化数据（网站级） | index.html | 0.5h | 丰富搜索结果 |
| P2 | JSON-LD 结构化数据（面包屑） | 所有内容页 | 1h | 面包屑展示 |
| P2 | JSON-LD 结构化数据（文章级） | 8个内容页 | 1.5h | 文章摘要增强 |
| P3 | Twitter Card | 所有 HTML | 0.3h | 海外社交 |
| P3 | 微信内嵌优化（可选） | 仅验证 OG | 0.2h | 微信生态 |
| P3 | 导出收藏功能 | bookmarks.html | 0.5h | 留存传播 |

**总计：约 7h**

---

## 七、GitHub Pages 适配说明

| 特性 | GitHub Pages 支持情况 | 本方案适配 |
|------|---------------------|-----------|
| sitemap.xml | ✅ 支持 | 手动维护 |
| robots.txt | ✅ 支持 | 手动维护 |
| 结构化数据 JSON-LD | ✅ 支持（纯文本） | 每个页面内嵌 |
| OG 标签 | ✅ 支持 | 每页配置 |
| 自定义 404 | ✅ 创建 404.html | 可选后续添加 |
| 自定义域名 | ✅ 已配置 `yijing.academy` | 保持 |
| HTTPS | ✅ 自动 | 保持 |
| SSR/JS 渲染 | ❌ 不依赖 | 全方案纯 HTML+JS，不依赖 SSG |

### 7.1 核心原则

1. **所有 SEO 标签直接写入 HTML**，不依赖 JS 动态注入（爬虫不执行 JS）
2. **JSON-LD 放在 `<head>` 末尾**，不放在 `<body>` 中
3. **sitemap.xml 手动维护**，每次新增页面时同步更新
4. **所有 URL 使用绝对路径** `https://yijing.academy/` 前缀
5. **图片资源放在 `/img/` 目录**，使用相对路径

---

## 八、不做的优化（明确边界）

1. **不做 SSR/SSG** — GitHub Pages 只托管静态文件
2. **不做 AMP** — 移动端友好度已足够，AMP 投入产出比低
3. **不做多语言 hreflang** — 只有中文内容
4. **不做页面速度极致优化** — 现有加载速度良好（零后端、零外部请求）
5. **不做外链建设方案** — 超出纯技术 SEO 范畴
6. **不做关键词排名监控** — 无后台，无统计工具
