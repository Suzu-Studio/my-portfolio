'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section className="min-h-screen flex items-center py-24 md:py-32 bg-[var(--background)]">
            <section id="about" className="scroll-mt-46 py-24 md:py-46 bg-white"></section>
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* 画像エリア (4 columns) */}
                    <div className="md:col-span-4 md:col-start-2">
                        {/* 画像エリア */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            // 枠線を少し入れてアート作品のように見せる
                            className="relative aspect-[3/4] bg-white border border-neutral-100 overflow-hidden"
                        >
                            <div
                                className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                                style={{
                                    backgroundImage: 'url(/logo-art.png)',
                                    // 画像のサイズ感を調整（必要なら数値をいじってください）
                                    backgroundSize: '85%'
                                }}
                            />
                        </motion.div>
                    </div>

                    {/* テキストエリア (6 columns) */}
                    <div className="md:col-span-6 md:col-start-7 pt-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {/* 見出し */}
                            <div className="mb-8">
                                <h2
                                    className="text-3xl md:text-4xl font-bold text-[#262626] mb-4 leading-tight"
                                    style={{ fontFamily: 'var(--font-zen-old), serif' }}
                                >
                                    二人三脚でつくる、<br />
                                    Webの基盤。
                                </h2>
                                <span className="text-xs font-sans text-gray-400 tracking-[0.25em] uppercase block">
                                    Partnership
                                </span>
                            </div>

                            {/* 本文エリア：幅制限版 */}
                            {/* max-w-lg を追加して、横幅を狭くすることで「右の余白」をデザインとして処理する */}
                            <div className="text-base md:text-lg text-gray-600 font-sans leading-loose text-left space-y-8 mb-8 max-w-lg">
                                <p>
                                    個人事業主様や、創業期のお客様にとって、Webサイトは単なる広告ではありません。それは、事業への想いを証明する『基盤』です。
                                </p>
                                <p>
                                    私は、見た目の美しさだけでなく、その後の運用や成長までを見据えた設計を大切にしています。
                                </p>
                                <p>
                                    複雑なデジタル領域の課題をシンプルに解決し、あなたが本業に集中できる環境をつくること。それが私の役割です。
                                </p>
                            </div>

                            {/* 下部情報 */}
                            <div className="pt-8 border-t border-gray-200 grid grid-cols-2 gap-10">
                                <div>
                                    <span className="block text-[10px] text-gray-400 tracking-[0.2em] uppercase mb-2">Location</span>
                                    <p className="text-sm text-[#262626] tracking-wide font-sans">Hokkaido, Japan</p>
                                </div>
                                <div>
                                    <span className="block text-[10px] text-gray-400 tracking-[0.2em] uppercase mb-2">Role</span>
                                    <p className="text-sm text-[#262626] tracking-wide font-sans">Web Designer / Developer</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}