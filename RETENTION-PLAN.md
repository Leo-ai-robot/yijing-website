# 易学书院 · 互动与留存体系产品方案

> 目标：轻量化纯前端实现，不增加后台，不破坏太极国风氛围
> 所有交互克制冷清，如品茶般安静

---

## 一、每日留存卡片（轻推送）

### 1.1 首页「今日易学」卡片升级

现有首页底部已有每日语录展示 + 每日一卦展示。在此基础上做交互增强：

**改造方案：**

| 卡片 | 现状 | 升级后 |
|------|------|--------|
| 每日语录 | 纯文字展示 | 增加「复制原文」「保存为书签」「分享」交互按钮 |
| 每日一卦（新增） | 无 | 每日自动生成一卦，显示卦名/卦符/卦辞，附「起卦详解→」跳转 |

**交互规则：**

```
┌─ 今日易学 ────────────────────┐
│                                │
│  "天行健，君子以自强不息"       │
│  —— 《周易·乾卦·象传》          │
│                                │
│  📋 复制  🔖 收藏  ↗ 分享图文  │   ← 三个极简图标按钮
│                                │
│  ─ 太极分割线 ─                │
│                                │
│  今日卦象：䷀ 乾为天            │
│  天行健，自强不息               │
│  🎲 起卦详解 →                  │
│                                │
└────────────────────────────────┘
```

**按钮交互：**

| 操作 | 触发 | 反馈 |
|------|------|------|
| 复制 | 点击「📋 复制」 | 语录文字写入剪贴板，toast提示"已复制" |
| 收藏 | 点击「🔖 收藏」 | 保存到localStorage，图标变实心，toast提示"已收藏" |
| 分享 | 点击「↗ 分享」 | 调用 Web Share API（移动端），PC端复制链接+语录 |
| 起卦详解 | 点击「🎲 起卦详解」 | 跳转到 divination.html 使用完整起卦工具 |

### 1.2 每日一卦生成逻辑

复用 divination.html 的 `castCoin` 逻辑，首页加载时自动生成一个随机的当日卦象：

```javascript
// 基于日期种子生成，同一日期同一卦（保持确定性）
function dailyHexagram(date) {
    var seed = date.getFullYear() * 10000 + (date.getMonth()+1) * 100 + date.getDate();
    var idx = seed % 64;
    return HEXAGRAM_DATA[idx];
}
```

每日切换 → 卦象变化；同日不变化。

### 1.3 一键复制实现

```javascript
function copyQuote(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function() {
            showToast('📋 已复制到剪贴板');
        });
    } else {
        // fallback for older browsers
        var ta = document.createElement('textarea');
        ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select();
        document.execCommand('copy'); document.body.removeChild(ta);
        showToast('📋 已复制到剪贴板');
    }
}
```

### 1.4 分享图文

```javascript
function shareQuote(quote, source) {
    var text = '「' + quote + '」\n—— ' + source + '\n—— 来自易学书院\n';
    if (navigator.share) {
        navigator.share({ title: '易学语录', text: text, url: window.location.href });
    } else {
        copyQuote(text + window.location.href);
    }
}
```

### 1.5 Toast 轻提示（极简样式）

```css
.toast {
    position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%);
    padding: 0.6rem 1.5rem; background: var(--ink-black); color: var(--paper);
    border-radius: 6px; font-size: 0.82rem; font-family: var(--font-sans);
    letter-spacing: 1px; opacity: 0; transition: opacity 0.4s ease;
    z-index: 10000; pointer-events: none;
}
.toast.show { opacity: 0.85; }
```

---

## 二、收藏与读书笔记（纯本地存储）

### 2.1 收藏功能

**数据模型：**

```javascript
// localStorage key: 'yijing_bookmarks'
[
    {
        id: 'hex-1',                    // 唯一ID
        type: 'page',                   // page | quote | hexagram
        title: '乾卦·天行健',           // 显示的标题
        url: 'hexagrams.html',          // 跳转链接
        excerpt: '天行健，君子以自强不息', // 预览文字
        createdAt: '2026-05-11'         // 收藏日期
    }
    // ...更多收藏
]
```

**入口位置：**
- 每条每日语录、每篇文章底部、每个卦象卡片
- 入口形式：小太极轮廓空心图标 `◯`（未收藏）/ 实心 `●`（已收藏）

