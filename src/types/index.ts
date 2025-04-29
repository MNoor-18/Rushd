export interface CustomButtonProps {
    label: string;
    theStyle: string;
    textColor?: string;
    children?: React.ReactNode;
    event: () => void
}

export interface TitlesProps {
    theTitle: string;
    titleStyle: string;
    children?: React.ReactNode;
}

export interface ProblemCardProps {
    number: number | string;
    bgColor: string;
    textColor: string;
    title: string;
    theExplanation: string;
    numStyle: string;
}

export interface SolutionsCardProps {
    theTitle: string;
    description: string;
}

export interface PlanCardProps {
    name: string;
    price: string;
    duration: string | undefined;
    isActive: boolean;
    onSelect: () => void;
}

export interface FeedbackCardProps {
    name: string;
    rating: number;
    comment: string;
    active?: boolean
    imageUrl?: string;
}

export interface SliderButtonsProps {
    onPrev: () => void;
    onNext: () => void;
    atStart?: boolean;
    atEnd?: boolean;
}

// ########################### rushd data interface ###############################

interface RushdContentLanguage {
  navbarLinks: { title: string; id: string }[];
  heroData: {
    title: string;
    subtitle1: string;
    subtitle2: string;
    buttonText: string;
  };
  featuresData: {
    problemsNowadays: {
      title: string;
      content: {
        id: number;
        title: string;
        description: string;
        bgColor: string;
        textColor: string;
        numStyle: string;
      }[]
    };
    solutions: {
      title: string;
      content: {
        id: number;
        title: string;
        description: string
      }[];
    };
    whoCanUseRushd: {
      title: string;
      description: string;
      categories: {
        name: string
        title: string;
        description: string;
        image: string;
      }[];
    };
  };
  pricingData: {
    title: string;
    description: string;
    featureTitle: string;
    fees: string;
    plans: {
      name: string;
      id: string;
      price: string;
      users: string;
      units: string;
      clarification?: string;
      monthlyMinimum?: string;
      duration?: string;
      features: string[];
      optionalExtras?: {
          title: string;
          extras: string[]
      }
  }[];
  theButton: { label: string };
  };
  quotesData: {
    sectionTitle: string;
    feedbacks: {
      name: string;
      rating: number;
      comment: string;
      imageUrl: string;
    }[];
  };
  faqData: {
    sectionTitle: string;
    sectionSubtitle: string;
    questions: {
      question: string;
      answer: string;
    }[];
  };
  partnersData: {
    sectionTitle: string;
    partners: {
      name: string;
      logoUrl: string;
    }[];
  };
  socialLinks: {
    imageUrl: string;
    name: string;
    url: string;
  }[];
  contact: {
    title: string;
    description: string;
  };
  formData: {
    placeholders: {
      theName: string;
      surName: string;
      email: string;
      message: string;
    },
    theName: string;
    surName: string;
    email: string;
    message: string;
    submit: string;
    send: string;
    subscribe: string;
  },
  legalDocuments: {
    termsAndConditions: string;
    privacyPolicy: string;
  },
};

export interface IRushdContent {
    en: RushdContentLanguage;
    ar: RushdContentLanguage;
  };