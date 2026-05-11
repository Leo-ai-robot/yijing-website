# 易学书院 · UI视觉升级方案

> 整体调性：极简国风 · 素雅静谧 · 易学禅意
> 设计不增不减，不改动现有导航结构、内容布局和功能

---

## 一、配色体系

### 1.1 主色板

| 用途 | 色名 | 色值 | 说明 |
|------|------|------|------|
| 底色 | 宣纸米白 | `#f5f0e8` | 保留现有 `--paper`，作为全站基底色 |
| 深底 | 陈纸浅褐 | `#ebe4d8` | 保留 `--paper-dark`，稍加深对比 |
| 亮底 | 新纸白 | `#faf6ef` | 保留 `--paper-light` |
| 主文字 | 墨黑 | `#1a1a1a` | 保留 `--ink-black` |
| 次文字 | 淡墨 | `#555555` | 保留 `--ink-gray` |
| 弱文字 | 灰墨 | `#888888` | 保留 `--ink-light` |
| 强调色 | 暗赭石 | `#8b4513` | **新色**，替换原有 `--cinnabar`（朱砂红）用作主链接/按钮色，更沉稳 |
| 悬停色 | 深赭 | `#6b3410` | **新色**，`--cinnabar-dark` 的替换，更含蓄 |
| 淡高亮 | 赭石晕 | `rgba(139,69,19,0.06)` | **新色**，hover背景/分割装饰 |
| 边框 | 淡茶 | `#ddd6c8` | 保留 `--border-light` |
| 暗金 | 哑金 | `#b8860b` | 保留 `--dark-gold`，仅用于顶部公告栏/极少数点缀 |
| 新增色 | 浅青灰 | `#8a9ba8` | **新色** `--slate-gray`，用于副标题/辅助信息/分割装饰线 |
| 新增色 | 淡青灰 | `#d5dde3` | **新色** `--slate-light`，用于边框/分割线的第二选项 |

### 1.2 配色逻辑

核心原则：太极黑白为基底 → 暖色调（宣纸/赭石）传递文化温度 → 冷色调（青灰）增加克制感，平衡整体。

```
墨黑 ─────── 主文字（阳）
宣纸米白 ─── 背景（阴）
暗赭石 ───── 强调/链接（动）
浅青灰 ───── 辅助/分割（静）
哑金 ─────── 点缀（极少用）
```

### 1.3 CSS 变量变更对照

```css
:root {
    /* 保留不变 */
    --ink-black: #1a1a1a;
    --ink-dark: #2c2c2c;
    --ink-gray: #555555;
    --ink-light: #888888;
    --paper: #f5f0e8;
    --paper-dark: #ebe4d8;
    --paper-light: #faf6ef;
    --border-light: #ddd6c8;

    /* 变更：朱砂红 → 暗赭石（更沉稳） */
    --cinnabar: #8b4513;        /* 原 #c23b22 */
    --cinnabar-dark: #6b3410;   /* 原 #8b2500 */
    --cinnabar-light: #a05a2c;  /* 原 #e85d3a */

    /* 新增：浅青灰系 */
    --slate-gray: #8a9ba8;
    --slate-light: #d5dde3;

    /* 保持不变 */
    --dark-gold: #b8860b;
    --dark-gold-light: #d4a017;
}
```

> ⚠️ 色调变更说明：原朱砂红（#c23b22）偏喜庆鲜艳，暗赭石（#8b4513）更接近传统书画印泥色、古籍封面色，与太极黑白基底更协调。

---

## 二、太极元素视觉规范

### 2.1 核心纹样：极简太极线条

使用纯 SVG 线条勾勒太极双鱼，不加填充色块，仅作装饰暗纹。

**三个尺寸规格：**

| 规格 | 尺寸 | 透明度 | 使用位置 |
|------|------|--------|----------|
| 大 | 400×400 | `opacity: 0.04` | 页面底纹（body背景） |
| 中 | 120×120 | `opacity: 0.06-0.08` | 内容区装饰角、卡片底纹 |
| 小 | 40×40 | `opacity: 0.1-0.15` | 分割线点缀、图标暗纹 |

**SVG 源码（极简线条版）：**

