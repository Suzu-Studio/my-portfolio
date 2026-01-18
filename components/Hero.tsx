'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const heroImages = [
    '/hero-slide-1.jpg',
    '/hero-slide-2.jpg',
    '/hero-slide-3.jpg',
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="hero" className="relative w-full min-h-screen flex items-center pt-24 pb-12 bg-[var(--background)] overflow-hidden">
            {/* 修正1：max-w-7xl を max-w-6xl に変更して全体を中央に寄せ、引き締める */}
            <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                {/* Left Column */}
                {/* 修正2：lg:pl-8 を追加して、左側の壁から少し距離を取る（窮屈感の解消） */}
                <div className="flex flex-col justify-center order-2 lg:order-1 relative z-10 lg:pl-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-left"
                    >
                        <p className="text-xs tracking-[0.25em] text-gray-400 uppercase mb-6 font-sans">
                            Your Digital Partner.
                        </p>

                        <h1
                            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#262626] leading-[1.4] mb-8"
                            style={{ fontFamily: 'var(--font-zen-old), serif' }}
                        >
                            事業の成長を、<br className="hidden lg:block" />
                            隣で支える<br className="hidden lg:block" />
                            {/* Webパートナー。をひとかたまりにして、次の行に送る */}
                            <span className="inline-block whitespace-nowrap">Webパートナー。</span>
                        </h1>

                        <p className="text-base lg:text-lg text-gray-500 font-sans mb-10 leading-relaxed">
                            あなたの想いを、確かな『カタチ』に。
                        </p>

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-3 bg-[#262626] text-white px-8 py-4 text-sm tracking-widest hover:bg-gray-800 transition-colors duration-300 group"
                        >
                            お問い合わせはこちら
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>

                {/* Right Column */}
                {/* 修正：aspect-[4/3] を全サイズに適用し、高さ固定を解除して画像全体を見せる */}
                <div className="relative w-full aspect-square md:aspect-[4/3] lg:h-[600px] lg:aspect-auto order-1 lg:order-2 bg-neutral-100 overflow-hidden group">
                    <div className="absolute bottom-6 right-6 z-30 text-right opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                        {/* 屋号：明朝体で少し大きく */}
                        <p className="text-xl font-bold text-[#262626] font-[var(--font-zen-old)] tracking-wider mb-1">
                            Suzu
                        </p>
                        {/* 肩書き：ゴシック体で小さく、英語で */}
                        <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase font-sans">
                            Web Designer
                        </p>
                    </div>


                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${heroImages[currentSlide]})` }}
                    />
                    <div className="absolute inset-0 bg-gray-50/10 pointer-events-none" />
                </div>

            </div>

            <div className="absolute bottom-8 left-8 hidden lg:flex flex-col items-center gap-4 z-20">
                <span className="text-[10px] tracking-widest text-gray-400 uppercase writing-vertical-rl font-sans">Scroll</span>
                <div className="w-[1px] h-16 bg-gray-300" />
            </div>
        </section>
    );
}