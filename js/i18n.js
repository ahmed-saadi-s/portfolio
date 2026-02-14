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
      "Laravel Specialist",
      "Back-End Developer",
      "Full-Stack Developer",
    ],
    heroDescription:
      "I specialize in designing and building robust back-end systems, RESTful APIs, and full-stack web applications. With a strong focus on clean architecture, performance optimization, and secure deployments — I turn complex business requirements into reliable, production-ready solutions.",
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
    aboutStat1Value: "4+",
    aboutStat1Label: "Years Experience",
    aboutStat2Value: "5+",
    aboutStat2Label: "Major Projects",
    aboutStat3Value: "10+",
    aboutStat3Label: "Clients Served",
    aboutStat4Value: "100%",
    aboutStat4Label: "Commitment",

    // Experience
    expTitle: "Experience",
    expSubtitle: "Professional Journey",

    exp1Role: "Full Stack Developer",
    exp1Company: "TaxiF",
    exp1Date: "Dec 2025 – Present",
    exp1Location: "Remotely",
    exp1Points: [
      "Built, maintained, and enhanced new and existing websites, ensuring clean architecture, high performance, and responsive design.",
      "Developed and customized CMS-based platforms, enabling full control over content, SEO, media, and site structure.",
      "Collaborated closely with management to gather requirements and translate business needs into technical solutions.",
      "Leveraged AI tools and agents to accelerate development workflows while maintaining code quality.",
      "Diagnosed and resolved technical issues across development and production environments.",
      "Worked extensively with Laravel for back-end development, while contributing to front-end implementation.",
    ],

    exp2Role: "Full-Stack Developer",
    exp2Company: "Nobalaa Co",
    exp2Date: "Jun 2024 – Oct 2025",
    exp2Location: "Damascus, Syria",
    exp2Points: [
      "Built and launched full-stack websites from scratch, delivering high-performance, secure, and responsive user experiences.",
      "Improved and modernized existing platforms by adding new features and optimizing performance.",
      "Developed and integrated APIs to connect third-party services, ensuring reliability and scalability.",
      "Managed hosting, servers, and deployments, guaranteeing stable and efficient production environments.",
      "Optimized databases for performance, security, and scalability.",
      "Specialized in Laravel for back-end development, while contributing to front-end tasks.",
    ],

    exp3Role: "Back-End Developer",
    exp3Company: "Freelance",
    exp3Date: "Apr 2021 – Present",
    exp3Location: "Remotely",
    exp3Points: [
      "Delivered customized software solutions aligned with client business objectives, ensuring scalability and long-term value.",
      "Specialized in back-end development, database optimization, and API integration.",
      "Collaborated directly with clients to gather requirements and translate technical needs into actionable deliverables.",
    ],

    // Skills
    skillsTitle: "Skills",
    skillsSubtitle: "Technical Arsenal",
    skillCat1: "Languages",
    skillCat2: "Frameworks",
    skillCat3: "Databases",
    skillCat4: "Tools & Tech",
    skillCat5: "Core Strengths",

    // Projects
    projTitle: "Projects",
    projSubtitle: "Featured Work",

    proj1Title: "E-commerce Marketplace",
    proj1Desc:
      "Full e-commerce platform enabling product buying and selling through individual online stores, delivered as web and mobile applications.",
    proj1Points: [
      "Built role-based dashboards for super admin and store managers",
      "Implemented personalized recommendation system",
      "Designed front-end components, back-end services, and REST APIs",
      "Ensured consistent UX and reliable performance across all components",
    ],
    proj1Tags: ["Laravel", "REST API", "MySQL", "Mobile Integration"],

    proj2Title: "Car Marketplace Platform",
    proj2Desc:
      "Full-featured web application with role-based dashboards for admins, supervisors, and sellers, with a seamless buyer storefront.",
    proj2Points: [
      "Implemented secure access control and web–mobile integration via RESTful APIs",
      "Integrated real-time chat and Firebase Cloud Messaging",
      "Integrated Flask-based AI for image/video validation",
      "Optimized task processing with background queues",
    ],
    proj2Tags: [
      "Laravel",
      "Firebase",
      "Flask AI",
      "Socket.IO",
      "Background Queues",
    ],

    proj3Title: "School Management Platform",
    proj3Desc:
      "Comprehensive school management system with role-based dashboards and fine-grained permissions per grade/class/section.",
    proj3Points: [
      "Managed subjects, classes, parents, students, homework, and financial records",
      "Exposed RESTful APIs for parents mobile app",
      "Integrated WhatsApp messaging for supervisors",
      "Implemented FCM push notifications and background queues",
    ],
    proj3Tags: ["Laravel", "REST API", "WhatsApp", "FCM", "Background Queues"],

    proj4Title: "Legacy CodeIgniter Upgrade",
    proj4Desc:
      "Upgraded an outdated CodeIgniter application to the latest stable version with modern PHP standards.",
    proj4Points: [
      "Refactored and optimized codebase for maintainability and security",
      "Integrated Twilio SMS and WhatsApp Business",
      "Deployed to VPS with optimal performance configuration",
    ],
    proj4Tags: ["CodeIgniter", "Twilio", "WhatsApp Business", "VPS"],

    proj5Title: "Multilingual CMS Platform",
    proj5Desc:
      "Multilingual Content Management System built with Laravel 11, supporting 5 languages with full RTL support.",
    proj5Points: [
      "Built dynamic menu management, media library, and SEO-friendly content system",
      "Implemented multi-language support (AR, EN, UK, RU, FR) with RTL",
      "Integrated Spatie roles & permissions for fine-grained access control",
      "Designed responsive admin panel with Tailwind CSS and Alpine.js",
    ],
    proj5Tags: ["Laravel 11", "PostgreSQL", "Spatie", "Tailwind CSS", "Alpine.js", "Multilingual"],

    // Education
    eduTitle: "Education",
    eduSubtitle: "Academic Background",
    eduDegree: "Bachelor's Degree in Software Engineering",
    eduSchool: "Private Yarmouk University",
    eduDate: "Sep 2018 – Jul 2024",
    eduLocation: "Daraa Governorate, Syria",

    // Contact
    contactTitle: "Contact",
    contactSubtitle: "Let's Connect",
    contactText:
      "Have a project in mind or just want to say hello? Feel free to reach out!",
    contactEmail: "Email",
    contactPhone: "Phone",
    contactLocation: "Location",
    contactLocationValue: "Damascus, Syria",
    contactFormName: "Your Name",
    contactFormEmail: "Your Email",
    contactFormMessage: "Your Message",
    contactFormSend: "Send Message",

    // Footer
    footerText: "© 2026 Ahmed Saadi. All rights reserved.",

    // Thanks Page
    thanksTitle: "Message Sent!",
    thanksMessage: "Thanks for reaching out. I've received your message and will get back to you shortly.",
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
      "متخصص Laravel",
      "مطور باك إند",
      "مطور فل ستاك",
    ],
    heroDescription:
      "أتخصص في تصميم وبناء أنظمة باك إند متينة، وواجهات برمجية RESTful، وتطبيقات ويب متكاملة. أركّز على الهندسة النظيفة، وتحسين الأداء، والنشر الآمن — لتحويل متطلبات العمل المعقّدة إلى حلول موثوقة وجاهزة للإنتاج.",
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
    aboutStat1Value: "+4",
    aboutStat1Label: "سنوات خبرة",
    aboutStat2Value: "+5",
    aboutStat2Label: "مشاريع رئيسية",
    aboutStat3Value: "+10",
    aboutStat3Label: "عملاء تمت خدمتهم",
    aboutStat4Value: "100%",
    aboutStat4Label: "التزام",

    // Experience
    expTitle: "الخبرات",
    expSubtitle: "المسيرة المهنية",

    exp1Role: "مطور فل ستاك",
    exp1Company: "TaxiF",
    exp1Date: "كانون الأول 2025 – الحالي",
    exp1Location: "عن بعد",
    exp1Points: [
      "بناء وصيانة وتحسين مواقع ويب جديدة وموجودة بهندسة نظيفة وأداء عالي وتصميم متجاوب.",
      "تطوير وتخصيص منصات CMS مع تحكم كامل بالمحتوى وSEO والوسائط وبنية الموقع.",
      "التعاون الوثيق مع الإدارة لجمع المتطلبات وترجمة احتياجات العمل إلى حلول تقنية.",
      "استخدام أدوات الذكاء الاصطناعي لتسريع سير العمل مع الحفاظ على جودة الكود.",
      "تشخيص وحل المشاكل التقنية عبر بيئات التطوير والإنتاج.",
      "العمل المكثف مع Laravel للباك إند مع المساهمة في تنفيذ الفرونت إند.",
    ],

    exp2Role: "مطور فل ستاك",
    exp2Company: "شركة نبلاء",
    exp2Date: "حزيران 2024 – تشرين الأول 2025",
    exp2Location: "دمشق، سوريا",
    exp2Points: [
      "بناء وإطلاق مواقع ويب متكاملة من الصفر بأداء عالي وأمان وتصميم متجاوب.",
      "تحسين وتحديث المنصات الموجودة بإضافة ميزات جديدة وتحسين الأداء.",
      "تطوير ودمج واجهات API لربط خدمات الطرف الثالث بموثوقية وقابلية للتوسع.",
      "إدارة الاستضافة والخوادم والنشر لضمان بيئات إنتاج مستقرة وفعالة.",
      "تحسين قواعد البيانات من حيث الأداء والأمان وقابلية التوسع.",
      "التخصص في Laravel للباك إند مع المساهمة في مهام الفرونت إند.",
    ],

    exp3Role: "مطور باك إند",
    exp3Company: "عمل حر",
    exp3Date: "نيسان 2021 – الحالي",
    exp3Location: "عن بعد",
    exp3Points: [
      "تقديم حلول برمجية مخصصة متوافقة مع أهداف العمل بقابلية للتوسع وقيمة طويلة الأمد.",
      "التخصص في تطوير الباك إند وتحسين قواعد البيانات ودمج واجهات API.",
      "التعاون المباشر مع العملاء لجمع المتطلبات وترجمة الاحتياجات التقنية إلى مخرجات واضحة.",
    ],

    // Skills
    skillsTitle: "المهارات",
    skillsSubtitle: "الترسانة التقنية",
    skillCat1: "لغات البرمجة",
    skillCat2: "أطر العمل",
    skillCat3: "قواعد البيانات",
    skillCat4: "الأدوات والتقنيات",
    skillCat5: "نقاط القوة",

    // Projects
    projTitle: "المشاريع",
    projSubtitle: "أعمال مميزة",

    proj1Title: "منصة تجارة إلكترونية",
    proj1Desc:
      "منصة تجارة إلكترونية متكاملة تتيح بيع وشراء المنتجات عبر متاجر فردية، متاحة كتطبيق ويب وموبايل.",
    proj1Points: [
      "بناء لوحات تحكم بصلاحيات للمدير العام ومديري المتاجر",
      "تنفيذ نظام توصيات مخصص",
      "تصميم مكونات الفرونت إند وخدمات الباك إند وواجهات REST API",
      "ضمان تجربة مستخدم متسقة وأداء موثوق عبر جميع المكونات",
    ],
    proj1Tags: ["Laravel", "REST API", "MySQL", "تكامل موبايل"],

    proj2Title: "منصة سوق السيارات",
    proj2Desc:
      "تطبيق ويب متكامل بلوحات تحكم بصلاحيات للمديرين والمشرفين والبائعين مع واجهة شراء سلسة.",
    proj2Points: [
      "تنفيذ تحكم آمن بالوصول وتكامل ويب-موبايل عبر RESTful APIs",
      "دمج الدردشة الفورية وFirebase Cloud Messaging",
      "دمج ذكاء اصطناعي مبني على Flask للتحقق من الصور/الفيديو",
      "تحسين معالجة المهام عبر الطوابير في الخلفية",
    ],
    proj2Tags: [
      "Laravel",
      "Firebase",
      "Flask AI",
      "Socket.IO",
      "طوابير خلفية",
    ],

    proj3Title: "منصة إدارة مدرسية",
    proj3Desc:
      "نظام إدارة مدرسية شامل بلوحات تحكم بصلاحيات دقيقة حسب الصف والشعبة والقسم.",
    proj3Points: [
      "إدارة المواد والصفوف والأهالي والطلاب والواجبات والسجلات المالية",
      "توفير واجهات RESTful APIs لتطبيق الأهالي",
      "دمج رسائل واتساب للمشرفين",
      "تنفيذ إشعارات FCM وطوابير خلفية",
    ],
    proj3Tags: ["Laravel", "REST API", "واتساب", "FCM", "طوابير خلفية"],

    proj4Title: "ترقية تطبيق CodeIgniter",
    proj4Desc:
      "ترقية تطبيق CodeIgniter قديم إلى أحدث إصدار مستقر مع معايير PHP الحديثة.",
    proj4Points: [
      "إعادة هيكلة وتحسين الكود للصيانة والأمان",
      "دمج Twilio SMS وWhatsApp Business",
      "النشر على VPS بتهيئة أداء مثالية",
    ],
    proj4Tags: ["CodeIgniter", "Twilio", "WhatsApp Business", "VPS"],

    proj5Title: "منصة إدارة محتوى متعددة اللغات",
    proj5Desc:
      "نظام إدارة محتوى متعدد اللغات مبني بـ Laravel 11، يدعم 5 لغات مع دعم كامل لـ RTL.",
    proj5Points: [
      "بناء نظام إدارة قوائم ديناميكي ومكتبة وسائط ونظام محتوى صديق لمحركات البحث",
      "تنفيذ دعم متعدد اللغات (عربي، إنجليزي، أوكراني، روسي، فرنسي) مع RTL",
      "دمج Spatie للأدوار والصلاحيات بتحكم دقيق بالوصول",
      "تصميم لوحة تحكم متجاوبة بـ Tailwind CSS و Alpine.js",
    ],
    proj5Tags: ["Laravel 11", "PostgreSQL", "Spatie", "Tailwind CSS", "Alpine.js", "متعدد اللغات"],

    // Education
    eduTitle: "التعليم",
    eduSubtitle: "الخلفية الأكاديمية",
    eduDegree: "بكالوريوس في هندسة البرمجيات",
    eduSchool: "جامعة اليرموك الخاصة",
    eduDate: "أيلول 2018 – تموز 2024",
    eduLocation: "محافظة درعا، سوريا",

    // Contact
    contactTitle: "التواصل",
    contactSubtitle: "لنتواصل",
    contactText: "لديك مشروع في ذهنك أو تريد فقط إلقاء التحية؟ لا تتردد في التواصل!",
    contactEmail: "البريد الإلكتروني",
    contactPhone: "الهاتف",
    contactLocation: "الموقع",
    contactLocationValue: "دمشق، سوريا",
    contactFormName: "اسمك",
    contactFormEmail: "بريدك الإلكتروني",
    contactFormMessage: "رسالتك",
    contactFormSend: "إرسال الرسالة",

    footerText: "© 2026 أحمد سعدي. جميع الحقوق محفوظة.",

    // Thanks Page
    thanksTitle: "تم الإرسال بنجاح!",
    thanksMessage: "شكراً لتواصلك معي. لقد استلمت رسالتك وسأقوم بالرد عليك قريباً.",
    backHome: "العودة للرئيسية",
  },
};