```svg
<!-- 大太极纹样 -->
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="48" fill="none" stroke="#1a1a1a" stroke-width="0.8"/>
  <path d="M50 2 A48 48 0 0 0 50 98 A48 48 0 0 1 50 2" fill="none" stroke="#1a1a1a" stroke-width="0.6"/>
  <circle cx="50" cy="26" r="8" fill="none" stroke="#1a1a1a" stroke-width="0.5"/>
  <circle cx="50" cy="74" r="8" fill="none" stroke="#1a1a1a" stroke-width="0.5"/>
</svg>

<!-- 中太极纹样 -->
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="46" fill="none" stroke="#1a1a1a" stroke-width="0.5"/>
  <path d="M50 4 A46 46 0 0 0 50 96 A46 46 0 0 1 50 4" fill="none" stroke="#1a1a1a" stroke-width="0.4"/>
  <circle cx="50" cy="26" r="6" fill="none" stroke="#1a1a1a" stroke-width="0.3"/>
  <circle cx="50" cy="74" r="6" fill="none" stroke="#1a1a1a" stroke-width="0.3"/>
</svg>
```

### 2.2 应用位置

| 位置 | 元素 | 实现方式 |
|------|------|----------|
| body 背景 | 大太极暗纹 | CSS `background-image` + `url(data:image/svg+xml,...)` 居中定位 |
| 内容区分隔 | 中太极+分割线 | 替换现有 `.fade-divider`，太极居中，左右延伸透明渐变线 |
| 卡片hover | 小太极暗纹 | 卡片右下角定位 SVG，hover 时淡入 |
| 页面角落 | 对角太极 | `.page-banner` 角落绝对定位，半透明 |
| 首页 Hero | 太极圆环 | 保留现有太极 SVG 但用暗赭石描边 |

### 2.3 分割线规范

现有 `.fade-divider` 替换为太极分割线：

```css
/* 太极分割线（替换原 .fade-divider） */
.taiji-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: var(--space-lg) 0;
    border: none;
}
.taiji-divider::before,
.taiji-divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(
        90deg,
        transparent,
        var(--slate-light) 30%,
        var(--slate-light) 70%,
        transparent
    );
}
.taiji-divider .taiji-icon {
    width: 32px;
    height: 32px;
    opacity: 0.25;
    flex-shrink: 0;
}
```

---

## 三、字体规范

### 3.1 字体栈（保留当前，优化字重+间距）

| 层级 | 字体 | 字重 | 行高 | 字间距 | 字号范围 |
|------|------|------|------|--------|----------|
| 大标题 H1 | `ZCOOL XiaoWei` | 400 | 1.3 | `0.05em` | 2-2.8rem |
| 中标题 H2 | `ZCOOL XiaoWei` | 400 | 1.4 | `0.04em` | 1.5-2.2rem |
| 小标题 H3/H4 | `Noto Serif SC` | 700 | 1.5 | `0.02em` | 1.1-1.5rem |
| 正文 | `Noto Serif SC` | 400 | **1.9** | `0.01em` | 0.9-1rem |
| 辅助文字 | `Noto Sans SC` | 300/400 | 1.6 | `0.02em` | 0.75-0.85rem |
| 导航/按钮 | `Noto Sans SC` | 400 | 1.4 | `0.06em` | 0.82-0.9rem |

### 3.2 优化要点

```
【调整前】              【调整后】
body line-height: 1.8    body line-height: 1.9   ← 加高，提升长文舒适度
p margin-bottom: 1.2rem  p margin-bottom: 1.4rem ← 段落间距加大，呼吸感
--space-md: 2rem         --space-md: 2.5rem      ← 全局间距略增
--space-lg: 3rem         --space-lg: 3.5rem
--space-xl: 5rem         --space-xl: 6rem
```

### 3.3 新增标题装饰

H2 标题底部可选添加极细分割装饰线：

```css
.page-content h2 {
    position: relative;
    padding-bottom: 0.8rem;
    margin-bottom: 1.5rem;
}
.page-content h2::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 1.5px;
    background: var(--cinnabar);
    opacity: 0.3;
}
```

---

## 四、版式优化

### 4.1 留白与间距

