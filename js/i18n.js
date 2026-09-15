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
    aboutStat1Value: "3+",
    aboutStat1Label: "Years Experience",
    aboutStat2Value: "8+",
    aboutStat2Label: "Major Projects",
    aboutStat3Value: "10+",
    aboutStat3Label: "Clients Served",
    aboutStat4Value: "100%",
    aboutStat4Label: "Commitment",

    // Experience
    expTitle: "Experience",
    expSubtitle: "Professional Journey",

    exp1Role: "Back-End Developer",
    exp1Company: "Innovators",
    exp1Date: "Mar 2026 – Present",
    exp1Location: "Remotely",
    exp1Points: [
      "Developed and maintained custom web applications and client websites using Laravel, delivering scalable, secure, and high-performance solutions.",
      "Collaborated with clients and cross-functional teams to analyze requirements and deliver scalable software solutions.",
      "Built RESTful APIs and integrated third-party services, including payment gateways, SMS, email, and external APIs.",
      "Optimized application performance, resolved production issues, and contributed to deployments and ongoing system improvements.",
    ],

    exp2Role: "Full Stack Developer",
    exp2Company: "TaxiF",
    exp2Date: "Dec 2025 – Jun 2026",
    exp2Location: "Remotely",
    exp2Points: [
      "Developed and maintained public websites, CMS platforms, and internal business systems tailored to operational and business needs.",
      "Built and enhanced enterprise solutions, including ERP modules, monitoring systems, operational dashboards, and other internal tools.",
      "Collaborated with stakeholders to translate business requirements into scalable technical solutions and deliver high-quality features.",
      "Developed RESTful APIs and integrated third-party services while ensuring performance, security, and maintainability.",
      "Leveraged AI-assisted development tools to improve productivity, accelerate implementation, and support debugging while maintaining engineering best practices.",
      "Worked primarily with Laravel for back-end development, contributing to front-end implementation, deployments, and production support.",
    ],

    exp3Role: "Full-Stack Developer",
    exp3Company: "Nobalaa Co",
    exp3Date: "Jun 2024 – Oct 2025",
    exp3Location: "Damascus, Syria",
    exp3Points: [
      "Built and launched full-stack websites from scratch, delivering high-performance, secure, and responsive user experiences.",
      "Improved and modernized existing platforms by adding new features and optimizing performance, resulting in smoother workflows and better user engagement.",
      "Developed and integrated APIs to connect third-party services, ensuring reliability and scalability through thorough testing.",
      "Managed hosting, servers, and deployments, guaranteeing stable and efficient production environments.",
      "Optimized databases for performance, security, and scalability.",
      "Specialized in Laravel for back-end development, while contributing to front-end tasks with modern web technologies.",
    ],

    exp4Role: "Back-End Developer",
    exp4Company: "Freelance",
    exp4Date: "Apr 2021 – Present",
    exp4Location: "Damascus, Syria",
    exp4Points: [
      "Delivered customized software solutions aligned with client business objectives, ensuring scalability, performance, and long-term value.",
      "Specialized in back-end development, database optimization, and API integration, with a focus on secure and reliable systems.",
      "Collaborated directly with clients to gather requirements, recommend best practices, and translate technical needs into clear, actionable deliverables.",
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

    proj1Title: "Enjo — Event Ticketing Platform",
    proj1Desc:
      "A comprehensive event and ticketing platform built with Laravel 11 serving customers, suppliers, and CMS admins with Stripe payment integration.",
    proj1Points: [
      "Built a multi-role API system with separate route layers for customers, suppliers, and CMS admins",
      "Implemented Stripe payment processing with secure checkout and webhook handling",
      "Developed PDF ticket generation with QR codes for event entry validation",
      "Designed service-layer architecture with custom query builders for API filtering and pagination",
      "Containerized the application with Docker (PHP-FPM, Nginx, MySQL, Redis, Queue Worker)",
    ],
    proj1Tags: ["Laravel 11", "Stripe", "Docker", "REST API", "MySQL", "Redis"],

    proj2Title: "Enterprise Content Management System (CMS)",
    proj2Desc:
      "A comprehensive CMS platform enabling administrators to manage website content through a centralized dashboard with flexible modules.",
    proj2Points: [
      "Built flexible modules for managing pages, articles, blogs, menus, media assets, SEO metadata, and navigation",
      "Implemented role-based access control for secure and efficient content management",
      "Developed reusable components and dynamic content management features for multiple websites",
      "Integrated file and media management for efficient organization of digital assets",
      "Optimized for performance, scalability, and maintainability with a user-friendly admin experience",
    ],
    proj2Tags: ["Laravel", "CMS", "RBAC", "SEO", "Media Management"],

    proj3Title: "Employee Monitoring & Remote Desktop Platform",
    proj3Desc:
      "An enterprise employee monitoring platform for Windows-based remote desktop environments, built with a .NET agent, Go back-end, and Next.js dashboard.",
    proj3Points: [
      "Developed activity monitoring features including idle detection, keyboard/mouse activity, browser usage, and clipboard monitoring",
      "Built configurable monitoring policies with customizable recording intervals and notification rules",
      "Implemented real-time monitoring with live session viewing, instant idle alerts, and centralized event collection",
      "Collaborated using AI-assisted development tools to accelerate implementation while maintaining code quality",
    ],
    proj3Tags: [".NET", "Go", "Next.js", "Real-time", "Monitoring"],

    proj4Title: "E-commerce Marketplace",
    proj4Desc:
      "Full e-commerce platform enabling product buying and selling through individual online stores, delivered as web and mobile applications.",
    proj4Points: [
      "Built role-based dashboards for super admin and store managers",
      "Implemented personalized recommendation system",
      "Designed front-end components, back-end services, and REST APIs",
      "Ensured consistent UX and reliable performance across all components",
    ],
    proj4Tags: ["Laravel", "REST API", "MySQL", "Mobile Integration"],

    proj5Title: "Car Marketplace Platform",
    proj5Desc:
      "Full-featured web application with role-based dashboards for admins, supervisors, and sellers, with a seamless buyer storefront.",
    proj5Points: [
      "Implemented secure access control and web–mobile integration via RESTful APIs",
      "Integrated real-time chat and Firebase Cloud Messaging",
      "Integrated Flask-based AI for image/video validation",
      "Optimized task processing with background queues",
    ],
    proj5Tags: [
      "Laravel",
      "Firebase",
      "Flask AI",
      "Socket.IO",
      "Background Queues",
    ],

    proj6Title: "School Management Platform",
    proj6Desc:
      "Comprehensive school management system with role-based dashboards and fine-grained permissions per grade/class/section.",
    proj6Points: [
      "Managed subjects, classes, parents, students, homework, and financial records",
      "Exposed RESTful APIs for parents mobile app",
      "Integrated WhatsApp messaging for supervisors",
      "Implemented FCM push notifications and background queues",
    ],
    proj6Tags: ["Laravel", "REST API", "WhatsApp", "FCM", "Background Queues"],

    proj7Title: "Legacy CodeIgniter Upgrade",
    proj7Desc:
      "Upgraded an outdated CodeIgniter application to the latest stable version with modern PHP standards.",
    proj7Points: [
      "Refactored and optimized codebase for maintainability and security",
      "Integrated Twilio SMS and WhatsApp Business",
      "Deployed to VPS with optimal performance configuration",
    ],
    proj7Tags: ["CodeIgniter", "Twilio", "WhatsApp Business", "VPS"],

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
    aboutStat1Value: "+3",
    aboutStat1Label: "سنوات خبرة",
    aboutStat2Value: "+8",
    aboutStat2Label: "مشاريع رئيسية",
    aboutStat3Value: "+10",
    aboutStat3Label: "عملاء تمت خدمتهم",
    aboutStat4Value: "100%",
    aboutStat4Label: "التزام",

    // Experience
    expTitle: "الخبرات",
    expSubtitle: "المسيرة المهنية",

    exp1Role: "مطور باك إند",
    exp1Company: "Innovators",
    exp1Date: "آذار 2026 – الحالي",
    exp1Location: "عن بعد",
    exp1Points: [
      "تطوير وصيانة تطبيقات ويب مخصصة ومواقع عملاء باستخدام Laravel، بتقديم حلول قابلة للتوسع وآمنة وعالية الأداء.",
      "التعاون مع العملاء والفرق متعددة التخصصات لتحليل المتطلبات وتقديم حلول برمجية قابلة للتوسع.",
      "بناء واجهات RESTful APIs ودمج خدمات الطرف الثالث بما في ذلك بوابات الدفع والرسائل القصيرة والبريد الإلكتروني.",
      "تحسين أداء التطبيقات وحل مشاكل الإنتاج والمساهمة في النشر والتحسينات المستمرة.",
    ],

    exp2Role: "مطور فل ستاك",
    exp2Company: "TaxiF",
    exp2Date: "كانون الأول 2025 – حزيران 2026",
    exp2Location: "عن بعد",
    exp2Points: [
      "تطوير وصيانة المواقع العامة ومنصات CMS وأنظمة الأعمال الداخلية المصممة حسب الاحتياجات التشغيلية.",
      "بناء وتحسين حلول المؤسسات بما في ذلك وحدات ERP وأنظمة المراقبة ولوحات المعلومات التشغيلية.",
      "التعاون مع أصحاب المصلحة لترجمة متطلبات العمل إلى حلول تقنية قابلة للتوسع.",
      "تطوير واجهات RESTful APIs ودمج خدمات الطرف الثالث مع ضمان الأداء والأمان.",
      "استخدام أدوات التطوير المعززة بالذكاء الاصطناعي لتحسين الإنتاجية وتسريع التنفيذ مع الحفاظ على أفضل الممارسات الهندسية.",
      "العمل بشكل أساسي مع Laravel للباك إند، مع المساهمة في تنفيذ الفرونت إند والنشر ودعم الإنتاج.",
    ],

    exp3Role: "مطور فل ستاك",
    exp3Company: "شركة نبلاء",
    exp3Date: "حزيران 2024 – تشرين الأول 2025",
    exp3Location: "دمشق، سوريا",
    exp3Points: [
      "بناء وإطلاق مواقع ويب متكاملة من الصفر بأداء عالي وأمان وتصميم متجاوب.",
      "تحسين وتحديث المنصات الموجودة بإضافة ميزات جديدة وتحسين الأداء مما أدى لسير عمل أكثر سلاسة.",
      "تطوير ودمج واجهات API لربط خدمات الطرف الثالث بموثوقية وقابلية للتوسع.",
      "إدارة الاستضافة والخوادم والنشر لضمان بيئات إنتاج مستقرة وفعالة.",
      "تحسين قواعد البيانات من حيث الأداء والأمان وقابلية التوسع.",
      "التخصص في Laravel للباك إند مع المساهمة في مهام الفرونت إند بتقنيات ويب حديثة.",
    ],

    exp4Role: "مطور باك إند",
    exp4Company: "عمل حر",
    exp4Date: "نيسان 2021 – الحالي",
    exp4Location: "دمشق، سوريا",
    exp4Points: [
      "تقديم حلول برمجية مخصصة متوافقة مع أهداف العمل بقابلية للتوسع والأداء وقيمة طويلة الأمد.",
      "التخصص في تطوير الباك إند وتحسين قواعد البيانات ودمج واجهات API مع التركيز على الأنظمة الآمنة والموثوقة.",
      "التعاون المباشر مع العملاء لجمع المتطلبات والتوصية بأفضل الممارسات وترجمة الاحتياجات التقنية إلى مخرجات واضحة.",
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

    proj1Title: "Enjo — منصة حجز تذاكر الفعاليات",
    proj1Desc:
      "منصة شاملة لحجز وإدارة تذاكر الفعاليات مبنية بـ Laravel 11 تخدم العملاء والموردين ومديري المحتوى مع تكامل الدفع عبر Stripe.",
    proj1Points: [
      "بناء نظام API متعدد الأدوار بطبقات توجيه منفصلة للعملاء والموردين ومديري المحتوى",
      "تنفيذ معالجة الدفع عبر Stripe مع عمليات دفع آمنة ومعالجة webhook",
      "تطوير نظام توليد تذاكر PDF مع رموز QR للتحقق من الدخول",
      "تصميم معمارية طبقة الخدمات مع بناة استعلام مخصصة للفلترة والترقيم",
      "حاوية التطبيق باستخدام Docker (PHP-FPM, Nginx, MySQL, Redis, Queue Worker)",
    ],
    proj1Tags: ["Laravel 11", "Stripe", "Docker", "REST API", "MySQL", "Redis"],

    proj2Title: "نظام إدارة محتوى مؤسسي (CMS)",
    proj2Desc:
      "منصة CMS شاملة تمكّن المديرين من إدارة محتوى الموقع عبر لوحة تحكم مركزية بوحدات مرنة.",
    proj2Points: [
      "بناء وحدات مرنة لإدارة الصفحات والمقالات والمدونات والقوائم والوسائط وبيانات SEO",
      "تنفيذ تحكم بالوصول قائم على الأدوار لإدارة محتوى آمنة وفعالة",
      "تطوير مكونات قابلة لإعادة الاستخدام وميزات إدارة محتوى ديناميكية لمواقع متعددة",
      "دمج إدارة الملفات والوسائط لتنظيم فعال للأصول الرقمية",
      "التحسين للأداء وقابلية التوسع والصيانة مع تجربة إدارة سهلة الاستخدام",
    ],
    proj2Tags: ["Laravel", "CMS", "RBAC", "SEO", "إدارة الوسائط"],

    proj3Title: "منصة مراقبة الموظفين وسطح المكتب البعيد",
    proj3Desc:
      "منصة مؤسسية لمراقبة الموظفين في بيئات سطح المكتب البعيد على Windows، مبنية بعميل .NET وباك إند Go ولوحة تحكم Next.js.",
    proj3Points: [
      "تطوير ميزات مراقبة النشاط بما في ذلك كشف الخمول وحركة لوحة المفاتيح/الماوس واستخدام المتصفح",
      "بناء سياسات مراقبة قابلة للتخصيص مع فترات تسجيل وقواعد إشعارات قابلة للضبط",
      "تنفيذ مراقبة في الوقت الفعلي مع عرض الجلسات الحية وتنبيهات الخمول الفورية",
      "التعاون باستخدام أدوات التطوير المعززة بالذكاء الاصطناعي لتسريع التنفيذ مع الحفاظ على جودة الكود",
    ],
    proj3Tags: [".NET", "Go", "Next.js", "الوقت الفعلي", "المراقبة"],

    proj4Title: "منصة تجارة إلكترونية",
    proj4Desc:
      "منصة تجارة إلكترونية متكاملة تتيح بيع وشراء المنتجات عبر متاجر فردية، متاحة كتطبيق ويب وموبايل.",
    proj4Points: [
      "بناء لوحات تحكم بصلاحيات للمدير العام ومديري المتاجر",
      "تنفيذ نظام توصيات مخصص",
      "تصميم مكونات الفرونت إند وخدمات الباك إند وواجهات REST API",
      "ضمان تجربة مستخدم متسقة وأداء موثوق عبر جميع المكونات",
    ],
    proj4Tags: ["Laravel", "REST API", "MySQL", "تكامل موبايل"],

    proj5Title: "منصة سوق السيارات",
    proj5Desc:
      "تطبيق ويب متكامل بلوحات تحكم بصلاحيات للمديرين والمشرفين والبائعين مع واجهة شراء سلسة.",
    proj5Points: [
      "تنفيذ تحكم آمن بالوصول وتكامل ويب-موبايل عبر RESTful APIs",
      "دمج الدردشة الفورية وFirebase Cloud Messaging",
      "دمج ذكاء اصطناعي مبني على Flask للتحقق من الصور/الفيديو",
      "تحسين معالجة المهام عبر الطوابير في الخلفية",
    ],
    proj5Tags: [
      "Laravel",
      "Firebase",
      "Flask AI",
      "Socket.IO",
      "طوابير خلفية",
    ],

    proj6Title: "منصة إدارة مدرسية",
    proj6Desc:
      "نظام إدارة مدرسية شامل بلوحات تحكم بصلاحيات دقيقة حسب الصف والشعبة والقسم.",
    proj6Points: [
      "إدارة المواد والصفوف والأهالي والطلاب والواجبات والسجلات المالية",
      "توفير واجهات RESTful APIs لتطبيق الأهالي",
      "دمج رسائل واتساب للمشرفين",
      "تنفيذ إشعارات FCM وطوابير خلفية",
    ],
    proj6Tags: ["Laravel", "REST API", "واتساب", "FCM", "طوابير خلفية"],

    proj7Title: "ترقية تطبيق CodeIgniter",
    proj7Desc:
      "ترقية تطبيق CodeIgniter قديم إلى أحدث إصدار مستقر مع معايير PHP الحديثة.",
    proj7Points: [
      "إعادة هيكلة وتحسين الكود للصيانة والأمان",
      "دمج Twilio SMS وWhatsApp Business",
      "النشر على VPS بتهيئة أداء مثالية",
    ],
    proj7Tags: ["CodeIgniter", "Twilio", "WhatsApp Business", "VPS"],

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
