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
  title: "Portfolio | Minimal",
  description: "ミニマリストのポートフォリオ",
};

// ヘッダーコンポーネントのインポートパスが正しいか確認してください
// もしエラーが出る場合は import Header from "@/components/Header"; などを試してください
import Header from "../components/Header";

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
      </body>
    </html>
  );
}