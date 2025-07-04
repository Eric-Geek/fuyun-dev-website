import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fuyun - Tech Writer & Content Creator',
  description: 'Fuyun的个人网站 - 专注于技术写作和内容创作，分享前端开发、全栈技术和开发工具的经验与见解',
  keywords: ['技术写作', '前端开发', 'React', 'Vue', 'TypeScript', '技术博客', '内容创作'],
  authors: [{ name: 'Fuyun' }],
  creator: 'Fuyun',
  publisher: 'Fuyun',
  metadataBase: new URL('https://fuyun.dev'),
  icons: {
    icon: '/avatar.jpg',
    shortcut: '/avatar.jpg',
    apple: '/avatar.jpg',
  },
  openGraph: {
    title: 'Fuyun - Tech Writer & Content Creator',
    description: '专注于技术写作和内容创作，分享编程知识与经验',
    url: 'https://fuyun.dev',
    siteName: 'Fuyun.dev',
    locale: 'zh_CN',
    type: 'website',
    images: [
      {
        url: '/avatar.jpg',
        width: 800,
        height: 800,
        alt: 'Fuyun - Tech Writer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fuyun - Tech Writer & Content Creator',
    description: '专注于技术写作和内容创作，分享编程知识与经验',
    creator: '@fuyun',
    images: ['/avatar.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
