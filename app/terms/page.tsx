'use client';

import Header from '@/components/Header';

export default function Terms() {
    return (
        <main className="bg-[var(--background)] min-h-screen">
            <Header />

            <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
                <h1
                    className="text-3xl font-bold mb-12 text-[#262626]"
                    style={{ fontFamily: 'var(--font-zen-old), serif' }}
                >
                    Terms of Service
                </h1>

                <div className="space-y-10 text-sm text-gray-600 font-sans leading-loose tracking-wide">
                    <p>
                        Suzu Design（以下「当方」）が提供するWeb制作サービス（以下「本サービス」）の利用規約を以下の通り定めます。
                    </p>

                    <section>
                        <h2 className="text-base font-bold text-[#262626] mb-4">第1条（適用）</h2>
                        <p>
                            本規約は、本サービスの利用に関する一切の関係に適用されます。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-base font-bold text-[#262626] mb-4">第2条（契約の成立）</h2>
                        <p>
                            本サービスへの発注は、お客様が当方の提示する見積もりに合意し、正式な発注の意思表示を行った時点で成立するものとします。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-base font-bold text-[#262626] mb-4">第3条（キャンセル・変更）</h2>
                        <p>
                            制作着手後のキャンセルについては、進捗状況に応じた実費および作業費をご請求させていただきます。
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