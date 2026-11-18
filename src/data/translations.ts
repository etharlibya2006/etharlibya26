export type Language = 'ar' | 'en';

export interface Translations {
  nav: {
    home: string;
    about: string;
    products: string;
    brands: string;
    distribution: string;
    globalSourcing: string;
    b2b: string;
    contact: string;
    switchLang: string;
    ctaButton: string;
  };
  hero: {
    headline: string;
    slogan: string;
    subheadline: string;
    exploreProducts: string;
    partnerWithUs: string;
    metrics: {
      experience: { value: string; label: string };
      coverage: { value: string; label: string };
      productsCount: { value: string; label: string };
      countries: { value: string; label: string };
    };
  };
  about: {
    badge: string;
    title: string;
    intro: string;
    milestone1Year: string;
    milestone1Title: string;
    milestone1Desc: string;
    milestone2Year: string;
    milestone2Title: string;
    milestone2Desc: string;
    milestone3Year: string;
    milestone3Title: string;
    milestone3Desc: string;
    visionTitle: string;
    visionDesc: string;
    missionTitle: string;
    missionDesc: string;
    whyUsTitle: string;
    pillars: Array<{ title: string; desc: string }>;
    cblComplianceTitle: string;
    cblComplianceDesc: string;
    facilitiesTitle: string;
    facilityHq: string;
    facilityWarehouse: string;
    facilityFleet: string;
  };
  products: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    filterAll: string;
    viewDetails: string;
    orderWhatsApp: string;
    specWeight: string;
    specCarton: string;
    keyFeatures: string;
    noResults: string;
    quickInquiry: string;
  };
  brands: {
    badge: string;
    title: string;
    subtitle: string;
    monalisaTitle: string;
    monalisaBadge: string;
    monalisaDesc: string;
    monalisaTagline: string;
    monalisaFeatures: string[];
    partnerBrandsTitle: string;
    partnerBrandsSubtitle: string;
  };
  distribution: {
    badge: string;
    title: string;
    subtitle: string;
    callout: string;
    cities: {
      tripoli: { name: string; role: string; desc: string; stats: string };
      misrata: { name: string; role: string; desc: string; stats: string };
      benghazi: { name: string; role: string; desc: string; stats: string };
      sebha: { name: string; role: string; desc: string; stats: string };
      zawiya: { name: string; role: string; desc: string; stats: string };
      zliten: { name: string; role: string; desc: string; stats: string };
      bayda: { name: string; role: string; desc: string; stats: string };
    };
    infrastructureTitle: string;
    warehousesTitle: string;
    warehousesDesc: string;
    fleetTitle: string;
    fleetDesc: string;
    complianceTitle: string;
    complianceDesc: string;
  };
  globalSourcing: {
    badge: string;
    title: string;
    subtitle: string;
    quoteTitle: string;
    quoteText: string;
    countriesTitle: string;
    countriesSubtitle: string;
    countriesList: Array<{ name: string; flag: string; special: string }>;
    internationalAdvantages: Array<{ title: string; desc: string }>;
  };
  b2b: {
    badge: string;
    title: string;
    subtitle: string;
    tracksTitle: string;
    tracks: Array<{ id: string; title: string; desc: string; badge: string }>;
    formTitle: string;
    formSubtitle: string;
    companyName: string;
    country: string;
    representativeName: string;
    phoneWhatsApp: string;
    email: string;
    cooperationType: string;
    message: string;
    submitButton: string;
    successMessage: string;
    directContactNote: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    addressTitle: string;
    addressValue: string;
    phoneTitle: string;
    phones: string[];
    emailTitle: string;
    emailValue: string;
    hoursTitle: string;
    hoursValue: string;
    openInMaps: string;
    socialTitle: string;
    facebook: string;
    tiktok: string;
    instagram: string;
    commercialRegistry: string;
    licenseNumber: string;
    taxNumber: string;
  };
  footer: {
    companyName: string;
    description: string;
    rights: string;
    cblAffiliation: string;
    quickLinks: string;
    contactSummary: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      products: 'منتجاتنا',
      brands: 'علاماتنا التجارية',
      distribution: 'انتشارنا في ليبيا',
      globalSourcing: 'مصادر الاستيراد',
      b2b: 'التعاون التجاري',
      contact: 'اتصل بنا',
      switchLang: 'English',
      ctaButton: 'كن شريكاً تجارياً',
    },
    hero: {
      headline: 'نربط الأسواق العالمية بالسوق الليبي',
      slogan: '«خبرة منذ 2006، وانتشار يصنع الفرق»',
      subheadline:
        'إيثار ليبيا شركة رائدة متخصصة في استيراد وتسويق وتوزيع المواد الغذائية؛ نمتلك خبرة تمتد منذ عام 2006، وشبكة تسويقية ولوجستية واسعة تغطي مختلف أنحاء ليبيا شرقاً وغرباً وجنوباً.',
      exploreProducts: 'اكتشف منتجاتنا',
      partnerWithUs: 'كن شريكاً تجارياً',
      metrics: {
        experience: { value: '+18 عاماً', label: 'خبرة في السوق الليبي منذ 2006' },
        coverage: { value: '100%', label: 'تغطية لكافة الأقاليم الليبية' },
        productsCount: { value: '+30', label: 'منتجاً وعلامة تجارية معتمدة' },
        countries: { value: '8+', label: 'دول ومصادر استيراد عالمية' },
      },
    },
    about: {
      badge: 'نبذة عن الشركة',
      title: 'إيثار ليبيا لاستيراد المواد الغذائية',
      intro:
        'منذ انطلاقتنا في عام 2006، ونحن نعمل على بناء حضور قوي وموثوق في سوق المواد الغذائية الليبي، مستندين إلى رؤية طموحة تقوم على توفير منتجات غذائية متنوعة، وتعزيز ثقة المستهلك، وبناء علاقات تجارية طويلة الأمد مع شركائنا الدوليين والمحليين.',
      milestone1Year: '2006',
      milestone1Title: 'الانطلاقة الأولى في السوق المحلي',
      milestone1Desc:
        'بدأت رحلتنا في مجال التسويق وتوزيع المواد الغذائية، وترسيخ قاعدة العملاء وتجار الجملة في طرابلس والمنطقة الغربية.',
      milestone2Year: '2015',
      milestone2Title: 'التوسع الاستراتيجي والاستيراد المباشر',
      milestone2Desc:
        'انتقلت إيثار ليبيا إلى مرحلة الاستيراد المباشر والتعامل مع كبرى المصانع والموردين في آسيا وأوروبا عبر الاعتمادات المستندية الرسمية.',
      milestone3Year: 'اليوم',
      milestone3Title: 'انتشار شامل وعلامات تجارية خاصة',
      milestone3Desc:
        'تغطية شاملة لربوع ليبيا شرقاً وغرباً وجنوباً، وتطوير علامات تجارية رائدة كعلامة MONALISA – موناليزا التي تتصدر السوق.',
      visionTitle: 'رؤيتنا',
      visionDesc:
        'أن نكون من الشركات الرائدة في استيراد وتسويق وتوزيع المواد الغذائية في ليبيا، وأن نساهم في تطوير قطاع الأغذية من خلال التميز في المنتجات والخدمات وبناء علامات تجارية ذات حضور قوي.',
      missionTitle: 'رسالتنا',
      missionDesc:
        'توفير منتجات غذائية متنوعة وعالية الجودة من الأسواق العالمية، وتقديمها للمستهلك الليبي من خلال شبكة تسويقية وتوزيعية فعالة، مع الالتزام بالمصداقية وبناء علاقات مستدامة مع شركائنا.',
      whyUsTitle: 'لماذا إيثار ليبيا؟',
      pillars: [
        {
          title: 'خبرة ممتدة',
          desc: 'حضور مستمر وخبرة ميدانية عميقة في السوق الليبي منذ عام 2006 تلبي تطلعات المستهلك والتاجر.',
        },
        {
          title: 'انتشار واسع',
          desc: 'قاعدة تسويقية وشبكة توزيع متطورة تغطي مختلف أنحاء ليبيا شرقاً وغرباً وجنوباً بكفاءة عالية.',
        },
        {
          title: 'استيراد عالمي',
          desc: 'علاقات تجارية راسخة مع مصانع وموردين من تركيا، الصين، إسبانيا، الهند، باكستان، إيطاليا، وماليزيا.',
        },
        {
          title: 'علامات تجارية خاصة',
          desc: 'نمتلك ونعمل على تطوير علامات تجارية خاصة قادرة على المنافسة مثل MONALISA – موناليزا.',
        },
        {
          title: 'شراكات استراتيجية',
          desc: 'نسعى إلى علاقات تجارية طويلة الأمد مبنية على الشفافية وتنمية الفرص المتبادلة.',
        },
      ],
      cblComplianceTitle: 'الامتثال التجاري والرقابي لمصرف ليبيا المركزي (CBL)',
      cblComplianceDesc:
        'تعمل إيثار ليبيا وفق الأنظمة والضوابط الصادرة عن مصرف ليبيا المركزي ووزارة الاقتصاد والتجارة؛ حيث تتم كافة عمليات الاستيراد عبر الاعتمادات المستندية البنكية الرسمية (Letters of Credit)، مع الفحص المخبري الدقيق لدى مركز الرقابة على الأغذية والأدوية لضمان سلامة المستهلك الليبي والموثوقية المالية التامة مع الشركاء الدوليين.',
      facilitiesTitle: 'بنيتنا التحتية الميدانية',
      facilityHq: 'المقر الرئيسي والمكاتب الإدارية: طرابلس – الكريمية (شارع الثانوية)',
      facilityWarehouse: 'مستودعات مركزية ومخازن مجهزة بأنظمة ضبط الحرارة وسلاسل الإمداد',
      facilityFleet: 'أسطول شاحنات توزيع مجهزة تجوب المحافظات والمراكز الحضرية الليبية يومياً',
    },
    products: {
      badge: 'كتالوج المنتجات الرسمي',
      title: 'منتجات غذائية مختارة بعناية للمستهلك الليبي',
      subtitle:
        'نقدم تشكيلة متنوعة من أجود أنواع البسكويت، الويفر، الكيك، الشوكولاتة، والمشروبات من أرقى المصانع العالمية.',
      searchPlaceholder: 'ابحث عن منتج أو علامة تجارية...',
      filterAll: 'جميع المنتجات',
      viewDetails: 'عرض المواصفات',
      orderWhatsApp: 'طلب جملة واستفسار عبر واتساب',
      specWeight: 'الوزن الصافي',
      specCarton: 'مواصفة العبوة / الكرتونة',
      keyFeatures: 'أبرز مميزات المنتج',
      noResults: 'لم يتم العثور على منتجات مطابقة لخيارات البحث الحالية.',
      quickInquiry: 'استفسر عن هذا المنتج لمتاجرك',
    },
    brands: {
      badge: 'محفظة العلامات التجارية',
      title: 'علامات تجارية تصنع الفارق في السوق',
      subtitle:
        'نجمع بين علامتنا التجارية الخاصة MONALISA وشراكات التوزيع الحصري لأبرز العلامات الغذائية العالمية.',
      monalisaTitle: 'MONALISA – موناليزا',
      monalisaBadge: 'العلامة التجارية الخاصة بشركة إيثار ليبيا',
      monalisaDesc:
        'تمثل علامة MONALISA ركيزة استراتيجية في رؤية إيثار ليبيا لبناء منتجات عالية الجودة تنافس كبرى الماركات العالمية في السوق الليبي. تشمل منتجات موناليزا بسكويت الشوكولاتة الفاخر، ويفر إكسترا بنكهات جوز الهند والحليب والشوكولاتة، حليب مكثف محلى فائق الجودة، زبدة بسكويت بيسكوتي لوتس سبريد، مسحوق شوكولاتة الحليب، وكيك سنو فليك الراقي.',
      monalisaTagline: 'جودة استثنائية · مذاق إيطالي أصيل · قيمة تنافسية لا تضاهى',
      monalisaFeatures: [
        'تصنيع مطابق لأعلى المعايير الغذائية الدولية',
        'تغليف فاخر يجذب المستهلك على أرفف السوبرماركت',
        'تنوع واسع يشمل المخبوزات والحلويات ومشروبات الكاكاو',
        'حضور تسويقي قوي وحملات ترويجية مستمرة',
      ],
      partnerBrandsTitle: 'العلامات التجارية الشريكة',
      partnerBrandsSubtitle:
        'علاقات توزيع وتوريد تمثل كبرى الشركات الغذائية العالمية في السوق الليبي',
    },
    distribution: {
      badge: 'الانتشار اللوجستي والوصول',
      title: 'شبكة توزيع حقيقية تغطي مختلف أنحاء ليبيا',
      subtitle:
        'نصل بمنتجاتنا إلى أقصى نقاط البيع ومتاجر الجملة والتجزئة شرقاً وغرباً وجنوباً، مدعومة بمراكز لوجستية حقيقية.',
      callout: '«انتشارنا في ليبيا هو قوتنا، وشبكتنا تربط الأسواق العالمية بكل بيت ليبي»',
      cities: {
        tripoli: {
          name: 'طرابلس (المقر المركزي)',
          role: 'المركز التجاري الرئيسي والمستودعات المركزية (الكريمية)',
          desc: 'إدارة العمليات، التخزين المركزي، وتغذية أسواق طرابلس الكبرى، جنزور، النواحي الأربعة، والمدن المجاورة.',
          stats: 'توزيع يومي مباشر لأكثر من 1500+ نقطة بيع وجملة',
        },
        benghazi: {
          name: 'بنغازي (محور المنطقة الشرقية)',
          role: 'مركز التوزيع الرئيسي للمنطقة الشرقية',
          desc: 'تغذية أسواق بنغازي والمدن المجاورة بشبكة وكلاء وتوزيع معتمدين وسلاسل إمداد منتظمة.',
          stats: 'تغطية كاملة للمنطقة الشرقية بسلاسل توريد منتظمة',
        },
        misrata: {
          name: 'مصراتة (المحور اللوجستي والميناء)',
          role: 'بوابة الاستقبال البحري والتخليص الجمركي السريع',
          desc: 'استقبال الحاويات من الموانئ العالمية، والتوزيع للوسط والمناطق الحرة والتجارية.',
          stats: 'ربط مباشر بالموانئ البحرية وخطوط الإمداد المركزية',
        },
        zawiya: {
          name: 'الزاوية (المنطقة الغربية)',
          role: 'محور توزيع الساحل الغربي والمدن المجاورة',
          desc: 'تغذية أسواق الزاوية وصرمان وصبراتة وسلاسل البيع بالتجزئة وسوبرماركت المنطقة.',
          stats: 'توزيع دوري منتظم لكافة مراكز التجزئة',
        },
        zliten: {
          name: 'زليتن (المنطقة الوسطى)',
          role: 'مركز تجاري حيوي وسوق نشط لتجارة الجملة',
          desc: 'نقطة ربط استراتيجية وشبكة توزيع نشطة تخدم محال السوبرماركت ومراكز التوزيع في زليتن ومحيطها.',
          stats: 'تغطية مستمرة وسريعة لسوق الجملة',
        },
        bayda: {
          name: 'البيضاء (الجبل الأخضر)',
          role: 'مركز تموين مدن الجبل الأخضر والشرق',
          desc: 'توزيع منتظم لأصناف موناليزا وباقي العلامات في أسواق البيضاء وشحات والقبة والمناطق المجاورة.',
          stats: 'توصيل أسبوعي مستقر لكافة منافذ البيع',
        },
        sebha: {
          name: 'سبها (محور الجنوب الليبي)',
          role: 'نقطة الربط الإقليمي لمدن وفزان والجنوب',
          desc: 'شاحنات نقل مجهزة تضمن وصول المنتجات الطازجة للمستهلك في عمق الجنوب الليبي.',
          stats: 'رحلات شحن دورية مستقرة لكافة مدن الجنوب',
        },
      },
      infrastructureTitle: 'البنية اللوجستية التشغيلية',
      warehousesTitle: 'المستودعات المركزية (الكريمية)',
      warehousesDesc:
        'تقع مستودعاتنا في قلب منطقة الكريمية بطرابلس، وهي المركز التجاري الأكبر لتجارة الأغذية في ليبيا، ومجهزة بمواصفات حفظ مثالية ومساحات تخزينية شاسعة.',
      fleetTitle: 'أسطول النقل والتوزيع',
      fleetDesc:
        'أسطول من الشاحنات التجارية وسيارات التوزيع المجهزة لضمان وصول البضائع بحالتها الأصلية دون تأخير إلى كافة المدن الليبية.',
      complianceTitle: 'الرقابة والتخزين المطابق للمواصفات',
      complianceDesc:
        'تخضع مستودعاتنا لنظام إدارة جرد حديث ونظم تهوية وحفظ تطابق المعايير الصحية والرقابية الليبية والدولية.',
    },
    globalSourcing: {
      badge: 'الاستيراد وسلاسل الإمداد العالمية',
      title: 'مصادر استيرادنا من كبرى الأسواق العالمية',
      subtitle:
        'نتعاون مع مصانع عالمية في قارات آسيا وأوروبا لتقديم أجود المنتجات التي ترتقي بذوق المستهلك الليبي.',
      quoteTitle: 'رسالة إيثار ليبيا إلى المصانع والشركات العالمية',
      quoteText:
        '«هل تبحث عن شريك تجاري موثوق لدخول السوق الليبي؟ إيثار ليبيا ترحب بالتعاون مع المصانع والشركات العالمية في مجال استيراد وتوزيع المنتجات الغذائية.»',
      countriesTitle: 'الدول الشريكة ومصادر التوريد',
      countriesSubtitle: 'شبكة تعاملات تجارية واعتمادات مستندية نشطة مع أهم مراكز صناعة الأغذية في العالم',
      countriesList: [
        { name: 'الصين', flag: '🇨🇳', special: 'حلويات، بسكويت، وتغليف مبتكر' },
        { name: 'تركيا', flag: '🇹🇷', special: 'مخبوزات، ويفر فاخر، وشوكولاتة راقية' },
        { name: 'باكستان', flag: '🇵🇰', special: 'بسكويت، حلويات، وأصناف غذائية متميزة' },
        { name: 'إسبانيا', flag: '🇪🇸', special: 'منتجات غذائية متوسطية عالية الجودة' },
        { name: 'الهند', flag: '🇮🇳', special: 'بسكويت الدايجستيف والكوكيز والمخبوزات' },
        { name: 'فيتنام', flag: '🇻🇳', special: 'حلويات ومنتجات غذائية متنوعة' },
        { name: 'ماليزيا', flag: '🇲🇾', special: 'ويفر وشوكولاتة بمواصفات عالمية' },
        { name: 'بلغاريا', flag: '🇧🇬', special: 'كيك أوروبي ومنتجات محشوة فاخرة' },
        { name: 'إيطاليا', flag: '🇮🇹', special: 'خلطات الكاكاو ونكهات موناليزا الأصيلة' },
      ],
      internationalAdvantages: [
        {
          title: 'الامتثال الكامل لمصرف ليبيا المركزي (CBL)',
          desc: 'فتح الاعتمادات المستندية البنكية بسلاسة والالتزام الصارم بالإجراءات النقدية والقانونية.',
        },
        {
          title: 'التخليص الجمركي والرقابة الغذائية',
          desc: 'خبرة عريقة في إجراءات الإفراج الجمركي والفحص المخبري الليبي السريع دون أي تأخير.',
        },
        {
          title: 'حماية وتطوير العلامات التجارية',
          desc: 'نعمل كوكيل حقيقي يبني حضور علامتك في السوق الليبي ولا نكتفي بمجرد البيع العابر.',
        },
        {
          title: 'الوصول الفوري للمستهلك الليبي',
          desc: 'شبكة من المستودعات وأسطول شاحنات ينقل المنتجات فوراً إلى رفوف المتاجر في كل مدينة.',
        },
      ],
    },
    b2b: {
      badge: 'بوابة الشركاء والمصانع',
      title: 'فرص التعاون التجاري والشراكة الدولية',
      subtitle:
        'نفتح آفاق التعاون المباشر مع المصانع والشركات المصدرة عبر نماذج عمل مرنة وموثوقة تحقق النمو المتبادل.',
      tracksTitle: 'مسارات التعاون المتاحة للمصانع والشركات:',
      tracks: [
        {
          id: 'exclusive',
          title: 'طلبات التوزيع الحصري',
          desc: 'تمثيل حصري لعلامتكم التجارية في السوق الليبي مع الالتزام بخطط تسويقية واستهداف بيعي مدروس.',
          badge: 'Exclusive Distribution',
        },
        {
          id: 'import',
          title: 'الاستيراد والتوريد المباشر',
          desc: 'شراء وتوريد كميات تجارية منتظمة بحاويات كاملة عبر الاعتمادات البنكية الرسمية (CBL Letters of Credit).',
          badge: 'Direct Sourcing & Import',
        },
        {
          id: 'private-label',
          title: 'التصنيع بالعلامة الخاصة (Private Label)',
          desc: 'تصنيع منتجات غذائية لصالح علامتنا التجارية MONALISA وفق مواصفاتنا الخاصة وبأعلى جودة.',
          badge: 'OEM & Private Label',
        },
        {
          id: 'joint-venture',
          title: 'الشراكات التجارية طويلة الأمد',
          desc: 'بناء تحالفات استراتيجية لفتح خطوط إنتاج جديدة وتوسيع الحصة السوقية داخل ليبيا ودول الجوار.',
          badge: 'Strategic Joint Ventures',
        },
      ],
      formTitle: 'نموذج طلب الشراكة والتعاون التجاري (B2B Enquiry)',
      formSubtitle: 'املأ بيانات شركتك وسيتواصل معك قسم التجارة الدولية بإيثار ليبيا خلال 24 ساعة عمل',
      companyName: 'اسم الشركة / المصنع',
      country: 'الدولة والمدينة',
      representativeName: 'اسم المسؤول والمنصب',
      phoneWhatsApp: 'رقم الهاتف / الواتساب (مع رمز الدولة)',
      email: 'البريد الإلكتروني للعمل',
      cooperationType: 'نوع التعاون المطلوب',
      message: 'تفاصيل المنتجات أو العرض التجاري المقترح',
      submitButton: 'إرسال طلب الشراكة رسمياً',
      successMessage: 'تم استلام طلبكم بنجاح! سيتواصل معكم فريق إدارة الاستيراد والتعاون التجاري قريباً.',
      directContactNote: 'يمكنكم أيضاً مراسلتنا مباشرة عبر البريد المعتمد: etharlibya2015@gmail.com أو عبر واتساب.',
    },
    contact: {
      badge: 'التواصل والمقر',
      title: 'تواصل مع إيثار ليبيا',
      subtitle: 'فريقنا التجاري والإداري مستعد لخدمة العملاء والموردين وشركاء الأعمال على مدار الساعة.',
      addressTitle: 'المقر الرئيسي والمستودعات',
      addressValue: 'ليبيا – طرابلس، منطقة الكريمية (شارع الثانوية)',
      phoneTitle: 'الهواتف الرسمية وخدمة الواتساب',
      phones: ['092 506 2360', '091 325 3515'],
      emailTitle: 'البريد الإلكتروني الرسمي',
      emailValue: 'etharlibya2015@gmail.com',
      hoursTitle: 'أوقات العمل الرسمية',
      hoursValue: 'السبت إلى الخميس: 8:30 صباحاً – 6:00 مساءً',
      openInMaps: 'فتح الموقع على خرائط Google',
      socialTitle: 'تابعنا على المنصات الرسمية',
      facebook: 'صفحة إيثار ليبيا على فيسبوك',
      tiktok: 'حساب إيثار ليبيا على تيك توك (@etharlibya)',
      instagram: 'صفحة إيثار ليبيا على إنستغرام (@etharlibya)',
      commercialRegistry: 'السجل التجاري: 202306494',
      licenseNumber: 'رقم الترخيص: 0102017000153',
      taxNumber: 'الرقم الضريبي: 7300',
    },
    footer: {
      companyName: 'شركة إيثار ليبيا لاستيراد المواد الغذائية',
      description:
        'كيان تجاري وطني رائد بخبرة تمتد منذ 2006 في استيراد وتسويق وتوزيع السلع الغذائية بمختلف ربوع ليبيا، وصاحب العلامة التجارية MONALISA.',
      rights: 'جميع الحقوق محفوظة © 2006 - 2026 شركة إيثار ليبيا. مسجلة ومعتمدة.',
      cblAffiliation: 'تخضع العمليات البنكية والتجارية للشركة لضوابط واعتمادات مصرف ليبيا المركزي (CBL).',
      quickLinks: 'روابط الوصول السريع',
      contactSummary: 'المقر: طرابلس - الكريمية · هاتف: 092 506 2360 / 091 325 3515',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      products: 'Products',
      brands: 'Our Brands',
      distribution: 'Distribution Reach',
      globalSourcing: 'Global Sourcing',
      b2b: 'B2B Partnerships',
      contact: 'Contact Us',
      switchLang: 'العربية',
      ctaButton: 'Partner With Us',
    },
    hero: {
      headline: 'Connecting Global Food Markets to the Libyan Market',
      slogan: '«Experience Since 2006, Reach That Makes the Difference»',
      subheadline:
        'Ethar Libya is a leading company specializing in the import, marketing, and distribution of food products, backed by experience since 2006 and a wide marketing and logistics network covering East, West, and South Libya.',
      exploreProducts: 'Explore Our Products',
      partnerWithUs: 'Partner With Us',
      metrics: {
        experience: { value: '+18 Years', label: 'Market Experience in Libya Since 2006' },
        coverage: { value: '100%', label: 'Coverage Across All Libyan Regions' },
        productsCount: { value: '+30', label: 'Certified Products & Brands' },
        countries: { value: '8+', label: 'Global Import Sourcing Countries' },
      },
    },
    about: {
      badge: 'About Us',
      title: 'Ethar Libya for Food Import',
      intro:
        'Since our founding in 2006, we have worked to build a strong and trusted presence in the Libyan food market, guided by an ambitious vision to provide diverse food products, strengthen consumer trust, and establish long-term trade relationships with our international and local partners.',
      milestone1Year: '2006',
      milestone1Title: 'Launch in the Local Market',
      milestone1Desc:
        'Our journey began in food marketing and distribution, building a loyal base of retailers and wholesalers in Tripoli and Western Libya.',
      milestone2Year: '2015',
      milestone2Title: 'Strategic Expansion & Direct Import',
      milestone2Desc:
        'Ethar Libya transitioned to direct importing, working with major factories and suppliers across Asia and Europe through official documentary Letters of Credit.',
      milestone3Year: 'Today',
      milestone3Title: 'Nationwide Reach & Proprietary Brands',
      milestone3Desc:
        'Comprehensive coverage across East, West, and South Libya alongside the development of leading brands such as MONALISA.',
      visionTitle: 'Our Vision',
      visionDesc:
        'To be among the leading enterprises in importing, marketing, and distributing food products in Libya, contributing to the growth of the food sector through excellence in products, service, and strong brand building.',
      missionTitle: 'Our Mission',
      missionDesc:
        'To source diverse, high-quality food products from global markets and deliver them to Libyan consumers through an effective marketing and distribution network, committed to credibility and sustainable partnerships.',
      whyUsTitle: 'Why Ethar Libya?',
      pillars: [
        {
          title: 'Extensive Experience',
          desc: 'Continuous presence and deep field expertise in the Libyan market since 2006 meeting consumer and retailer expectations.',
        },
        {
          title: 'Wide Distribution Reach',
          desc: 'A strong marketing base and advanced distribution network efficiently covering East, West, and South Libya.',
        },
        {
          title: 'Global Import Network',
          desc: 'Established trade partnerships with factories and suppliers in Turkey, China, Spain, India, Pakistan, Italy, and Malaysia.',
        },
        {
          title: 'Proprietary Brands',
          desc: 'We own and develop competitive private-label brands led by MONALISA.',
        },
        {
          title: 'Strategic Partnerships',
          desc: 'We build long-term commercial alliances rooted in transparency and shared growth.',
        },
      ],
      cblComplianceTitle: 'Central Bank of Libya (CBL) Regulatory & Trade Compliance',
      cblComplianceDesc:
        'Ethar Libya operates in full compliance with the regulations of the Central Bank of Libya (CBL) and the Ministry of Economy and Trade. All imports are executed through official banking Letters of Credit (LCs), accompanied by strict laboratory inspection at the Libyan Food and Drug Control Center to guarantee consumer safety and complete financial reliability for international partners.',
      facilitiesTitle: 'Field Infrastructure',
      facilityHq: 'Headquarters & Administrative Offices: Tripoli – Al-Karimiyah (Al-Thanawiya Street)',
      facilityWarehouse: 'Central warehouses equipped with temperature-control systems and organized supply chains',
      facilityFleet: 'Dedicated delivery truck fleet serving Libyan governorates and urban centers daily',
    },
    products: {
      badge: 'Official Product Catalog',
      title: 'Carefully Selected Food Products for Libyan Consumers',
      subtitle:
        'We offer a diverse range of fine biscuits, wafers, cakes, croissants, candies, juices, chocolates, and spreads from leading global manufacturers.',
      searchPlaceholder: 'Search for a product or brand...',
      filterAll: 'All Products',
      viewDetails: 'View Specifications',
      orderWhatsApp: 'Wholesale Order & Inquiry via WhatsApp',
      specWeight: 'Net Weight',
      specCarton: 'Packaging / Carton Spec',
      keyFeatures: 'Key Product Features',
      noResults: 'No products matched your current search options.',
      quickInquiry: 'Inquire about this product for your stores',
    },
    brands: {
      badge: 'Brand Portfolio',
      title: 'Brands That Make a Difference in the Market',
      subtitle:
        'Combining our flagship proprietary brand MONALISA with exclusive distribution partnerships for prominent international food brands.',
      monalisaTitle: 'MONALISA',
      monalisaBadge: 'Proprietary Brand of Ethar Libya',
      monalisaDesc:
        'MONALISA is a strategic cornerstone of Ethar Libya’s vision to build high-quality products that compete with top global brands in Libya. The MONALISA range includes rich chocolate biscuits, Extra wafers (coconut, milk, chocolate, and hazelnut), sweetened condensed milk, Biscotti lotus spread, milk chocolate drink powder, refreshing fruit juices, Swiss rolls, and Snowflake cakes.',
      monalisaTagline: 'Exceptional Quality · Authentic Taste · Unrivaled Competitive Value',
      monalisaFeatures: [
        'Manufactured to the highest international food standards',
        'Premium packaging that stands out on supermarket shelves',
        'Wide variety across bakery, confectionery, juices, and cocoa drinks',
        'Strong marketing presence and ongoing promotional campaigns',
      ],
      partnerBrandsTitle: 'Partner Brands',
      partnerBrandsSubtitle:
        'Distribution and supply partnerships representing leading international food manufacturers in the Libyan market',
    },
    distribution: {
      badge: 'Distribution Network',
      title: 'Nationwide Logistics Covering All Regions of Libya',
      subtitle:
        'We deliver products directly to wholesale distribution centers, supermarkets, and neighborhood stores across Libya.',
      callout: '«Our reach across Libya is our competitive strength, connecting world-class brands with every Libyan household.»',
      cities: {
        tripoli: {
          name: 'Tripoli (Headquarters & Central Hub)',
          role: 'Corporate HQ & Master Distribution Hub (Al-Karimiyah)',
          desc: 'Command center for supply chain, warehousing, and direct distribution across Greater Tripoli and Western Libya.',
          stats: 'Daily distribution to over 1,500+ wholesale and retail outlets',
        },
        benghazi: {
          name: 'Benghazi (Eastern Regional Hub)',
          role: 'Distribution Hub for Cyrenaica & Eastern Markets',
          desc: 'Supplying Benghazi, Al-Marj, Al-Bayda, Derna, and Tobruk through an established regional network.',
          stats: 'Reliable weekly replenishment cycles across Eastern cities',
        },
        misrata: {
          name: 'Misrata (Maritime Logistics Port Hub)',
          role: 'Primary Gateway for Maritime Freight & Customs Clearance',
          desc: 'High-speed container handling from international container lines into central Libyan trade corridors.',
          stats: 'Direct container port integration and bonded clearance',
        },
        zawiya: {
          name: 'Zawiya (Western Coastal Hub)',
          role: 'Supply gateway for Zawiya and surrounding cities',
          desc: 'Direct replenishment for wholesale hubs, supermarkets, and groceries across Zawiya and Surman.',
          stats: 'Continuous scheduled delivery fleet',
        },
        zliten: {
          name: 'Zliten (Central Commercial Hub)',
          role: 'Crucial FMCG wholesale trade link',
          desc: 'Strategic distribution network serving supermarkets and wholesale traders in Zliten and nearby areas.',
          stats: 'Regular high-volume deliveries',
        },
        bayda: {
          name: 'Al-Bayda (Al-Jabal al-Akhdar)',
          role: 'Supply hub for Al-Bayda and Al-Jabal al-Akhdar markets',
          desc: 'Regular distribution of MONALISA and partner brands across Al-Bayda, Shahhat, Al-Qubbah, and neighboring areas.',
          stats: 'Reliable weekly delivery to all retail outlets',
        },
        sebha: {
          name: 'Sebha (Southern Libya Hub)',
          role: 'Regional distribution link for Fezzan and Southern cities',
          desc: 'Equipped transport trucks ensuring fresh products reach consumers across Southern Libya.',
          stats: 'Regular scheduled freight trips to all Southern cities',
        },
      },
      infrastructureTitle: 'Operational Logistics Infrastructure',
      warehousesTitle: 'Central Warehouses (Al-Karimiyah)',
      warehousesDesc:
        'Located in the heart of Al-Karimiyah in Tripoli—Libya’s largest food wholesale hub—equipped with optimal storage conditions and expansive capacity.',
      fleetTitle: 'Transport & Distribution Fleet',
      fleetDesc:
        'A fleet of commercial trucks and equipped distribution vans ensuring goods arrive in original condition without delay across all Libyan cities.',
      complianceTitle: 'Quality Control & Compliant Storage',
      complianceDesc:
        'Our warehouses operate with modern inventory management, ventilation, and storage systems meeting Libyan and international health and regulatory standards.',
    },
    globalSourcing: {
      badge: 'Global Sourcing & Supply Chain',
      title: 'Importing from Leading International Markets',
      subtitle:
        'We partner with global manufacturers across Asia and Europe to deliver high-grade products tailored to Libyan consumer tastes.',
      quoteTitle: 'Ethar Libya’s Message to Global Factories & Companies',
      quoteText:
        '«Are you looking for a reliable commercial partner to enter the Libyan market? Ethar Libya welcomes cooperation with international factories and companies in importing and distributing food products.»',
      countriesTitle: 'Partner Countries & Sourcing Origins',
      countriesSubtitle: 'Active trade partnerships and Letters of Credit with leading food manufacturing hubs worldwide',
      countriesList: [
        { name: 'China', flag: '🇨🇳', special: 'Confectionery, biscuits & innovative packaging' },
        { name: 'Turkey', flag: '🇹🇷', special: 'Bakery goods, premium wafers & fine chocolates' },
        { name: 'Pakistan', flag: '🇵🇰', special: 'Biscuits, candies & specialty food lines' },
        { name: 'Spain', flag: '🇪🇸', special: 'High-quality Mediterranean food products' },
        { name: 'India', flag: '🇮🇳', special: 'Digestive biscuits, cookies & baked snacks' },
        { name: 'Vietnam', flag: '🇻🇳', special: 'Confectionery & diversified food items' },
        { name: 'Malaysia', flag: '🇲🇾', special: 'Wafers & chocolates to international standards' },
        { name: 'Bulgaria', flag: '🇧🇬', special: 'European cakes & filled bakery treats' },
        { name: 'Italy', flag: '🇮🇹', special: 'Cocoa blends & authentic MONALISA flavors' },
      ],
      internationalAdvantages: [
        {
          title: 'Full Central Bank of Libya (CBL) Compliance',
          desc: 'Smooth execution of banking Letters of Credit with strict adherence to monetary and legal regulations.',
        },
        {
          title: 'Customs Clearance & Food Inspection',
          desc: 'Extensive expertise in Libyan customs clearance and rapid Food & Drug Control Center lab testing without delays.',
        },
        {
          title: 'Brand Protection & Development',
          desc: 'We act as a dedicated representative building your brand’s presence in Libya, not just one-off transactions.',
        },
        {
          title: 'Direct Access to Libyan Consumers',
          desc: 'A network of warehouses and delivery trucks placing products swiftly onto store shelves in every city.',
        },
      ],
    },
    b2b: {
      badge: 'B2B Trade Portal',
      title: 'Commercial Cooperation & Manufacturer Opportunities',
      subtitle:
        'Empowering international principals and food factories with dependable market access and mutual growth models.',
      tracksTitle: 'Strategic Partnership Models for Global Exporters:',
      tracks: [
        {
          id: 'exclusive',
          title: 'Exclusive Distribution Agreements',
          desc: 'Sole representation of your brand within the Libyan market with agreed annual targets and marketing commitments.',
          badge: 'Exclusive Distribution',
        },
        {
          id: 'import',
          title: 'Direct Sourcing & Regular Importation',
          desc: 'Regular, high-volume container purchases transacted through formal CBL documentary Letters of Credit.',
          badge: 'Direct Sourcing & Import',
        },
        {
          id: 'private-label',
          title: 'Private Label & OEM Manufacturing',
          desc: 'Contract manufacturing under our proprietary MONALISA brand tailored to our precise quality specifications.',
          badge: 'OEM & Private Label',
        },
        {
          id: 'joint-venture',
          title: 'Long-Term Strategic Partnerships',
          desc: 'Joint development of new product lines, packaging localization, and multi-year market penetration strategies.',
          badge: 'Strategic Joint Ventures',
        },
      ],
      formTitle: 'B2B Trade & Partnership Inquiry Form',
      formSubtitle: 'Submit your company and product details; our international trade desk will reply within 24 business hours.',
      companyName: 'Company / Factory Name',
      country: 'Country & City of Origin',
      representativeName: 'Contact Person & Title',
      phoneWhatsApp: 'Phone / WhatsApp (with country code)',
      email: 'Corporate Email',
      cooperationType: 'Desired Partnership Track',
      message: 'Product Catalog Overview or Proposal Details',
      submitButton: 'Submit Formal Business Enquiry',
      successMessage: 'Inquiry received successfully! Our International Trade Division will be in contact shortly.',
      directContactNote: 'You may also reach our executive desk directly at: etharlibya2015@gmail.com or via WhatsApp.',
    },
    contact: {
      badge: 'Corporate Contact',
      title: 'Connect with Ethar Libya',
      subtitle: 'Our commercial and operations teams are ready to support clients, retailers, and international suppliers.',
      addressTitle: 'Headquarters & Central Logistics',
      addressValue: 'Tripoli, Libya – Al-Karimiyah District (Al-Thanawiya Street)',
      phoneTitle: 'Direct Phone & WhatsApp Channels',
      phones: ['092 506 2360', '091 325 3515'],
      emailTitle: 'Corporate Email',
      emailValue: 'etharlibya2015@gmail.com',
      hoursTitle: 'Operating Hours',
      hoursValue: 'Saturday to Thursday: 8:30 AM – 6:00 PM',
      openInMaps: 'Open Location on Google Maps',
      socialTitle: 'Official Social Media Channels',
      facebook: 'Ethar Libya Official Facebook Page',
      tiktok: 'Ethar Libya TikTok Account (@etharlibya)',
      instagram: 'Ethar Libya Official Instagram (@etharlibya)',
      commercialRegistry: 'Commercial Registry: 202306494',
      licenseNumber: 'License Number: 0102017000153',
      taxNumber: 'Tax Identification Number: 7300',
    },
    footer: {
      companyName: 'Ethar Libya for Food Import',
      description:
        'A leading national commercial enterprise with experience since 2006 in importing, marketing, and distributing food products across Libya, and owner of the MONALISA brand.',
      rights: 'All Rights Reserved © 2006 - 2026 Ethar Libya. Officially Registered & Certified.',
      cblAffiliation: 'All banking and commercial operations comply with Central Bank of Libya (CBL) regulations and accreditations.',
      quickLinks: 'Quick Links',
      contactSummary: 'Tripoli, Al-Karimiyah · Tel: 092 506 2360 / 091 325 3515',
    },
  },
};
