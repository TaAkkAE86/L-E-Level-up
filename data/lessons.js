// data/lessons.js

const lessonsData = [
    // --- LEVEL 1 ---
    {
        id: "L1_1",
        level: 1,
        title: "Introduction & Greetings",
        description: "เรียนรู้การทักทายและแนะนำตัวในที่ทำงาน",
        vocab: [
            { word: "Colleague", meaning: "เพื่อนร่วมงาน" },
            { word: "Meeting", meaning: "การประชุม" },
            { word: "Agenda", meaning: "วาระการประชุม" },
        ],
        quiz: [
            {
                question: "คำว่า 'เพื่อนร่วมงาน' ภาษาอังกฤษคืออะไร?",
                type: "multiple-choice",
                options: ["Client", "Colleague", "Manager"],
                answer: "Colleague"
            },
            {
                question: "Please fill in the blank: We need to prepare the ___ for the meeting.",
                type: "fill-in-the-blank",
                answer: "Agenda"
            }
        ]
    },
    {
        id: "L1_2",
        level: 1,
        title: "Writing a Simple Email",
        description: "เรียนรู้โครงสร้างและวลีที่ใช้ในอีเมลธุรกิจเบื้องต้น",
        vocab: [
            { word: "Subject", meaning: "หัวข้อเรื่อง" },
            { word: "Attachment", meaning: "ไฟล์แนบ" },
            { word: "Sincerely", meaning: "ขอแสดงความนับถือ" },
        ],
        quiz: [
            {
                question: "ส่วนที่บอกว่าอีเมลเกี่ยวกับอะไรคือส่วนไหน?",
                type: "multiple-choice",
                options: ["Attachment", "Body", "Subject"],
                answer: "Subject"
            },
            {
                question: "ถ้าต้องการส่งไฟล์ไปพร้อมกับอีเมล ต้องใช้ฟังก์ชันอะไร?",
                type: "multiple-choice",
                options: ["Forward", "Reply", "Attachment"],
                answer: "Attachment"
            }
        ]
    },
    // --- LEVEL 2 ---
    {
        id: "L2_1",
        level: 2,
        title: "Participating in a Meeting",
        description: "วลีสำคัญที่ใช้ในการแสดงความคิดเห็นและถามคำถามในการประชุม",
        vocab: [
            { word: "Opinion", meaning: "ความคิดเห็น" },
            { word: "Suggestion", meaning: "ข้อเสนอแนะ" },
            { word: "Agree", meaning: "เห็นด้วย" },
        ],
        quiz: [
            {
                question: "If you want to share your idea, you are giving your ___.",
                type: "fill-in-the-blank",
                answer: "Opinion"
            }
        ]
    }
];
