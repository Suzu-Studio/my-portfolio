'use client';

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

const navItems = [
    { name: 'About', label: '私について', href: '#about' },
    { name: 'Services', label: 'サービス', href: '#services' },
    { name: 'Works', label: '制作実績', href: '#works' },
    { name: 'Contact', label: 'お問い合わせ', href: '#contact' },
];

export default function Header() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // スクロール検知：下にスクロールすると隠れ、上にスクロールすると出る
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    // ★重要：クリックした場所にスムーズに移動する関数
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault(); // 勝手なジャンプを防ぐ
        const target = document.querySelector(href);
        if (target) {
            setMenuOpen(false); // スマホメニューが開いていたら閉じる
            target.scrollIntoView({ behavior: 'smooth' }); // スルッと移動
        }
    };

    return (
        <>
            <motion.header
                variants={{
                    visible: { y: 0 },
                    hidden: { y: '-100%' },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
            >
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                    {/* Logo */}
                    <a
                        href="#hero"
                        onClick={(e) => handleScroll(e, '#hero')}
                        className="text-2xl font-bold text-[#262626] tracking-wider z-50 relative group"
                        style={{ fontFamily: 'var(--font-zen-old), serif' }}
                    >
                        Suzu.
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleScroll(e, item.href)}
                                className="text-xs font-bold text-gray-500 uppercase tracking-widest hover:text-[#262626] transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#262626] transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button (機能付き) */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden z-50 relative text-xs font-bold text-[#262626] tracking-widest uppercase p-2"
                    >
                        {menuOpen ? 'CLOSE' : 'MENU'}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center md:hidden"
                    >
                        <nav className="flex flex-col items-center gap-10">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleScroll(e, item.href)}
                                    className="text-2xl font-bold text-[#262626] tracking-widest"
                                    style={{ fontFamily: 'var(--font-zen-old), serif' }}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>

                        <p className="absolute bottom-10 text-[10px] text-gray-400 font-sans tracking-widest uppercase">
                            © 2025 Suzu Design.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}