// Progressive enhancements: theme toggle, weekly activity, and a lightweight celebration.
document.addEventListener('DOMContentLoaded', () => {
    const THEME_KEY = 'englishForWorkTheme';
    const ACTIVITY_KEY = 'englishForWorkWeeklyActivity';
    const root = document.documentElement;
    const styleLink = document.createElement('link');
    styleLink.rel = 'stylesheet';
    styleLink.href = 'css/app-enhancements.css';
    document.head.appendChild(styleLink);

    const themeButton = document.createElement('button');
    themeButton.type = 'button';
    themeButton.className = 'theme-toggle';
    themeButton.setAttribute('aria-label', 'เปลี่ยนธีมสี');
    themeButton.title = 'เปลี่ยนธีมสี';
    const headerRow = document.querySelector('.header-row');
    const xpChip = document.querySelector('.xp-chip');
    if (headerRow && xpChip) headerRow.insertBefore(themeButton, xpChip);

    function setTheme(theme) {
        const dark = theme === 'dark';
        root.dataset.theme = dark ? 'dark' : 'light';
        themeButton.textContent = dark ? '☀️' : '🌙';
        themeButton.setAttribute('aria-pressed', String(dark));
        themeButton.setAttribute('aria-label', dark ? 'เปลี่ยนเป็นธีมสว่าง' : 'เปลี่ยนเป็นธีมมืด');
        try { localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light'); } catch (error) { /* Theme remains usable for this visit. */ }
    }

    let savedTheme = 'light';
    try { savedTheme = localStorage.getItem(THEME_KEY) || 'light'; } catch (error) { /* Use light theme when storage is unavailable. */ }
    setTheme(savedTheme);
    themeButton.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

    const learningView = document.getElementById('learning-path-view');
    const streakCard = document.querySelector('.streak-card');
    const weekCard = document.createElement('article');
    weekCard.className = 'week-card';
    weekCard.setAttribute('aria-label', 'กิจกรรมการเรียนใน 7 วันที่ผ่านมา');
    weekCard.innerHTML = '<div class="week-card-heading"><div><p class="eyebrow">YOUR WEEK</p><h3>กิจกรรม 7 วัน</h3></div><span class="week-summary" id="week-summary">0 วัน</span></div><div class="week-days" id="week-days"></div>';
    if (learningView && streakCard) streakCard.insertAdjacentElement('afterend', weekCard);

    function dateKey(date) {
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    }

    function readActivity() {
        try {
            const parsed = JSON.parse(localStorage.getItem(ACTIVITY_KEY) || '[]');
            return Array.isArray(parsed) ? [...new Set(parsed.filter(item => /^\d{4}-\d{2}-\d{2}$/.test(item)))].slice(-30) : [];
        } catch (error) { return []; }
    }

    function renderWeek() {
        const dayContainer = document.getElementById('week-days');
        const summary = document.getElementById('week-summary');
        if (!dayContainer || !summary) return;
        const activity = new Set(readActivity());
        const today = new Date();
        dayContainer.innerHTML = '';
        let activeDays = 0;
        const labels = ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'];
        for (let offset = 6; offset >= 0; offset--) {
            const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() - offset);
            const key = dateKey(date);
            const active = activity.has(key);
            if (active) activeDays++;
            const day = document.createElement('div');
            day.className = `week-day${active ? ' active' : ''}${offset === 0 ? ' today' : ''}`;
            day.setAttribute('aria-label', `${labels[date.getDay()]} ${date.getDate()}${active ? ', เรียนแล้ว' : ', ยังไม่ได้เรียน'}`);
            day.innerHTML = `<span class="week-day-label">${labels[date.getDay()]}</span><span class="week-day-dot">${active ? '✓' : date.getDate()}</span>`;
            dayContainer.appendChild(day);
        }
        summary.textContent = `${activeDays}/7 วัน`;
    }

    function recordToday() {
        const activity = readActivity();
        const key = dateKey(new Date());
        if (!activity.includes(key)) activity.push(key);
        try { localStorage.setItem(ACTIVITY_KEY, JSON.stringify(activity.slice(-30))); } catch (error) { /* Keep the app usable without storage. */ }
        renderWeek();
    }

    renderWeek();
    window.addEventListener('storage', event => { if (event.key === ACTIVITY_KEY || event.key === THEME_KEY) renderWeek(); });

    const result = document.getElementById('quiz-result');
    if (result) {
        let celebrated = false;
        const observer = new MutationObserver(() => {
            if (result.classList.contains('correct')) {
                recordToday();
                if (!celebrated) {
                    celebrated = true;
                    celebrate();
                }
            } else if (result.classList.contains('incorrect') || result.classList.contains('hidden')) {
                celebrated = false;
            }
        });
        observer.observe(result, { attributes: true, attributeFilter: ['class'] });
    }

    function celebrate() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const layer = document.createElement('div');
        layer.className = 'celebration-layer';
        layer.setAttribute('aria-hidden', 'true');
        const colors = ['#6558e8', '#ffb84d', '#25b982', '#ff6f91', '#69b8ff'];
        for (let i = 0; i < 36; i++) {
            const piece = document.createElement('i');
            piece.style.setProperty('--x', `${Math.random() * 100}vw`);
            piece.style.setProperty('--delay', `${Math.random() * 180}ms`);
            piece.style.setProperty('--duration', `${700 + Math.random() * 700}ms`);
            piece.style.setProperty('--color', colors[i % colors.length]);
            piece.style.setProperty('--rotation', `${Math.random() * 540 - 270}deg`);
            layer.appendChild(piece);
        }
        document.body.appendChild(layer);
        window.setTimeout(() => layer.remove(), 1700);
    }
});
