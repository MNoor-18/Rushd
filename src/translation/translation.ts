import { IRushdContent, IrushdPolicy } from "../types";

export const RushdContent: IRushdContent = {
  en: {
    navbarLinks: [
      { title: "Home", id: "home" },
      { title: "Features", id: "features" },
      { title: "Pricing", id: "pricing" },
      { title: "Quotes", id: "quotes" },
      { title: "Contact", id: "contact" },
    ],

    heroData: {
      title:
        "Let your property manage itself… with Rushd. Easy management. Faster profits.",
      subtitle: "List, rent, track – all in simple steps, from one place.",
      buttonText: "Get Started",
    },

    featuresData: {
      problemsNowadays: {
        title: "Problems Nowadays",
        content: [
          {
            id: 1,
            title: "System complexity",
            description:
              "System complexity: Multiple tools make management harder.",
            bgColor: "bg-[#1C1C1C]",
            textColor: "text-[#FFFFFF]",
            numStyle: "[-webkit-text-stroke:1px_white]",
          },
          {
            id: 2,
            title: "Tracking challenges",
            description:
              "Tracking challenges: Hard to monitor financial performance and occupancy.",
            bgColor: "bg-[#FF5200]",
            textColor: "text-[#FFFFFF]",
            numStyle: "[-webkit-text-stroke:1px_white]",
          },
          {
            id: 3,
            title: "High costs",
            description:
              "High costs: OTA commissions reduce your overall profits.",
            bgColor: "bg-[#FAF4E8]",
            textColor: "text-[#000000]",
            numStyle: "[-webkit-text-stroke:1px_black]",
          },
        ],
      },
      solutions: {
        title: "Solutions",
        content: [
          {
            id: 1,
            title: "Unified Interface",
            description:
              "Unified Interface: Manage all your units from one dashboard.",
          },
          {
            id: 2,
            title: "Smart Analytics",
            description:
              "Smart Analytics: Accurate reports to support decision-making.",
          },
          {
            id: 3,
            title: "Automated Operations",
            description: "Automated Operations: Save time through automation.",
          },
          {
            id: 4,
            title: "Direct Booking Website",
            description:
              "Direct Booking Website: Receive bookings and payments directly.",
          },
          {
            id: 5,
            title: "OTA Integration",
            description:
              "OTA Integration: Sync with Airbnb, Booking.com, and more.",
          },
        ],
      },
      whoCanUseRushd: {
        title: "Who can use Rushd?",
        description: "Rushd is ideal for anyone in the hospitality sector:",
        categories: [
          {
            title: "Hotels",
            name: "Hotels",
            description:
              "Roshd System is an all-in-one hotel management solution designed to enhance performance and simplify operations. It integrates booking channels, offers smart pricing that adapts to seasons, and automates daily tasks like front desk operations and room assignments. It also includes an advanced CRM system and performance reports to support decision-making. With its flexibility to suit various types of hotels, it delivers results such as higher occupancy rates, reduced costs, and increased customer satisfaction—making it a powerful tool for growth and profitability.",
            image: "/assets/hotel.jpg",
          },
          {
            title: "Serviced apartments",
            name: "Serviced apartments",
            description:
              "Roshd system streamlines the management of furnished apartments, making it profitable and effortless. It enables remote control via phone or computer and boosts revenue through direct bookings and smart, market-responsive pricing. By automating daily tasks, it saves time and reduces management effort. The system enhances guest satisfaction and ratings, encouraging repeat bookings. With flexible packages, it helps transform furnished apartments into successful, high-quality investments with minimal administrative work.",
            image: "/assets/apartment.jpg",
          },
          {
            title: "Chalets",
            name: "Chalets",
            description:
              "Roshd System is a comprehensive solution for effective chalet management. It consolidates bookings from various platforms into a unified, real-time calendar and supports direct bookings to reduce commission costs. The system features smart pricing, discounts for repeat bookings, and automates daily tasks like booking confirmations and cleaning alerts. It also offers a multi-payment gateway, a review system, and support for smart locks, along with accurate occupancy and financial analysis reports. With its user-friendly interface and flexible subscription plans, Roshd makes chalet management more profitable with less cost and effort.",
            image: "/assets/chalets.jpg",
          },
          {
            title: "Private units",
            name: "Private units",
            description:
              "Roshd system enables private unit owners to manage one or multiple properties easily and efficiently. It increases profitability through direct bookings and adaptive smart pricing. By automating daily operations, it saves time and reduces management effort. The system also enhances guest satisfaction, leading to high ratings and repeat bookings. With minimal daily follow-up, owners can turn their units into a stable, profitable income source while keeping the management process simple and hassle-free.",
            image: "/assets/private_units.jpg",
          },
          {
            title: "halls",
            name: "Halls",
            description:
              "Roshd gives venue owners a smart, all-in-one tool to boost profits and simplify operations. Real-time analytics and detailed reports help track bookings, occupancy, and income for better decision-making. Features like dynamic pricing and integrated CRM enhance customer communication and loyalty. It saves time and increases revenue—making management easier and more effective.",
            image: "/assets/hall.jpg",
          },
        ],
      },
    },

    pricingData: {
      title: "Subscription Plans",
      description:
        "We offer three flexible plans tailored to your business size and operational needs, with optional add-ons for scalability:",
      featureTitle: "Features:",
      subscribe: "Subscribe",
      form: {
        confirmation: "Interested in this Plan?",
        explain:
          "Fill out the form below and we'll get in touch with you regarding the ",
        fullNameL: "Full Name",
        fullNameP: "Enter your full name",
        emailL: "Email Address",
        emailP: "you@example.com",
        phoneL: "Phone Number",
        phoneP: "+966501234567",
        propertyTypeL: "Property Type",
        propertyTypeP: "Select your property type",
        cityL: "City",
        cityP: "Enter your city",
        submit: "Submit Information",
      },
      plans: [
        {
          name: "basic plan",
          id: "basic",
          price: {
            monthly: "81SAR /Monthly",
            annual: "Annual subscription with a month discount: 890SAR",
          },
          users: "Users: 1",
          units: "Units: 1",
          clarification: "Designed for small to medium companies",
          features: [
            "Booking management",
            "Contract management",
            "Channel manager",
            "Smart calendar",
            "CRM system",
            "Standard support",
          ],
        },
        {
          name: "Advanced Plan",
          id: "advanced",
          price: {
            monthly: "119 SAR /Monthly",
            annual: "Annual subscription with a month discount: 1309 SAR",
          },
          users: "Users: Unlimited",
          units: "Units: 2",
          clarification: "Designed for medium-sized companies",
          features: [
            "All Plus plan features",
            "Custom domain",
            "Payment gateway",
            "Fast support",
          ],
        },
        {
          name: "Enterprise Plan",
          id: "enterprise",
          price: {
            monthly: "By agremeent",
            annual: "Subscription: By agremeent",
          },
          clarification: "designed for large organizations",
          users: "Users: Unlimited",
          units: "Units: Unlimited",
          features: [
            "Full customization based on your needs",
            "System integration",
            "24/7 continuous support",
          ],
          // optionalExtras: {
          //   title: "Optional Add-Ons:",
          //   extras: [
          //     "Extra unit (yearly): SAR 50",
          //     "Dynamic pricing (per unit/month): SAR 25",
          //     "Smart locks (per lock/month): SAR 15",
          //     "One-time system setup: SAR 299",
          //     "One-time report setup: SAR 199",
          //   ],
          // },
        },
      ],
      theButton: { label: "Free trial" },
    },

    quotesData: {
      sectionTitle: "Clients Feedback",
      feedbacks: [
        {
          name: "Abdulrahman Mohammed",
          rating: 5,
          comment:
            "Rushd completely changed our management style. We now have a system that consolidates everything in one place, saving time and effort noticeably.",
          imageUrl: "images/user.jpg",
        },
        {
          name: "Nouf Al-Otaibi",
          rating: 4,
          comment:
            "The integration with Airbnb and Booking is very smooth, and we didn't need to check multiple platforms.",
          imageUrl: "images/user.jpg",
        },
        {
          name: "Salman Hussain",
          rating: 5,
          comment:
            "Finally, a local system that understands our needs and provides tools that fit the Saudi market.",
          imageUrl: "images/user.jpg",
        },
        {
          name: "Hind Said",
          rating: 4,
          comment:
            "The user interface is clear and easy, even for those with no technical experience.",
          imageUrl: "images/user.jpg",
        },
        {
          name: "Turki Al-Zahrani",
          rating: 5,
          comment:
            "With Rushd, we were able to track occupancy and income accurately, and make better decisions.",
          imageUrl: "images/user.jpg",
        },
        {
          name: "Dalal Abdullah",
          rating: 4,
          comment:
            "The customer support is fast and responsive, which made me trust the system even more.",
          imageUrl: "images/user.jpg",
        },
        {
          name: "Majed Al-Anzi",
          rating: 5,
          comment:
            "The dynamic pricing feature gave us great flexibility, especially during peak seasons.",
          imageUrl: "images/user.jpg",
        },
        {
          name: "Amani Al-Sibai",
          rating: 4,
          comment:
            "I was hesitant at first, but the free trial allowed me to try it without commitment, and I was really impressed with the platform.",
          imageUrl: "images/user.jpg",
        },
        {
          name: "Faisal Al-Dosari",
          rating: 5,
          comment:
            "What I liked the most is receiving payments directly, without intermediaries.",
          imageUrl: "images/user.jpg",
        },
        {
          name: "Mashael Mohammed",
          rating: 5,
          comment:
            "Honestly, I didn't expect to find such a high-quality local platform, Rushd exceeded my expectations.",
          imageUrl: "images/user.jpg",
        },
        {
          name: "Yasser Saleh",
          rating: 5,
          comment:
            "I manage all my properties from a single dashboard, which saved me from tracking the small details.",
          imageUrl: "images/user.jpg",
        },
        {
          name: "Sarah Al-Abdullah",
          rating: 4,
          comment:
            "Customer service is excellent, they always respond quickly and with respect.",
          imageUrl: "images/user.jpg",
        },
        {
          name: "Rakan Abdullah",
          rating: 5,
          comment:
            "The smart analytics and accurate reports helped us develop our services and understand customer behavior more.",
          imageUrl: "images/user.jpg",
        },
        {
          name: "Nadia Bauzeer",
          rating: 4,
          comment: "The platform saved us a lot of time and effort.",
          imageUrl: "images/user.jpg",
        },
        {
          name: "Ahmed Said",
          rating: 4,
          comment:
            "The online payment system and ready-made reports made everything easier and faster.",
          imageUrl: "images/user.jpg",
        },
      ],
    },

    faqData: {
      sectionTitle: "FAQ",
      sectionSubtitle: "Rushd",
      questions: [
        {
          question:
            "Can Rushd platform be integrated with booking channels like Airbnb?",
          answer:
            "Yes, Rushd allows you to manage bookings from various global platforms in one place, saving you time and reducing errors.",
        },
        {
          question: "How can I receive bookings directly from customers?",
          answer:
            "Rushd provides you with a direct booking link that you can share with your customers or post on social media, eliminating the need for intermediaries or commission fees.",
        },
        {
          question: "Do I receive payments directly from customers?",
          answer:
            "Yes, through Rushd's payment system, payments are collected daily, especially for short-term rentals, ensuring smooth and fast cash flow.",
        },
        {
          question:
            "Does the platform offer a CRM system for customer management?",
          answer:
            "Absolutely, Rushd's system includes a CRM tool that helps you track customer information, booking history, communication, and provide personalized professional service.",
        },
        {
          question: "Do I need technical expertise to use Rushd?",
          answer:
            "No, the system is designed with an easy-to-use interface suitable for everyone, whether you're a beginner or professional in property management.",
        },
        {
          question: "Can I track the performance of my real estate units?",
          answer:
            "Yes, the platform provides real-time reports and accurate analytics on occupancy rates, income, bookings, and other key indicators.",
        },
        {
          question: "Can I control the pricing of my units?",
          answer:
            "Yes, Rushd allows fixed or dynamic pricing based on season, with the ability to adjust prices automatically or manually as needed.",
        },
        {
          question: "Does Rushd provide technical support?",
          answer:
            "Yes, our technical support team is available to answer your inquiries continuously through various channels.",
        },
        {
          question: "Is there a trial period?",
          answer:
            "Rushd offers a free package for new users for 14 days, including basic features and giving you the opportunity to try the system before upgrading.",
        },
        {
          question: "Can I customize the booking page with my brand name?",
          answer:
            "Yes, you can get a custom domain with your brand name, providing your clients with a more professional and trustworthy experience.",
        },
      ],
    },

    partnersData: {
      sectionTitle: "Our Trusted Partners",
      partners: [
        { name: "Partner 1", logoUrl: "/assets/default-image.png" },
        { name: "Partner 2", logoUrl: "/assets/default-image.png" },
        { name: "Partner 3", logoUrl: "/assets/default-image.png" },
        { name: "Partner 5", logoUrl: "/assets/default-image.png" },
        { name: "Partner 6", logoUrl: "/assets/default-image.png" },
        { name: "Partner 7", logoUrl: "/assets/default-image.png" },
        { name: "Partner 8", logoUrl: "/assets/default-image.png" },
      ],
    },

    socialLinks: [
      {
        imageUrl: "/assets/instagram.png",
        name: "Instagram",
        url: "https://www.instagram.com/userushd/profilecard/?igsh=Znd6cmVya2ZnaDlh",
      },
      {
        imageUrl: "/assets/x.png",
        name: "X",
        url: "https://x.com/userushd?s=21",
      },
      {
        imageUrl: "/assets/linkedin.png",
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/rushdtech/",
      },
      {
        imageUrl: "/assets/whatsapp.png",
        name: "WhatsApp",
        url: "https://wa.me/+966534336584",
      },
      {
        imageUrl: "/assets/tik-tok.png",
        name: "Tik Tok",
        url: "https://www.tiktok.com/@userushd?_t=ZS-8tkKyHL6ick&_r=1 ",
      },
      {
        imageUrl: "/assets/phone-call.png",
        name: "Phone",
        url: "tel:+966 53 433 6584",
      },
      {
        imageUrl: "/assets/email.png",
        name: "Email",
        url: "mailto:Info@rushd.tech",
      },
    ],
    contact: {
      title: "Contact Us",
      description:
        "Want to get started or have a question?  Send us a message and we’ll get back to you shortly.",
    },
    formData: {
      placeholders: {
        theName: "Enter your name",
        surName: "Enter your surname",
        email: "Enter your email",
        message: "Write your message here",
      },
      theName: "Name",
      surName: "Surname",
      email: "Email",
      message: "Message",
      submit: "Submit",
      send: "Send",
      subscribe: "Subscribe to our magazine",
    },
    legalDocuments: {
      termsAndConditions: "Terms&Conditions",
      privacyPolicy: "Privacy",
    },
  },
  ar: {
    navbarLinks: [
      { title: "الرئيسية", id: "home" },
      { title: "الميزات", id: "features" },
      { title: "الأسعار", id: "pricing" },
      { title: "التعليقات", id: "quotes" },
      { title: "اتصل بنا", id: "contact" },
    ],
    heroData: {
      title: "خلّ إدارة عقارك تشتغل لحالها… مع رشد، إدارة سهلة. أرباح أسرع",
      subtitle: "سوّق، أجّر، تابع… كلّها بخطوات بسيطة ومكان واحد.",
      buttonText: "ابدأ الآن",
    },
    featuresData: {
      problemsNowadays: {
        title: "مشاكل اليوم",
        content: [
          {
            id: 1,
            title: "تعقيد الأنظمة",
            description: " الأدوات المتعددة تجعل الإدارة أصعب.",
            bgColor: "bg-[#1C1C1C]",
            textColor: "text-[#FFF]",
            numStyle: "[-webkit-text-stroke:1px_white]",
          },
          {
            id: 2,
            title: "صعوبات في التتبع",
            description: "من الصعب مراقبة الأداء المالي ونسب الإشغال بدقة.",
            bgColor: "bg-[#FF5200]",
            textColor: "text-[#FFF]",
            numStyle: "[-webkit-text-stroke:1px_white]",
          },
          {
            id: 3,
            title: "ارتفاع التكاليف",
            description: "العمولات على المنصات تستهلك جزءاً كبيراً من العائد.",
            bgColor: "bg-[#FAF4E8]",
            textColor: "text-[#000]",
            numStyle: "[-webkit-text-stroke:1px_black]",
          },
        ],
      },
      solutions: {
        title: "حلول رشـد",
        content: [
          {
            id: 1,
            title: "واجهة موحدة",
            description: "تحكم في كل وحداتك من لوحة تحكم واحدة.",
          },
          {
            id: 2,
            title: "تحليلات ذكية",
            description: " تقارير دقيقة تساعدك في اتخاذ القرار.",
          },
          {
            id: 3,
            title: "تشغيل مؤتمت",
            description: "إجراءات مؤتمتة توفر لك الوقت والجهد.",
          },
          {
            id: 4,
            title: "موقع حجز مباشر",
            description: "تستقبل الحجوزات والدفع بدون وسيط.",
          },
          {
            id: 5,
            title: "تكامل مع المنصات التجارية",
            description: "تكامل مع منصات مثل Booking وAirbnb وغيرها.",
          },
        ],
      },
      whoCanUseRushd: {
        title: "من يمكنه استخدام رشـد؟",
        description: "رشد مناسبة لأي جهة تقدم خدمات الإيواء السياحي",
        categories: [
          {
            title: "Hotels",
            name: "الفنادق",
            description:
              "نظام رشد هو حل متكامل لإدارة الفنادق يهدف إلى تحسين الأداء وتبسيط العمليات. يجمع بين دمج قنوات الحجز، وتسعير ذكي يتكيف مع المواسم، وأتمتة للمهام اليومية مثل الاستقبال وتوزيع الغرف. كما يشمل نظام علاقات عملاء متطور وتقارير أداء تساعد في اتخاذ القرارات. يتميز بمرونته ليتناسب مع مختلف أنواع الفنادق، ويحقق نتائج مثل رفع معدلات الإشغال، تقليل التكاليف، وزيادة رضا العملاء، مما يجعله أداة فعالة للنمو والربحية.",
            image: "/assets/hotel.jpg",
          },
          {
            title: "Apbartments",
            name: "الشقق المفروشة",
            description:
              "نظام رشد يجعل إدارة الشقق المفروشة سهلة ومربحة، من خلال التحكم الكامل عبر الهاتف أو الحاسوب. يساعد على زيادة الإيرادات بالحجز المباشر وتسعير ذكي يتكيف مع السوق، ويوفر الوقت والجهد عبر أتمتة المهام اليومية. كما يعزز رضا الضيوف والتقييمات العالية، مما يدعم الحجوزات المتكررة. باختيار الباقة المناسبة، يتحول السكن المفروش إلى استثمار ناجح بجودة عالية وبأقل مجهود إداري.",
            image: "/assets/apartment.jpg",
          },
          {
            title: "Chalets",
            name: "الشاليهات",
            description:
              "نظام رشد هو حل متكامل لإدارة الشاليهات بفعالية، حيث يجمع الحجوزات من مختلف المنصات في تقويم موحد ومحدث لحظيًا، ويدعم الحجز المباشر لتقليل العمولات. يتميز بتسعير ذكي وخصومات للحجوزات المتكررة، ويُؤتمت المهام اليومية مثل تأكيدات الحجز وتنبيهات التنظيف. كما يوفّر بوابة دفع متعددة، نظام تقييمات، ودعم للأقفال الذكية، مع تقارير دقيقة للإشغال والتحليل المالي. بفضل واجهته السهلة وخطط الاشتراك المتنوعة، يجعل النظام إدارة الشاليهات أكثر ربحية وبتكلفة وجهد أقل.",
            image: "/assets/chalets.jpg",
          },
          {
            title: "Private units",
            name: "الوحدات الخاصة",
            description:
              "نظام رشد يساعد ملاك الوحدات الخاصة على إدارة ممتلكاتهم بسهولة دون تعقيدات، سواء كانت وحدة واحدة أو أكثر. يعزز الأرباح عبر الحجز المباشر وتسعير ذكي متكيف مع السوق، ويوفر الوقت من خلال أتمتة المهام اليومية. كما يحسن تجربة الضيوف ويزيد من فرص التقييمات العالية والحجوزات المتكررة. بفضل بساطته، يمكن تحويل الوحدة إلى مصدر دخل مستقر بمجهود إداري بسيط لا يتطلب سوى دقائق يومية.",
            image: "/assets/private_units.jpg",
          },
          {
            title: "halls",
            name: "القاعات",
            description:
              "رُشد تقدم لأصحاب القاعات أداة ذكية شاملة لتعزيز الأرباح وتبسيط العمليات. التحليلات الفورية والتقارير التفصيلية تساعد في تتبع الحجوزات ونسب الإشغال والدخل، مما يساهم في اتخاذ قرارات أفضل. ميزات مثل التسعير الديناميكي ونظام إدارة علاقات العملاء (CRM) المتكامل تعزز التواصل مع العملاء وتزيد من ولائهم. توفر الوقت وتزيد الإيرادات، لتجعل الإدارة أسهل وأكثر فاعلية.",
            image: "/assets/hall.jpg",
          },
        ],
      },
    },
    pricingData: {
      title: "خطط الاشتراك",
      description:
        "نقدّم لك ثلاث باقات مصممة لتناسب احتياجك مهما كان حجم عملك، مع مزايا مرنة وإضافات اختيارية:",
      featureTitle: "المزايا:",
      subscribe: "اشترك",
      form: {
        confirmation: "مهتم بهذه الخطة؟",
        explain: "املأ النموذج أدناه وسنتواصل معك بخصوص ",
        fullNameL: "الاسم الكامل",
        fullNameP: "أدخل اسمك الكامل",
        emailL: "البريد الإلكتروني",
        emailP: "you@example.com",
        phoneL: "رقم الجوال",
        phoneP: "+966501234567",
        propertyTypeL: "نوع العقار",
        propertyTypeP: "اختر نوع العقار",
        cityL: "المدينة",
        cityP: "أدخل مدينتك",
        submit: "إرسال المعلومات",
      },
      plans: [
        {
          name: "الباقة الأساسية",
          clarification: "مخصصة للشركات الصغيرة والمتوسطة",
          id: "basic",
          price: {
            monthly: "81 ريال شهريا",
            annual: "الإشتراك السنوي مع خصم شهري: 890",
          },
          users: "المستخدمين: 1",
          units: "الوحدات: حتى 1",
          features: [
            "إدارة الحجوزات",
            "إدارة العقود",
            "إدارة القنوات",
            "تقويم ذكي",
            "نظام CRM",
            "دعم قياسي",
          ],
        },
        {
          name: "باقة المتقدمة",
          clarification: "مخصصة للشركات المتوسطة",
          id: "advanced",
          price: {
            monthly: "119 ريال شهريا",
            annual: "الإشتراك السنوي مع خصم شهري: 1309",
          },
          users: "المستخدمين: غير محدود",
          units: "الوحدات: 2",
          features: [
            "جميع خصائص باقة بلس",
            "دومين خاص",
            "بوابة دفع",
            "دعم سريع",
          ],
        },
        {
          name: "باقة المؤسسات",
          clarification: "مخصصة للشركات الكبرى",
          id: "enterprise",
          price: {
            monthly: "بالإتفاق",
            annual: "الإشتراك: بالإتفاق",
          },
          users: "المستخدمين: غير محدود",
          units: "الوحدات: غير محدود",
          features: [
            "تخصيص كامل حسب الحاجة",
            "تكامل مع أنظمة أخرى",
            "دعم متواصل 24/7",
          ],
          // optionalExtras: {
          //   title: "إضافات اختيارية:",
          //   extras: [
          //     "وحدة إضافية (سنوياً): 50 ريال",
          //     "تسعير ديناميكي (شهرياً لكل وحدة): 25 ريال",
          //     "الأقفال الذكية (شهرياً لكل قفل): 15 ريال",
          //     "إعداد النظام (مرة واحدة): 299 ريال",
          //     "إعداد التقارير (مرة واحدة): 199 ريال",
          //   ],
          // },
        },
      ],
      theButton: { label: "ابدأ تجربتك المجانية" },
    },
    quotesData: {
      sectionTitle: "آراء العملاء",
      feedbacks: [
        {
          name: "عبدالرحمن محمد",
          rating: 5,
          comment:
            "رُشْد غيّر أسلوب إدارتنا بالكامل. صار عندنا نظام يجمع كل شيء بمكان واحد ويوفر وقت وجهد بشكل ملحوظ.",
          imageUrl: "images/user.jpg",
        },
        {
          name: "نوف العتيبي",
          rating: 4,
          comment:
            "الربط مع Airbnb وBooking سلس جداً، وما احتجنا نراجع أكثر من منصة.",
          imageUrl: "images/user.jpg",
        },
        {
          name: "سلمان حسين",
          rating: 5,
          comment:
            "أخيرًا نظام محلي يفهم احتياجاتنا ويوفر أدوات تناسب السوق السعودي.",
          imageUrl: "images/user.jpg",
        },
        {
          name: "هند سعيد",
          rating: 4,
          comment: "واجهة الاستخدام واضحة وسهلة حتى للي ما عنده خبرة تقنية.",
          imageUrl: "images/user.jpg",
        },
        {
          name: "تركي الزهراني",
          rating: 5,
          comment:
            "مع رُشْد قدرنا نراقب الإشغال والدخل بشكل دقيق ونتخذ قرارات أفضل.",
          imageUrl: "images/user.jpg",
        },
        {
          name: "دلال عبدالله",
          rating: 4,
          comment: "الدعم الفني سريع ومتجاوب، وهذا خلاني أثق بالنظام أكثر.",
          imageUrl: "images/user.jpg",
        },
        {
          name: "ماجد العنزي",
          rating: 5,
          comment:
            "إمكانية التسعير الديناميكي أعطتنا مرونة كبيرة، خاصة وقت المواسم.",
          imageUrl: "images/user.jpg",
        },
        {
          name: "أماني السبيعي",
          rating: 4,
          comment:
            "كنت متردد بالبداية، لكن التجربة المجانية خلتني أجرب بدون التزام وفعلاً أعجبتني المنصة.",
          imageUrl: "images/user.jpg",
        },
        {
          name: "فيصل الدوسري",
          rating: 5,
          comment: "أكثر شيء ريّحني هو استقبال المدفوعات مباشرة بدون وسطاء.",
          imageUrl: "images/user.jpg",
        },
        {
          name: "مشاعل محمد",
          rating: 5,
          comment:
            "بصراحة ما توقعت ألقى منصة محلية بهذه الجودة، رُشْد فاقت توقعاتي.",
          imageUrl: "images/user.jpg",
        },
        {
          name: "ياسر صالح",
          rating: 5,
          comment:
            "أدير كل وحداتي من لوحة تحكم واحدة، وهذا وفر علي متابعة التفاصيل الصغيرة.",
          imageUrl: "images/user.jpg",
        },
        {
          name: "سارة العبدالله",
          rating: 4,
          comment: "خدمة العملاء رائعة، دائمًا يردون بسرعة وبأسلوب محترم.",
          imageUrl: "images/user.jpg",
        },
        {
          name: "راكان عبد الله",
          rating: 5,
          comment:
            "التحليلات الذكية والتقارير الدقيقة ساعدتنا نطور خدماتنا ونفهم سلوك العملاء أكثر.",
          imageUrl: "images/user.jpg",
        },
        {
          name: "نادية باوزير",
          rating: 4,
          comment: "منصة وفرت علينا وقت وجهد كبير.",
          imageUrl: "images/user.jpg",
        },
        {
          name: "أحمد سعيد",
          rating: 4,
          comment: "الدفع الإلكتروني والتقارير الجاهزة خلت كل شيء أسهل وأسرع.",
          imageUrl: "images/user.jpg",
        },
      ],
    },
    faqData: {
      sectionTitle: "الأسئلة الشائعة",
      sectionSubtitle:
        "إذا كان لديك أي استفسار، يمكنك البحث في الأسئلة التالية:",
      questions: [
        {
          question: "هل يمكن ربط منصة رشد مع قنوات الحجز مثل Airbnb؟",
          answer:
            "نعم، رشد تتيح لك إدارة الحجوزات من مختلف المنصات العالمية من مكان واحد، مما يوفر عليك الوقت ويقلل نسبة الأخطاء.",
        },
        {
          question: "كيف استقبل الحجوزات من العملاء بشكل مباشر؟",
          answer:
            "توفر رشد لك رابط حجز مباشر خاص بك يمكنك مشاركتهم عمالئك أو نشره في وسائل التواصل، دون الحاجة للوسيط أو دفع عمولات.",
        },
        {
          question: "هل أستلم المدفوعات مباشرة من العملاء؟",
          answer:
            "نعم، من خلال نظام الدفع في رشد يتم تحصيل المدفوعات بشكل يومي خصوصاً للإيجارات القصيرة، مما يضمن تدفق نقدي سلس وسريع.",
        },
        {
          question: "هل تقدم المنصة نظام CRM لإدارة العملاء؟",
          answer:
            "بالتأكيد، يشمل نظام رشد أداة CRM تساعدك في تتبع معلومات العملاء، تاريخ الحجوزات، التواصل، وتقديم خدمة مخصصة واحترافية.",
        },
        {
          question: "هل أحتاج إلى خبرة تقنية الستخدام رشد؟",
          answer:
            "لا، النظام مصمم بواجهة سهلة الاستخدام، تناسب الجميع سواء كنت مبتدئ أو محترف في إدارة العقارات.",
        },
        {
          question: "هل يمكن تتبع أداء الوحدات العقارية؟",
          answer:
            "نعم، توفر المنصة تقارير فورية وتحليلات دقيقة عن نسبة الإشغال، الدخل، الحجوزات، وغيرها من المؤشرات الأساسية.",
        },
        {
          question: "هل استطيع التحكم بتسعير وحداتي؟",
          answer:
            "نعم، تتيح رشد تسعير ثابت أو ديناميكي بحسب الموسم، مع إمكانية تعديل الأسعار تلقائياً أو يدوياً حسب الحاجة.",
        },
        {
          question: "هل توفر رشد دعم فني؟",
          answer:
            "نعم، فريق الدعم الفني متواجد للرد على استفساراتك بشكل مستمر عبر القنوات المختلفة.",
        },
        {
          question: "هل يوجد فترة تجريبية؟",
          answer:
            "توفر رشد باقة مجانية للمستخدمين الجدد لمدة 14 يوم، تشمل الأساسيات وتمنحك فرصة تجربة النظام قبل الترقية.",
        },
        {
          question: "هل أقدر اخصص صفحة الحجز باسمي التجاري؟",
          answer:
            "نعم، بإمكانك الحصول على دومين خاص باسمك التجاري، يعطي عملائك تجربة أكثر احترافية وثقة.",
        },
      ],
    },
    partnersData: {
      sectionTitle: "شركاؤنا",
      partners: [
        { name: "شركة الفنون", logoUrl: "/images/partner1.png" },
        { name: "شركة المستقبل", logoUrl: "/images/partner2.png" },
      ],
    },
    socialLinks: [
      {
        imageUrl: "/assets/instagram.png",
        name: "Instagram",
        url: "https://www.instagram.com/userushd/profilecard/?igsh=Znd6cmVya2ZnaDlh",
      },
      {
        imageUrl: "/assets/x.png",
        name: "X",
        url: "https://x.com/userushd?s=21",
      },
      {
        imageUrl: "/assets/linkedin.png",
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/rushdtech/",
      },
      {
        imageUrl: "/assets/whatsapp.png",
        name: "WhatsApp",
        url: "https://wa.me/+966534336584",
      },
      {
        imageUrl: "/assets/tik-tok.png",
        name: "Tik Tok",
        url: "https://www.tiktok.com/@userushd?_t=ZS-8tkKyHL6ick&_r=1 ",
      },
      {
        imageUrl: "/assets/phone-call.png",
        name: "Phone",
        url: "tel:+966 53 433 6584",
      },
      {
        imageUrl: "/assets/email.png",
        name: "Email",
        url: "mailto:Info@rushd.tech",
      },
    ],
    contact: {
      title: "تواصل معنا",
      description: "عندك استفسار أو حاب تبدأ؟ ارسل لنا وسنرد عليك بأسرع وقت.",
    },
    formData: {
      placeholders: {
        theName: "أدخل اسمك",
        surName: "أدخل اسم العائلة",
        email: "أدخل بريدك الإلكتروني",
        message: "أكتب رسالتك هنا",
      },
      theName: "الإسم",
      surName: "اسم العائلة",
      email: "البريد الإلكتروني",
      message: "الرسالة",
      submit: "إرسال",
      send: "إرسال",
      subscribe: "إشترك في مجلتنا",
    },
    legalDocuments: {
      termsAndConditions: "الشروط والأحكام",
      privacyPolicy: "الخصوصية",
    },
  },
};