**交互：**

| 状态 | 图标 | 点击效果 |
|------|------|----------|
| 未收藏 | 空心太极圈 `◯` | 收藏成功，变实心，toast"已收藏" |
| 已收藏 | 实心点 `●` | 取消收藏，变空心，toast"已取消" |

**收藏总览页：** 在「易学工具」下新增入口"我的收藏"→ `bookmarks.html`

```
我的收藏
├─ 页面收藏（内容页）
├─ 语录收藏（每日语录条目）
└─ 卦象收藏（起卦结果/卦卡）
```

每条显示：标题 + 预览 + 收藏日期 + 取消按钮

### 2.2 读书笔记功能

**数据模型：**

```javascript
// localStorage key: 'yijing_notes'
[
    {
        id: 'note-1715347200000',
        pageUrl: 'yinyang-bagua.html',
        pageTitle: '阴阳八卦知识',
        text: '阴阳转化这一段让我联想到...',
        createdAt: '2026-05-11T10:30:00'
    }
]
```

**入口位置：**
- 内容页右侧底部（固定位置），一个极简的毛笔图标 ✒
- 点击展开一个极简浮动输入框：

```
┌─────────────────────────┐
│  ✒ 读书笔记              │
│                         │
│  [输入框: 在此记录感悟...] │
│  最多200字               │
│                         │
│  [ 💾 保存 ]  [ 📖 全部 ] │
└─────────────────────────┘
```

**交互规则：**

| 操作 | 触发 | 反馈 |
|------|------|------|
| 打开笔记 | 点击 ✒ 图标 | 浮动面板从底部滑入，半透明遮罩 |
| 保存笔记 | 填写内容后点保存 | 存入 localStorage，toast"笔记已保存" |
| 查看全部 | 点击"全部" | 跳转到笔记列表页 notes.html |
| 页面关联 | 自动关联当前页面URL | 在笔记列表页按页面分组展示 |

### 2.3 笔记列表页与收藏页共享入口

在「易学工具」下增加两个入口：

```
易学工具 ▾
  ├─ 每日宜忌
  ├─ 干支转换器
  ├─ 简易起卦
  ├─ 五行格局
  ├─ 节气对照
  ├─ 术语词典
  ├─ ─ ─ ─ ─ ─        ← 薄分割线
  ├─ 🔖 我的收藏     → bookmarks.html
  └─ ✒ 我的笔记      → notes.html
```

---

## 三、文章底部引导体系

### 3.1 底部区块结构（每一个内容页通用）

```
┌─ 内容正文结尾 ──────────────────┐
│                                  │
│  ─ 太极分割线 ─                  │
│                                  │
│  ← 上一节：XXX  |  下一节：XXX →  │  ← 已有，保持
│                                  │
│  ─ 太极分割线 ─                  │
│                                  │
│  📖 学习路径定位                  │
│  你正在：易学入门 → 阴阳八卦      │
│  [返回易学入门] [继续学习六十四卦] │  ← 路径按钮
│                                  │
│  ─ 太极分割线 ─                  │
│                                  │
│  相关推荐                         │
│  ┌─────┐ ┌─────┐ ┌─────┐       │
│  │ 六爻入│ │ 五行干│ │ 术语速│       │
│  │ 门   │ │ 支   │ │ 查   │       │
│  └─────┘ └─────┘ └─────┘       │
│                                  │
│  ─ 太极分割线 ─                  │
│                                  │
│  🖤 这篇文章对你有帮助吗？        │
│  [有用] [一般] [没懂]            │  ← 轻反馈
│                                  │
└──────────────────────────────────┘
```

### 3.2 学习路径定位（面包屑升级）

现有面包屑：`首页 › 当前页面`

升级后面包屑（在页面 banner 区域）：

```
首页 › 易学入门 › 阴阳八卦知识
```

增加页面底部的路径卡片：

```html
<div class="path-card">
    <div class="path-label">📖 学习路径</div>
    <div class="path-trail">易学入门 → 阴阳八卦知识</div>
    <div class="path-nav">
        <a href="basics.html">← 返回：入门基础</a>
        <a href="wuxing-ganzhi.html">继续：五行干支 →</a>
    </div>
</div>
```

