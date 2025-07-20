// ===================================
// ARABIC TRANSLATIONS
// ===================================

console.log('🇸🇦 Loading Arabic translations...');

const translations_ar = {
    // Navigation
    nav: {
        home: 'الرئيسية',
        about: 'نبذة',
        experience: 'الخبرة',
        projects: 'المشاريع',
        skills: 'المهارات',
        certificates: 'الشهادات',
        contact: 'التواصل'
    },

    // Hero Section
    hero: {
        greeting: 'مرحباً، أنا',
        name: 'أحمد سامي زكي',
        title: 'مطور تطبيقات Flutter',
        subtitle: 'مطور موبايل متخصص في Flutter و Dart مع خبرة أكثر من 3 سنوات في بناء تطبيقات الهاتف المحمول المتطورة',
        downloadCV: 'تحميل السيرة الذاتية',
        viewProjects: 'عرض المشاريع',
        scrollDown: 'التمرير للأسفل'
    },

    // About Section
    about: {        title: 'نبذة عني',
        subtitle: 'مطور Flutter شغوف بخبرة عملية في بناء تطبيقات الهاتف المحمول',
        description: 'مهندس تطبيقات محمول مع أكثر من 3 سنوات خبرة 💙 في تصميم وبناء وتطوير تطبيقات Flutter عالية الجودة. خبير في لغة Dart 3 💙 و Flutter 3.x 🚀 و Firebase 🔥 (المصادقة، Firestore، التخزين) والهندسة المعمارية الحديثة - العمارة النظيفة 🏛️ مع طبقات قائمة على الميزات، وإدارة حالة MVVM و Cubit 📊 - التي تجعل الكود قابل للتطوير وجاهز للاختبار.',
        description_2: 'تمتد المهارات من تحليل المتطلبات، وتصميم واجهة المستخدم المثالية ✨، ودمج واجهات برمجة التطبيقات REST 🔄، وخطوط أنابيب CI/CD على GitHub Actions 🔄، وإصدارات متجر Play الآلية 🚀، وتحليل الأداء 📈. قدرة مثبتة على نشر تطبيقات متقنة على متجر Google Play والحفاظ على دورة حياتها.',
          stats: {
            experience: 'سنوات الخبرة',
            projects: 'مشروع مكتمل',
            certificates: 'شهادة معتمدة'
        },

        skills: {
            title: 'المهارات الأساسية',
            flutter: 'تطوير Flutter',
            firebase: 'خدمات Firebase',
            architecture: 'العمارة النظيفة',
            stateManagement: 'إدارة الحالة'
        },        competencies: {
            title: 'الكفاءات الأساسية',
            flutter: 'تطوير Flutter',
            flutter_desc: 'خبير في بناء تطبيقات الهاتف المحمول عبر المنصات مع واجهة مستخدم مثالية',
            dart: 'برمجة Dart',
            dart_desc: 'كفاءة متقدمة في لغة Dart مع أنماط البرمجة الحديثة',
            architecture: 'العمارة النظيفة',
            architecture_desc: 'العمارة النظيفة، MVVM، وأنماط التصميم المعيارية للكود القابل للتطوير',
            firebase: 'تكامل Firebase',
            firebase_desc: 'المصادقة، Firestore، التخزين، وميزات الوقت الفعلي',
            cicd: 'خطوط أنابيب CI/CD',
            cicd_desc: 'GitHub Actions وتدفقات عمل النشر الآلي'
        }
    },

    // Experience Section
    experience: {
        title: 'خبرتي المهنية',
        subtitle: 'رحلتي في تطوير تطبيقات الهاتف المحمول',
        present: 'الحاضر',
        
        roles: {
            'senior-flutter': 'مطور Flutter أول',
            'flutter-dev': 'مطور Flutter',
            'mobile-dev': 'مطور تطبيقات الهاتف',
            'intern': 'متدرب تطوير'
        },

        achievements: 'الإنجازات',
        technologies: 'التقنيات المستخدمة',        projectLink: 'رابط المشروع',
        viewDetails: 'عرض التفاصيل'
    },

    // Experience Section Data
    experienceData: [
        {
            id: 'languages-arabic',
            company: 'لغات بالعربي - "بالعربى لغات"',
            position: 'مطور Flutter ومساهم رئيسي',
            duration: 'مايو 2025 - الحاضر',
            location: 'عن بعد',
            description: 'قمت بإعادة هندسة الكود بالكامل من خلال ترحيل التطبيق من استخدام setState العشوائي إلى بنية قوية تعتمد على Cubit بناءً على مبادئ العمارة النظيفة، مما أدى إلى تحسين إدارة الحالة وقابلية الصيانة والاختبار والتوسع بشكل كبير.',
            highlights: [
                'إعادة تصميم هيكل مجلدات المشروع مع التركيز على فصل واضح للمسؤوليات مع طبقات أساسية وميزات',
                'تنفيذ حقن التبعية باستخدام get_it وتطوير اختبارات الوحدة',
                'تطوير ميزة "المفضلة" التي تسمح للمستخدمين بحفظ الكلمات والجمل وقواعد النحو',
                'تعاونت كمساهم رئيسي مع مالك التطبيق الأصلي والمطور الرئيسي',
                'التطبيق نشط ومستخدم بالفعل على كل من Google Play Store و Apple App Store'
            ],
            technologies: ['Flutter', 'Cubit', 'Clean Architecture', 'shared_preferences', 'get_it', 'Unit Testing'],
            links: [
                { type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.Arabic.Languages', label: 'Google Play' },
                { type: 'appstore', url: 'https://apps.apple.com/us/app/%D9%84%D8%BA%D8%A7%D8%AA-%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%89/id6738091599', label: 'App Store' }
            ],
            current: true,
            achievement: 'الحالي'
        },
        {
            id: 'freelance-templates',
            company: 'مطور Flutter مستقل',
            position: 'مجموعة من 28 تطبيق قالب جاهز للتسمية التجارية',
            duration: 'فبراير 2025 - الحاضر',
            location: 'عن بعد',
            description: 'صممت مجموعة من 28 تطبيقًا توضيحيًا قياسيًا تمكن مشاريع العملاء من الإطلاق في التجارة الإلكترونية، وخدمات النقل، وتوصيل الطعام، وبث الوسائط، وحجز الفنادق، والتعليم، والأسئلة والأجوبة، وخدمات السيارات، والخدمات عند الطلب.',
            highlights: [
                'بناء طبقات واجهة المستخدم الموجهة للميزات ونماذج عرض MobX',
                'إنشاء مصادر بيانات مجردة جاهزة للاتصال بواجهات برمجة تطبيقات REST / خلفيات Firebase',
                'تقديم تخطيطات مثالية ومتجاوبة بالكامل (Material 3 & Cupertino)',
                'إنتاج عروض فيديو مستمرة وعروض توضيحية لملفات APK',
                'الحفاظ على الكود مع ترقيات Flutter 3.x / Dart 3.x وتحديثات أسبوعية'
            ],
            technologies: ['Flutter', 'MobX', 'Clean Architecture', 'Material 3', 'Cupertino', 'REST API', 'Firebase'],
            links: [
                { type: 'youtube', url: 'https://www.youtube.com/playlist?list=PL4Ti32rTkEYjo2lrlCOck8NIrFguIF8Dj', label: 'قائمة تشغيل يوتيوب' }
            ],
            current: true
        },
        {
            id: 'talk-app',
            company: 'Talk (منصة بودكاست + مقالات)',
            position: 'مهندس موبايل رئيسي',
            duration: 'سبتمبر 2024 - يناير 2025',
            location: 'عقد عن بعد',
            description: 'قمت بتصميم وإطلاق تطبيق بودكاست وإنشاء محتوى كامل - تسجيل وتعديل ونشر الصوت والفيديو أو المقالات النصية - باستخدام إدارة حالة Cubit والعمارة النظيفة القائمة على الميزات وواجهة برمجة تطبيقات Django REST موثقة بـ Swagger.',
            highlights: [
                'تنفيذ التسجيل داخل التطبيق (الصوت والكاميرا) وتشغيل الخلفية',
                'إضافة طبقات اجتماعية (الإعجابات والتعليقات المتسلسلة والمشاركة عبر الروابط العميقة ورموز QR)',
                'تطوير قنوات خاصة وقوائم تشغيل وتصفية/بحث دقيق للمحتوى',
                'تعاونت في فريق من شخصين بمنهجية أجايل (موبايل + خلفية)',
                'أتمتة تسلسل JSON باستخدام Dio ومراجعة عقود Swagger'
            ],
            technologies: ['Flutter', 'Cubit', 'Clean Architecture', 'Django REST API', 'just_audio', 'Dio', 'Swagger'],
            links: [],
            achievement: 'مهندس رئيسي'
        },
        {
            id: 'store-app',
            company: 'Store (المخزون)',
            position: 'مطور موبايل',
            duration: 'ديسمبر 2022 - فبراير 2023',
            location: 'مختلط عن بعد',
            description: 'قمت بتصور وبناء ونشر تطبيق مخزون متعدد الأدوار (مدير / وكيل مبيعات) باستخدام Flutter SetState و Firebase Auth و Firestore والتخزين وإنشاء فواتير PDF.',
            highlights: [
                'المديرون يقومون برفع وحدات SKU، وتعيين الوكلاء، وتتبع المخزون والمرتجعات في الوقت الفعلي',
                'لوحات تحليل مولدة تلقائيًا لإدارة المخزون',
                'يصدر الوكلاء فواتير تحدث المخزون على الفور',
                'تنفيذ بناء متعدد الموقعات بتوقيع وخط أنابيب إصدار Play-Console',
                'محرك تصدير PDF مخصص قلص وقت تحضير التدقيق من ساعات إلى دقائق'
            ],
            technologies: ['Flutter', 'SetState', 'Firebase Auth', 'Firestore', 'Firebase Storage', 'PDF Generation'],
            links: [
                { type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.storeblueatom.store', label: 'Google Play' }
            ],
            achievement: 'منشور'
        },
        {
            id: 'here-app',
            company: 'Here (تجارة المتاجر التقليدية)',
            position: 'مطور Flutter مبتدئ',
            duration: 'أكتوبر 2021 - أبريل 2022',
            location: 'عن بعد',
            description: 'أطلقت سوق O2O يسمح للمتسوقين باكتشاف المتاجر القريبة، ومقارنة الأسعار وحجز الاستلام من المتجر؛ يمكن للتجار إدراج المنتجات والخصومات والعروض الجغرافية.',
            highlights: [
                'تنفيذ Google Maps وGeolocator للبحث القريب',
                'تطوير عروض مدركة للموقع وملاحة خطوة بخطوة للمتجر',
                'إنشاء خلفية Firebase كاملة بما في ذلك قواعد الأمان',
                'بناء لوحة تحكم للتاجر لإدارة المنتجات والعروض',
                'دمج بوابة الدفع ونظام إدارة الطلبات'
            ],
            technologies: ['Flutter', 'Firebase', 'Google Maps', 'Geolocator', 'Firebase Security Rules'],
            links: [
                { type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.blueAtom777.here', label: 'Google Play' }
            ],
            achievement: 'المشروع الأول'
        }
    ],

    // Projects Section
    projects: {
        title: 'مشاريعي',
        subtitle: 'مجموعة من المشاريع التي عملت عليها',
        
        categories: {
            all: 'الكل',
            mobile: 'تطبيقات الهاتف',
            web: 'تطبيقات الويب',
            ui: 'تصميم واجهة المستخدم'
        },

        status: {
            completed: 'مكتمل',
            inProgress: 'قيد التطوير',
            planning: 'في التخطيط'
        },

        buttons: {
            viewDemo: 'عرض توضيحي',
            sourceCode: 'الكود المصدري',
            liveDemo: 'عرض مباشر',
            caseStudy: 'دراسة الحالة'
        },

        demo: {
            title: 'تطبيقاتي التوضيحية',
            subtitle: 'مجموعة من التطبيقات التوضيحية التي طورتها',
            totalApps: 'تطبيق',
            viewAll: 'عرض الكل',
            backToMain: 'العودة للمشاريع الرئيسية'
        }
    },

    // Skills Section
    skills: {
        title: 'مهاراتي',
        subtitle: 'التقنيات والأدوات التي أتقنها',
        
        categories: {
            technical: 'المهارات التقنية',
            soft: 'المهارات الشخصية',
            tools: 'الأدوات والبرامج',
            design: 'مهارات التصميم'
        },

        competencies: {
            title: 'الكفاءات الأساسية',
            mobile: 'تطوير الموبايل',
            architecture: 'العمارة النظيفة',
            firebase: 'تكامل Firebase',
            state: 'إدارة الحالة',
            ui: 'تصميم واجهة المستخدم',
            performance: 'تحسين الأداء'
        }
    },

    // Certificates Section
    certificates: {
        title: 'شهاداتي',
        subtitle: 'الشهادات والدورات التي حصلت عليها',
        
        categories: {
            software: 'تطوير البرمجيات',
            entrepreneurship: 'ريادة الأعمال',
            other: 'مهارات أخرى'
        },

        buttons: {
            view: 'عرض',
            verify: 'التحقق'
        },

        stats: {
            total: 'إجمالي الشهادات',
            categories: 'فئات',
            latest: 'أحدث سنة',
            completion: 'معدل الإنجاز'
        }
    },

    // Contact Section
    contact: {
        title: 'تواصل معي',
        subtitle: 'لنتحدث عن مشروعك القادم',
        
        info: {
            title: 'معلومات التواصل',
            description: 'أهلاً بك للتواصل معي لمناقشة مشاريعك أو أي استفسارات',
            email: 'البريد الإلكتروني',
            phone: 'رقم الهاتف',
            location: 'الموقع',
            availability: 'التوفر'
        },

        form: {
            title: 'إرسال رسالة',
            name: 'الاسم',
            email: 'البريد الإلكتروني',
            phone: 'رقم الهاتف (اختياري)',
            subject: 'الموضوع',
            message: 'الرسالة',
            send: 'إرسال الرسالة',
            sending: 'جاري الإرسال...',
            success: 'تم إرسال الرسالة بنجاح!',
            error: 'فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.'
        },

        social: {
            title: 'تابعني على',
            linkedin: 'لينكد إن',
            github: 'جيت هاب',
            twitter: 'تويتر',
            telegram: 'تيليجرام'
        }
    },

    // Footer
    footer: {
        about: {
            title: 'أحمد سامي زكي',
            description: 'مطور Flutter متخصص في بناء تطبيقات الهاتف المحمول المبتكرة والفعالة'
        },
        
        links: {
            title: 'روابط سريعة',
            home: 'الرئيسية',
            about: 'نبذة',
            projects: 'المشاريع',
            contact: 'التواصل'
        },

        services: {
            title: 'الخدمات',
            mobile: 'تطوير تطبيقات الهاتف',
            consultation: 'استشارات تقنية',
            maintenance: 'صيانة التطبيقات',
            optimization: 'تحسين الأداء'
        },

        contact: {
            title: 'التواصل',
            email: 'البريد الإلكتروني',
            phone: 'الهاتف',
            location: 'الموقع'
        },

        newsletter: {
            title: 'النشرة الإخبارية',
            description: 'اشترك للحصول على أحدث أخباري ومشاريعي',
            placeholder: 'أدخل بريدك الإلكتروني',
            subscribe: 'اشتراك'
        },

        copyright: 'جميع الحقوق محفوظة',
        madeWith: 'صُنع بـ',
        backToTop: 'العودة للأعلى'
    },

    // Common
    common: {
        loading: 'جاري التحميل...',
        viewMore: 'عرض المزيد',
        viewLess: 'عرض أقل',
        learnMore: 'اعرف المزيد',
        getStarted: 'ابدأ الآن',
        close: 'إغلاق',
        next: 'التالي',
        previous: 'السابق',
        submit: 'إرسال',
        cancel: 'إلغاء',
        confirm: 'تأكيد',
        delete: 'حذف',
        edit: 'تعديل',
        save: 'حفظ',
        search: 'بحث',
        filter: 'فلترة',
        sort: 'ترتيب',
        share: 'مشاركة',
        copy: 'نسخ',
        download: 'تحميل',
        upload: 'رفع',
        print: 'طباعة',
        refresh: 'تحديث'
    },

    // Notifications
    notifications: {
        success: 'تم بنجاح',
        error: 'خطأ',
        warning: 'تحذير',
        info: 'معلومات',
        copied: 'تم نسخ النص',        emailCopied: 'تم نسخ البريد الإلكتروني',        phoneCopied: 'تم نسخ رقم الهاتف'
    }
};

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations_ar;
} else if (typeof window !== 'undefined') {
    window.translations_ar = translations_ar;
};

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations_ar;
} else if (typeof window !== 'undefined') {
    window.translations_ar = translations_ar;
    console.log('✅ Arabic translations loaded successfully');
    console.log(`📊 Arabic experience data: ${translations_ar.experienceData?.length || 0} items`);
}
