import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'
import { Geist, Geist_Mono, M_PLUS_Rounded_1c } from 'next/font/google'
import type { ReactNode } from 'react'

import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ''

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const rounded = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  variable: '--font-rounded',
  weight: ['400', '700'],
})

// TODO メタデータ設定(文字隠しってマイナス記号らしい)
export const metadata: Metadata = {
  title: '絵文字ステッカー！|画像に絵文字を貼るアプリ',
  description:
    '「絵文字ステッカー！」は絵文字やステッカーを画像に貼って装飾したり情報を隠すことができる無料のWebアプリです。',
}

// TODO vercel analytics
export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ja" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rounded.variable} antialiased`}
      >
        {children}
        <Toaster richColors />
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  )
}
