'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

// ★確定したURLと情報を設定
const works = [
    {
        id: 1,
        title: "Hair Salon CUBE",
        category: "LP Production / Beauty",
        year: "2025",
        // スクリーンショットを public/work01.png として保存してください
        image: "/work01.png",
        url: "https://cube-salon-demo.vercel.app/"
    },
    {
        id: 2,
        title: "Kizuna Home Construction", // 工務店
        category: "Corporate Site / Architecture",
        year: "2025",
        // スクリーンショットを public/work02.png として保存してください
        image: "/work02.png",
        url: "https://kizuna-komuten-demo2.vercel.app/"
    },
    {
        id: 3,
        title: "White Dental Clinic", // 歯科医院
        category: "Clinic Site / Medical",
        year: "2026",
        // スクリーンショットを public/work03.png として保存してください
        image: "/work03.png",
        url: "https://white-dental-demo3.vercel.app/"
    }
];

export default function Works() {
    return (
        <section id="works" className="scroll-mt-32 py-24 md:py-32 bg-[var(--background)] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* ヘッダーエリア */}
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-4 md:gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2
                            className="text-4xl md:text-5xl font-bold text-[#262626] mb-4"
                            style={{ fontFamily: 'var(--font-zen-old), serif' }}
                        >
                            Works
                        </h2>
                        <p className="text-sm text-gray-500 font-sans tracking-wide">
                            これまでに手がけた、主要なプロジェクト。
                        </p>
                    </motion.div>
                </div>

                {/* 作品グリッド */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">

                    {/* 左カラム（1つ目・3つ目） */}
                    <div className="flex flex-col gap-12 md:gap-20">
                        {works.filter((_, i) => i % 2 === 0).map((work, index) => (
                            <WorkCard key={work.id} work={work} index={index} />
                        ))}
                    </div>

                    {/* 右カラム（2つ目） */}
                    <div className="flex flex-col gap-12 md:gap-20 md:pt-20">
                        {works.filter((_, i) => i % 2 !== 0).map((work, index) => (
                            <WorkCard key={work.id} work={work} index={index + 0.2} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

// 作品カードコンポーネント
function WorkCard({ work, index }: { work: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group block"
        >
            {/* リンク全体を包む（target="_blank" で別タブで開く） */}
            <a href={work.url} target="_blank" rel="noopener noreferrer" className="block">
                {/* 画像エリア */}
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden mb-5 border border-gray-100 shadow-sm group-hover:shadow-md transition-all">
                    <div
                        className="absolute inset-0 bg-cover bg-top transition-transform duration-700 group-hover:scale-105"
                        style={{
                            backgroundImage: `url(${work.image})`,
                            backgroundColor: '#f0f0f0'
                        }}
                    />
                    {/* ホバー時のフィルター */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </div>

                {/* テキスト情報 */}
                <div className="flex justify-between items-start border-b border-gray-200 pb-3 group-hover:border-[#262626] transition-colors duration-500">
                    <div>
                        <h3
                            className="text-lg md:text-xl font-bold text-[#262626] mb-1 group-hover:tracking-wide transition-all duration-300"
                            style={{ fontFamily: 'var(--font-zen-old), serif' }}
                        >
                            {work.title}
                        </h3>
                        <p className="text-[10px] md:text-xs text-gray-500 font-sans uppercase tracking-widest">
                            {work.category}
                        </p>
                    </div>

                    <div className="pt-1">
                        <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-[#262626] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </div>
                </div>
            </a>
        </motion.div>
    );
}