### 3.3 相关推荐规则

基于标签匹配，无须算法，直接用现有搜索索引的 tags：

```javascript
function getRelated(currentUrl, limit) {
    var index = window._SEARCH_INDEX || [];
    var current = index.find(function(i) { return i.url === currentUrl; });
    if (!current) return [];
    var tags = current.tags || [];
    // 找标签重叠最多的其他页面
    var scored = index.filter(function(i) {
        return i.url !== currentUrl;
    }).map(function(i) {
        var overlap = (i.tags || []).filter(function(t) { return tags.indexOf(t) >= 0; }).length;
        return { item: i, score: overlap };
    }).sort(function(a, b) { return b.score - a.score; });
    return scored.slice(0, 3).map(function(s) { return s.item; });
}
```

展示形式：3个标签卡片，显示标题+一句话简介

### 3.4 轻反馈（有用/一般/没懂）

用 localStorage 记录每个页面的反馈数据，不涉及任何后端：

```javascript
// localStorage key: 'yijing_feedback'
// { 'basics.html': 'helpful', 'yinyang-bagua.html': 'neutral', ... }
```

显示当前页面反馈状态，点击后切换。

---

## 四、极简留言讨论区

### 4.1 定位

- 不对标评论区/论坛，不做复杂社区
- 每篇文章底部一个极简的「静思小笺」区域
- 设计风格：极简、留白、克制、如禅茶馆留言簿

### 4.2 命名与调性

不叫「评论区」，改叫 **「静思小笺」** 或 **「学友札记」**

```
┌─ 静思小笺 ────────────────────┐
│                                 │
│  🌿  此处仅供学友交流心得         │
│  请以温厚之心，讨论学问之道       │
│                                 │
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─          │
│                                 │
│  〔输入框: 写下你的感悟…〕        │
│  32字以内                        │
│  [ ☯ 留笺 ]                     │
│                                 │
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─          │
│                                 │
│  「阴阳转化原是此理」—— 3分钟前   │
│  「读完对乾卦有了新的理解」—— 1h  │
│  「五行生克这一段写得清楚」—— 3h  │
│                                 │
│  共 3 条学友札记                  │
└─────────────────────────────────┘
```

### 4.3 数据存储

纯 localStorage：

```javascript
// localStorage key: 'yijing_messages'
// 按页面URL分组
{
    "yinyang-bagua.html": [
        { text: '阴阳转化原是此理', time: Date.now() },
        ...
    ],
    "hexagrams.html": [...]
}
```

### 4.4 交互规则

| 操作 | 规则 |
|------|------|
| 留言 | 32字以内，纯文本，无富文本 |
| 展示 | 按时间倒序，最多显示最近10条 |
| 审核 | 不审核，纯本地（仅自己可见） |
| 删除 | 长按/双击自己的留言可删除 |
| 内容要求 | 提示语：请以温厚之心，讨论学问之道 |
| 样式 | 太极分割线上下分隔，字体略小(0.82rem)，行距1.6，灰墨色 |

### 4.5 空状态

无留言时显示：

```
┌─ 静思小笺 ────────────────────┐
│                                 │
│  🌿  此处尚无学友札记            │
│  做第一个留下感悟的人             │
│                                 │
│  〔输入框: 写下你的感悟…〕        │
│  [ ☯ 留笺 ]                     │
│                                 │
└─────────────────────────────────┘
```

---

## 五、回归入口设计

### 5.1 回到顶部按钮（升级）

现有回到顶部按钮已存在（JS动态创建的↑按钮），升级方案：

| 项目 | 当前 | 升级 |
|------|------|------|
| 样式 | 纯黑色圆，白箭头 | 极简太极半圆线条 |
| 位置 | 右下 2rem | 右下 1.5rem |
| 触发 | scroll > 300px | scroll > 400px |
| hover | 无 | 太极线条旋转90°（缓动动画） |

样式示例：

```css
.back-to-top {
    position: fixed; bottom: 1.5rem; right: 1.5rem;
    width: 44px; height: 44px; border-radius: 50%;
    background: var(--paper); border: 1px solid var(--border-light);
    cursor: pointer; z-index: 999;
    opacity: 0; visibility: hidden;
    transition: all 0.4s ease;
    background-image: url("data:image/svg+xml,...半太极线条SVG...");
    background-size: 24px; background-position: center; background-repeat: no-repeat;
}
.back-to-top.visible { opacity: 0.7; visibility: visible; }
.back-to-top:hover { opacity: 1; border-color: var(--cinnabar); transform: translateY(-2px); }
```