export const rushdPolicy: IrushdPolicy = {
  ar: {
    title: "خصوصيتك تهمنا",
    close: "إغلاق",
    description: [
      "في نظام رشد، نحن ملتزمون بحماية بياناتك الشخصية، وضمان أن تكون الخصوصية حجر الأساس لعملياتنا وممارساتنا. نلتزم أيضًا بالامتثال لجميع أنظمة ولوائح خصوصية البيانات المعمول بها، بما في ذلك نظام حماية البيانات الشخصية في المملكة العربية السعودية.",
      "ينطبق إشعار الخصوصية الخاص بنا على جميع المنتجات والخدمات التي يقدمها نظام رشد. يوضح هذا الإشعار كيفية جمع بياناتك الشخصية واستخدامها وحمايتها. نحن نجمع البيانات الشخصية بدقة وبناءً على نظام حماية البيانات الشخصية كما هو موضح في هذا الإشعار.",
      "بموافقتك على هذه الاتفاقية، فإنك توافق على جمع واستخدام بياناتك الشخصية والسلوكية لأغراض تحسين خدماتنا المستقبلية عبر تقنيات التعلم الآلي. ستتم معالجة بياناتك وفقًا لسياسة الخصوصية الخاصة بنا، حيث سيتم تخزينها بأمان واستخدامها فقط لتحسين النماذج وتخصيص تجربتك. يحق لك الوصول إلى بياناتك أو تعديلها أو حذفها في أي وقت.",
    ],
    paragraphs: [
      {
        title: "1. التعريفات والتفسيرات",
        content: [
          '"الحساب" يعني عقد الاشتراك بنظام رشد.',
          '"الشركة التابعة" تعني الكيان الذي يتحكم في أو يتحكم فيه أو يخضع لسيطرة مشتركة مع طرف آخر.',
          '"النظام" يشير إلى برنامج رشد المقدم من الشركة المعالجة التي ستعالج بياناتك الشخصية.',
          '"البلد" يشير إلى المملكة العربية السعودية.',
          '"البيانات الشخصية" تشير إلى أي معلومات يمكن أن تحدد هويتك كفرد. يتضمن ذلك اسمك وتفاصيل الاتصال ومعلومات الحساب وأي بيانات أخرى يمكن ربطها بك شخصيًا.',
          '"الخدمة" تشير إلى الخصائص التي يقدمها نظام رشد والمزايا الإضافية المتكاملة مع النظام.',
          '"مقدم الخدمة" يعني أي شخص طبيعي أو اعتباري يقوم بمعالجة البيانات نيابة عن الشركة. يشير إلى شركات أو أفراد تابعين لجهات خارجية توظفهم الشركة لتسهيل الخدمة، أو لتقديم الخدمة نيابة عن الشركة، أو لأداء الخدمات المتعلقة بالخدمة أو لمساعدة الشركة في تحليل كيفية استخدام الخدمة.',
          '"بيانات الاستخدام" تشير إلى البيانات التي يتم جمعها تلقائيًا، إما عن طريق استخدام الخدمة أو من البنية التحتية للخدمة نفسها (على سبيل المثال، مدة زيارة الصفحة).',
          '"أنت" تعني الفرد الذي يصل إلى الخدمة أو يستخدمها، أو الشركة، أو الكيان القانوني الآخر الذي يقوم هذا الفرد بالوصول إلى الخدمة أو استخدامها نيابة عنه، حسب الاقتضاء.',
        ],
      },
      {
        title: "2. ما هي البيانات الشخصية التي نجمعها؟",
        description:
          "قد نجمع الأنواع التالية من البيانات الشخصية الرئيسية عنك:",
        content: [
          "بيانات الاتصال: الاسم، رقم الهوية الوطنية، رقم الهاتف المحمول وعنوان البريد الإلكتروني والعنوان الوطني.",
          "البيانات المالية: تفاصيل الحساب المصرفي ومعلومات بطاقة الدفع وسجل المعاملات.",
          "البيانات التقنية: عنوان IP ونظام التشغيل ونوع ورقم إصدار المتصفح وملفات تعريف الارتباط (Cookies).",
          "بيانات الاستخدام: معلومات حول كيفية استخدامك لموقعنا / تطبيقنا ومنتجاتنا وخدماتنا.",
          'بيانات التسويق والتواصل: التفضيلات في تلقي التسويق منا وتفضيلات الاتصال الخاصة بك. نقوم بتخزين المعلومات الشخصية بطريقة آمنة ومشفرة. لا يتم تخزين بيانات البطاقات الائتمانية في منصة "رشد". جميع معلومات البطاقات الائتمانية تعالج بشكل آمن ومشفر ويتم التعامل معها من خلال مزودي خدمات الدفع الإلكتروني الموثوقين.',
        ],
      },
      {
        title: "3. كيف نجمع بياناتك الشخصية ونستخدمها؟",
        description: "نجمع بياناتك الشخصية من خلال الطرق التالية:",
        content: [
          "التفاعلات المباشرة: يمكنك تقديم بيانات شخصية عن طريق تعبئة نموذج التسجيل أو استبانة تقييم الخدمة.",
          "التقنيات أو التفاعلات الآلية: أثناء تفاعلك مع موقعنا / تطبيقنا، قد نقوم تلقائيًا بجمع البيانات التقنية حول أجهزتك وإجراءات التصفح وأنماطك.",
          "تقنيات التعلم الآلي: هي تقنية تستخدم خوارزميات وبرمجيات لتحليل البيانات واستخلاص الأنماط والسلوكيات بهدف تحسين أداء الأنظمة واتخاذ قرارات تلقائية بناءً على تلك البيانات.",
        ],
      },
      {
        title: "4. لماذا نجمع بياناتك الشخصية؟",
        description: "تُجمع بياناتك الشخصية للأغراض التالية:",
        content: [
          "إنشاء وإدارة حسابات المستخدمين للوصول إلى تطبيقات / موقع الويب الخاص بنا.",
          "لمعالجة طلبات المستخدمين وتسهيل تفاعلات النظام الأساسي وتقديم تجارب مستخدم مخصصة.",
          "لتقديم دعم العملاء والرد على الاستفسارات وحل المشكلات المتعلقة بإدارة الحساب.",
          "لحماية سلامة وأمن تطبيقاتنا ومنع الاحتيال والامتثال للمتطلبات التنظيمية.",
          "لتحليل بيانات المستخدم للحصول على نتائج تساعد في تحسين تطبيقاتنا وتعزيز تجارب المستخدم وتطوير ميزات جديدة.",
          "للاقتراح والتوصية لخدمات أو ميزات أو منتجات جديدة والتي قد تهم المستخدمين بناءً على أنماط الاستخدام والتفضيلات الخاصة بهم.",
          "إرسال رسائل البريد الإلكتروني والرسائل النصية القصيرة وإشعارات الموقع بالإضافة إلى وسائل الاتصال الأخرى لتقديم الخدمات والرد على الاستفسارات و / أو الطلبات أو الأسئلة الأخرى.",
        ],
      },
      {
        title: "5. قد نشارك معلوماتك الشخصية في الحالات التالية:",
        content: [
          "الامتثال القانوني: قد نشارك بياناتك الشخصية للامتثال للأنظمة واللوائح والإجراءات القانونية المعمول بها، ويشمل ذلك الاستجابة لطلبات الجهات الحكومية والأمنية بالمملكة العربية السعودية.",
          "لنقل الأعمال: في حالة الاندماج أو الاستحواذ أو أي شكل من أشكال بيع بعض أو كل أصولنا، يجوز لنا نقل بياناتك الشخصية إلى الطرف الثالث ذي الصلة بطريقة تضمن حماية بياناتك الشخصية حسب إشعار الخصوصية هذا.",
          "مع مزودي الخدمة: قد نشارك بياناتك الشخصية مع موفري خدمات موثوقين من جهات خارجية للمساعدة في تشغيل خدماتنا أو إجراء أعمالنا أو خدمة مستخدمينا. يلتزم مقدم الخدمات تعاقديًا بالحفاظ على خصوصية بياناتك وأمانها واستخدامها فقط للأغراض التي كُشِف عنها لهم.",
          "مع الشركات التابعة: يجوز لنا مشاركة معلوماتك مع الشركات التابعة لنا، وفي هذه الحالة سنطلب من تلك الشركات التابعة احترام سياسة الخصوصية هذه. تشمل الشركات التابعة شركتنا الأم وأي شركات تابعة أخرى أو شركاء في مشاريع مشتركة أو شركات أخرى نتحكم فيها أو تخضع لسيطرة مشتركة معنا.",
          "مع شركاء الأعمال: يجوز لنا مشاركة معلوماتك مع شركائنا التجاريين لتقديم منتجات أو خدمات أو عروض ترويجية معينة لك.",
        ],
      },
      {
        title: "6. روابط إلى مواقع الإنترنت الأخرى:",
        content: [
          "قد تحتوي خدمتنا على روابط إلى مواقع إنترنت أخرى لا نديرها نحن. إذا قمت بالنقر على رابط من طرف ثالث، فسيتم توجيهك إلى موقع ذلك الطرف الثالث. ننصحك بشدة بمراجعة سياسة الخصوصية لكل موقع تزوره. نحن لا نتحكم في محتوى أو سياسات الخصوصية أو ممارسات أي مواقع أو خدمات طرف ثالث.",
        ],
      },
      {
        title: "7. مدة الاحتفاظ ببياناتك الشخصية:",
        content: [
          "نحتفظ ببياناتك الشخصية فقط طالما هو مطلوب بموجب الأنظمة للغرض المحدد في هذا الإشعار. سنحتفظ بمعلوماتك ونستخدمها بالقدر اللازم للامتثال لالتزاماتنا القانونية (على سبيل المثال، إذا طُلِب منا الاحتفاظ ببياناتك للامتثال للقوانين المعمول بها)، وحل النزاعات، وتطبيق اتفاقياتنا النظامية وسياساتنا التي تخضع لتعليمات من الجهات التنظيمية.",
          "سنحتفظ أيضًا ببيانات الاستخدام لأغراض التحليل الداخلي. يتم الاحتفاظ ببيانات الاستخدام بشكل عام لفترة زمنية أقصر، باستثناء الحالات التي تُستخدم فيها هذه البيانات لتعزيز الأمان أو لتحسين وظائف خدمتنا، أو عندما نكون ملزمين قانونًا بالاحتفاظ بهذه البيانات لفترات زمنية أطول.",
        ],
      },
      {
        title: "8. حقوقك فيما يتعلق بمعالجة بياناتك الشخصية.",
        description: "لديك الحقوق التالية فيما يتعلق ببياناتك الشخصية:",
        content: [
          "حق الوصول إلى بياناتك الشخصية: طلب الوصول إلى البيانات الشخصية التي نحتفظ بها عنك.",
          'حق طلب الحصول على بياناتك الشخصية: يحق لك طلب الحصول على بياناتك الشخصية المحتفظ بها في "نزيل" بصيغة مقروءة وواضحة، إذا كان ذلك ممكنًا تقنيًا من خلال القناة التي تطلبها.',
          "حق طلب تصحيح بياناتك الشخصية: طلب تصحيح أي بيانات غير دقيقة أو غير كاملة.",
          "حق طلب إتلاف بياناتك الشخصية: طلب حذف بياناتك تحت ظروف معينة.",
          "حق سحب موافقتك: يحق لك سحب موافقتك على معالجة بياناتك الشخصية في أي وقت ما لم تكن هناك مسوغات نظامية تتطلب عكس ذلك.",
        ],
      },
      {
        title: "9. حذف أو إتلاف بياناتك الشخصية:",
        content: [
          "لديك الحق في حذف أو طلب المساعدة في حذف البيانات الشخصية التي جمعناها عنك.",
          "قد تمنحك خدمتنا القدرة على حذف معلومات معينة عنك من داخل الخدمة.",
          "يمكنك تحديث معلوماتك أو تعديلها أو حذفها في أي وقت عن طريق تسجيل الدخول إلى حسابك، إذا كان لديك حساب، وزيارة قسم إعدادات الحساب الذي يسمح لك بإدارة معلوماتك الشخصية. يمكنك أيضًا الاتصال بنا لطلب الوصول إلى أي معلومات شخصية قدمتها لنا أو تصحيحها أو حذفها. ومع ذلك، يرجى ملاحظة أننا قد نحتاج إلى الاحتفاظ بمعلومات معينة عندما يكون لدينا التزام قانوني أو أساس قانوني للقيام بذلك.",
        ],
      },
      {
        title: "10. طريقة ممارسة الحقوق:",
        content: [
          "لممارسة حقوقك، يمكنك التواصل معنا عبر وسائل التواصل المذكورة في المادة 13 من هذه الاتفاقية.",
        ],
      },
      {
        title: "11. تحديثات إشعار الخصوصية:",
        content: [
          "يحتفظ نظام رشد بالحق في تغيير إشعار الخصوصية هذا من وقت لآخر. تسري التغييرات والتعديلات على إشعار الخصوصية هذا فور نشر التغييرات والتعديلات على هذا الموقع. يُنصح المستخدمون بمراجعة هذا الإشعار دوريًا ليكونوا على دراية كاملة بأي تغييرات.",
        ],
      },
      {
        title: "12. الموافقة على سياسة الخصوصية:",
        content: [
          "من خلال الوصول إلى هذا الموقع واستمرار استخدامك، يعني موافقتك على شروط وأحكام إشعار الخصوصية.",
        ],
      },
      {
        title: "13. معلومات التواصل:",
        content: [
          "في حال وجود أي استفسار حول سياسة الخصوصية هذه، يمكنكم التواصل معنا عبر التالي:",
          "رقم الهاتف: 0534336584",
          "البريد الإلكتروني: Info@rushd.tech",
        ],
      },
    ],
  },
  en: {
    title: "Your Privacy Matters to Us",
    close: "Close",
    description: [
      "At Rushd System, we are committed to protecting your personal data and ensuring that privacy is the cornerstone of our operations and practices. We are also committed to complying with all applicable data privacy regulations and laws, including the Personal Data Protection Law in the Kingdom of Saudi Arabia.",
      "Our privacy notice applies to all products and services offered by Rushd System. This notice explains how your personal data is collected, used, and protected. We collect personal data accurately and based on the Personal Data Protection Law as outlined in this notice.",
      "By agreeing to this agreement, you consent to the collection and use of your personal and behavioral data for the purposes of improving our future services through machine learning technologies. Your data will be processed in accordance with our privacy policy, where it will be securely stored and used only to improve models and personalize your experience. You have the right to access, modify, or delete your data at any time.",
    ],
    paragraphs: [
      {
        title: "1. Definitions and Interpretations",
        content: [
          '"Account" means the subscription contract with Rushd System.',
          '"Affiliate" means an entity that controls, is controlled by, or is under common control with a party.',
          '"System" refers to the Rushd software provided by the Processing Company that will process your personal data.',
          '"Country" refers to the Kingdom of Saudi Arabia.',
          '"Personal Data" refers to any information that can identify you as an individual. This includes your name, contact details, account information, and any other data that can be linked to you personally.',
          '"Service" refers to the features offered by Rushd System and the additional benefits integrated with the system.',
          '"Service Provider" means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.',
          '"Usage Data" refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).',
          '"You" means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.',
        ],
      },
      {
        title: "2. What Personal Data Do We Collect?",
        description:
          "We may collect the following main types of personal data about you:",
        content: [
          "Contact Data: Name, National ID number, mobile phone number, email address, and national address.",
          "Financial Data: Bank account details, payment card information, and transaction history.",
          "Technical Data: IP address, operating system, browser type and version number, and cookies.",
          "Usage Data: Information about how you use our website/application and our products and services.",
          'Marketing and Communications Data: Preferences in receiving marketing from us and your communication preferences. We store personal information securely and encrypted. Credit card data is not stored on the "Rushd" platform. All credit card information is securely processed and encrypted and handled through trusted electronic payment service providers.',
        ],
      },
      {
        title: "3. How Do We Collect and Use Your Personal Data?",
        description:
          "We collect your personal data through the following methods:",
        content: [
          "Direct Interactions: You may provide personal data by filling in a registration form or a service evaluation questionnaire.",
          "Automated Technologies or Interactions: As you interact with our website/application, we may automatically collect technical data about your equipment, browsing actions, and patterns.",
          "Machine Learning Technologies: This is a technology that uses algorithms and software to analyze data and extract patterns and behaviors with the aim of improving the performance of systems and making automatic decisions based on that data.",
        ],
      },
      {
        title: "4. Why Do We Collect Your Personal Data?",
        description:
          "Your personal data is collected for the following purposes:",
        content: [
          "To create and manage user accounts for accessing our applications/website.",
          "To process user requests, facilitate platform interactions, and provide personalized user experiences.",
          "To provide customer support, respond to inquiries, and resolve account management issues.",
          "To protect the integrity and security of our applications, prevent fraud, and comply with regulatory requirements.",
          "To analyze user data to gain insights that help improve our applications, enhance user experiences, and develop new features.",
          "To suggest and recommend new services, features, or products that may interest users based on their usage patterns and preferences.",
          "To send emails, SMS messages, and website notifications, as well as other means of communication, to provide services, respond to inquiries, and/or other requests or questions.",
        ],
      },
      {
        title:
          "5. We May Share Your Personal Information in the Following Cases:",
        content: [
          "Legal Compliance: We may share your personal data to comply with applicable regulations, laws, and legal procedures, including responding to requests from governmental and security authorities in the Kingdom of Saudi Arabia.",
          "For Business Transfers: In the event of a merger, acquisition, or any form of sale of some or all of our assets, we may transfer your personal data to the relevant third party in a manner that ensures the protection of your personal data in accordance with this Privacy Notice.",
          "With Service Providers: We may share your personal data with trusted third-party service providers to help us operate our services, conduct our business, or serve our users. Service providers are contractually obligated to maintain the confidentiality and security of your data and use it only for the purposes disclosed to them.",
          "With Affiliates: We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include our parent company and any other subsidiaries, joint venture partners or other companies that we control or that are under common control with us.",
          "With Business Partners: We may share your information with our business partners to offer you certain products, services or promotions.",
        ],
      },
      {
        title: "6. Links to Other Websites:",
        content: [
          "Our Service may contain links to other websites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.",
        ],
      },
      {
        title: "7. Retention Period of Your Personal Data:",
        content: [
          "We will only retain your personal data for as long as is required by regulations for the specific purpose stated in this notice. We will retain and use your information to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies, subject to instructions from regulatory authorities.",
          "We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.",
        ],
      },
      {
        title: "8. Your Rights Regarding the Processing of Your Personal Data:",
        description:
          "You have the following rights regarding your personal data:",
        content: [
          "The right to access your personal data: Request access to the personal data we hold about you.",
          'The right to request to obtain your personal data: You have the right to request to obtain your personal data held in a "guest" in a readable and clear format, if technically possible through the channel you request.',
          "The right to request the correction of your personal data: Request the correction of any inaccurate or incomplete data.",
          "The right to request the destruction of your personal data: Request the deletion of your data under certain circumstances.",
          "The right to withdraw your consent: You have the right to withdraw your consent to the processing of your personal data at any time unless there are regulatory justifications requiring otherwise.",
        ],
      },
      {
        title: "9. Deletion or Destruction of Your Personal Data:",
        content: [
          "You have the right to delete or request assistance in deleting the personal data that we have collected about you.",
          "Our Service may give you the ability to delete certain information about you from within the Service.",
          "You can update, amend, or delete your information at any time by signing in to your Account, if you have one, and visiting the account settings section that allows you to manage your personal information. You may also contact us to request access to, correct, or delete any personal information that you have provided to us. However, please note that we may need to retain certain information when we have a legal obligation or lawful basis to do so.",
        ],
      },
      {
        title: "10. How to Exercise Rights:",
        content: [
          "To exercise your rights, you can contact us via the contact methods mentioned in Article 13 of this Agreement.",
        ],
      },
      {
        title: "11. Updates to the Privacy Notice:",
        content: [
          "Rushd System reserves the right to change this Privacy Notice from time to time. Changes and amendments to this Privacy Notice are effective immediately upon posting the changes and amendments on this website. Users are advised to review this notice periodically to be fully aware of any changes.",
        ],
      },
      {
        title: "12. Consent to the Privacy Policy:",
        content: [
          "By accessing this website and continuing to use it, you signify your acceptance of the terms and conditions of the Privacy Notice.",
        ],
      },
      {
        title: "13. Contact Information:",
        content: [
          "In case of any inquiries regarding this Privacy Policy, you can contact us via the following:",
          "Phone Number: 0534336584",
          "Email: Info@rushd.tech",
        ],
      },
    ],
  },
};
