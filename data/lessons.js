// data/lessons.js

const lessonsData = [
    // ================= LEVEL 1: Business English Foundations =================
    {
        id: "L1_1",
        level: 1,
        title: "Greetings & Introductions",
        description: "การทักทายและแนะนำตัวในสถานการณ์ที่เป็นทางการและไม่เป็นทางการ",
        vocab: [
            { word: "Colleague", meaning: "เพื่อนร่วมงาน" },
            { word: "Client", meaning: "ลูกค้า" },
            { word: "Formal", meaning: "เป็นทางการ" },
            { word: "Informal", meaning: "ไม่เป็นทางการ" },
        ],
        quiz: [
            { question: "A person you work with is your ___.", type: "fill-in-the-blank", answer: "Colleague" },
            { question: "คำตรงข้ามของ 'Formal' คืออะไร?", type: "multiple-choice", options: ["Casual", "Informal", "Official"], answer: "Informal" }
        ]
    },
    {
        id: "L1_2",
        level: 1,
        title: "Basic Email Writing",
        description: "เรียนรู้โครงสร้างและวลีที่จำเป็นสำหรับการเขียนอีเมลธุรกิจ",
        vocab: [
            { word: "Subject", meaning: "หัวข้อเรื่อง" },
            { word: "Attachment", meaning: "ไฟล์แนบ" },
            { word: "Sincerely", meaning: "ขอแสดงความนับถือ" },
            { word: "Recipient", meaning: "ผู้รับ" },
        ],
        quiz: [
            { question: "ไฟล์ที่ส่งไปพร้อมกับอีเมลเรียกว่าอะไร?", type: "multiple-choice", options: ["Copy", "Attachment", "Subject"], answer: "Attachment" },
            { question: "The person who receives the email is the ___.", type: "fill-in-the-blank", answer: "Recipient" }
        ]
    },
    {
        id: "L1_3",
        level: 1,
        title: "Making Small Talk",
        description: "วิธีเริ่มต้นบทสนทนาสั้นๆ กับเพื่อนร่วมงานเพื่อสร้างความสัมพันธ์",
        vocab: [
            { word: "Weather", meaning: "สภาพอากาศ" },
            { word: "Weekend", meaning: "สุดสัปดาห์" },
            { word: "Hobby", meaning: "งานอดิเรก" },
            { word: "Commute", meaning: "การเดินทางไปทำงาน" },
        ],
        quiz: [
            { question: "What did you do over the ___?", type: "fill-in-the-blank", answer: "Weekend" },
            { question: "หัวข้อใดที่ปลอดภัยสำหรับการชวนคุย (small talk)?", type: "multiple-choice", options: ["Salary", "Politics", "Weather"], answer: "Weather" }
        ]
    },
    {
        id: "L1_4",
        level: 1,
        title: "Scheduling & Appointments",
        description: "การนัดหมาย, เลื่อนนัด, และยกเลิกนัดหมายผ่านอีเมลและโทรศัพท์",
        vocab: [
            { word: "Schedule", meaning: "กำหนดการ, ตารางเวลา" },
            { word: "Available", meaning: "ว่าง, สะดวก" },
            { word: "Postpone", meaning: "เลื่อนออกไป" },
            { word: "Cancel", meaning: "ยกเลิก" },
        ],
        quiz: [
            { question: "If you are not busy, you are ___.", type: "fill-in-the-blank", answer: "Available" },
            { question: "To move a meeting to a later time is to ___ it.", type: "multiple-choice", options: ["Cancel", "Schedule", "Postpone"], answer: "Postpone" }
        ]
    },
    {
        id: "L1_5",
        level: 1,
        title: "Asking for Clarification",
        description: "วลีที่ใช้เมื่อคุณไม่เข้าใจและต้องการให้คู่สนทนาอธิบายเพิ่มเติม",
        vocab: [
            { word: "Clarification", meaning: "การทำให้กระจ่าง" },
            { word: "Repeat", meaning: "พูดซ้ำ" },
            { word: "Mean", meaning: "หมายความว่า" },
            { word: "Could you explain", meaning: "คุณช่วยอธิบายได้ไหม" },
        ],
        quiz: [
            { question: "Sorry, I don't understand. Could you ___ that, please?", type: "fill-in-the-blank", answer: "Repeat" },
            { question: "What does this word ___?", type: "fill-in-the-blank", answer: "Mean" }
        ]
    },

    // ================= LEVEL 2: Active Business Communication =================
    {
        id: "L2_1",
        level: 2,
        title: "Participating in Meetings",
        description: "การแสดงความคิดเห็น, การเห็นด้วยและไม่เห็นด้วยอย่างสุภาพ",
        vocab: [
            { word: "Opinion", meaning: "ความคิดเห็น" },
            { word: "Suggestion", meaning: "ข้อเสนอแนะ" },
            { word: "I agree", meaning: "ฉันเห็นด้วย" },
            { word: "I disagree", meaning: "ฉันไม่เห็นด้วย" },
        ],
        quiz: [
            { question: "In my ___, we should focus on marketing.", type: "fill-in-the-blank", answer: "Opinion" },
            { question: "A helpful idea you give to someone is a ___.", type: "multiple-choice", options: ["Problem", "Suggestion", "Demand"], answer: "Suggestion" }
        ]
    },
    {
        id: "L2_2",
        level: 2,
        title: "Giving Short Presentations",
        description: "โครงสร้างและวลีสำคัญสำหรับการนำเสนอสั้นๆ เช่น การแนะนำหัวข้อ, การลำดับเนื้อหา",
        vocab: [
            { word: "Introduction", meaning: "บทนำ" },
            { word: "Main points", meaning: "ประเด็นหลัก" },
            { word: "Conclusion", meaning: "บทสรุป" },
            { word: "To summarize", meaning: "เพื่อสรุป" },
        ],
        quiz: [
            { question: "The beginning of a presentation is the ___.", type: "fill-in-the-blank", answer: "Introduction" },
            { question: "The final part of a presentation is the ___.", type: "fill-in-the-blank", answer: "Conclusion" }
        ]
    },
    {
        id: "L2_3",
        level: 2,
        title: "Handling Phone Calls",
        description: "การรับสาย, การโอนสาย, และการรับฝากข้อความทางโทรศัพท์อย่างมืออาชีพ",
        vocab: [
            { word: "Hold on", meaning: "ถือสายรอสักครู่" },
            { word: "Transfer", meaning: "โอนสาย" },
            { word: "Leave a message", meaning: "ฝากข้อความ" },
            { word: "Extension", meaning: "เบอร์ต่อ" },
        ],
        quiz: [
            { question: "Could you ___ me to the HR department?", type: "fill-in-the-blank", answer: "Transfer" },
            { question: "He's not at his desk. Would you like to ___?", type: "multiple-choice", options: ["Hang up", "Leave a message", "Call back"], answer: "Leave a message" }
        ]
    },
    {
        id: "L2_4",
        level: 2,
        title: "Talking about Numbers & Data",
        description: "คำศัพท์และวิธีพูดเกี่ยวกับตัวเลข, สถิติ, และกราฟเบื้องต้น",
        vocab: [
            { word: "Increase", meaning: "เพิ่มขึ้น" },
            { word: "Decrease", meaning: "ลดลง" },
            { word: "Approximately", meaning: "ประมาณ" },
            { word: "Chart", meaning: "แผนภูมิ, กราฟ" },
        ],
        quiz: [
            { question: "Sales went up. This means sales ___.", type: "fill-in-the-blank", answer: "Increase" },
            { question: "The opposite of 'increase' is ___.", type: "fill-in-the-blank", answer: "Decrease" }
        ]
    },
    {
        id: "L2_5",
        level: 2,
        title: "Business Travel Vocabulary",
        description: "คำศัพท์ที่จำเป็นสำหรับการเดินทางเพื่อธุรกิจ เช่น การจองตั๋ว, โรงแรม",
        vocab: [
            { word: "Booking", meaning: "การจอง" },
            { word: "Itinerary", meaning: "แผนการเดินทาง" },
            { word: "Accommodation", meaning: "ที่พัก" },
            { word: "Round trip", meaning: "การเดินทางไป-กลับ" },
        ],
        quiz: [
            { question: "Your detailed plan for a journey is your ___.", type: "fill-in-the-blank", answer: "Itinerary" },
            { question: "A flight to a place and back again is called a ___ ticket.", type: "multiple-choice", options: ["One-way", "Round trip", "Single"], answer: "Round trip" }
        ]
    },
    // ================= LEVEL 3: Advanced Professional Skills =================
    {
        id: "L3_1",
        level: 3,
        title: "Negotiating & Persuading",
        description: "เทคนิคและวลีที่ใช้ในการเจรจาต่อรองและโน้มน้าวใจ",
        vocab: [
            { word: "Negotiate", meaning: "เจรจาต่อรอง" },
            { word: "Proposal", meaning: "ข้อเสนอ" },
            { word: "Compromise", meaning: "การประนีประนอม" },
            { word: "Leverage", meaning: "อำนาจต่อรอง, จุดแข็ง" },
        ],
        quiz: [
            { question: "When both sides give up something to agree, it's a ___.", type: "fill-in-the-blank", answer: "Compromise" },
            { question: "A formal offer or plan is a ___.", type: "multiple-choice", options: ["Demand", "Proposal", "Order"], answer: "Proposal" }
        ]
    },
    {
        id: "L3_2",
        level: 3,
        title: "Giving & Receiving Feedback",
        description: "วิธีให้และรับฟีดแบคอย่างสร้างสรรค์และเป็นมืออาชีพ",
        vocab: [
            { word: "Feedback", meaning: "ข้อมูลป้อนกลับ" },
            { word: "Constructive", meaning: "สร้างสรรค์" },
            { word: "Strengths", meaning: "จุดแข็ง" },
            { word: "Weaknesses", meaning: "จุดอ่อน" },
        ],
        quiz: [
            { question: "Good feedback should be helpful and ___.", type: "fill-in-the-blank", answer: "Constructive" },
            { question: "Things you are good at are your ___.", type: "fill-in-the-blank", answer: "Strengths" }
        ]
    },
    {
        id: "L3_3",
        level: 3,
        title: "Writing a Formal Report",
        description: "ส่วนประกอบและภาษาที่ใช้ในการเขียนรายงานธุรกิจที่เป็นทางการ",
        vocab: [
            { word: "Executive Summary", meaning: "บทย่อสำหรับผู้บริหาร" },
            { word: "Findings", meaning: "ผลการวิเคราะห์, สิ่งที่ค้นพบ" },
            { word: "Recommendation", meaning: "ข้อเสนอแนะ" },
            { word: "Appendix", meaning: "ภาคผนวก" },
        ],
        quiz: [
            { question: "A short summary at the start of a report is the ___.", type: "multiple-choice", options: ["Conclusion", "Appendix", "Executive Summary"], answer: "Executive Summary" },
            { question: "Suggestions for future actions are called ___.", type: "fill-in-the-blank", answer: "Recommendation" }
        ]
    },
    {
        id: "L3_4",
        level: 3,
        title: "Networking at Events",
        description: "การสร้างคอนเนคชันในงานอีเวนต์, การแลกนามบัตร, และการติดตามผล",
        vocab: [
            { word: "Networking", meaning: "การสร้างเครือข่าย" },
            { word: "Business card", meaning: "นามบัตร" },
            { word: "Follow up", meaning: "ติดตามผล" },
            { word: "Industry", meaning: "อุตสาหกรรม" },
        ],
        quiz: [
            { question: "After a networking event, it's good to ___ with an email.", type: "fill-in-the-blank", answer: "Follow up" },
            { question: "What ___ do you work in?", type: "fill-in-the-blank", answer: "Industry" }
        ]
    },
    {
        id: "L3_5",
        level: 3,
        title: "Job Interview Skills",
        description: "เตรียมความพร้อมสำหรับคำถามที่พบบ่อยในการสัมภาษณ์งานเป็นภาษาอังกฤษ",
        vocab: [
            { word: "Resume", meaning: "เรซูเม่, ประวัติย่อ" },
            { word: "Qualification", meaning: "คุณสมบัติ" },
            { word: "Experience", meaning: "ประสบการณ์" },
            { word: "Salary expectation", meaning: "เงินเดือนที่คาดหวัง" },
        ],
        quiz: [
            { question: "Your work history is your ___.", type: "multiple-choice", options: ["Hobby", "Experience", "Qualification"], answer: "Experience" },
            { question: "Another word for CV is ___.", type: "fill-in-the-blank", answer: "Resume" }
        ]
    }
];