### 5.2 常用工具悬浮入口

右下角增加一个可展开的「工具浮窗」：

```
┌─ 初始状态（小太极图标） ─┐
│                          │
│         ☯                │  ← 点击展开
│                          │
└──────────────────────────┘

┌─ 展开状态 ──────────────┐
│  ☯ 关闭                  │
│                          │
│  📅 每日宜忌              │
│  🔄 干支转换              │
│  🎲 起卦                  │
│  ⚖️ 五行格局              │
│  📖 术语词典              │
│                          │
│  🔖 收藏   ✒ 笔记        │
└──────────────────────────┘
```

**交互规则：**

| 状态 | 展示 | 触发 |
|------|------|------|
| 收起 | 右下角小太极圆钮（44×44, 半透明） | 默认 |
| 展开 | 扇形/竖向列表弹出，5个工具+2个功能入口 | 点击太极圆钮 |
| 收起 | 回到太极圆钮 | 点击空白处/再次点击 |
| 停留 | 浮窗保持打开 | 鼠标悬停/触摸 |
| 移动端 | 同上，触控友好（点击区域≥44px） | 点击 |

**位置：** 右下角，回到顶部按钮上方，间距 0.5rem

---

## 六、实施优先级

| 优先级 | 模块 | 预估工时 | 理由 |
|--------|------|----------|------|
| P0 | 每日卡片升级（复制/收藏/分享/每日一卦） | 2h | 首页留存核心，每日交互 |
| P0 | 回到顶部+工具悬浮入口 | 1.5h | 复访率提升最直接 |
| P1 | 收藏功能（含收藏页） | 2h | 基础留存机制 |
| P1 | 文章底部引导（路径+相关推荐） | 1.5h | 学习闭环 |
| P2 | 读书笔记（含笔记页） | 2h | 深度互动 |
| P2 | 轻反馈（有用/一般/没懂） | 0.5h | 数据收集 |
| P3 | 静思小笺留言区 | 2.5h | 最复杂，但也是唯一社交元素 |

---

## 七、设计规范补充

### 7.1 所有新交互组件的视觉原则

| 原则 | 说明 |
|------|------|
| 配色 | 全部使用现有变量（--ink-black/gray/light, --cinnabar, --slate-gray） |
| 圆角 | 统一 6-8px，与现有卡片一致 |
| 字体 | 按钮/标签用 --font-sans，正文用 --font-body |
| 动画 | 只使用 opacity/transform 过渡，0.3-0.4s ease |
| 图标 | 使用 Unicode emoji 或极简 SVG 线条，不用字体图标库 |
| 阴影 | 只在 hover/展开时使用，`box-shadow: 0 2px 12px rgba(139,69,19,0.06)` |
| Toast | 黑底米白字，无图标，位置固定底部居中 |

### 7.2 新增CSS变量（沿用现有体系）

```css
:root {
    --toast-bg: var(--ink-black);
    --toast-text: var(--paper);
    --float-btn: var(--paper);
    --float-btn-border: var(--border-light);
    --float-btn-hover: var(--cinnabar);
    --bookmark-active: var(--cinnabar);
    --bookmark-inactive: var(--slate-light);
}
```

### 7.3 localStorage 数据总清单

| Key | 用途 | 数据量上限 |
|-----|------|-----------|
| `yijing_bookmarks` | 收藏列表 | 100条 |
| `yijing_notes` | 读书笔记 | 200条 |
| `yijing_feedback` | 页面反馈 | 50条（按页面） |
| `yijing_messages` | 留言数据 | 每页50条 |
| 总计 | — | < 500KB，完全安全 |

---

## 八、不做的功能（明确边界）

1. **不做登录注册** — 所有数据存本地，设备隔离
2. **不做评论互动** — 留言仅自己可见，不涉及回复/点赞
3. **不做推送通知** — 无Service Worker
4. **不做数据统计** — 无埋点/分析工具
5. **不做用户系统** — 无昵称/头像/个人主页
