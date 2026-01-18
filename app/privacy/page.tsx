'use client';

import Header from '@/components/Header';

export default function Privacy() {
    return (
        <main className="bg-[var(--background)] min-h-screen">
            {/* ヘッダーを表示して統一感を出す */}
            <Header />

            <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
                <h1
                    className="text-3xl font-bold mb-12 text-[#262626]"
                    style={{ fontFamily: 'var(--font-zen-old), serif' }}
                >
                    Privacy Policy
                </h1>

                <div className="space-y-10 text-sm text-gray-600 font-sans leading-loose tracking-wide">
                    <section>
                        <h2 className="text-base font-bold text-[#262626] mb-4">1. 個人情報の利用目的</h2>
                        <p>
                            当方は、お問い合わせフォーム等から取得した個人情報を、お問い合わせへの回答や必要なご連絡のためにのみ利用し、目的外での利用はいたしません。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-base font-bold text-[#262626] mb-4">2. 個人情報の第三者への提供</h2>
                        <p>
                            当方は、法令に基づく場合を除き、取得した個人情報を本人の同意なく第三者に提供することはありません。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-base font-bold text-[#262626] mb-4">3. 免責事項</h2>
                        <p>
                            当サイトのコンテンツ・情報について、可能な限り正確な情報を掲載するよう努めておりますが、正確性や安全性を保証するものではありません。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
                        </p>
                    </section>

                    <div className="pt-10 border-t border-gray-100 mt-16">
                        <p>制定日: 2026年1月1日</p>
                        <p>Suzu Design</p>
                    </div>
                </div>
            </div>
        </main>
    );
}