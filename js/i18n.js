const translations = {
  en: {
    dir: "ltr",
    lang: "en",
    fontFamily: "'Inter', sans-serif",

    // Navigation
    navAbout: "About",
    navExperience: "Experience",
    navSkills: "Skills",
    navProjects: "Projects",
    navEducation: "Education",
    navContact: "Contact",
    langToggle: "عربي",

    // Hero
    heroGreeting: "Hello, I'm",
    heroName: "Ahmed Saadi",
    heroTyping: [
      "Software Engineer",
      "Backend Engineer",
      "Laravel Specialist",
      "Full-Stack Developer",
    ],
    heroDescription:
      "Experienced software engineer specialized in back-end development, with strong expertise in designing and maintaining scalable, secure, and high-performance applications. Proficient in databases, APIs, and server-side technologies, with hands-on experience in deploying and configuring software solutions on production environments.",
    heroCTA: "View My Work",
    heroContact: "Get In Touch",
    heroDownloadCV: "Download CV",

    // About
    aboutTitle: "About Me",
    aboutSubtitle: "Who I Am",
    aboutText1:
      "Experienced software engineer specialized in back-end development, with strong expertise in designing and maintaining scalable, secure, and high-performance applications.",
    aboutText2:
      "Proficient in databases, APIs, and server-side technologies, with hands-on experience in deploying and configuring software solutions on production environments. Skilled at collaborating with cross-functional teams to deliver reliable systems on time.",
    aboutStat1Value: "3+",
    aboutStat1Label: "Years Experience",
    aboutStat2Value: "5+",
    aboutStat2Label: "Featured Projects",
    aboutStat3Value: "10+",
    aboutStat3Label: "Clients Served",
    aboutStat4Value: "100%",
    aboutStat4Label: "Commitment",

    // Experience
    expTitle: "Experience",
    expSubtitle: "Professional Journey",

    exp1Role: "Backend Engineer | Laravel & PHP",
    exp1Company: "Innovators",
    exp1Date: "Mar 2026 – Present",
    exp1Location: "Remotely",
    exp1Points: [
      "Developed and maintained Laravel applications and client websites, implementing backend features and improving application reliability and maintainability.",
      "Collaborated with clients and cross-functional teams to analyze business requirements and translate them into practical technical solutions.",
      "Developed RESTful APIs and integrated third-party services, including payment gateways, SMS, and email providers, to support application workflows.",
      "Investigated and resolved production issues, optimized application performance, and supported deployments and ongoing backend improvements.",
    ],

    exp2Role: "Full Stack Developer",
    exp2Company: "TaxiF",
    exp2Date: "Dec 2025 – Jun 2026",
    exp2Location: "Remotely",
    exp2Points: [
      "Developed and maintained websites, CMS platforms, ERP modules, monitoring systems, and internal business tools using Laravel.",
      "Developed RESTful APIs and integrated third-party services to support application functionality and business workflows.",
      "Contributed to front-end development, deployments, and production troubleshooting.",
      "Used AI-assisted development tools for implementation and debugging while following engineering best practices.",
    ],

    exp3Role: "Full-Stack Developer",
    exp3Company: "Nobalaa Co",
    exp3Date: "Jun 2024 – Oct 2025",
    exp3Location: "Damascus, Syria",
    exp3Points: [
      "Developed and maintained full-stack web applications using Laravel and modern front-end technologies.",
      "Enhanced existing platforms by implementing new features, integrating APIs, and optimizing database performance.",
      "Managed hosting, server configuration, and deployments, while troubleshooting production issues.",
      "Integrated third-party services and tested API functionality to ensure reliable system operation.",
    ],

    // Skills
    skillsTitle: "Skills",
    skillsSubtitle: "Technical Arsenal",
    skillCat1: "Programming Languages",
    skillCat2: "Frameworks & Libraries",
    skillCat3: "Databases",
    skillCat4: "APIs & Integrations",
    skillCat5: "Testing",
    skillCat6: "Caching & Queues",
    skillCat7: "Tools & Infrastructure",
    skillCat8: "Backend Concepts",
    skillCat9: "Front-End",
    skillCat10: "Languages",
    skillDbOpt: "Database Optimization",
    skillPerfOpt: "Performance Optimization",
    langArabic: "Arabic — Native",
    langEnglish: "English — Conversational",

    // Projects
    projTitle: "Projects",
    projSubtitle: "Featured Work",

    proj1Title: "Enjo — Event Ticketing Platform",
    proj1Desc:
      "A comprehensive event and ticketing platform built with Laravel 11, serving customers, suppliers, and CMS administrators with third-party payment gateway integrations.",
    proj1Points: [
      "Built a multi-role API system with separate route layers for customers, suppliers, and CMS admins",
      "Integrated third-party payment gateways to support secure online payment processing",
      "Developed PDF ticket generation with QR codes for event entry validation",
      "Designed service-layer architecture with custom query builders for API filtering and pagination",
      "Containerized the application with Docker (PHP-FPM, Nginx, MySQL, Redis, Queue Worker)",
    ],
    proj1Tags: ["Laravel 11", "Stripe", "Docker", "REST API", "MySQL", "Redis"],

    proj2Title: "Enterprise Content Management System (CMS)",
    proj2Desc:
      "Centralized CMS platform enabling administrators to manage website content, pages, menus, media, and SEO metadata through a dynamic dashboard.",
    proj2Points: [
      "Developed a centralized CMS for managing pages, articles, menus, media, and SEO metadata without code changes.",
      "Implemented role-based access control and reusable components to support multiple websites.",
      "Integrated file management and optimized application performance and maintainability.",
    ],
    proj2Tags: ["Laravel", "CMS", "RBAC", "SEO", "Media Management"],

    proj3Title: "Employee Monitoring & Remote Desktop Platform",
    proj3Desc:
      "Enterprise monitoring platform for Windows remote desktop environments, built with a .NET agent, Go backend, and Next.js dashboard.",
    proj3Points: [
      "Contributed to an enterprise monitoring platform built with a .NET agent, Go backend, and Next.js dashboard.",
      "Developed activity monitoring features, configurable recording policies, real-time session viewing, and idle alerts.",
      "Supported implementation and debugging using AI-assisted development tools while following engineering practices.",
    ],
    proj3Tags: [".NET", "Go", "Next.js", "Real-Time Monitoring", "AI-Assisted"],

    proj4Title: "E-commerce Marketplace Platform",
    proj4Desc:
      "Web and mobile marketplace platform enabling buying and selling with individual stores, product discovery, and role-based administration.",
    proj4Points: [
      "Developed a web and mobile marketplace with individual online stores and role-based dashboards for administrators and store managers.",
      "Implemented personalized product recommendations to improve product discovery.",
      "Built frontend components, backend services, and RESTful APIs for mobile integration.",
    ],
    proj4Tags: [
      "Laravel",
      "RESTful APIs",
      "MySQL",
      "Mobile Integration",
      "E-commerce",
    ],

    proj5Title: "School Management Platform",
    proj5Desc:
      "Comprehensive school management system with granular permissions, complete academic workflows, and parents mobile app integration.",
    proj5Points: [
      "Developed role-based dashboards and granular permissions for administrators, supervisors, and advisors.",
      "Implemented academic workflows covering students, classes, grades, assignments, schedules, and financial records.",
      "Built RESTful APIs for the parents' mobile app and integrated WhatsApp messaging, Firebase Cloud Messaging, and background queues.",
    ],
    proj5Tags: [
      "Laravel",
      "RESTful APIs",
      "WhatsApp",
      "FCM",
      "Background Queues",
    ],

    // Education
    eduTitle: "Education",
    eduSubtitle: "Academic Background",
    eduDegree: "Bachelor's Degree in Software Engineering",
    eduSchool: "Private Yarmouk University",
    eduDate: "Sep 2018 – Jul 2024",
    eduLocation: "Jabab, Daraa Governorate, Syria",

    // Contact
    contactTitle: "Contact",
    contactSubtitle: "Let's Connect",
    contactText:
      "Have a project in mind or just want to say hello? Feel free to reach out!",
    contactEmail: "Email",
    contactPhone: "Phone",
    contactLocation: "Location",
    contactLocationValue: "Mazzah, Damascus, Syria",
    contactLinkedIn: "LinkedIn",
    contactFormName: "Your Name",
    contactFormEmail: "Your Email",
    contactFormMessage: "Your Message",
    contactFormSend: "Send Message",

    // Footer
    footerText: "© 2026 Ahmed Saadi. All rights reserved.",

    // Thanks Page
    thanksTitle: "Message Sent!",
    thanksMessage:
      "Thanks for reaching out. I've received your message and will get back to you shortly.",
    backHome: "Back to Home",
  },

  ar: {
    dir: "rtl",
    lang: "ar",
    fontFamily: "'IBM Plex Sans Arabic', sans-serif",

    // Navigation
    navAbout: "عني",
    navExperience: "الخبرات",
    navSkills: "المهارات",
    navProjects: "المشاريع",
    navEducation: "التعليم",
    navContact: "التواصل",
    langToggle: "English",

    // Hero
    heroGreeting: "مرحباً، أنا",
    heroName: "أحمد سعدي",
    heroTyping: [
      "مهندس برمجيات",
      "مهندس باك إند",
      "متخصص Laravel",
      "مطور فل ستاك",
    ],
    heroDescription:
      "مهندس برمجيات ذو خبرة متخصص في تطوير الباك إند، مع خبرة قوية في تصميم وصيانة تطبيقات قابلة للتوسع وآمنة وعالية الأداء. متمكن من قواعد البيانات وواجهات API وتقنيات الخوادم، مع خبرة عملية في نشر وتهيئة الحلول البرمجية على بيئات الإنتاج.",
    heroCTA: "شاهد أعمالي",
    heroContact: "تواصل معي",
    heroDownloadCV: "تحميل السيرة الذاتية",

    // About
    aboutTitle: "عني",
    aboutSubtitle: "من أنا",
    aboutText1:
      "مهندس برمجيات ذو خبرة متخصص في تطوير الباك إند، مع خبرة قوية في تصميم وصيانة تطبيقات قابلة للتوسع وآمنة وعالية الأداء.",
    aboutText2:
      "متمكن من قواعد البيانات وواجهات API وتقنيات الخوادم، مع خبرة عملية في نشر وتهيئة الحلول البرمجية على بيئات الإنتاج. ماهر في التعاون مع الفرق متعددة التخصصات لتسليم أنظمة موثوقة في الوقت المحدد.",
    aboutStat1Value: "+3",
    aboutStat1Label: "سنوات خبرة",
    aboutStat2Value: "+5",
    aboutStat2Label: "مشاريع مميزة",
    aboutStat3Value: "+10",
    aboutStat3Label: "عملاء تمت خدمتهم",
    aboutStat4Value: "100%",
    aboutStat4Label: "التزام",

    // Experience
    expTitle: "الخبرات",
    expSubtitle: "المسيرة المهنية",

    exp1Role: "مهندس باك إند | Laravel & PHP",
    exp1Company: "Innovators",
    exp1Date: "آذار 2026 – الحالي",
    exp1Location: "عن بعد",
    exp1Points: [
      "تطوير وصيانة تطبيقات Laravel ومواقع العملاء، وتنفيذ ميزات الباك إند وتحسين موثوقية التطبيقات وقابليتها للصيانة.",
      "التعاون مع العملاء والفرق متعددة التخصصات لتحليل متطلبات العمل وترجمتها إلى حلول تقنية عملية.",
      "تطوير واجهات RESTful APIs ودمج خدمات الطرف الثالث بما في ذلك بوابات الدفع ومزودي الرسائل القصيرة SMS والبريد الإلكتروني لدعم مسارات عمل التطبيقات.",
      "التحقيق في مشاكل بيئة الإنتاج وحلها، وتحسين أداء التطبيقات، ودعم عمليات النشر والتحسينات المستمرة للباك إند.",
    ],

    exp2Role: "مطور فل ستاك",
    exp2Company: "TaxiF",
    exp2Date: "كانون الأول 2025 – حزيران 2026",
    exp2Location: "عن بعد",
    exp2Points: [
      "تطوير وصيانة المواقع الإلكترونية ومنصات CMS ووحدات ERP وأنظمة المراقبة وأدوات الأعمال الداخلية باستخدام Laravel.",
      "تطوير واجهات RESTful APIs ودمج خدمات الطرف الثالث لدعم وظائف التطبيقات ومسارات العمل.",
      "المساهمة في تطوير الفرونت إند، وعمليات النشر، واستكشاف أخطاء بيئة الإنتاج وحلها.",
      "استخدام أدوات التطوير المدعومة بالذكاء الاصطناعي للتنفيذ واكتشاف الأخطاء مع الالتزام بأفضل الممارسات الهندسية.",
    ],

    exp3Role: "مطور فل ستاك",
    exp3Company: "شركة النبلاء",
    exp3Date: "حزيران 2024 – تشرين الأول 2025",
    exp3Location: "دمشق، سوريا",
    exp3Points: [
      "تطوير وصيانة تطبيقات ويب متكاملة (Full-Stack) باستخدام Laravel وتقنيات الفرونت إند الحديثة.",
      "تحسين المنصات الحالية عبر إضافة ميزات جديدة ودمج واجهات البرمجة وتحسين أداء قواعد البيانات.",
      "إدارة الاستضافة وتهيئة الخوادم وعمليات النشر مع معالجة مشاكل بيئة الإنتاج.",
      "دمج خدمات الطرف الثالث واختبار كفاءة واجهات API لضمان عمل الأنظمة بموثوقية.",
    ],

    // Skills
    skillsTitle: "المهارات",
    skillsSubtitle: "الترسانة التقنية",
    skillCat1: "لغات البرمجة",
    skillCat2: "أطر العمل والمكتبات",
    skillCat3: "قواعد البيانات",
    skillCat4: "واجهات البرمجة والتكامل",
    skillCat5: "الاختبار (Testing)",
    skillCat6: "التخزين المؤقت والطوابير",
    skillCat7: "الأدوات والبنية التحتية",
    skillCat8: "مفاهيم الباك إند",
    skillCat9: "الفرونت إند",
    skillCat10: "اللغات",
    skillDbOpt: "تحسين قواعد البيانات",
    skillPerfOpt: "تحسين الأداء",
    langArabic: "العربية — لغة أم",
    langEnglish: "الإنجليزية — محادثة",

    // Projects
    projTitle: "المشاريع",
    projSubtitle: "أعمال مميزة",

    proj1Title: "Enjo — منصة حجز تذاكر الفعاليات",
    proj1Desc:
      "منصة شاملة لحجز وإدارة تذاكر الفعاليات، مبنية باستخدام Laravel 11، تخدم العملاء والموردين ومديري المحتوى، مع تكامل بوابات دفع إلكترونية خارجية.",
    proj1Points: [
      "بناء نظام API متعدد الأدوار بطبقات توجيه منفصلة للعملاء والموردين ومديري المحتوى",
      "تكامل بوابات الدفع الإلكتروني لدعم معالجة المدفوعات عبر الإنترنت بشكل آمن",
      "تطوير نظام توليد تذاكر PDF مع رموز QR للتحقق من الدخول",
      "تصميم معمارية طبقة الخدمات مع بناة استعلام مخصصة للفلترة والترقيم",
      "حاوية التطبيق باستخدام Docker (PHP-FPM, Nginx, MySQL, Redis, Queue Worker)",
    ],
    proj1Tags: ["Laravel 11", "Stripe", "Docker", "REST API", "MySQL", "Redis"],

    proj2Title: "نظام إدارة محتوى مؤسسي (CMS)",
    proj2Desc:
      "منصة CMS مركزية تمكّن المديرين من إدارة محتوى الموقع والصفحات والقوائم والوسائط وبيانات SEO عبر لوحة تحكم ديناميكية.",
    proj2Points: [
      "تطوير نظام CMS مركزي لإدارة الصفحات والمقالات والقوائم والوسائط وبيانات SEO الوصفية دون الحاجة لتعديل الكود.",
      "تنفيذ نظام التحكم بالوصول المستند إلى الأدوار (RBAC) ومكونات قابلة لإعادة الاستخدام لدعم مواقع ويب متعددة.",
      "دمج إدارة متقدمة للملفات وتحسين أداء التطبيق وسهولة صيانته.",
    ],
    proj2Tags: ["Laravel", "CMS", "RBAC", "SEO", "إدارة الوسائط"],

    proj3Title: "منصة إدارة الموظفين والوصول عن بُعد لأجهزة الكمبيوتر",
    proj3Desc:
      "منصة مؤسسية لمراقبة الموظفين في بيئات سطح المكتب البعيد على Windows، مبنية بعميل .NET وباك إند Go ولوحة تحكم Next.js.",
    proj3Points: [
      "المساهمة في بناء منصة مراقبة مؤسسية مطورة بعميل .NET، وباك إند Go، ولوحة تحكم Next.js.",
      "تطوير ميزات مراقبة النشاط، وسياسات تسجيل قابلة للتخصيص، وعرض الجلسات في الوقت الفعلي، وتنبيهات الخمول الفورية.",
      "دعم التنفيذ واكتشاف الأخطاء باستخدام أدوات التطوير المدعومة بالذكاء الاصطناعي مع اتباع أفضل الممارسات الهندسية.",
    ],
    proj3Tags: [".NET", "Go", "Next.js", "الوقت الفعلي", "المراقبة"],

    proj4Title: "منصة سوق التجارة الإلكترونية",
    proj4Desc:
      "منصة تجارة إلكترونية للويب والموبايل تتيح البيع والشراء عبر متاجر فردية، مع ميزات اكتشاف المنتجات ولوحات تحكم مخصصة.",
    proj4Points: [
      "تطوير سوق إلكتروني للويب والموبايل بمتاجر فردية عبر الإنترنت ولوحات تحكم قائمة على الأدوار للمشرفين ومديري المتاجر.",
      "تنفيذ نظام توصيات مخصص للمنتجات لتحسين تجربة تصفح واكتشاف المنتجات.",
      "بناء مكونات الواجهة الأمامية، وخدمات الباك إند، وواجهات RESTful APIs للتكامل مع تطبيقات الموبايل.",
    ],
    proj4Tags: [
      "Laravel",
      "REST API",
      "MySQL",
      "تكامل موبايل",
      "تجارة إلكترونية",
    ],

    proj5Title: "منصة إدارة المدارس",
    proj5Desc:
      "نظام متكامل لإدارة المدارس بصلاحيات دقيقة، ومسارات عمل أكاديمية شاملة، مع ربط تطبيق أولياء الأمور بالموبايل.",
    proj5Points: [
      "تطوير لوحات تحكم وصلاحيات دقيقة للمسؤولين والمشرفين والموجهين التربويين.",
      "تنفيذ مسارات العمل الأكاديمية التي تشمل الطلاب والصفوف والدرجات والواجبات والجداول والسجلات المالية.",
      "بناء واجهات RESTful APIs لتطبيق أولياء الأمور عبر الموبايل، ودمج رسائل WhatsApp وإشعارات FCM والطوابير في الخلفية.",
    ],
    proj5Tags: ["Laravel", "REST API", "واتساب", "FCM", "طوابير خلفية"],

    // Education
    eduTitle: "التعليم",
    eduSubtitle: "الخلفية الأكاديمية",
    eduDegree: "بكالوريوس في هندسة البرمجيات",
    eduSchool: "جامعة اليرموك الخاصة",
    eduDate: "أيلول 2018 – تموز 2024",
    eduLocation: "خبب، محافظة درعا، سوريا",

    // Contact
    contactTitle: "التواصل",
    contactSubtitle: "لنتواصل",
    contactText:
      "لديك مشروع في ذهنك أو تريد فقط إلقاء التحية؟ لا تتردد في التواصل!",
    contactEmail: "البريد الإلكتروني",
    contactPhone: "الهاتف",
    contactLocation: "الموقع",
    contactLocationValue: "المزة، دمشق، سوريا",
    contactLinkedIn: "لينكد إن",
    contactFormName: "اسمك",
    contactFormEmail: "بريدك الإلكتروني",
    contactFormMessage: "رسالتك",
    contactFormSend: "إرسال الرسالة",

    footerText: "© 2026 أحمد سعدي. جميع الحقوق محفوظة.",

    // Thanks Page
    thanksTitle: "تم الإرسال بنجاح!",
    thanksMessage:
      "شكراً لتواصلك معي. لقد استلمت رسالتك وسأقوم بالرد عليك قريباً.",
    backHome: "العودة للرئيسية",
  },
};
