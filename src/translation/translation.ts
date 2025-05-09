import { IRushdContent } from "../types";

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
      title: "Rushd – Short-Term Rental Management System",
      subtitle1: "A smart platform that simplifies operations",
      subtitle2: " and unifies your property management",
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
              "Roshd system offers a comprehensive solution for managing hotels of all sizes, helping improve performance and streamline administrative operations. The system is distinguished by its ability to integrate all booking channels in one place, along with providing an intelligent pricing system that automatically adapts to peak seasons and market events. It offers advanced tools for automating daily tasks such as guest check-in and room allocation, in addition to an integrated customer relationship management system that tracks guest preferences and enhances their experience. The system also provides detailed performance reports that assist in making managerial decisions. What sets the system apart is its flexibility to adapt to the needs of different types of hotels, whether independent or part of a hotel chain. The outcomes include improved occupancy rates, reduced operational costs, and increased customer satisfaction, making it an effective tool for achieving growth and profitability in the hospitality sector.",
            image: "/assets/hotel.jpg",
          },
          {
            title: "Serviced apartments",
            name: "Serviced apartments",
            description:
              "Roshd system transforms furnished apartment management into a profitable, organized, and hassle-free process. It allows you to manage your apartment easily from anywhere using your phone or computer. The system helps increase revenue through direct bookings and a smart pricing system that adapts to market conditions. It is distinguished by its ability to save daily working hours by automating routine administrative processes, reducing the time and effort needed for management. It also contributes to ensuring guest satisfaction and achieving high ratings, leading to repeat bookings and increased revenue. By choosing the package that suits your needs, you can turn your furnished apartment into a successful and profitable investment with minimal administrative effort, while maintaining high-quality service for your guests.",
            image: "/assets/apartment.jpg",
          },
          {
            title: "Chalets",
            name: "Chalets",
            description:
              "Roshd system offers a comprehensive solution for efficiently managing chalets. It simplifies the booking management process by automatically synchronizing reservations from various platforms into one place, with a centralized calendar updated in real time. The system also enables direct bookings to avoid external platform commissions. It features smart tools to boost revenue, such as automatic pricing based on seasonality and competition, and the ability to offer discounts for repeat bookings. Additionally, it automates daily tasks like sending booking confirmations and cleaning alerts to enhance guest service, The system includes a multi-option payment gateway, a review management system, and supports smart lock, It also provides accurate performance reports for occupancy tracking and financial analysis, Subscription plans are available to suit chalets of all sizes, with integrated marketing capabilities, This makes chalet management easy and profitable, saving time and reducing costs, all through a user-friendly interface that requires no technical expertise.",
            image: "/assets/chalets.jpg",
          },
          {
            title: "Private units",
            name: "Private units",
            description:
              "Roshd system empowers private unit owners to achieve numerous benefits by enabling them to manage one or multiple units effortlessly and without complications. It boosts profitability through direct bookings and the use of smart pricing systems that adapt to market conditions. The system saves owners time by automating daily routine operations, reducing the effort and time required for management, Additionally, it significantly enhances the guest experience, ensuring high ratings and encouraging repeat bookings, With the use of this system, private unit owners can turn their properties into a stable and profitable source of income, while maintaining a simple management process that requires only a few minutes of daily follow-up.",
            image: "/assets/private_units.jpg",
          },
        ],
      },
    },

    pricingData: {
      title: "Subscription Plans",
      description:
        "We offer four flexible plans tailored to your business size and operational needs, with optional add-ons for scalability:",
      featureTitle: "Features:",
      fees: "Fees: ",
      plans: [
        {
          name: "Starter Plan",
          id: "starter",
          price: "2% per booking",
          users: "Users: 1",
          units: "Units: 1",
          duration: "Subscription Duration: One year",
          features: [
            "Basic system features",
            "Limited support",
            "Auto-upgrade to the basic plan after one year",
          ],
        },
        {
          name: "Plus Plan",
          id: "plus",
          price: "SAR 89/month (annual discount available)",
          users: "Users: 1-4",
          units: "Units: Up to 8",
          duration:
            "Subscription Duration: One month (with annual discount available)",
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
          price: "5% per booking",
          monthlyMinimum: "SAR 1000/month (with annual discount)",
          users: "Users: Unlimited",
          units: "Units: 8+",
          duration: "Subscription Duration: One month (minimum)",
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
          price: "5% per booking",
          clarification: "designed for large organizations",
          users: "Users: Unlimited",
          units: "Units: Unlimited",
          duration: "Subscription Duration: Based on agreement",
          features: [
            "Full customization based on your needs",
            "System integration",
            "24/7 continuous support",
          ],
          optionalExtras: {
            title: "Optional Add-Ons:",
            extras: [
              "Extra unit (yearly): SAR 50",
              "Dynamic pricing (per unit/month): SAR 25",
              "Smart locks (per lock/month): SAR 15",
              "One-time system setup: SAR 299",
              "One-time report setup: SAR 199",
            ],
          },
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
            "Can Rushd platform be integrated with booking channels like Airbnb ?Bookings",
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
        imageUrl: "/assets/facebook.png",
        name: "Facebook",
        url: "https://facebook.com",
      },
      {
        imageUrl: "/assets/x.png",
        name: "X",
        url: "https://twitter.com",
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
      title: "رشـد – نظام إدارة الإيجارات القصيرة",
      subtitle1: "منصة ذكية تسهل العمليات",
      subtitle2: "وتوحد إدارة عقاراتك",
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
        description: "رُشد مناسبة لأي جهة تقدم خدمات الإيواء السياحي",
        categories: [
          {
            title: "Hotels",
            name: "الفنادق",
            description:
              "نظام رشد يقدم حلاً شاملاً لإدارة الفنادق بمختلف أحجامها، حيث يساعد في تحسين الأداء وتبسيط العمليات الإدارية، يتميز النظام بقدرته على دمج جميع قنوات الحجز في مكان واحد، مع توفير نظام تسعير ذكي يتكيف تلقائياً مع مواسم الذروة وأحداث السوق، يوفر النظام أدوات متقدمة لأتمتة المهام اليومية مثل استقبال الضيوف وتوزيع الغرف، بالإضافة إلى نظام متكامل لإدارة علاقات العملاء يتتبع تفضيلاتهم ويحسن تجربتهم. كما يقدم تقارير أداء تفصيلية تساعد في اتخاذ القرارات الإدارية، أهم ما يميز النظام هو مرونته في التكيف مع احتياجات مختلف أنواع الفنادق، سواءً كانت مستقلة أو جزءاً من سلسلة فندقية. النتائج تشمل تحسين معدلات الإشغال، خفض التكاليف التشغيلية، ورفع مستوى رضا العملاء، مما يجعله أداة فعالة لتحقيق النمو والربحية في القطاع الفندقي.",
            image: "/assets/hotel.jpg",
          },
          {
            title: "Apbartments",
            name: "الشقق المفروشة",
            description:
              "نظام رشد يحوّل إدارة الشقق المفروشة إلى عملية مربحة ومنظمة وخالية من التعقيدات. فهو يتيح لك إدارة شقتك بسهولة من أي مكان عبر هاتفك أو حاسوبك، كما يساعدك على زيادة الإيرادات من خلال الحجز المباشر ونظام التسعير الذكي الذي يتكيف مع ظروف السوق، يتميز النظام بقدرته على توفير ساعات العمل اليومية بفضل أتمتة العمليات الإدارية الروتينية، مما يقلل من الجهد والوقت المطلوبين للإدارة. كما يساهم في ضمان رضا الضيوف وتحقيق تقييمات عالية، مما يؤدي إلى حجوزات متكررة وزيادة في الإيرادات، باختيار الباقة المناسبة لاحتياجاتك، يمكنك تحويل شقتك المفروشة إلى استثمار ناجح ومربح بأقل جهد إداري ممكن، مع الحفاظ على جودة الخدمة المقدمة للضيوف.",
            image: "/assets/apartment.jpg",
          },
          {
            title: "Chalets",
            name: "الشاليهات",
            description:
              "نظام رشد يُقدم حلاً متكاملاً لإدارة الشاليهات بكل كفاءة، حيث يُسهل عملية إدارة الحجوزات من خلال مزامنتها تلقائياً من مختلف المنصات في مكان واحد، مع تقويم مركزي محدث لحظياً. كما يتيح الحجز المباشر لتجنب عمولات المنصات الخارجية، يتميز النظام بأدوات ذكية لتحسين الإيرادات، مثل التسعير التلقائي حسب الموسم والمنافسة، وإمكانية منح خصومات للحجوزات المتكررة. كما يُوفر مميزات أتمتة المهام اليومية كإرسال تأكيدات الحجز وتنبيهات التنظيف، لتحسين خدمة الضيوف، يتضمن النظام بوابة دفع متعددة الخيارات ونظام تقييمات، مع دعم الأقفال الذكية، ويقدم تقارير أداء دقيقة لمتابعة الإشغال والتحليل المالي، تتنوع خطط الاشتراك لتلائم جميع أحجام الشاليهات، مع إمكانيات تسويقية متكاملة، بذلك يحول النظام إدارة الشاليهات إلى عملية سهلة ومربحة، مع توفير الوقت وخفض التكاليف، عبر واجهة بسيطة لا تحتاج خبرة تقنية.",
            image: "/assets/chalets.jpg",
          },
          {
            title: "Private units",
            name: "الوحدات الخاصة",
            description:
              "نظام رشد يمكّن ملاك الوحدات الخاصة من تحقيق العديد من الفوائد، فهو يساعدهم في إدارة وحدة واحدة أو عدة وحدات بكل سهولة وبدون أي تعقيدات، كما يعمل على زيادة الأرباح من خلال تمكين الحجز المباشر واستخدام أنظمة التسعير الذكية التي تتكيف مع ظروف السوق، ويوفر النظام وقت الملاك عن طريق أتمتة العمليات اليومية الروتينية، مما يقلل من الجهد والوقت المطلوب للإدارة، بالإضافة إلى ذلك، يساهم النظام في تحسين تجربة الضيوف بشكل ملحوظ، مما يضمن الحصول على تقييمات عالية ويشجع على تكرار الحجوزات من قبل العملاء، بفضل استخدام هذا النظام، يصبح بإمكان ملاك الوحدات الخاصة تحويل ممتلكاتهم إلى مصدر دخل مستقر ومربح، مع الحفاظ على بساطة عملية الإدارة التي لا تحتاج سوى لبضع دقائق من المتابعة اليومية.",
            image: "/assets/private_units.jpg",
          },
        ],
      },
    },
    pricingData: {
      title: "خطط الاشتراك",
      description:
        "نقدّم لك أربعة باقات مصممة لتناسب احتياجك مهما كان حجم عملك، مع مزايا مرنة وإضافات اختيارية:",
      featureTitle: "المزايا:",
      fees: "الرسوم: ",
      plans: [
        {
          name: "باقة الانطلاقة",
          id: "starter",
          price: "2% من كل حجز",
          users: "المستخدمين: 1",
          units: "الوحدات: 1",
          duration: "مدة الاشتراك: سنة واحدة",
          clarification: "للمستخدمين الجدد",
          features: [
            "الخصائص الأساسية",
            "دعم محدود",
            "عند انتهاء السنة، تتحول تلقائياً إلى الباقة الأساسية",
          ],
        },
        {
          name: "باقة بلَس",
          id: "plus",
          price: "89 ريال شهرياً (خصم سنوي متاح)",
          users: "المستخدمين: 1-4",
          units: "الوحدات: حتى 8",
          duration: "مدة الاشتراك: شهر واحد (مع خصم سنوي متاح)",
          clarification: "مخصصة للشركات الصغيرة والمتوسطة",
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
          id: "advanced",
          price: "5% من كل حجز",
          monthlyMinimum: "1000 ريال شهرياً (مع خصم سنوي متاح)",
          users: "المستخدمين: غير محدود",
          units: "الوحدات: 8+",
          duration: "مدة الاشتراك: شهر واحد (بحد أدنى)",
          clarification: "مخصصة للشركات المتوسطة",
          features: [
            "جميع خصائص باقة بلس",
            "دومين خاص",
            "بوابة دفع",
            "دعم سريع",
          ],
        },
        {
          name: "باقة المؤسسات",
          id: "enterprise",
          price: "5% من كل حجز",
          clarification: "مخصصة للشركات الكبرى",
          users: "المستخدمين: غير محدود",
          units: "الوحدات: غير محدود",
          duration: "مدة الاشتراك: حسب الاتفاق",
          features: [
            "تخصيص كامل حسب الحاجة",
            "تكامل مع أنظمة أخرى",
            "دعم متواصل 24/7",
          ],
          optionalExtras: {
            title: "إضافات اختيارية:",
            extras: [
              "وحدة إضافية (سنوياً): 50 ريال",
              "تسعير ديناميكي (شهرياً لكل وحدة): 25 ريال",
              "الأقفال الذكية (شهرياً لكل قفل): 15 ريال",
              "إعداد النظام (مرة واحدة): 299 ريال",
              "إعداد التقارير (مرة واحدة): 199 ريال",
            ],
          },
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
          question: "هل يمكن ربط منصة رشد مع قنوات الحجز مثل Airbnb ؟Bookings",
          answer:
            "نعم، زشد تتيح لك إدارة الحجوزات من مختلف المنصات العالمية من مكان واحد، مما يوفر عليك الوقت ويقلل نسبة الأخطاء.",
        },
        {
          question: "كيف استقبل الحجوزات من العملاء بشكل مباشر؟",
          answer:
            "توفر زشد لك رابط حجز مباشر خاص بك يمكنك مشاركتهم عمالئك أو نشره في وسائل التواصل، دون الحاجة للوسيط أو دفع عمولات.",
        },
        {
          question: "هل أستلم المدفوعات مباشرة من العملاء؟",
          answer:
            "نعم، من خلال نظام الدفع في زشد يتم تحصيل المدفوعات بشكل يومي خصوصاً للإيجارات القصيرة، مما يضمن تدفق نقدي سلس وسريع.",
        },
        {
          question: "هل تقدم المنصة نظام CRM لإدارة العملاء؟",
          answer:
            "بالتأكيد، يشمل نظام زشد أداة CRM تساعدك في تتبع معلومات العملاء، تاريخ الحجوزات، التواصل، وتقديم خدمة مخصصة واحترافية.",
        },
        {
          question: "هل أحتاج إلى خبرة تقنية الستخدام زشد؟",
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
        imageUrl: "/assets/facebook.png",
        name: "فيسبوك",
        url: "https://facebook.com",
      },
      {
        imageUrl: "/assets/x.png",
        name: "تويتر",
        url: "https://twitter.com",
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
