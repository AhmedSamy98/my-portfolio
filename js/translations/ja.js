// ===================================
// JAPANESE TRANSLATIONS - CLEAN
// ===================================

const translations_ja = {
    // Navigation
    nav: {
        home: 'ホーム',
        about: '私について',
        experience: '経験',
        projects: 'プロジェクト',
        skills: 'スキル',
        certificates: '証明書',
        contact: 'お問い合わせ'
    },

    // Hero Section
    hero: {
        greeting: 'こんにちは、私は',
        name: 'Ahmed Samy Zaky',
        title: 'Flutter開発者',
        subtitle: 'Flutter と Dart に特化したモバイル開発者として、3年以上の経験を持つ高度なモバイルアプリケーション開発者',
        downloadCV: 'CV をダウンロード',
        viewProjects: 'プロジェクトを見る',
        scrollDown: '下にスクロール'
    },

    // About Section
    about: {
        title: '私について',
        subtitle: 'モバイルアプリケーション作成における実践的な経験を持つ情熱的なFlutter開発者',
        description: '3年以上の経験を持つモバイルエンジニア 💙 プロダクション品質のFlutterアプリケーションの設計、構築、配布において。Dart 3 💙、Flutter 3.x 🚀、Firebase 🔥（Auth、Firestore、Storage）および現代的なモジュラーアーキテクチャ - Clean Architecture 🏛️ 機能ベースの層、MVVMおよびCubit状態管理 📊 - コードをスケーラブルでテスト準備済みに保つエキスパート。',
        description_2: 'エンドツーエンドのスキルは要件分析、ピクセルパーフェクトUI/UX ✨、RESTful API統合 🔄、GitHub ActionsでのCI/CDパイプライン 🔄、自動Play-Consoleリリース 🚀、パフォーマンスプロファイリング 📈 にわたります。Google Playに洗練されたアプリを公開し、そのライフサイクルを維持する実証済みの能力。',
        
        stats: {
            experience: '年の経験',
            projects: 'プロジェクト',
            certificates: '証明書'
        },

        skills: {
            title: 'コアスキル',
            flutter: 'Flutter開発',
            firebase: 'Firebaseサービス',
            architecture: 'クリーンアーキテクチャ',
            stateManagement: 'ステート管理'
        },

        competencies: {
            title: '主要な能力',
            flutter: 'Flutter開発',
            flutter_desc: '完璧なUI/UXを備えたクロスプラットフォームモバイルアプリケーションの構築エキスパート',
            dart: 'Dartプログラミング',
            dart_desc: '最新のプログラミングパターンを用いたDart言語の高度な能力',
            architecture: 'クリーンアーキテクチャ',
            architecture_desc: 'スケーラブルなコードのためのクリーンアーキテクチャ、MVVM、およびモジュラーデザインパターン',
            firebase: 'Firebase統合',
            firebase_desc: '認証、Firestore、ストレージ、およびリアルタイム機能の実装',
            cicd: 'CI/CDパイプライン',
            cicd_desc: 'GitHub Actionsと自動デプロイワークフロー'
        }
    },

    // Experience Data in Japanese
    experienceData: [
        {
            id: 'languages-arabic',
            company: 'Languages in Arabic - "بالعربى لغات"',
            position: 'Flutter開発者 & キーコントリビューター',
            duration: '2025年5月 – 現在',
            location: 'リモート',
            description: 'setStateの場当たり的な使用からCubitドリブンアーキテクチャへのアプリ移行による完全なコードベースの再設計',
            highlights: [
                'coreとfeature層を明確に分離したプロジェクトフォルダ構造の再設計',
                'get_itを使用した依存性注入の実装と単体テストの開発',
                '単語、文、文法規則をブックマークできる「お気に入り」機能の開発',
                '元のアプリオーナーとリード開発者と並んでキーコントリビューターとして協力',
                'アプリはGoogle Play StoreとApple App Storeで稼働中で活発に使用されている'
            ],
            technologies: ['Flutter', 'Cubit', 'Clean Architecture', 'shared_preferences', 'get_it', 'Unit Testing'],
            links: [
                {
                    type: 'playstore',
                    url: 'https://play.google.com/store/apps/details?id=com.Arabic.Languages',
                    label: 'Google Play'
                },
                {
                    type: 'appstore',
                    url: 'https://apps.apple.com/us/app/%D9%84%D8%BA%D8%A7%D8%AA-%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%89/id6738091599',
                    label: 'App Store'
                }
            ],
            current: true,
            achievement: '現在'
        },
        {
            id: 'freelance-templates',
            company: 'フリーランスFlutter開発者',
            position: '28のテンプレートアプリポートフォリオ',
            duration: '2025年2月 – 現在',
            location: 'リモート',
            description: 'eコマース、ライドシェア、フードデリバリー、メディアストリーミング、ホテル予約、教育、Q&A、自動車サービス、オンデマンドサービスでの顧客プロジェクトの立ち上げを可能にする28の標準デモアプリスイートの設計',
            highlights: [
                '機能指向UIレイヤーとMobXビューモデルの構築',
                'REST API / Firebaseバックエンドへの接続準備が整った抽象化されたデータソースの作成',
                'ピクセルパーフェクトで完全にレスポンシブなレイアウト（Material 3 & Cupertino）の提供',
                '継続的なビデオウォークスルーとAPKデモの制作',
                'Flutter 3.x / Dart 3.x移行と週次更新でのコードベース維持'
            ],
            technologies: ['Flutter', 'MobX', 'Clean Architecture', 'Material 3', 'Cupertino', 'REST API', 'Firebase'],
            links: [
                {
                    type: 'youtube',
                    url: 'https://www.youtube.com/playlist?list=PL4Ti32rTkEYjo2lrlCOck8NIrFguIF8Dj',
                    label: 'YouTubeプレイリスト'
                }
            ],
            current: true
        },
        {
            id: 'talk-app',
            company: 'Talk (ポッドキャスト + 記事プラットフォーム)',
            position: 'リードモバイルエンジニア',
            duration: '2024年9月 – 2025年1月',
            location: 'リモート契約',
            description: 'Cubit状態管理、機能ファーストClean Architecture、Swagger文書化されたDjango REST APIを使用した、録音、編集、オーディオ、ビデオまたはリッチテキスト記事の公開を行うフル機能ポッドキャスト & クリエイターアプリのアーキテクチャと配布',
            highlights: [
                'アプリ内録音（オーディオ & カメラ）とバックグラウンド再生の実装',
                'ソーシャル層（いいね、スレッド化されたコメント、ディープリンクとQRコードでの共有）の追加',
                'プライベートチャンネル、プレイリスト、詳細なコンテンツフィルタリング/検索の開発',
                'アジャイル2人チーム（モバイル + バックエンド）での協力',
                'DioでのJSON自動シリアライゼーションとSwagger契約のレビュー'
            ],
            technologies: ['Flutter', 'Cubit', 'Clean Architecture', 'Django REST API', 'just_audio', 'Dio', 'Swagger'],
            links: [],
            achievement: 'リードエンジニア'
        },
        {
            id: 'store-app',
            company: 'Store (在庫管理)',
            position: 'モバイル開発者',
            duration: '2022年12月 – 2023年2月',
            location: 'ハイブリッドリモート',
            description: 'Flutter SetState、Firebase Auth、Firestore & Storageバックエンド、PDF請求書生成を使用したマルチロール在庫アプリ（マネージャー / セールスエージェント）の構想、構築、デプロイ',
            highlights: [
                'マネージャーがSKUをアップロード、エージェントを割り当て、リアルタイム在庫と返品を追跡',
                '在庫管理のための自動生成分析ダッシュボード',
                'エージェントが即座に在庫を更新する請求書を発行',
                'マルチデックス署名ビルドとPlay-Consoleリリースパイプラインの実装',
                'カスタムPDFエクスポートエンジンが監査準備時間を数時間から数分に短縮'
            ],
            technologies: ['Flutter', 'SetState', 'Firebase Auth', 'Firestore', 'Firebase Storage', 'PDF Generation'],
            links: [
                {
                    type: 'playstore',
                    url: 'https://play.google.com/store/apps/details?id=com.storeblueatom.store',
                    label: 'Google Play'
                }
            ],
            achievement: '公開済み'
        },
        {
            id: 'here-app',
            company: 'Here (実店舗コマース)',
            position: 'ジュニアFlutter開発者',
            duration: '2021年10月 – 2022年4月',
            location: 'リモート',
            description: '買い物客が近くの店舗を発見し、価格を比較し、店内受け取りを予約できるO2Oマーケットプレイスの立ち上げ。商人は商品、割引、地理的オファーをリスト',
            highlights: [
                '近接検索のためのGoogle Maps & Geolocatorの実装',
                '位置認識オファーとターンバイターン店舗ナビゲーションの開発',
                'セキュリティルールを含む完全なFirebaseバックエンドの作成',
                '商品とオファー管理のための商人ダッシュボードの構築',
                '決済ゲートウェイと注文管理システムの統合'
            ],
            technologies: ['Flutter', 'Firebase', 'Google Maps', 'Geolocator', 'Firebase Security Rules'],
            links: [
                {
                    type: 'playstore',
                    url: 'https://play.google.com/store/apps/details?id=com.blueAtom777.here',
                    label: 'Google Play'
                }
            ],
            achievement: '初回プロジェクト'
        }
    ],

    // Experience Section
    experience: {
        title: '職歴',
        subtitle: 'モバイルアプリ開発における私の旅',
        duration: '期間',
        location: '場所',
        current: '現在',
        technologies: '使用技術',
        links: 'リンク',
        highlights: 'ハイライト'
    },

    // Projects Section
    projects: {
        title: '注目プロジェクト',
        subtitle: '私の注目すべき作品',
        view_project: 'プロジェクトを見る',
        technologies: '技術',
        features: '機能'
    },

    // Skills Section
    skills: {
        title: 'スキル',
        subtitle: '私が習得している技術とツール',
        technical: '技術スキル',
        soft: 'ソフトスキル',
        tools: 'ツール',
        design: 'デザイン'
    },

    // Certificates Section
    certificates: {
        title: '証明書',
        subtitle: '私が完了した証明書とコース',
        software: 'ソフトウェア証明書',
        entrepreneurship: '起業家精神証明書',
        other: 'その他の証明書',
        view_certificate: '証明書を見る',
        stats: {
            total: '証明書総数',
            categories: 'カテゴリー',
            latest: '最新年',
            completion: '完了率'
        }
    },

    // Contact Section
    contact: {
        title: 'お問い合わせ',
        subtitle: 'あなたの次のプロジェクトについて話しましょう',
        info_title: '連絡先情報',
        info_text: 'あなたのプロジェクトや質問について気軽にお問い合わせください',
        email: 'メール',
        phone: '電話',
        location: '所在地',
        social: 'ソーシャル',
        form: {
            name: 'フルネーム',
            email: 'メールアドレス',
            subject: '件名',
            message: 'メッセージ',
            send: 'メッセージを送信',
            sending: '送信中...',
            success: 'メッセージが正常に送信されました',
            error: 'メッセージの送信エラー'
        }
    }
};

// Make translations available globally
window.translations_ja = translations_ja;
