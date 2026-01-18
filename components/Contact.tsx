'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram } from 'lucide-react';
import Link from 'next/link'; // ★追加: これがないとページ移動できません

export default function Contact() {
    return (
        // ヘッダー被り防止の scroll-mt-32 を維持
        <section id="contact" className="scroll-mt-32 py-32 md:py-40 flex flex-col items-center justify-center text-center bg-[var(--background)]">
            <div className="max-w-4xl mx-auto px-6 w-full">

                {/* メインエリア */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    {/* キャッチコピー */}
                    <h2 className="mb-10">
                        <span
                            className="block text-3xl md:text-5xl font-bold text-[#262626] mb-6 leading-tight"
                            style={{ fontFamily: 'var(--font-zen-old), serif' }}
                        >
                            想いを、確かな形へ。
                        </span>
                        <span className="block text-xs font-sans text-gray-500 tracking-[0.2em] uppercase">
                            Start a Project
                        </span>
                    </h2>

                    <p className="text-sm text-gray-500 font-sans mb-16 leading-loose tracking-wide">
                        制作のご依頼、ご相談は<br className="md:hidden" />下記フォームよりお送りください。<br />
                        内容を確認後、2営業日以内に返信いたします。
                    </p>

                    {/* アクションエリア */}
                    <div className="flex flex-col items-center gap-10">

                        {/* メイン：Googleフォームへのリンク */}
                        <a
                            href="https://forms.gle/mSB7CeUwuCYv3Wen6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center gap-4 px-12 py-4 border border-[#262626] overflow-hidden transition-all duration-300 hover:bg-[#262626] min-w-[280px]"
                        >
                            <span className="relative z-10 text-sm font-bold tracking-widest uppercase text-[#262626] group-hover:text-white transition-colors duration-300">
                                Contact Form
                            </span>
                            <ArrowUpRight className="w-4 h-4 relative z-10 text-[#262626] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </a>

                        {/* サブ：Instagramへのリンク */}
                        {/* ★後でここに本物のURLを入れてください */}
                        <a
                            href="https://instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xs font-bold text-gray-500 tracking-widest uppercase hover:text-[#262626] transition-colors py-2 opacity-80 hover:opacity-100"
                        >
                            <Instagram className="w-4 h-4" />
                            <span>Instagram</span>
                        </a>

                    </div>
                </motion.div>

                {/* フッターエリア */}
                <motion.footer
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-gray-500 font-sans tracking-wider uppercase"
                >
                    {/* コピーライト */}
                    <p>&copy; 2025 Suzu Design.</p>

                    {/* 規約リンク（ここをタップするとページ遷移します） */}
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-[#262626] transition-colors border-b border-transparent hover:border-[#262626]">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-[#262626] transition-colors border-b border-transparent hover:border-[#262626]">
                            Terms
                        </Link>
                    </div>
                </motion.footer>

            </div>
        </section>
    );
}