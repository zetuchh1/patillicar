import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "PatiliCar - Evcil Dostlarınızın Konforu",
  description: "PatiliCar ile evcil dostlarınız güvenle seyahat eder. Kedi ve köpekleriniz için özel taşıma çözümleri.",
  keywords: "patilicar, evcil hayvan taşıma, kedi arabası, köpek taşıma, pet transport",
  openGraph: {
    title: "PatiliCar - Evcil Dostlarınızın Konforu",
    description: "Evcil dostlarınız için güvenli ve konforlu taşıma çözümleri",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
