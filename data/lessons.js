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
    },
    
    // ================= LEVEL 4: Management & Leadership =================
    {
        id: "L4_1",
        level: 4,
        title: "Delegating Tasks Effectively",
        description: "เรียนรู้วิธีมอบหมายงานให้ทีมอย่างชัดเจนและมีประสิทธิภาพ",
        vocab: [
            { word: "Delegate", meaning: "มอบหมายงาน" },
            { word: "Responsibility", meaning: "ความรับผิดชอบ" },
            { word: "Autonomy", meaning: "ความเป็นอิสระในการทำงาน" },
            { word: "Deadline", meaning: "กำหนดส่งงาน" },
        ],
        quiz: [
            { question: "To give a task to someone else is to ___ it.", type: "fill-in-the-blank", answer: "Delegate" },
            { question: "The final date to complete a task is the ___.", type: "multiple-choice", options: ["Start date", "Deadline", "Meeting"], answer: "Deadline" }
        ]
    },
    {
        id: "L4_2",
        level: 4,
        title: "Motivating a Team",
        description: "สำรวจเทคนิคและวลีที่ใช้ในการสร้างแรงจูงใจและให้กำลังใจทีม",
        vocab: [
            { word: "Motivation", meaning: "แรงจูงใจ" },
            { word: "Encourage", meaning: "ให้กำลังใจ, สนับสนุน" },
            { word: "Recognition", meaning: "การยอมรับและชื่นชม" },
            { word: "Incentive", meaning: "สิ่งจูงใจ, รางวัล" },
        ],
        quiz: [
            { question: "Giving praise for good work is a form of ___.", type: "fill-in-the-blank", answer: "Recognition" },
            { question: "A bonus for good performance is an ___.", type: "fill-in-the-blank", answer: "Incentive" }
        ]
    },
    {
        id: "L4_3",
        level: 4,
        title: "Conducting Performance Reviews",
        description: "การประเมินผลการปฏิบัติงาน, การให้ฟีดแบค และการตั้งเป้าหมาย",
        vocab: [
            { word: "Performance", meaning: "ผลการปฏิบัติงาน" },
            { word: "Review", meaning: "การประเมิน, การทบทวน" },
            { word: "Objective", meaning: "วัตถุประสงค์, เป้าหมาย" },
            { word: "Assessment", meaning: "การประเมินผล" },
        ],
        quiz: [
            { question: "Another word for a goal is an ___.", type: "fill-in-the-blank", answer: "Objective" },
            { question: "A formal meeting to discuss an employee's work is a performance ___.", type: "multiple-choice", options: ["Party", "Review", "Holiday"], answer: "Review" }
        ]
    },
    {
        id: "L4_4",
        level: 4,
        title: "Conflict Resolution",
        description: "กลยุทธ์และภาษาที่ใช้ในการจัดการและแก้ไขความขัดแย้งในทีม",
        vocab: [
            { word: "Conflict", meaning: "ความขัดแย้ง" },
            { word: "Resolution", meaning: "การแก้ไขปัญหา" },
            { word: "Mediation", meaning: "การไกล่เกลี่ย" },
            { word: "Neutral", meaning: "เป็นกลาง" },
        ],
        quiz: [
            { question: "The process of solving a disagreement is conflict ___.", type: "fill-in-the-blank", answer: "Resolution" },
            { question: "A person who helps solve a conflict without taking sides is ___.", type: "fill-in-the-blank", answer: "Neutral" }
        ]
    },
    {
        id: "L4_5",
        level: 4,
        title: "Project Management Basics",
        description: "คำศัพท์พื้นฐานที่ใช้ในการบริหารจัดการโครงการ",
        vocab: [
            { word: "Milestone", meaning: "เหตุการณ์สำคัญในโครงการ" },
            { word: "Scope", meaning: "ขอบเขตของงาน" },
            { word: "Budget", meaning: "งบประมาณ" },
            { word: "Stakeholder", meaning: "ผู้มีส่วนได้ส่วนเสีย" },
        ],
        quiz: [
            { question: "The total money available for a project is the ___.", type: "fill-in-the-blank", answer: "Budget" },
            { question: "An important achievement or event in a project is a ___.", type: "multiple-choice", options: ["Task", "Milestone", "Meeting"], answer: "Milestone" }
        ]
    },
    {
        id: "L4_6",
        level: 4,
        title: "Running Effective Meetings",
        description: "วิธีดำเนินการประชุมให้มีประสิทธิภาพ, ตรงประเด็น, และได้ข้อสรุป",
        vocab: [
            { word: "Facilitator", meaning: "ผู้อำนวยความสะดวกในการประชุม" },
            { word: "Minutes", meaning: "รายงานการประชุม" },
            { word: "Action items", meaning: "รายการสิ่งที่ต้องทำหลังประชุม" },
            { word: "On track", meaning: "เป็นไปตามแผน" },
        ],
        quiz: [
            { question: "The written record of a meeting is called the ___.", type: "fill-in-the-blank", answer: "Minutes" },
            { question: "Tasks assigned to people during a meeting are ___.", type: "fill-in-the-blank", answer: "Action items" }
        ]
    },
    {
        id: "L4_7",
        level: 4,
        title: "Cross-Cultural Communication",
        description: "การสื่อสารข้ามวัฒนธรรมและการตระหนักถึงความแตกต่าง",
        vocab: [
            { word: "Culture", meaning: "วัฒนธรรม" },
            { word: "Awareness", meaning: "ความตระหนักรู้" },
            { word: "Etiquette", meaning: "มารยาททางสังคม" },
            { word: "Hierarchy", meaning: "ลำดับชั้น, โครงสร้างอำนาจ" },
        ],
        quiz: [
            { question: "Understanding different ways of doing things in other countries is cultural ___.", type: "fill-in-the-blank", answer: "Awareness" },
            { question: "The rules of polite behavior in a society or company is ___.", type: "multiple-choice", options: ["Law", "Etiquette", "Report"], answer: "Etiquette" }
        ]
    },
    {
        id: "L4_8",
        level: 4,
        title: "Business Ethics",
        description: "คำศัพท์ที่เกี่ยวข้องกับจริยธรรมทางธุรกิจและความโปร่งใส",
        vocab: [
            { word: "Ethics", meaning: "จริยธรรม" },
            { word: "Integrity", meaning: "ความซื่อสัตย์, การยึดมั่นในหลักการ" },
            { word: "Transparency", meaning: "ความโปร่งใส" },
            { word: "Accountability", meaning: "ความรับผิดชอบที่ตรวจสอบได้" },
        ],
        quiz: [
            { question: "Moral principles that govern a person's behavior are called ___.", type: "fill-in-the-blank", answer: "Ethics" },
            { question: "Being open and honest is a sign of ___.", type: "fill-in-the-blank", answer: "Transparency" }
        ]
    },
    {
        id: "L4_9",
        level: 4,
        title: "Giving a Project Update",
        description: "การรายงานความคืบหน้าของโครงการอย่างกระชับและชัดเจน",
        vocab: [
            { word: "Progress", meaning: "ความคืบหน้า" },
            { word: "Challenge", meaning: "ความท้าทาย, อุปสรรค" },
            { word: "On schedule", meaning: "เป็นไปตามกำหนดเวลา" },
            { word: "Ahead of schedule", meaning: "เร็วกว่ากำหนด" },
        ],
        quiz: [
            { question: "If a project is going as planned, it is ___.", type: "fill-in-the-blank", answer: "On schedule" },
            { question: "A difficult problem you face in a project is a ___.", type: "multiple-choice", options: ["Success", "Milestone", "Challenge"], answer: "Challenge" }
        ]
    },
    {
        id: "L4_10",
        level: 4,
        title: "Strategic Planning Vocabulary",
        description: "คำศัพท์ที่ใช้ในการวางแผนกลยุทธ์และวิเคราะห์ธุรกิจ",
        vocab: [
            { word: "Strategy", meaning: "กลยุทธ์" },
            { word: "Vision", meaning: "วิสัยทัศน์" },
            { word: "Mission", meaning: "พันธกิจ" },
            { word: "SWOT Analysis", meaning: "การวิเคราะห์จุดแข็ง-จุดอ่อน-โอกาส-อุปสรรค" },
        ],
        quiz: [
            { question: "A long-term plan for achieving a goal is a ___.", type: "fill-in-the-blank", answer: "Strategy" },
            { question: "A company's main purpose and reason for existing is its ___.", type: "fill-in-the-blank", answer: "Mission" }
        ]
    },

    // ================= LEVEL 5: Industry-Specific English =================
    {
        id: "L5_1",
        level: 5,
        title: "IT & Technology Terms",
        description: "คำศัพท์เทคโนโลยีสารสนเทศที่พบบ่อยในที่ทำงาน",
        vocab: [
            { word: "Database", meaning: "ฐานข้อมูล" },
            { word: "Cloud computing", meaning: "การประมวลผลแบบคลาวด์" },
            { word: "Bandwidth", meaning: "ความจุของช่องสัญญาณ" },
            { word: "Cybersecurity", meaning: "ความมั่นคงปลอดภัยทางไซเบอร์" },
        ],
        quiz: [
            { question: "Protecting computer systems from theft or damage is ___.", type: "fill-in-the-blank", answer: "Cybersecurity" },
            { question: "Storing data on remote servers accessed from the internet is ___.", type: "multiple-choice", options: ["Local storage", "Cloud computing", "Offline mode"], answer: "Cloud computing" }
        ]
    },
    {
        id: "L5_2",
        level: 5,
        title: "Marketing & Advertising Language",
        description: "ภาษาที่ใช้ในวงการการตลาด, การโฆษณา, และการสร้างแบรนด์",
        vocab: [
            { word: "Brand identity", meaning: "อัตลักษณ์ของแบรนด์" },
            { word: "Target audience", meaning: "กลุ่มเป้าหมาย" },
            { word: "Campaign", meaning: "แคมเปญ, การรณรงค์" },
            { word: "ROI (Return on Investment)", meaning: "ผลตอบแทนจากการลงทุน" },
        ],
        quiz: [
            { question: "The specific group of people you want to reach with your marketing is the ___.", type: "fill-in-the-blank", answer: "Target audience" },
            { question: "A series of organized activities to achieve a marketing goal is a ___.", type: "fill-in-the-blank", answer: "Campaign" }
        ]
    },
    {
        id: "L5_3",
        level: 5,
        title: "Finance & Banking Vocabulary",
        description: "คำศัพท์เฉพาะทางด้านการเงิน, การธนาคาร, และการลงทุน",
        vocab: [
            { word: "Asset", meaning: "สินทรัพย์" },
            { word: "Liability", meaning: "หนี้สิน" },
            { word: "Revenue", meaning: "รายได้" },
            { word: "Profit margin", meaning: "อัตรากำไร" },
        ],
        quiz: [
            { question: "Money that a business earns is its ___.", type: "fill-in-the-blank", answer: "Revenue" },
            { question: "Something of value owned by a company is an ___.", type: "multiple-choice", options: ["Liability", "Asset", "Expense"], answer: "Asset" }
        ]
    },
    {
        id: "L5_4",
        level: 5,
        title: "Sales & Customer Service",
        description: "วลีและสำนวนที่ใช้ในการขาย, การบริการลูกค้า, และการจัดการข้อร้องเรียน",
        vocab: [
            { word: "Lead", meaning: "ผู้ที่คาดว่าจะเป็นลูกค้า" },
            { word: "Prospect", meaning: "ผู้มีแนวโน้มจะเป็นลูกค้า" },
            { word: "Complaint", meaning: "ข้อร้องเรียน" },
            { word: "Customer retention", meaning: "การรักษาลูกค้า" },
        ],
        quiz: [
            { question: "A potential customer is often called a ___.", type: "fill-in-the-blank", answer: "Lead" },
            { question: "Keeping customers loyal and happy is customer ___.", type: "fill-in-the-blank", answer: "Retention" }
        ]
    },
    {
        id: "L5_5",
        level: 5,
        title: "Human Resources (HR) Terminology",
        description: "คำศัพท์ที่เกี่ยวข้องกับฝ่ายบุคคล เช่น การจ้างงาน, สวัสดิการ, และการฝึกอบรม",
        vocab: [
            { word: "Recruitment", meaning: "การสรรหาบุคลากร" },
            { word: "Onboarding", meaning: "การปฐมนิเทศพนักงานใหม่" },
            { word: "Payroll", meaning: "บัญชีเงินเดือน" },
            { word: "Benefits", meaning: "สวัสดิการ" },
        ],
        quiz: [
            { question: "The process of finding and hiring new employees is ___.", type: "fill-in-the-blank", answer: "Recruitment" },
            { question: "The process of integrating a new employee into a company is ___.", type: "multiple-choice", options: ["Recruitment", "Onboarding", "Payroll"], answer: "Onboarding" }
        ]
    },
    {
        id: "L5_6",
        level: 5,
        title: "Logistics & Supply Chain",
        description: "คำศัพท์ในสายงานโลจิสติกส์, ซัพพลายเชน, และการจัดการคลังสินค้า",
        vocab: [
            { word: "Inventory", meaning: "สินค้าคงคลัง" },
            { word: "Warehouse", meaning: "คลังสินค้า" },
            { word: "Shipment", meaning: "การจัดส่งสินค้า" },
            { word: "Procurement", meaning: "ฝ่ายจัดซื้อ, การจัดหา" },
        ],
        quiz: [
            { question: "A large building where goods are stored is a ___.", type: "fill-in-the-blank", answer: "Warehouse" },
            { question: "The goods a business has in stock is its ___.", type: "fill-in-the-blank", answer: "Inventory" }
        ]
    },
    {
        id: "L5_7",
        level: 5,
        title: "Legal English Basics",
        description: "คำศัพท์พื้นฐานทางกฎหมายที่อาจพบเจอในเอกสารสัญญาทางธุรกิจ",
        vocab: [
            { word: "Contract", meaning: "สัญญา" },
            { word: "Clause", meaning: "ข้อ, มาตรา (ในสัญญา)" },
            { word: "Liability", meaning: "ความรับผิดทางกฎหมาย" },
            { word: "Non-disclosure Agreement (NDA)", meaning: "สัญญาห้ามเปิดเผยข้อมูล" },
        ],
        quiz: [
            { question: "A legally binding agreement between two or more parties is a ___.", type: "fill-in-the-blank", answer: "Contract" },
            { question: "A specific point or provision in a contract is a ___.", type: "multiple-choice", options: ["Chapter", "Clause", "Note"], answer: "Clause" }
        ]
    },
    {
        id: "L5_8",
        level: 5,
        title: "Medical & Healthcare Terms",
        description: "คำศัพท์เบื้องต้นที่ใช้ในอุตสาหกรรมการแพทย์และสุขภาพ",
        vocab: [
            { word: "Diagnosis", meaning: "การวินิจฉัยโรค" },
            { word: "Symptom", meaning: "อาการของโรค" },
            { word: "Prescription", meaning: "ใบสั่งยา" },
            { word: "Insurance", meaning: "ประกัน" },
        ],
        quiz: [
            { question: "A doctor's instruction for medicine is a ___.", type: "fill-in-the-blank", answer: "Prescription" },
            { question: "A sign of illness felt by a patient is a ___.", type: "fill-in-the-blank", answer: "Symptom" }
        ]
    },
    {
        id: "L5_9",
        level: 5,
        title: "Real Estate Vocabulary",
        description: "คำศัพท์ในวงการอสังหาริมทรัพย์, การซื้อขาย และการเช่า",
        vocab: [
            { word: "Property", meaning: "อสังหาริมทรัพย์, ทรัพย์สิน" },
            { word: "Mortgage", meaning: "สินเชื่อที่อยู่อาศัย, การจำนอง" },
            { word: "Lease", meaning: "สัญญาเช่า" },
            { word: "Tenant", meaning: "ผู้เช่า" },
        ],
        quiz: [
            { question: "A person who rents a property is a ___.", type: "fill-in-the-blank", answer: "Tenant" },
            { question: "A loan to buy a house is called a ___.", type: "multiple-choice", options: ["Lease", "Mortgage", "Rent"], answer: "Mortgage" }
        ]
    },
    {
        id: "L5_10",
        level: 5,
        title: "Hospitality & Tourism Language",
        description: "คำศัพท์และวลีสำหรับอุตสาหกรรมการบริการ, การโรงแรม, และการท่องเที่ยว",
        vocab: [
            { word: "Reservation", meaning: "การจอง" },
            { word: "Concierge", meaning: "พนักงานอำนวยความสะดวกในโรงแรม" },
            { word: "Amenities", meaning: "สิ่งอำนวยความสะดวก" },
            { word: "Vacancy", meaning: "ห้องว่าง" },
        ],
        quiz: [
            { question: "Services like a swimming pool or gym in a hotel are ___.", type: "fill-in-the-blank", answer: "Amenities" },
            { question: "An arrangement to have a room saved for you is a ___.", type: "fill-in-the-blank", answer: "Reservation" }
        ]
    },

    // ================= LEVEL 6: Advanced & Fluent Communication =================
    {
        id: "L6_1",
        level: 6,
        title: "Idioms & Expressions in Business",
        description: "เรียนรู้สำนวนที่เจ้าของภาษาใช้บ่อยในที่ทำงานเพื่อการสื่อสารที่เป็นธรรมชาติ",
        vocab: [
            { word: "On the same page", meaning: "มีความเข้าใจตรงกัน" },
            { word: "Think outside the box", meaning: "คิดนอกกรอบ" },
            { word: "Cut to the chase", meaning: "เข้าประเด็น, พูดถึงส่วนที่สำคัญที่สุด" },
            { word: "Ball is in your court", meaning: "ถึงตาคุณแล้วที่จะต้องตัดสินใจ/ทำอะไรบางอย่าง" },
        ],
        quiz: [
            { question: "If everyone agrees, they are ___.", type: "fill-in-the-blank", answer: "On the same page" },
            { question: "To think creatively is to ___.", type: "multiple-choice", options: ["Cut to the chase", "Think outside the box", "Play hardball"], answer: "Think outside the box" }
        ]
    },
    {
        id: "L6_2",
        level: 6,
        title: "Debating and Arguing a Point",
        description: "ภาษาที่ใช้ในการโต้แย้ง, การให้เหตุผลสนับสนุน, และการหักล้างอย่างมีหลักการ",
        vocab: [
            { word: "Counterargument", meaning: "ข้อโต้แย้ง" },
            { word: "Evidence", meaning: "หลักฐาน" },
            { word: "Valid point", meaning: "ประเด็นที่มีเหตุผล" },
            { word: "Rebuttal", meaning: "การโต้กลับ, การคัดค้าน" },
        ],
        quiz: [
            { question: "Facts or information that prove something is true are called ___.", type: "fill-in-the-blank", answer: "Evidence" },
            { question: "An argument made to oppose another argument is a ___.", type: "fill-in-the-blank", answer: "Counterargument" }
        ]
    },
    {
        id: "L6_3",
        level: 6,
        title: "Public Speaking & Storytelling",
        description: "เทคนิคการพูดในที่สาธารณะและการเล่าเรื่องเพื่อดึงดูดผู้ฟัง",
        vocab: [
            { word: "Engage", meaning: "ดึงดูด, ทำให้มีส่วนร่วม" },
            { word: "Audience", meaning: "ผู้ฟัง, ผู้ชม" },
            { word: "Anecdote", meaning: "เรื่องราวสั้นๆ" },
            { word: "Body language", meaning: "ภาษากาย" },
        ],
        quiz: [
            { question: "A short, personal story used to make a point is an ___.", type: "fill-in-the-blank", answer: "Anecdote" },
            { question: "Non-verbal communication using your hands and posture is ___.", type: "multiple-choice", options: ["Speech", "Anecdote", "Body language"], answer: "Body language" }
        ]
    },
    {
        id: "L6_4",
        level: 6,
        title: "Writing Complex Proposals",
        description: "การเขียนข้อเสนอโครงการที่ซับซ้อนอย่างมืออาชีพและน่าเชื่อถือ",
        vocab: [
            { word: "Feasibility", meaning: "ความเป็นไปได้" },
            { word: "Deliverables", meaning: "ผลงานที่ต้องส่งมอบ" },
            { word: "Methodology", meaning: "ระเบียบวิธี, วิธีการดำเนินการ" },
            { word: "Timeline", meaning: "กรอบเวลา" },
        ],
        quiz: [
            { question: "The specific products or services you will provide are the ___.", type: "fill-in-the-blank", answer: "Deliverables" },
            { question: "The study of whether a plan can be successful is a ___ study.", type: "fill-in-the-blank", answer: "Feasibility" }
        ]
    },
    {
        id: "L6_5",
        level: 6,
        title: "Understanding Nuance and Tone",
        description: "การทำความเข้าใจความหมายแฝงและน้ำเสียงในการสื่อสารภาษาอังกฤษ",
        vocab: [
            { word: "Nuance", meaning: "ความแตกต่างเล็กน้อย (ในความหมาย, สีหน้า, อารมณ์)" },
            { word: "Tone", meaning: "น้ำเสียง" },
            { word: "Sarcasm", meaning: "การประชดประชัน" },
            { word: "Diplomatic", meaning: "มีชั้นเชิงทางการทูต, นุ่มนวล" },
        ],
        quiz: [
            { question: "A subtle difference in meaning is a ___.", type: "fill-in-the-blank", answer: "Nuance" },
            { question: "Speaking in a careful way to avoid offending someone is being ___.", type: "multiple-choice", options: ["Sarcastic", "Direct", "Diplomatic"], answer: "Diplomatic" }
        ]
    },
    {
        id: "L6_6",
        level: 6,
        title: "Socializing with International Clients",
        description: "การเข้าสังคมกับลูกค้านานาชาติ, การสร้างความประทับใจ, และมารยาทบนโต๊ะอาหาร",
        vocab: [
            { word: "Rapport", meaning: "ความสัมพันธ์ที่ดีและเป็นมิตร" },
            { word: "Hospitality", meaning: "การต้อนรับขับสู้" },
            { word: "Customs", meaning: "ขนบธรรมเนียมประเพณี" },
            { word: "Toast", meaning: "การดื่มอวยพร" },
        ],
        quiz: [
            { question: "Building a friendly relationship with someone is building ___.", type: "fill-in-the-blank", answer: "Rapport" },
            { question: "Friendly and generous reception of guests is ___.", type: "fill-in-the-blank", answer: "Hospitality" }
        ]
    },
    {
        id: "L6_7",
        level: 6,
        title: "Advanced Negotiation Tactics",
        description: "กลยุทธ์การเจรจาต่อรองขั้นสูง เช่น win-win, BATNA",
        vocab: [
            { word: "BATNA", meaning: "ทางเลือกที่ดีที่สุดเมื่อการเจรจาล้มเหลว" },
            { word: "Win-win", meaning: "สถานการณ์ที่ทั้งสองฝ่ายได้ประโยชน์" },
            { word: "Concession", meaning: "การยอมให้, ข้อผ่อนปรน" },
            { word: "Stalemate", meaning: "ภาวะชะงักงัน, การเจรจาหยุดนิ่ง" },
        ],
        quiz: [
            { question: "A situation where both parties benefit is a ___ situation.", type: "fill-in-the-blank", answer: "Win-win" },
            { question: "Something you agree to give up during a negotiation is a ___.", type: "multiple-choice", options: ["Demand", "Concession", "BATNA"], answer: "Concession" }
        ]
    },
    {
        id: "L6_8",
        level: 6,
        title: "Critical Thinking & Problem Solving",
        description: "ภาษาที่ใช้ในการวิเคราะห์ปัญหา, ประเมินทางเลือก, และเสนอวิธีแก้ปัญหา",
        vocab: [
            { word: "Analyze", meaning: "วิเคราะห์" },
            { word: "Assumption", meaning: "สมมติฐาน" },
            { word: "Root cause", meaning: "ต้นตอของปัญหา" },
            { word: "Pros and cons", meaning: "ข้อดีและข้อเสีย" },
        ],
        quiz: [
            { question: "The most basic cause of a problem is the ___.", type: "fill-in-the-blank", answer: "Root cause" },
            { question: "To examine something in detail is to ___ it.", type: "fill-in-the-blank", answer: "Analyze" }
        ]
    },
    {
        id: "L6_9",
        level: 6,
        title: "Discussing Global Economic Trends",
        description: "คำศัพท์ที่ใช้ในการพูดคุยเกี่ยวกับแนวโน้มเศรษฐกิจโลก",
        vocab: [
            { word: "Globalization", meaning: "โลกาภิวัตน์" },
            { word: "Emerging market", meaning: "ตลาดเกิดใหม่" },
            { word: "Recession", meaning: "ภาวะเศรษฐกิจถดถอย" },
            { word: "Inflation", meaning: "ภาวะเงินเฟ้อ" },
        ],
        quiz: [
            { question: "A period of economic decline is a ___.", type: "fill-in-the-blank", answer: "Recession" },
            { question: "The rate at which prices are rising is ___.", type: "multiple-choice", options: ["Globalization", "Inflation", "Recession"], answer: "Inflation" }
        ]
    },
    {
        id: "L6_10",
        level: 6,
        title: "Polishing Your Professional Persona",
        description: "การขัดเกลาภาพลักษณ์, การสื่อสาร, และการนำเสนอตัวเองในระดับสากล",
        vocab: [
            { word: "Persona", meaning: "ภาพลักษณ์ที่แสดงต่อสาธารณะ" },
            { word: "Articulate", meaning: "พูดจาฉะฉานชัดเจน" },
            { word: "Composure", meaning: "ความสงบ, การควบคุมอารมณ์" },
            { word: "Credibility", meaning: "ความน่าเชื่อถือ" },
        ],
        quiz: [
            { question: "Your professional image or character is your ___.", type: "fill-in-the-blank", answer: "Persona" },
            { question: "The quality of being trusted and believed in is ___.", type: "fill-in-the-blank", answer: "Credibility" }
        ]
    }
];