| 区域 | 当前值 | 升级值 | 说明 |
|------|--------|--------|------|
| 页面上下 padding | 隐式 | `padding: var(--space-xl) 0` | 显式定义 |
| 内容区左右 padding | `0 var(--space-sm)` | `0 var(--space-md)` | 增大侧边呼吸 |
| Hero padding | `var(--space-xl) 0` | `var(--space-xl)*1.2 0` | 首页更有仪式感 |
| 卡片内边距 | `var(--space-md)` | `var(--space-md) 1.2*` | 略增舒适度 |
| section间距 | margin-bottom | 统一 `var(--space-lg)` | 对齐 |

### 4.2 卡片样式统一

所有卡片（卦卡、语录卡、术语条目、工具卡片）采用同一视觉规范：

```css
.card {
    background: var(--paper);
    border: 1px solid var(--border-light);
    border-radius: 8px;
    padding: var(--space-md);
    transition: all 0.3s ease;
}
.card:hover {
    border-color: var(--cinnabar);
    box-shadow: 0 2px 12px rgba(139, 69, 19, 0.06);
    transform: translateY(-1px);
}
```

**现有类名对齐映射：**
- `.hexagram-card` → 继承 `.card` 样式
- `.glossary-item` → 继承 `.card` 样式，边框改为左竖线装饰
- `.quote-card` → 继承 `.card` 样式，左侧加赭石竖线（引用线）
- `.tool-card` → 继承 `.card` 样式

### 4.3 首页 Hero 优化

保留当前太极 SVG 徽标，但改为暗赭石描边：

```css
.taiji-deco circle,
.taiji-deco path {
    stroke: var(--cinnabar);  /* 原 #1a1a1a */
    opacity: 0.2;
}
```

Hero 底部增加一条极细太极分割线，替代现有滚动隐式分割。

---

## 五、组件视觉规范

### 5.1 顶部公告栏

保持当前黑底+哑金文字布局，增加底部极细隔线：

```css
.announcement-bar {
    background: var(--ink-black);
    color: var(--dark-gold-light);
    border-bottom: 1px solid rgba(255,255,255,0.06);
}
```

### 5.2 Logo区域

保留现有的太极图标+「易学书院」文字排版。太极图标描边色从 `#c23b22` 改为 `#8b4513`（暗赭石）。

可额外在 logo 右下角增加一个小太极暗纹装饰，约 20×20，`opacity: 0.08`。

### 5.3 按钮样式

```css
/* 主按钮 */
.btn-primary {
    background: var(--cinnabar);
    color: var(--white);
    border: 1px solid var(--cinnabar);
    border-radius: 6px;
    padding: 0.6rem 1.8rem;
    font-family: var(--font-sans);
    letter-spacing: 2px;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.3s ease;
}
.btn-primary:hover {
    background: var(--cinnabar-dark);
    border-color: var(--cinnabar-dark);
}

/* 次按钮 */
.btn-secondary {
    background: transparent;
    color: var(--cinnabar);
    border: 1px solid var(--cinnabar);
    border-radius: 6px;
    padding: 0.6rem 1.8rem;
    font-family: var(--font-sans);
    letter-spacing: 2px;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.3s ease;
}
.btn-secondary:hover {
    background: rgba(139,69,19,0.04);
}
```

### 5.4 面包屑导航

保持现有样式，分隔符 `›` 改为 `┊` 或 `·`，颜色用 `var(--slate-light)`：

```css
.breadcrumb {
    font-size: 0.82rem;
    color: var(--ink-light);
    font-family: var(--font-sans);
    letter-spacing: 1px;
}
.breadcrumb a {
    color: var(--cinnabar);
}
.breadcrumb .sep {
    color: var(--slate-light);
    margin: 0 0.3rem;
}
```

### 5.5 链接下划线装饰

正文内链接增加极细下划线（不是默认浏览器样式）：

```css
.content-container a:not(.btn-primary):not(.btn-secondary) {
    color: var(--cinnabar);
    border-bottom: 1px solid transparent;
    transition: border-color 0.3s ease;
}
.content-container a:not(.btn-primary):not(.btn-secondary):hover {
    border-bottom-color: var(--cinnabar);
}
```

---

## 六、背景与纹理

### 6.1 背景体系

