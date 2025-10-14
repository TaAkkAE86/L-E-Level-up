// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    
    // --- STATE MANAGEMENT ---
    let userProgress = {
        level: 1,
        points: 0,
        completedLessons: [] // Array of lesson IDs
    };
    
    let currentLessonIndex = -1;

    // --- DOM ELEMENTS (เหมือนเดิม) ---
    const userLevelEl = document.getElementById('user-level');
    const userPointsEl = document.getElementById('user-points');
    const levelsContainer = document.getElementById('levels-container');
    const learningPathView = document.getElementById('learning-path-view');
    const lessonView = document.getElementById('lesson-view');
    const backToPathBtn = document.getElementById('back-to-path-btn');
    
    const lessonTitle = document.getElementById('lesson-title');
    const lessonDescription = document.getElementById('lesson-description');
    const vocabList = document.getElementById('vocab-list');
    
    const quizForm = document.getElementById('quiz-form');
    const submitQuizBtn = document.getElementById('submit-quiz-btn');
    const quizResult = document.getElementById('quiz-result');
    const resultMessage = document.getElementById('result-message');
    const nextLessonBtn = document.getElementById('next-lesson-btn');

    // --- FUNCTIONS ---

    function saveProgress() {
        localStorage.setItem('englishForWorkProgress', JSON.stringify(userProgress));
    }

    function loadProgress() {
        const savedData = localStorage.getItem('englishForWorkProgress');
        if (savedData) {
            userProgress = JSON.parse(savedData);
        }
    }

    function updateHeaderStats() {
        userLevelEl.textContent = userProgress.level;
        userPointsEl.textContent = userProgress.points;
    }

    // --- [ปรับปรุง 1] สร้างฟังก์ชันใหม่สำหรับตรวจสอบเงื่อนไขการล็อก ---
    // ฟังก์ชันนี้จะตรวจสอบว่าบทเรียนควรถูกล็อกหรือไม่
    function isLessonLocked(lesson) {
        if (lesson.level === 1) {
            return false; // บทเรียนใน Level 1 จะไม่ถูกล็อก
        }

        // หาบทเรียนทั้งหมดที่อยู่ใน Level ก่อนหน้า
        const previousLevel = lesson.level - 1;
        const requiredLessons = lessonsData.filter(l => l.level === previousLevel);
        
        // ตรวจสอบว่าบทเรียนที่จำเป็นทั้งหมด (requiredLessons) อยู่ในรายการที่เรียนจบแล้ว (completedLessons) หรือไม่
        // .every() จะคืนค่า true ก็ต่อเมื่อทุกรายการใน array เป็นจริงทั้งหมด
        const allPreviousLessonsCompleted = requiredLessons.every(requiredLesson => 
            userProgress.completedLessons.includes(requiredLesson.id)
        );

        return !allPreviousLessonsCompleted; // ถ้าเรียนจบหมดแล้ว => ไม่ล็อก (false), ถ้ายังไม่จบ => ล็อก (true)
    }

    function renderLearningPath() {
        levelsContainer.innerHTML = '';

        lessonsData.forEach((lesson, index) => {
            const isCompleted = userProgress.completedLessons.includes(lesson.id);
            // --- [ปรับปรุง 2] ใช้ฟังก์ชัน isLessonLocked() ใหม่ ---
            const isLocked = isLessonLocked(lesson);

            const lessonCard = document.createElement('div');
            lessonCard.className = 'lesson-card';
            
            let statusIcon = '🔒';
            let cardStatusClass = 'locked';

            if (isCompleted) {
                statusIcon = '✅';
                cardStatusClass = 'completed';
            } else if (!isLocked) {
                statusIcon = '📖';
                cardStatusClass = 'unlocked';
            }
            
            lessonCard.classList.add(cardStatusClass);
            lessonCard.innerHTML = `<span class="status-icon">${statusIcon}</span> <div><b>Level ${lesson.level}: ${lesson.title}</b><br>${lesson.description}</div>`;

            if (!isLocked) {
                lessonCard.addEventListener('click', () => showLesson(index));
            }
            levelsContainer.appendChild(lessonCard);
        });
    }
    
    // --- [ลบออก] ฟังก์ชันนี้ไม่จำเป็นอีกต่อไป เพราะเรามี isLessonLocked() ที่ดีกว่า ---
    /*
    function findLastUnlockedLessonIndex() {
        if (userProgress.completedLessons.length === 0) return 0;
        
        const lastCompletedId = userProgress.completedLessons[userProgress.completedLessons.length - 1];
        const lastCompletedIndex = lessonsData.findIndex(l => l.id === lastCompletedId);
        
        return Math.min(lastCompletedIndex + 1, lessonsData.length - 1);
    }
    */

    function showLesson(lessonIndex) {
        currentLessonIndex = lessonIndex;
        const lesson = lessonsData[lessonIndex];

        lessonTitle.textContent = lesson.title;
        lessonDescription.textContent = lesson.description;
        vocabList.innerHTML = '';
        lesson.vocab.forEach(v => {
            const li = document.createElement('li');
            li.innerHTML = `<b>${v.word}</b>: ${v.meaning}`;
            vocabList.appendChild(li);
        });

        renderQuiz(lesson.quiz);
        
        learningPathView.classList.add('hidden');
        lessonView.classList.remove('hidden');
        quizResult.classList.add('hidden');
        submitQuizBtn.classList.remove('hidden');
    }

    function renderQuiz(quizData) {
        quizForm.innerHTML = '';
        quizData.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'quiz-question';
            
            let questionHTML = `<p>${index + 1}. ${q.question}</p>`;
            if (q.type === 'multiple-choice') {
                q.options.forEach(opt => {
                    questionHTML += `<label><input type="radio" name="q${index}" value="${opt}" required> ${opt}</label>`;
                });
            } else if (q.type === 'fill-in-the-blank') {
                questionHTML += `<input type="text" name="q${index}" autocomplete="off" required>`;
            }
            
            questionDiv.innerHTML = questionHTML;
            quizForm.appendChild(questionDiv);
        });
    }

    function handleSubmitQuiz(event) {
        event.preventDefault();
        const lesson = lessonsData[currentLessonIndex];
        const formData = new FormData(quizForm);
        let score = 0;
        
        lesson.quiz.forEach((q, index) => {
            const userAnswer = formData.get(`q${index}`).trim();
            if (userAnswer.toLowerCase() === q.answer.toLowerCase()) {
                score++;
            }
        });

        const isCorrect = score === lesson.quiz.length;
        showQuizResult(isCorrect);

        if (isCorrect && !userProgress.completedLessons.includes(lesson.id)) {
            userProgress.completedLessons.push(lesson.id);
            userProgress.points += 10;

            // --- [ปรับปรุง 3] Logic การเลื่อนระดับใหม่ ---
            // 1. หาว่าใน Level ของบทเรียนที่เพิ่งผ่าน มีบทเรียนทั้งหมดกี่บท
            const lessonsInCurrentLevel = lessonsData.filter(l => l.level === lesson.level);
            // 2. หาว่าบทเรียนที่เรียนจบแล้วใน Level นี้ มีกี่บท
            const completedInCurrentLevel = lessonsInCurrentLevel.filter(l => userProgress.completedLessons.includes(l.id));

            // 3. ถ้าจำนวนบทเรียนที่จบแล้ว เท่ากับจำนวนบทเรียนทั้งหมดใน Level นี้ แสดงว่าจบ Level!
            if (completedInCurrentLevel.length === lessonsInCurrentLevel.length) {
                // เพิ่มระดับของผู้ใช้ แต่ต้องไม่เกินระดับสูงสุดที่มี
                const maxLevel = Math.max(...lessonsData.map(l => l.level));
                if (userProgress.level < maxLevel) {
                    userProgress.level++;
                    console.log(`Congratulations! You've reached Level ${userProgress.level}!`);
                }
            }

            saveProgress();
            updateHeaderStats();
        }
    }
    
    function showQuizResult(isCorrect) {
        quizResult.classList.remove('hidden');
        submitQuizBtn.classList.add('hidden');
        
        if (isCorrect) {
            resultMessage.textContent = 'Excellent! You passed! 🎉';
            quizResult.className = 'correct';
            nextLessonBtn.classList.remove('hidden');
        } else {
            resultMessage.textContent = 'Not quite right. Try again! 💪';
            quizResult.className = 'incorrect';
            nextLessonBtn.classList.add('hidden');
        }
    }
    
    function showLearningPath() {
        learningPathView.classList.remove('hidden');
        lessonView.classList.add('hidden');
        renderLearningPath();
    }

    // --- EVENT LISTENERS (เหมือนเดิม) ---
    quizForm.addEventListener('submit', handleSubmitQuiz);
    backToPathBtn.addEventListener('click', showLearningPath);
    nextLessonBtn.addEventListener('click', showLearningPath);

    // --- INITIALIZATION (เหมือนเดิม) ---
    function init() {
        loadProgress();
        updateHeaderStats();
        showLearningPath();
    }

    init();
});
