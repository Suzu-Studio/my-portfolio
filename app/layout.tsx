import type { Metadata } from "next";
import { Zen_Old_Mincho, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

// フォントの設定
const zenOldMincho = Zen_Old_Mincho({
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-zen-old",
  subsets: ["latin"],
  preload: false, // 日本語フォント用設定
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Suzu. | 事業の成長を支えるWeb制作パートナー",
  description: "北海道を拠点とするWeb制作パートナー。単なるHP作成ではなく、売上と集客に繋がる「事業の基盤」を構築します。個人・中小企業のWebサイト制作・リニューアルに対応。",
  verification: {
    google: 'TXBBPVmRXXK6ysP_6jJImCfBqtl5k1Ooi_IY7Rkrb00',
  },
};

// ヘッダーコンポーネントのインポートパスが正しいか確認してください
// もしエラーが出る場合は import Header from "@/components/Header"; などを試してください
import Header from "../components/Header";

import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${zenOldMincho.variable} ${notoSansJP.variable} font-sans antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <Header />
        {children}
        <GoogleAnalytics gaId="G-CMQW7XFJYX" />
      </body>
    </html>
  );
}