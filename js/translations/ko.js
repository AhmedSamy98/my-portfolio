// ===================================
// KOREAN TRANSLATIONS
// ===================================

const translations_ko = {
    // Navigation
    nav: {
        home: '홈',
        about: '소개',
        experience: '경험',
        projects: '프로젝트',
        skills: '기술',
        certificates: '자격증',
        contact: '연락처'
    },

    // Hero Section
    hero: {
        greeting: '안녕하세요, 저는',
        name: 'Ahmed Samy Zaky',
        title: 'Flutter 개발자',
        subtitle: '고급 모바일 애플리케이션 개발에서 3년 이상의 경험을 가진 Flutter & Dart 전문 모바일 개발자입니다',
        downloadCV: '이력서 다운로드',
        viewProjects: '프로젝트 보기',
        scrollDown: '아래로 스크롤'
    },    // About Section
    about: {
        title: '저에 대해',
        subtitle: '모바일 애플리케이션 개발에 실무 경험이 있는 열정적인 Flutter 개발자',
        description: '저는 3년 이상의 경험을 가진 모바일 엔지니어로, 프로덕션 수준의 Flutter 애플리케이션을 설계, 구축 및 배포합니다. Dart 3 💙, Flutter 3.x 🚀, Firebase 🔥(인증, Firestore, 스토리지) 및 현대적이고 모듈식 아키텍처 - 기능 기반 레이어와 함께하는 클린 아키텍처 🏛️, MVVM 및 Cubit 상태 관리 📊 - 를 통해 확장 가능하고 테스트 준비가 된 코드를 유지합니다.',
        description_2: '요구사항 분석, 완벽한 UI/UX ✨, RESTful API 통합 🔄, GitHub Actions의 CI/CD 파이프라인 🔄, 자동화된 Play-Console 릴리스 🚀 및 성능 프로파일링 📈까지 엔드투엔드 스킬을 보유하고 있습니다. Google Play에서 세련된 앱을 게시하고 그 수명 주기를 유지하는 능력이 입증되었습니다.',
        
        stats: {
            experience: '경험 년수',
            projects: '완료된 프로젝트',
            certificates: '자격증'
        },

        skills: {
            title: '핵심 기술',
            flutter: 'Flutter 개발',
            firebase: 'Firebase 서비스',
            architecture: '클린 아키텍처',
            stateManagement: '상태 관리'
        },        competencies: {
            title: '주요 역량',
            flutter: 'Flutter 개발',
            flutter_desc: '완벽한 UI/UX를 갖춘 크로스 플랫폼 모바일 애플리케이션 구축 전문가',
            dart: 'Dart 프로그래밍',
            dart_desc: '현대적인 프로그래밍 패턴을 활용한 Dart 언어의 고급 숙련도',
            architecture: '클린 아키텍처',
            architecture_desc: '확장 가능한 코드를 위한 클린 아키텍처, MVVM 및 모듈식 디자인 패턴',
            firebase: 'Firebase 통합',
            firebase_desc: '인증, Firestore, 스토리지 및 실시간 기능 구현',            cicd: 'CI/CD 파이프라인',
            cicd_desc: 'GitHub Actions 및 자동화된 배포 워크플로우'
        }
    },

    // Experience Section
    experience: {
        title: '나의 경험',
        subtitle: '모바일 앱 개발 여정',
        present: '현재',
        
        roles: {
            'senior-flutter': '시니어 Flutter 개발자',
            'flutter-dev': 'Flutter 개발자',
            'mobile-dev': '모바일 앱 개발자',
            'intern': '개발 인턴'
        },

        achievements: '주요 성과:',
        technologies: '사용 기술:',        projectLink: '프로젝트 링크',
        viewDetails: '자세히 보기'
    },

    // Experience Section
    experience_title: '나의 경험',
    experience_subtitle: '모바일 앱 개발 여정',
    
    experience: {
        title: '나의 경험',
        subtitle: '모바일 앱 개발 여정',
        achievements: '주요 성과:',
        technologies: '사용 기술:',
        projectLink: '프로젝트 링크',
        viewDetails: '자세히 보기'
    },

    // Experience Section Data
    experienceData: [
        {
            id: 'languages-arabic',
            company: '아라비아어 언어 - "بالعربى لغات"',
            position: 'Flutter 개발자 및 핵심 기여자',
            duration: '2025년 5월 - 현재',
            location: '원격',
            description: '임시 setState 사용에서 기능 우선 클린 아키텍처 원칙에 기반한 견고한 Cubit 기반 아키텍처로 앱을 마이그레이션하여 상태 관리, 유지 보수성, 테스트 가능성 및 확장성을 크게 향상시키는 코드베이스를 완전히 재구성했습니다.',
            highlights: [
                '핵심 및 기능 레이어로 명확한 관심사 분리에 초점을 맞춘 프로젝트 폴더 구조 재설계',
                'get_it을 사용한 의존성 주입 구현 및 단위 테스트 개발',
                '사용자가 단어, 문장 및 문법 규칙을 북마크할 수 있는 "즐겨찾기" 기능 개발',
                '원래 앱 소유자 및 리드 개발자와 함께 핵심 기여자로 협력',
                '앱은 Google Play 스토어와 Apple App Store 모두에서 활발히 사용 중임'
            ],
            technologies: ['Flutter', 'Cubit', 'Clean Architecture', 'shared_preferences', 'get_it', 'Unit Testing'],
            links: [
                { type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.Arabic.Languages', label: 'Google Play' },
                { type: 'appstore', url: 'https://apps.apple.com/us/app/%D9%84%D8%BA%D8%A7%D8%AA-%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%89/id6738091599', label: 'App Store' }
            ],
            current: true,
            achievement: '현재'
        },
        {
            id: 'freelance-templates',
            company: '프리랜서 Flutter 개발자',
            position: '28개의 브랜딩 가능한 템플릿 앱 포트폴리오',
            duration: '2025년 2월 - 현재',
            location: '원격',
            description: '전자상거래, 차량 호출, 음식 배달, 미디어 스트리밍, 호텔 예약, 교육, Q&A, 자동차 서비스 및 온디맨드 서비스에서 고객 프로젝트를 시작할 수 있는 28개의 표준 데모 앱 제작.',
            highlights: [
                '기능 중심 UI 레이어 및 MobX 뷰 모델 구축',
                'REST API / Firebase 백엔드에 연결할 준비가 된 추상화된 데이터 소스 제작',
                '픽셀 퍼펙트한 완전 반응형 레이아웃(Material 3 & Cupertino) 제공',
                '지속적인 비디오 워크스루 및 APK 데모 제작',
                'Flutter 3.x / Dart 3.x 마이그레이션 및 주간 업데이트로 코드베이스 유지'
            ],
            technologies: ['Flutter', 'MobX', 'Clean Architecture', 'Material 3', 'Cupertino', 'REST API', 'Firebase'],
            links: [
                { type: 'youtube', url: 'https://www.youtube.com/playlist?list=PL4Ti32rTkEYjo2lrlCOck8NIrFguIF8Dj', label: 'YouTube 재생목록' }
            ],
            current: true
        },
        {
            id: 'talk-app',
            company: 'Talk (팟캐스트 + 아티클 플랫폼)',
            position: '리드 모바일 엔지니어',
            duration: '2024년 9월 – 2025년 1월',
            location: '원격 계약',
            description: 'Cubit 상태 관리, 기능 우선 클린 아키텍처 및 Swagger로 문서화된 Django REST API를 사용하여 완전한 기능의 팟캐스트 및 크리에이터 앱을 설계하고 출시했습니다. 오디오, 비디오 또는 풍부한 텍스트 기사를 녹음, 편집 및 게시할 수 있습니다.',
            highlights: [
                '앱 내 녹음(오디오 및 카메라) 및 백그라운드 재생 기능 구현',
                '소셜 레이어 추가(좋아요, 스레드 댓글, 딥 링크 및 QR 코드를 통한 공유)',
                '비공개 채널, 재생 목록 및 세분화된 콘텐츠 필터링/검색 개발',
                '애자일 2인 스쿼드(모바일 + 백엔드)에서 협업',
                'Dio를 사용한 JSON 직렬화 자동화 및 Swagger 계약 검토'
            ],
            technologies: ['Flutter', 'Cubit', 'Clean Architecture', 'Django REST API', 'just_audio', 'Dio', 'Swagger'],
            links: [],
            achievement: '리드 엔지니어'
        },
        {
            id: 'store-app',
            company: 'Store (재고 관리)',
            position: '모바일 개발자',
            duration: '2022년 12월 – 2023년 2월',
            location: '하이브리드 원격',
            description: 'Flutter SetState, Firebase Auth, Firestore 및 Storage 백엔드, PDF 인보이스 생성 기능을 갖춘 다중 역할 재고 앱(관리자/영업 에이전트)을 구상, 구축 및 배포했습니다.',
            highlights: [
                '관리자는 SKU를 업로드하고, 에이전트를 할당하며, 실시간 재고와 반품을 추적합니다',
                '재고 관리를 위한 자동 생성 분석 대시보드',
                '에이전트는 즉시 재고를 업데이트하는 인보이스를 발행합니다',
                '멀티덱스-서명된 빌드 및 Play-Console 릴리스 파이프라인 구현',
                '맞춤형 PDF 내보내기 엔진으로 감사 준비 시간이 몇 시간에서 몇 분으로 단축됨'
            ],
            technologies: ['Flutter', 'SetState', 'Firebase Auth', 'Firestore', 'Firebase Storage', 'PDF Generation'],
            links: [
                { type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.storeblueatom.store', label: 'Google Play' }
            ],
            achievement: '출시됨'
        },
        {
            id: 'here-app',
            company: 'Here (실물 상거래)',
            position: '주니어 Flutter 개발자',
            duration: '2021년 10월 - 2022년 4월',
            location: '원격',
            description: '쇼핑객이 근처 매장을 발견하고, 가격을 비교하며, 매장 내 픽업을 예약할 수 있게 하는 O2O 마켓플레이스를 출시했습니다. 상인들은 제품, 할인 및 지역 기반 오퍼를 나열할 수 있습니다.',
            highlights: [
                '근접 검색을 위한 Google Maps 및 Geolocator 구현',
                '위치 인식 오퍼 및 턴바이턴 매장 내비게이션 개발',
                '보안 규칙을 포함한 완전한 Firebase 백엔드 생성',
                '제품 및 오퍼 관리를 위한 판매자 대시보드 구축',
                '결제 게이트웨이 및 주문 관리 시스템 통합'
            ],
            technologies: ['Flutter', 'Firebase', 'Google Maps', 'Geolocator', 'Firebase Security Rules'],
            links: [
                { type: 'playstore', url: 'https://play.google.com/store/apps/details?id=com.blueAtom777.here', label: 'Google Play' }
            ],
            achievement: '첫 프로젝트'
        }
    ],

    // Projects Section
    projects: {
        title: '나의 프로젝트',
        subtitle: '제가 작업한 프로젝트 모음',
        
        categories: {
            all: '전체',
            mobile: '모바일 앱',
            web: '웹 애플리케이션',
            ui: 'UI/UX 디자인'
        },

        status: {
            completed: '완료',
            inProgress: '진행 중',
            planning: '계획 중'
        },

        buttons: {
            viewDemo: '데모 보기',
            sourceCode: '소스 코드',
            liveDemo: '라이브 데모',
            caseStudy: '사례 연구'
        },

        demo: {
            title: '나의 데모 애플리케이션',
            subtitle: '개발한 데모 애플리케이션 모음',
            totalApps: '애플리케이션',
            viewAll: '전체 보기',
            backToMain: '메인 프로젝트로 돌아가기'
        }
    },

    // Skills Section
    skills: {
        title: '나의 기술',
        subtitle: '마스터한 기술과 도구',
        
        categories: {
            technical: '기술적 능력',
            soft: '소프트 스킬',
            tools: '도구 및 소프트웨어',
            design: '디자인 기술'
        },

        competencies: {
            title: '주요 역량',
            mobile: '모바일 개발',
            architecture: '클린 아키텍처',
            firebase: 'Firebase 통합',
            state: '상태 관리',
            ui: 'UI/UX 디자인',
            performance: '성능 최적화'
        }
    },

    // Certificates Section
    certificates: {
        title: '나의 자격증',
        subtitle: '취득한 자격증과 코스',
        
        categories: {
            software: '소프트웨어 개발',
            entrepreneurship: '기업가 정신',
            other: '기타 기술'
        },

        buttons: {
            view: '보기',
            verify: '검증'
        },

        stats: {
            total: '총 자격증',
            categories: '카테고리',
            latest: '최신 년도',
            completion: '완료율'
        }
    },

    // Contact Section
    contact: {
        title: '연락하기',
        subtitle: '다음 프로젝트에 대해 이야기해봅시다',
        
        info: {
            title: '연락처 정보',
            description: '프로젝트 논의나 문의사항이 있으시면 언제든지 연락해 주세요',
            email: '이메일',
            phone: '전화',
            location: '위치',
            availability: '가용성'
        },

        form: {
            title: '메시지 보내기',
            name: '이름',
            email: '이메일',
            phone: '전화 (선택사항)',
            subject: '제목',
            message: '메시지',
            send: '메시지 보내기',
            sending: '보내는 중...',
            success: '메시지가 성공적으로 전송되었습니다!',
            error: '메시지 전송에 실패했습니다. 다시 시도해 주세요.'
        },

        social: {
            title: '팔로우하기',
            linkedin: 'LinkedIn',
            github: 'GitHub',
            twitter: 'Twitter',
            telegram: 'Telegram'
        }
    },

    // Footer
    footer: {
        about: {
            title: 'Ahmed Samy Zaky',
            description: '혁신적이고 효율적인 모바일 애플리케이션 개발에 특화된 Flutter 개발자'
        },
        
        links: {
            title: '빠른 링크',
            home: '홈',
            about: '소개',
            projects: '프로젝트',
            contact: '연락처'
        },

        services: {
            title: '서비스',
            mobile: '모바일 앱 개발',
            consultation: '기술 컨설팅',
            maintenance: '앱 유지보수',
            optimization: '성능 최적화'
        },

        contact: {
            title: '연락처',
            email: '이메일',
            phone: '전화',
            location: '위치'
        },

        newsletter: {
            title: '뉴스레터',
            description: '최신 뉴스와 프로젝트를 받으려면 구독하세요',
            placeholder: '이메일 입력',
            subscribe: '구독'
        },

        copyright: '모든 권리 보유',
        madeWith: '제작자',
        backToTop: '맨 위로'
    },

    // Common
    common: {
        loading: '로딩 중...',
        viewMore: '더 보기',
        viewLess: '적게 보기',
        learnMore: '더 알아보기',
        getStarted: '시작하기',
        close: '닫기',
        next: '다음',
        previous: '이전',
        submit: '제출',
        cancel: '취소',
        confirm: '확인',
        delete: '삭제',
        edit: '편집',
        save: '저장',
        search: '검색',
        filter: '필터',
        sort: '정렬',
        share: '공유',
        copy: '복사',
        download: '다운로드',
        upload: '업로드',
        print: '인쇄',
        refresh: '새로고침'
    },

    // Notifications
    notifications: {
        success: '성공',
        error: '오류',
        warning: '경고',
        info: '정보',
        copied: '텍스트가 복사됨',
        emailCopied: '이메일이 복사됨',
        phoneCopied: '전화번호가 복사됨'
    }
};

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations_ko;
} else if (typeof window !== 'undefined') {
    window.translations_ko = translations_ko;
}
