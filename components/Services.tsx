'use client';

import { motion } from 'framer-motion';

const plans = [
    {
        id: 1,
        name: 'Light',
        nameJp: 'ライトプラン',
        target: '個人事業主・創業初期の方',
        description: '事業の信頼性を担保する、名刺代わりのWebサイト。',
        price: '80,000',
        monthly: '3,000',
        features: [
            'スマホ対応 (レスポンシブ)',
            'お問い合わせフォーム設置',
            'シンプルで美しい1ページ構成',
            'SNSリンク連携'
        ]
    },
    {
        id: 2,
        name: 'Standard',
        nameJp: 'スタンダード',
        target: '店舗・中小企業・集客重視の方',
        description: '自分で更新できるブログ機能と、SEO対策を完備。',
        price: '150,000',
        monthly: '8,000',
        isRecommended: true,
        features: [
            '全5ページ構成 (Top + 4P)',
            'CMS導入 (お知らせ・ブログ)',
            'Googleマップ埋め込み',
            '内部SEO対策 (検索対策)'
        ]
    },
    {
        id: 3,
        name: 'Premium',
        nameJp: 'プレミアム',
        target: '美容室・サロン・ブランド',
        description: '独自のアニメーションと世界観で、ブランドを確立。',
        price: '250,000',
        monthly: '15,000',
        features: [
            '完全オリジナルデザイン',
            '高度なアニメーション演出',
            '外部予約システム連携',
            'ブランディング支援 (ロゴ等)'
        ]
    }
];

export default function Services() {
    return (
        <section id="services" className="scroll-mt-20 py-24 md:py-40 bg-[var(--background)]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Area */}
                {/* ★修正2: items-end を items-start md:items-end に変更して、スマホで左揃えにする */}
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-8">
                    <div>
                        <h2
                            className="text-4xl md:text-5xl font-bold text-[#262626] mb-6"
                            style={{ fontFamily: 'var(--font-zen-old), serif' }}
                        >
                            Services
                        </h2>
                        <p className="text-base text-gray-600 leading-relaxed max-w-xl font-sans">
                            お客様の事業フェーズに合わせ、<br className="hidden md:block" />
                            最適なプランをご提案いたします。
                        </p>
                    </div>
                </div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative p-8 md:p-10 flex flex-col justify-between h-full transition-all duration-300 group
                                ${plan.isRecommended
                                    ? 'bg-white border-2 border-[#262626] shadow-xl z-10 scale-[1.02] md:scale-105'
                                    : 'bg-white border border-gray-100 hover:border-gray-300'
                                }`
                            }
                        >
                            {/* Recommended Badge */}
                            {plan.isRecommended && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#262626] text-white text-[10px] font-bold px-4 py-1 uppercase tracking-widest shadow-md">
                                    Recommended
                                </div>
                            )}

                            <div>
                                {/* Plan Header */}
                                <div className="mb-8">
                                    <span className="text-xs font-sans text-gray-400 tracking-[0.2em] uppercase block mb-3">
                                        {plan.name}
                                    </span>
                                    <h3
                                        className="text-2xl font-bold text-[#262626] mb-3"
                                        style={{ fontFamily: 'var(--font-zen-old), serif' }}
                                    >
                                        {plan.nameJp}
                                    </h3>
                                    <p className="text-xs text-gray-500 font-sans mb-5 pb-5 border-b border-gray-100">
                                        推奨: {plan.target}
                                    </p>

                                    <p className="text-sm text-gray-700 font-sans leading-relaxed text-balance min-h-[3em]">
                                        {plan.description}
                                    </p>
                                </div>

                                {/* Price Area */}
                                <div className="mb-10">
                                    <div className="flex items-baseline mb-3">
                                        <span className="text-xl text-[#262626] font-serif mr-1">¥</span>
                                        <span
                                            className="text-5xl text-[#262626]"
                                            style={{ fontFamily: 'var(--font-zen-old), serif' }}
                                        >
                                            {plan.price}
                                        </span>
                                        {/* 「〜」を大きく、濃く、明朝体にして視認性を向上 */}
                                        <span
                                            className="text-2xl text-gray-600 ml-2"
                                            style={{ fontFamily: 'var(--font-zen-old), serif' }}
                                        >
                                            〜
                                        </span>
                                    </div>
                                    <div className="inline-flex items-center text-xs text-gray-500 font-sans bg-gray-50 px-3 py-1.5 rounded">
                                        <span className="mr-2">月額管理費: ¥{plan.monthly}〜</span>
                                    </div>
                                </div>

                                {/* Features List */}
                                <ul className="space-y-4 mb-10">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-gray-600 font-sans">
                                            <span className="w-3 h-px bg-gray-400 mr-3 group-hover:bg-[#262626] transition-colors" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Action Area */}
                            <a href="#contact" className="pt-6 border-t border-gray-100 flex items-center justify-between cursor-pointer hover:opacity-80 transition-opacity">
                                <span className="relative text-sm font-bold text-[#262626] tracking-widest uppercase">
                                    Consult
                                    {/* ホバー時に伸びる下線アニメーション */}
                                    <span className="absolute bottom-0 left-0 w-0 h-px bg-[#262626] transition-all duration-300 group-hover:w-full"></span>
                                </span>
                                <svg
                                    className="w-5 h-5 text-[#262626] transform transition-transform duration-300 group-hover:translate-x-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}