| 层级 | 内容 | 透明度 |
|------|------|--------|
| L0 | 宣纸底色 `#f5f0e8` | 100% |
| L1 | 大太极暗纹（居中偏下） | 3-4% |
| L2 | 暖色径向渐变（左上） | 3% |
| L3 | 冷色径向渐变（右下） | 2% |
| L4 | 宣纸纹理线 | 0.8% |

```css
body {
    background-color: var(--paper);
    background-image:
        /* 大太极暗纹 */
        url("data:image/svg+xml,...太极SVG..."),
        /* 暖渐变 */
        radial-gradient(ellipse at 15% 30%, rgba(139,69,19,0.03) 0%, transparent 60%),
        /* 冷渐变 */
        radial-gradient(ellipse at 85% 70%, rgba(138,155,168,0.02) 0%, transparent 60%),
        /* 纹理噪声（保留现有） */
        url("...noise.svg...");
    background-position: center 40%, 0 0, 0 0, 0 0;
    background-repeat: no-repeat;
    background-size: 600px, 100%, 100%, 100%;
}
```

### 6.2 宣纸纹理线（保留现有）

当前 `body::before` 的重复线性渐变保留不变。

---

## 七、移动端适配

### 7.1 适配原则

所有视觉升级在移动端等比缩放，不改变设计调性。太极暗纹在移动端缩小尺寸。

| 元素 | PC | 移动端 (<768px) |
|------|----|-----------------|
| body背景太极 | 600×600 | 300×300，opacity降为2% |
| 太极分割线 | 32px 图标 | 20px 图标 |
| H1字号 | 2.5rem | 1.8rem |
| H2字号 | 2rem | 1.5rem |
| 正文行高 | 1.9 | 1.8 |
| 内容区边距 | `--space-md` | `--space-sm` |
| 卡片内边距 | `var(--space-md)` | `var(--space-sm)` |

### 7.2 下拉菜单（导航）

保持现有 `@media (max-width: 768px)` 折叠式导航，菜单项间距略增：

```css
@media (max-width: 768px) {
    .nav-menu a {
        padding: 0.9rem 0.8rem; /* 原 0.8rem */
        letter-spacing: 0.08em;
    }
    .submenu a {
        padding: 0.7rem 0.8rem;
    }
}
```

---

## 八、实施优先级

| 优先级 | 内容 | 涉及文件 | 预估工时 |
|--------|------|----------|----------|
| P0 | 配色替换（cinnabar颜色替换 + 新增slate-gray变量） | style.css | 0.5h |
| P0 | 字体间距/行高/全局间距调整 | style.css | 0.5h |
| P1 | 太极分割线（替换fade-divider） | style.css | 0.5h |
| P1 | 卡片样式统一 | style.css | 1h |
| P1 | 正文链接下划线装饰 | style.css | 0.3h |
| P2 | body背景太极暗纹 | style.css | 0.5h |
| P2 | H2标题底部分割装饰 | style.css | 0.3h |
| P2 | 移动端布局微调 | style.css | 0.5h |
| P3 | Hero太极颜色调整 | style.css | 0.2h |
| P3 | Logo装饰追加 | 各HTML的logo区域 | 0.5h |

**总计：约 4-5h**

---

## 九、关键设计决策说明

### 9.1 为什么用暗赭石替代朱砂红？

原朱砂红（#c23b22）色彩饱和度高，在宣纸背景上有"跳"的感觉。暗赭石（#8b4513）更接近：
- 传统书画印泥的颜色
- 古籍封面布的色调
- 干枯墨迹氧化后的暖褐色
与太极黑白基底和宣纸米白更协调，长时间阅读不刺眼。

### 9.2 太极元素为何只用线条不用色块？

色块太极（黑白填充）视觉重量太大，会干扰内容阅读。线条版本的太极纹样：
- 保持辨识度（双鱼轮廓清晰可见）
- 视觉重量轻（仅在极细描边）
- 更符合"极简国风"要求
- 在深/浅背景下都能自适应（SVG stroke颜色可随背景切换）

### 9.3 浅青灰的引入目的

在没有蓝色的配色体系中加入冷灰色调（#8a9ba8），目的是：
- 打破全暖色（米白+赭石+金）的单一感
- 在分割线、边框等元素上提供更克制的第二选项
- 与墨黑形成"暖-冷"平衡，暗合太极阴阳之意
