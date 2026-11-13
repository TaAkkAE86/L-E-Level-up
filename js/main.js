// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    const STORAGE_KEY = 'englishForWorkProgress';
    const defaultProgress = { level: 1, points: 0, completedLessons: [] };
    let userProgress = { ...defaultProgress };
    let currentLessonIndex = -1;
    let deferredInstallPrompt = null;
    let toastTimer;

    const userLevelEl = document.getElementById('user-level');
    const userPointsEl = document.getElementById('user-points');
    const levelsContainer = document.getElementById('levels-container');
    const learningPathView = document.getElementById('learning-path-view');
    const lessonView = document.getElementById('lesson-view');
    const profileView = document.getElementById('profile-view');
    const backToPathBtn = document.getElementById('back-to-path-btn');
    const lessonTitle = document.getElementById('lesson-title');
    const lessonDescription = document.getElementById('lesson-description');
    const lessonStep = document.getElementById('lesson-step');
    const vocabList = document.getElementById('vocab-list');
    const quizForm = document.getElementById('quiz-form');
    const quizResult = document.getElementById('quiz-result');
    const resultMessage = document.getElementById('result-message');
    const nextLessonBtn = document.getElementById('next-lesson-btn');
    const installButton = document.getElementById('install-app-btn');
    const toast = document.getElementById('app-toast');
    const navItems = Array.from(document.querySelectorAll('.nav-item'));

    function saveProgress() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(userProgress));
        } catch (error) {
            console.warn('Progress could not be saved in this browser.', error);
        }
    }

    function loadProgress() {
        try {
            const savedData = localStorage.getItem(STORAGE_KEY);
            if (!savedData) return;

            const parsedData = JSON.parse(savedData);
            if (parsedData && typeof parsedData === 'object') {
                userProgress = {
                    level: Number.isFinite(parsedData.level) ? parsedData.level : defaultProgress.level,
                    points: Number.isFinite(parsedData.points) ? parsedData.points : defaultProgress.points,
                    completedLessons: Array.isArray(parsedData.completedLessons)
                        ? parsedData.completedLessons.filter(id => lessonsData.some(lesson => lesson.id === id))
                        : []
                };
            }
        } catch (error) {
            userProgress = { ...defaultProgress };
            console.warn('Saved progress could not be loaded.', error);
        }
    }

    function vibrate(pattern) {
        if ('vibrate' in navigator) navigator.vibrate(pattern);
    }

    function showToast(message) {
        toast.textContent = message;
        toast.classList.add('visible');
        window.clearTimeout(toastTimer);
        toastTimer = window.setTimeout(() => toast.classList.remove('visible'), 2600);
    }

    function isLessonLocked(lesson) {
        if (lesson.level === 1) return false;
        const previousLevelLessons = lessonsData.filter(item => item.level === lesson.level - 1);
        return !previousLevelLessons.every(item => userProgress.completedLessons.includes(item.id));
    }

    function updateProgressUI() {
        const completed = userProgress.completedLessons.length;
        const total = lessonsData.length;
        const percentage = total ? Math.round((completed / total) * 100) : 0;

        userLevelEl.textContent = userProgress.level;
        userPointsEl.textContent = userProgress.points;
        document.getElementById('completed-count').textContent = completed;
        document.getElementById('total-count').textContent = total;
        document.getElementById('progress-percent').textContent = `${percentage}%`;
        document.getElementById('progress-fill').style.width = `${percentage}%`;
        document.querySelector('.progress-track').setAttribute('aria-valuenow', percentage);
        document.getElementById('progress-caption').textContent = percentage === 100
            ? 'ยอดเยี่ยม! คุณเรียนครบทุกบทเรียนแล้ว 🎉'
            : completed === 0
                ? 'เริ่มบทเรียนแรกแล้วสะสม XP กันเลย'
                : `เยี่ยมมาก! เรียนจบแล้ว ${completed} บทเรียน ไปต่อกันเลย`;
        document.getElementById('course-count').textContent = `${total} บท`;
        document.getElementById('profile-points').textContent = userProgress.points;
        document.getElementById('profile-completed').textContent = completed;
        document.getElementById('profile-level').textContent = userProgress.level;
    }

    function renderLearningPath() {
        levelsContainer.innerHTML = '';
        const levels = [...new Set(lessonsData.map(lesson => lesson.level))].sort((a, b) => a - b);

        levels.forEach(level => {
            const levelLessons = lessonsData
                .map((lesson, index) => ({ lesson, index }))
                .filter(item => item.lesson.level === level);
            const completedCount = levelLessons.filter(({ lesson }) => userProgress.completedLessons.includes(lesson.id)).length;

            const group = document.createElement('section');
            group.className = 'level-group';
            const heading = document.createElement('div');
            heading.className = 'level-heading';
            heading.innerHTML = `
                <div class="level-title-wrap">
                    <span class="level-number">${level}</span>
                    <div><h3>Level ${level}</h3><p>${levelLessons.length} บทเรียน</p></div>
                </div>
                <span class="level-progress">${completedCount}/${levelLessons.length} จบแล้ว</span>
            `;
            const lessonList = document.createElement('div');
            lessonList.className = 'level-lessons';

            levelLessons.forEach(({ lesson, index }) => {
                const completed = userProgress.completedLessons.includes(lesson.id);
                const locked = isLessonLocked(lesson);
                const card = document.createElement('button');
                card.type = 'button';
                card.className = `lesson-card ${completed ? 'completed' : locked ? 'locked' : 'unlocked'}`;
                card.disabled = locked;
                card.setAttribute('aria-label', `${lesson.title}${locked ? ', ยังไม่ปลดล็อก' : completed ? ', เรียนจบแล้ว' : ', เริ่มบทเรียน'}`);

                const icon = document.createElement('span');
                icon.className = 'status-icon';
                icon.setAttribute('aria-hidden', 'true');
                icon.textContent = completed ? '✓' : locked ? '🔒' : '↗';
                const copy = document.createElement('span');
                copy.className = 'lesson-card-copy';
                const title = document.createElement('b');
                title.textContent = lesson.title;
                const description = document.createElement('span');
                description.textContent = lesson.description;
                copy.append(title, description);
                const arrow = document.createElement('span');
                arrow.className = 'card-arrow';
                arrow.setAttribute('aria-hidden', 'true');
                arrow.textContent = locked ? '' : '›';
                card.append(icon, copy, arrow);

                if (!locked) card.addEventListener('click', () => showLesson(index));
                lessonList.appendChild(card);
            });

            group.append(heading, lessonList);
            levelsContainer.appendChild(group);
        });
    }

    function renderVocabulary(vocabulary) {
        vocabList.innerHTML = '';
        vocabulary.forEach(item => {
            const row = document.createElement('li');
            const word = document.createElement('b');
            word.textContent = item.word;
            row.append(word, document.createTextNode(`: ${item.meaning}`));
            vocabList.appendChild(row);
        });
    }

    function renderQuiz(quizData) {
        quizForm.innerHTML = '';
        quizData.forEach((question, index) => {
            const wrapper = document.createElement('div');
            wrapper.className = 'quiz-question';
            const prompt = document.createElement('p');
            prompt.textContent = `${index + 1}. ${question.question}`;
            wrapper.appendChild(prompt);

            if (question.type === 'multiple-choice') {
                question.options.forEach((option, optionIndex) => {
                    const label = document.createElement('label');
                    const input = document.createElement('input');
                    input.type = 'radio';
                    input.name = `q${index}`;
                    input.value = option;
                    input.required = optionIndex === 0;
                    label.append(input, document.createTextNode(option));
                    wrapper.appendChild(label);
                });
            } else if (question.type === 'fill-in-the-blank') {
                const input = document.createElement('input');
                input.type = 'text';
                input.name = `q${index}`;
                input.autocomplete = 'off';
                input.autocapitalize = 'none';
                input.spellcheck = false;
                input.placeholder = 'พิมพ์คำตอบของคุณ';
                input.setAttribute('aria-label', `คำตอบข้อ ${index + 1}`);
                input.required = true;
                wrapper.appendChild(input);
            }
            quizForm.appendChild(wrapper);
        });

        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.id = 'submit-quiz-btn';
        submitButton.className = 'primary-btn';
        submitButton.innerHTML = 'ส่งคำตอบ <span aria-hidden="true">→</span>';
        quizForm.appendChild(submitButton);
    }

    function showLesson(index) {
        currentLessonIndex = index;
        const lesson = lessonsData[index];
        lessonTitle.textContent = lesson.title;
        lessonDescription.textContent = lesson.description;
        lessonStep.textContent = `LEVEL ${lesson.level}`;
        renderVocabulary(lesson.vocab);
        renderQuiz(lesson.quiz);
        quizResult.className = 'result-card hidden';
        nextLessonBtn.classList.add('hidden');
        showView('lesson-view');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function showQuizResult(isCorrect, score, total) {
        quizResult.className = `result-card ${isCorrect ? 'correct' : 'incorrect'}`;
        resultMessage.textContent = isCorrect
            ? `ยอดเยี่ยม! ตอบถูก ${score}/${total} ข้อ 🎉`
            : `ตอบถูก ${score}/${total} ข้อ ลองทบทวนแล้วทำอีกครั้งนะ`;
        const submitButton = document.getElementById('submit-quiz-btn');
        if (submitButton) submitButton.classList.add('hidden');
        nextLessonBtn.classList.toggle('hidden', !isCorrect);
        vibrate(isCorrect ? [35, 40, 60] : 80);
    }

    function handleSubmitQuiz(event) {
        event.preventDefault();
        if (currentLessonIndex < 0) return;

        const lesson = lessonsData[currentLessonIndex];
        const answers = new FormData(quizForm);
        let score = 0;
        lesson.quiz.forEach((question, index) => {
            const userAnswer = answers.get(`q${index}`);
            if (userAnswer && userAnswer.toString().trim().toLowerCase() === question.answer.trim().toLowerCase()) score++;
        });

        const isCorrect = score === lesson.quiz.length;
        showQuizResult(isCorrect, score, lesson.quiz.length);
        if (isCorrect && !userProgress.completedLessons.includes(lesson.id)) {
            userProgress.completedLessons.push(lesson.id);
            userProgress.points += 10;
            const levelLessons = lessonsData.filter(item => item.level === lesson.level);
            if (levelLessons.every(item => userProgress.completedLessons.includes(item.id))) {
                const maxLevel = Math.max(...lessonsData.map(item => item.level));
                userProgress.level = Math.min(lesson.level + 1, maxLevel);
            }
            saveProgress();
            updateProgressUI();
        }
    }

    function showView(viewId) {
        [learningPathView, lessonView, profileView].forEach(view => view.classList.toggle('hidden', view.id !== viewId));
        navItems.forEach(item => {
            const active = item.dataset.view === viewId || (viewId === 'lesson-view' && item.dataset.view === 'learning-path-view');
            item.classList.toggle('active', active);
            if (active) item.setAttribute('aria-current', 'page');
            else item.removeAttribute('aria-current');
        });
        if (viewId === 'learning-path-view') renderLearningPath();
        updateProgressUI();
    }

    function handleSwipeNavigation() {
        let startX = 0;
        let startY = 0;
        let tracking = false;

        lessonView.addEventListener('touchstart', event => {
            const target = event.target;
            if (target.closest('button, input, label, form')) {
                tracking = false;
                return;
            }
            const touch = event.changedTouches[0];
            startX = touch.clientX;
            startY = touch.clientY;
            tracking = true;
        }, { passive: true });

        lessonView.addEventListener('touchend', event => {
            if (!tracking) return;
            tracking = false;
            const touch = event.changedTouches[0];
            const deltaX = touch.clientX - startX;
            const deltaY = touch.clientY - startY;
            if (Math.abs(deltaX) < 85 || Math.abs(deltaX) < Math.abs(deltaY) * 1.35) return;

            if (deltaX > 0) {
                showView('learning-path-view');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            const nextIndex = lessonsData.findIndex((lesson, index) => index > currentLessonIndex && !isLessonLocked(lesson));
            if (nextIndex !== -1) showLesson(nextIndex);
            else showToast('ไม่มีบทเรียนถัดไปที่ปลดล็อกแล้ว');
        }, { passive: true });
    }

    function setupInstallPrompt() {
        window.addEventListener('beforeinstallprompt', event => {
            event.preventDefault();
            deferredInstallPrompt = event;
            installButton.classList.remove('hidden');
        });

        installButton.addEventListener('click', async () => {
            if (!deferredInstallPrompt) return;
            deferredInstallPrompt.prompt();
            await deferredInstallPrompt.userChoice;
            deferredInstallPrompt = null;
            installButton.classList.add('hidden');
        });

        window.addEventListener('appinstalled', () => {
            installButton.classList.add('hidden');
            showToast('ติดตั้งแอปเรียบร้อยแล้ว 🎉');
        });
    }

    function setupConnectivityMessages() {
        window.addEventListener('offline', () => showToast('ออฟไลน์อยู่ — ยังเรียนต่อได้จากข้อมูลที่บันทึกไว้'));
        window.addEventListener('online', () => showToast('กลับมาออนไลน์แล้ว'));
    }

    quizForm.addEventListener('submit', handleSubmitQuiz);
    backToPathBtn.addEventListener('click', () => showView('learning-path-view'));
    nextLessonBtn.addEventListener('click', () => showView('learning-path-view'));
    navItems.forEach(item => item.addEventListener('click', () => showView(item.dataset.view)));

    loadProgress();
    updateProgressUI();
    renderLearningPath();
    handleSwipeNavigation();
    setupInstallPrompt();
    setupConnectivityMessages();

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./service-worker.js').catch(error => {
                console.warn('Offline support could not be enabled.', error);
            });
        });
    }
});
