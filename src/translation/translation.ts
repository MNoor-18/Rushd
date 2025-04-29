import { IRushdContent } from "../types";


export const RushdContent: IRushdContent = {
  en: {
    navbarLinks: [
      { title: "Home", id: "home" },
      { title: "Features", id: "features" },
      { title: "Pricing", id: "pricing" },
      { title: "Quotes", id: "quotes" },
      { title: "Contact", id: "contact" }
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
            description: "System complexity: Multiple tools make management harder.",
            bgColor: "bg-[#1C1C1C]",
            textColor: "text-[#FFFFFF]",
            numStyle: "[-webkit-text-stroke:1px_white]",
          },
          {
            id: 2,
            title: "Tracking challenges",
            description: "Tracking challenges: Hard to monitor financial performance and occupancy.",
            bgColor: "bg-[#FF5200]",
            textColor: "text-[#FFFFFF]",
            numStyle: "[-webkit-text-stroke:1px_white]",
          },
          {
            id: 3,
            title: "High costs",
            description: "High costs: OTA commissions reduce your overall profits.",
            bgColor: "bg-[#FAF4E8]",
            textColor: "text-[#000000]",
            numStyle: "[-webkit-text-stroke:1px_black]",
          },
        ]

      },
      solutions: {
        title: "Solutions",
        content: [
          {
            id: 1,
            title: "Unified Interface",
            description: "Unified Interface: Manage all your units from one dashboard.",
          },
          {
            id: 2,
            title: "Smart Analytics",
            description: "Smart Analytics: Accurate reports to support decision-making.",
          },
          {
            id: 3,
            title: "Automated Operations",
            description: "Automated Operations: Save time through automation.",
          },
          {
            id: 4,
            title: "Direct Booking Website",
            description: "Direct Booking Website: Receive bookings and payments directly.",
          },
          {
            id: 5,
            title: "OTA Integration",
            description: "OTA Integration: Sync with Airbnb, Booking.com, and more.",
          },
        ]
      },
      whoCanUseRushd: {
        title: "Who can use Rushd?",
        description: "Rushd is ideal for anyone in the hospitality sector:",
        categories: [
          {
            title: "Hotels",
            name: "Hotels",
            description: "Rushd is ideal for hotel management, offering comprehensive solutions to improve bookings, manage units, and enhance the guest experience. It also helps streamline operations and increase service efficiency.",
            image: "/assets/hotel.jpg",
          },
          {
            title: "Serviced apartments",
            name: "Serviced apartments",
            description: "Serviced apartments description goes here...",
            image: "/assets/apartment.jpg",
          },
          {
            title: "Chalets",
            name: "Chalets",
            description: "Chalets description goes here...",
            image: "/assets/chalets.jpg",
          },
          {
            title: "Private units",
            name: "Private units",
            description: "Private units description goes here...",
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
          price: "Free for the first year for new users",
          users: "Users: 1",
          units: "Units: 1",
          duration: "Subscription Duration: One year",
          features: [
            "Basic system features",
            "Limited support",
            "Auto-upgrade to the basic plan after one year"
          ]
        },
        {
          name: "Plus Plan",
          id: "plus",
          price: "SAR 89/month (annual discount available)",
          users: "Users: 1-4",
          units: "Units: Up to 8",
          duration: "Subscription Duration: One month (with annual discount available)",
          clarification: "Designed for small to medium companies",
          features: [
            "Booking management",
            "Contract management",
            "Channel manager",
            "Smart calendar",
            "CRM system",
            "Standard support"
          ]
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
            "Fast support"
          ]
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
            "24/7 continuous support"
          ],
          optionalExtras: {
            title: "Optional Add-Ons:",
            extras: [
              "Extra unit (yearly): SAR 50",
              "Dynamic pricing (per unit/month): SAR 25",
              "Smart locks (per lock/month): SAR 15",
              "One-time system setup: SAR 299",
              "One-time report setup: SAR 199"
            ]
          }
        }
      ],
      theButton: { label: "Free trial" },
    },

    quotesData: {
      sectionTitle: "Clients Feedback",
      feedbacks: [
        {
          name: "Client",
          rating: 5,
          comment: "Rushd exceeded our expectations. It saved us time and allowed us to focus on service.",
          imageUrl: "/images/user.jpg",
        },
        {
          name: "Client",
          rating: 5,
          comment: "Finally, a local system that truly understands our needs.",
          imageUrl: "/images/user.jpg",
        },
      ],
    },

    faqData: {
      sectionTitle: "FAQ",
      sectionSubtitle: "Rushd",
      questions: [
        {
          question: "Can Rushd platform be integrated with booking channels like Airbnb ?Bookings",
          answer: "Yes, Rushd allows you to manage bookings from various global platforms in one place, saving you time and reducing errors.",
        },
        {
          question: "How can I receive bookings directly from customers?",
          answer: "Rushd provides you with a direct booking link that you can share with your customers or post on social media, eliminating the need for intermediaries or commission fees.",
        },
        {
          question: "Do I receive payments directly from customers?",
          answer: "Yes, through Rushd's payment system, payments are collected daily, especially for short-term rentals, ensuring smooth and fast cash flow.",
        },
        {
          question: "Does the platform offer a CRM system for customer management?",
          answer: "Absolutely, Rushd's system includes a CRM tool that helps you track customer information, booking history, communication, and provide personalized professional service.",
        },
        {
          question: "Do I need technical expertise to use Rushd?",
          answer: "No, the system is designed with an easy-to-use interface suitable for everyone, whether you're a beginner or professional in property management.",
        },
        {
          question: "Can I track the performance of my real estate units?",
          answer: "Yes, the platform provides real-time reports and accurate analytics on occupancy rates, income, bookings, and other key indicators.",
        },
        {
          question: "Can I control the pricing of my units?",
          answer: "Yes, Rushd allows fixed or dynamic pricing based on season, with the ability to adjust prices automatically or manually as needed.",
        },
        {
          question: "Does Rushd provide technical support?",
          answer: "Yes, our technical support team is available to answer your inquiries continuously through various channels.",
        },
        {
          question: "Is there a trial period?",
          answer: "Rushd offers a free package for new users for 14 days, including basic features and giving you the opportunity to try the system before upgrading.",
        },
        {
          question: "Can I customize the booking page with my brand name?",
          answer: "Yes, you can get a custom domain with your brand name, providing your clients with a more professional and trustworthy experience.",
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
    contact :{
      title: "Contact Us", 
      description: "Want to get started or have a question?  Send us a message and we’ll get back to you shortly."
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
      subscribe: "Subscribe to our magazine"
    },
    legalDocuments: {
      termsAndConditions: "Terms&Conditions",
      privacyPolicy: "Privacy"
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
        ]
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
        ]
      },
      whoCanUseRushd: {
        title: "من يمكنه استخدام رشـد؟",
        description: "رُشد مناسبة لأي جهة تقدم خدمات الإيواء السياحي",
        categories: [
          {
            title: "Hotels",
            name: "الفنادق",
            description: "رشـد هو الحل المثالي لإدارة الفنادق، حيث يوفر حلولاً شاملة لتحسين الحجوزات، إدارة الوحدات، وتحسين تجربة الضيوف.",
            image: "/assets/hotel.jpg",
          },
          {
            title: "Apbartments",
            name: "الشقق المفروشة",
            description: "رشـد يناسب إدارة الشقق المفروشة ويوفر ميزات متقدمة لإدارة الوحدات والإشغال.",
            image: "/assets/apartment.jpg",
          },
          {
            title: "Chalets",
            name: "الشاليهات",
            description: "رشـد يساعد في إدارة الشاليهات ويوفر طريقة سهلة لإدارة الحجوزات والعملاء.",
            image: "/assets/chalets.jpg",
          },
          {
            title: "Private units",
            name: "الوحدات الخاصة",
            description: "رشـد يساعد في إدارة الوحدات الخاصة ويوفر خيارات مرنة لإدارة عمليات الحجز والدفع.",
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
          price: "مجانية لأول سنة للمستخدمين الجدد",
          users: "المستخدمين: 1",
          units: "الوحدات: 1",
          duration: "مدة الاشتراك: سنة واحدة",
          clarification: "للمستخدمين الجدد",
          features: [
            "الخصائص الأساسية",
            "دعم محدود",
            "عند انتهاء السنة، تتحول تلقائياً إلى الباقة الأساسية"
          ]
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
            "دعم قياسي"
          ]
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
            "دعم سريع"
          ]
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
            "دعم متواصل 24/7"
          ],
          optionalExtras: {
            title: "إضافات اختيارية:",
            extras: [
              "وحدة إضافية (سنوياً): 50 ريال",
              "تسعير ديناميكي (شهرياً لكل وحدة): 25 ريال",
              "الأقفال الذكية (شهرياً لكل قفل): 15 ريال",
              "إعداد النظام (مرة واحدة): 299 ريال",
              "إعداد التقارير (مرة واحدة): 199 ريال"
            ]
          }
        }
      ],
      theButton: { label: "ابدأ تجربتك المجانية" },
    },
    quotesData: {
      sectionTitle: "آراء العملاء",
      feedbacks: [
        {
          name: "عميل",
          rating: 5,
          comment: "رشد فاقت توقعاتنا. وفروا علينا كثير وخلونا نركز على تطوير الخدمة",
          imageUrl: "/images/user.jpg",
        },
        {
          name: "عميل",
          rating: 5,
          comment: "أخيراً نظام محلي فاهم احتياجنا.",
          imageUrl: "/images/user.jpg",
        },
      ],
    },
    faqData: {
      sectionTitle: "الأسئلة الشائعة",
      sectionSubtitle: "إذا كان لديك أي استفسار، يمكنك البحث في الأسئلة التالية:",
      questions: [
        {
          question: "هل يمكن ربط منصة زشد مع قنوات الحجز مثل Airbnb ؟Bookings",
          answer: "نعم، زشد تتيح لك إدارة الحجوزات من مختلف المنصات العالمية من مكان واحد، مما يوفر عليك الوقت ويقلل نسبة الأخطاء.",
        },
        {
          question: "كيف استقبل الحجوزات من العملاء بشكل مباشر؟",
          answer: "توفر زشد لك رابط حجز مباشر خاص بك يمكنك مشاركتهم عمالئك أو نشره في وسائل التواصل، دون الحاجة للوسيط أو دفع عمولات.",
        },
        {
          question: "هل أستلم المدفوعات مباشرة من العملاء؟",
          answer: "نعم، من خلال نظام الدفع في زشد يتم تحصيل المدفوعات بشكل يومي خصوصاً للإيجارات القصيرة، مما يضمن تدفق نقدي سلس وسريع.",
        },
        {
          question: "هل تقدم المنصة نظام CRM لإدارة العملاء؟",
          answer: "بالتأكيد، يشمل نظام زشد أداة CRM تساعدك في تتبع معلومات العملاء، تاريخ الحجوزات، التواصل، وتقديم خدمة مخصصة واحترافية.",
        },
        {
          question: "هل أحتاج إلى خبرة تقنية الستخدام زشد؟",
          answer: "لا، النظام مصمم بواجهة سهلة الاستخدام، تناسب الجميع سواء كنت مبتدئ أو محترف في إدارة العقارات.",
        },
        {
          question: "هل يمكن تتبع أداء الوحدات العقارية؟",
          answer: "نعم، توفر المنصة تقارير فورية وتحليلات دقيقة عن نسبة الإشغال، الدخل، الحجوزات، وغيرها من المؤشرات الأساسية.",
        },
        {
          question: "هل استطيع التحكم بتسعير وحداتي؟",
          answer: "نعم، تتيح رشد تسعير ثابت أو ديناميكي بحسب الموسم، مع إمكانية تعديل الأسعار تلقائياً أو يدوياً حسب الحاجة.",
        },
        {
          question: "هل توفر رشد دعم فني؟",
          answer: "نعم، فريق الدعم الفني متواجد للرد على استفساراتك بشكل مستمر عبر القنوات المختلفة.",
        },
        {
          question: "هل يوجد فترة تجريبية؟",
          answer: "توفر رشد باقة مجانية للمستخدمين الجدد لمدة 14 يوم، تشمل الأساسيات وتمنحك فرصة تجربة النظام قبل الترقية.",
        },
        {
          question: "هل أقدر اخصص صفحة الحجز باسمي التجاري؟",
          answer: "نعم، بإمكانك الحصول على دومين خاص باسمك التجاري، يعطي عملائك تجربة أكثر احترافية وثقة.",
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
    description: "عندك استفسار أو حاب تبدأ؟ ارسل لنا وسنرد عليك بأسرع وقت."
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
      subscribe: "إشترك في مجلتنا"
    },
    legalDocuments: {
      termsAndConditions: "الشروط والأحكام",
      privacyPolicy: "الخصوصية"
    },
  },
};