import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Volex - A New Era of Minecraft',
  description: 'Join Volex Minecraft server - A custom-powered world with unique abilities, intense battles, and epic adventures. Java & Bedrock compatible.',
  keywords: 'Minecraft server, Volex, custom powers, PvP, PvE, Java, Bedrock',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7119422349393714"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
} 