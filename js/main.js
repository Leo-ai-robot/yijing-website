/* ============================================
   易学国学文化平台 - 主脚本
   Yijing Academy - Main Script
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

    // =========================================
    // 1. 移动端导航切换
    // =========================================
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // 点击导航链接后关闭菜单
        navMenu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }

    // =========================================
    // 2. 高亮当前页面导航
    // =========================================
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    navMenu.querySelectorAll('a').forEach(function(link) {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('active');
        }
    });

    // =========================================
    // 3. 搜索功能
    // =========================================
    const searchBtn = document.getElementById('searchBtn');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchInput = document.getElementById('searchInput');
    const searchClose = document.getElementById('searchClose');

    if (searchBtn && searchOverlay) {
        searchBtn.addEventListener('click', function() {
            searchOverlay.classList.add('active');
            if (searchInput) {
                searchInput.focus();
                searchInput.value = '';
            }
            document.querySelector('.search-results').innerHTML = '';
        });
    }

    if (searchClose && searchOverlay) {
        searchClose.addEventListener('click', function() {
            searchOverlay.classList.remove('active');
        });
        searchOverlay.addEventListener('click', function(e) {
            if (e.target === searchOverlay) {
                searchOverlay.classList.remove('active');
            }
        });
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                searchOverlay.classList.remove('active');
            }
        });
    }

    // 搜索索引 - 所有可搜索页面内容
    const searchIndex = window._SEARCH_INDEX || [];

    if (searchInput && searchIndex.length > 0) {
        searchInput.addEventListener('input', function() {
            const query = this.value.trim().toLowerCase();
            const resultsContainer = document.querySelector('.search-results');

            if (query.length < 1) {
                resultsContainer.innerHTML = '';
                return;
            }

            const results = searchIndex.filter(function(item) {
                return item.title.toLowerCase().includes(query) ||
                       item.content.toLowerCase().includes(query) ||
                       (item.tags && item.tags.some(function(t) { return t.toLowerCase().includes(query); }));
            });

            if (results.length === 0) {
                resultsContainer.innerHTML = '<div class="result-item" style="color:rgba(255,255,255,0.4);text-align:center;padding:2rem 0;">未找到相关内容</div>';
                return;
            }

            resultsContainer.innerHTML = results.slice(0, 15).map(function(item) {
                return '<div class="result-item" onclick="window.location.href=\'' + item.url + '\'">' +
                       '<h4>' + item.title + '</h4>' +
                       '<p>' + item.excerpt + '</p>' +
                       '</div>';
            }).join('');
        });
    }

    // =========================================
    // 4. 轮播 (Carousel)
    // =========================================
    function initCarousel(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const track = container.querySelector('.carousel-track');
        const slides = track.querySelectorAll('.carousel-slide');
        const prevBtn = container.querySelector('.carousel-btn.prev');
        const nextBtn = container.querySelector('.carousel-btn.next');
        const dots = container.querySelectorAll('.carousel-dot');

        if (slides.length === 0) return;

        let currentIndex = 0;
        let autoPlayTimer = null;

        function goToSlide(index) {
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;
            currentIndex = index;
            track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';

            dots.forEach(function(dot, i) {
                dot.classList.toggle('active', i === currentIndex);
            });
        }

        function nextSlide() { goToSlide(currentIndex + 1); }
        function prevSlide() { goToSlide(currentIndex - 1); }

        function startAutoPlay() {
            stopAutoPlay();
            autoPlayTimer = setInterval(nextSlide, 5000);
        }

        function stopAutoPlay() {
            if (autoPlayTimer) {
                clearInterval(autoPlayTimer);
                autoPlayTimer = null;
            }
        }

        if (prevBtn) prevBtn.addEventListener('click', function() { stopAutoPlay(); prevSlide(); startAutoPlay(); });
        if (nextBtn) nextBtn.addEventListener('click', function() { stopAutoPlay(); nextSlide(); startAutoPlay(); });

        dots.forEach(function(dot, i) {
            dot.addEventListener('click', function() {
                stopAutoPlay();
                goToSlide(i);
                startAutoPlay();
            });
        });

        // 触摸支持
        let startX = 0;
        let endX = 0;

        container.addEventListener('touchstart', function(e) {
            startX = e.changedTouches[0].screenX;
        }, { passive: true });

        container.addEventListener('touchend', function(e) {
            endX = e.changedTouches[0].screenX;
            const diff = startX - endX;
            if (Math.abs(diff) > 50) {
                stopAutoPlay();
                if (diff > 0) nextSlide();
                else prevSlide();
                startAutoPlay();
            }
        }, { passive: true });

        // Start autoplay
        startAutoPlay();
    }

    initCarousel('homeCarousel');

    // =========================================
    // 5. 干支日历生成
    // =========================================
    function generateGanzhiCalendar() {
        const container = document.getElementById('ganzhiCalendar');
        if (!container) return;

        const tiangan = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
        const dizhi = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
        const wuxingMap = {
            '甲':'木','乙':'木','丙':'火','丁':'火','戊':'土','己':'土',
            '庚':'金','辛':'金','壬':'水','癸':'水',
            '子':'水','丑':'土','寅':'木','卯':'木','辰':'土','巳':'火',
            '午':'火','未':'土','申':'金','酉':'金','戌':'土','亥':'水'
        };
        const shengxiao = ['鼠','牛','虎','兔','龙','蛇','马','羊','猴','鸡','狗','猪'];

        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const day = today.getDate();

        // 计算年干支: 2024 = 甲辰
        const ganIndex = (year - 4) % 10;
        const zhiIndex = (year - 4) % 12;
        const yearGan = tiangan[ganIndex];
        const yearZhi = dizhi[zhiIndex];

        container.innerHTML = '<div style="text-align:center;margin-bottom:var(--space-md);font-family:var(--font-title);letter-spacing:2px;font-size:1.1rem;">' +
            '今日：' + year + '年' + month + '月' + day + '日 · ' +
            yearGan + yearZhi + '年 · 生肖' + shengxiao[zhiIndex] + '</div>';

        // 生成近10日干支
        var html = '<div class="ganzhi-grid">';
        for (var i = -3; i <= 6; i++) {
            var d = new Date(today);
            d.setDate(d.getDate() + i);

            var y = d.getFullYear();
            var m = d.getMonth() + 1;
            var dt = d.getDate();

            // 计算日干支
            // 基准: 2000年1月1日 = 甲子日
            var baseDate = new Date(2000, 0, 1);
            var diffDays = Math.floor((d - baseDate) / (24 * 60 * 60 * 1000));
            var dayGan = tiangan[(diffDays + 0) % 10]; // 甲子日
            var dayZhi = dizhi[(diffDays + 0) % 12];

            var isToday = i === 0;
            html += '<div class="ganzhi-cell" style="' +
                (isToday ? 'border-color:var(--cinnabar);background:var(--paper-dark);' : '') + '">' +
                '<div class="gz-date">' + (isToday ? '今日' : (i < 0 ? (-i) + '日前' : i + '日后')) + '<br>' + m + '/' + dt + '</div>' +
                '<div class="gz-name">' + dayGan + dayZhi + '</div>' +
                '<div class="gz-wuxing">' + wuxingMap[dayGan] + wuxingMap[dayZhi] + '</div>' +
                '</div>';
        }
        html += '</div>';
        container.innerHTML += html;
    }

    generateGanzhiCalendar();

    // =========================================
    // 6. 每日易学语录动态加载
    // =========================================
    function loadDailyQuote() {
        const container = document.getElementById('dailyQuoteContainer');
        if (!container) return;

        const quotes = [
            { text: '天行健，君子以自强不息', source: '《周易·乾卦·象传》', translation: '天道运行刚健不息，君子应效法天道，奋发向上，永不停歇。' },
            { text: '地势坤，君子以厚德载物', source: '《周易·坤卦·象传》', translation: '大地气势宽厚和顺，君子应效法大地，以深厚的德行承载万物。' },
            { text: '易穷则变，变则通，通则久', source: '《周易·系辞下》', translation: '事物发展到极点就会变化，变化才能通达，通达才能长久保持。' },
            { text: '一阴一阳之谓道', source: '《周易·系辞上》', translation: '一阴一阳的对立统一、消长变化，就是宇宙的根本规律——道。' },
            { text: '仁者见之谓之仁，知者见之谓之知', source: '《周易·系辞上》', translation: '仁者看到道称之为仁，智者看到道称之为智。比喻对同一事物，不同人有不同理解。' },
            { text: '君子以俭德辟难，不可荣以禄', source: '《周易·否卦·象传》', translation: '君子用俭朴的德行来避免灾难，不可以荣耀和禄位为重。' },
            { text: '君子以言有物而行有恒', source: '《周易·家人卦·象传》', translation: '君子说话要有实在内容，做事要有持之以恒的准则。' },
            { text: '君子以虚受人', source: '《周易·咸卦·象传》', translation: '君子以谦虚的态度接受他人的教诲和意见。' },
            { text: '君子以顺德，积小以高大', source: '《周易·升卦·象传》', translation: '君子顺行美德，积累小善以成就崇高伟大的事业。' },
            { text: '二人同心，其利断金；同心之言，其臭如兰', source: '《周易·系辞上》', translation: '两人同心协力，其锋利可以切断金属；同心同德的话语，气味如同兰花般芬芳。' },
            { text: '书不尽言，言不尽意', source: '《周易·系辞上》', translation: '文字不能完全表达言语，言语不能完全表达心意。' },
            { text: '尺蠖之屈，以求信也；龙蛇之蛰，以存身也', source: '《周易·系辞下》', translation: '尺蠖弯曲身体，是为了向前伸展；龙蛇冬眠潜伏，是为了保存自身。' },
            { text: '君子藏器于身，待时而动', source: '《周易·系辞下》', translation: '君子怀藏才艺于身，等待时机到来才行动。' },
            { text: '善不积不足以成名，恶不积不足以灭身', source: '《周易·系辞下》', translation: '善行不积累不足以成就美名，恶行不积累不足以毁灭自身。' },
            { text: '易无思也，无为也，寂然不动，感而遂通天下之故', source: '《周易·系辞上》', translation: '易本身没有思虑，没有作为，寂静不动，但通过感应就能通达天下万事之理。' },
            { text: '谦谦君子，卑以自牧', source: '《周易·谦卦》', translation: '谦而又谦的君子，以谦卑的态度修养自身。' },
            { text: '君子以裒多益寡，称物平施', source: '《周易·谦卦·象传》', translation: '君子减多增少，衡量事物公平施与。' },
            { text: '君子以果行育德', source: '《周易·蒙卦·象传》', translation: '君子以果断的行动来培育品德。' },
            { text: '天与火，同人；君子以类族辨物', source: '《周易·同人卦·象传》', translation: '天与火相互亲和，象征大同；君子分析族类，辨别事物。' },
            { text: '君子以遏恶扬善，顺天休命', source: '《周易·大有卦·象传》', translation: '君子制止邪恶，弘扬善行，顺应天道美好的使命。' }
        ];

        // Use date-based deterministic selection
        const today = new Date();
        const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (24 * 60 * 60 * 1000));
        const quote = quotes[dayOfYear % quotes.length];

        container.innerHTML =
            '<div class="quote-card">' +
            '<blockquote>' + quote.text + '</blockquote>' +
            '<div class="quote-source">—— ' + quote.source + '</div>' +
            '<div class="quote-translation">' + quote.translation + '</div>' +
            '</div>';
    }

    loadDailyQuote();

    // =========================================
    // 7. 回到顶部
    // =========================================
    var backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.style.cssText =
        'position:fixed;bottom:2rem;right:2rem;width:44px;height:44px;' +
        'border-radius:50%;background:var(--ink-black);color:var(--dark-gold-light);' +
        'border:none;font-size:1.2rem;cursor:pointer;z-index:999;' +
        'opacity:0;visibility:hidden;transition:all 0.3s ease;' +
        'box-shadow:0 2px 10px rgba(0,0,0,0.2);';
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.style.opacity = '0.6';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    console.log('🧿 易学国学文化平台已加载 — 传承经典，弘扬国学');
});
