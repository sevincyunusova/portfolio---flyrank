import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Sevincxanim Yunusova | Frontend Developer",
  description:
    "Personal portfolio of Sevincxanim Yunusova, a Frontend Developer focused on modern web development and AI-powered experiences.",
  verification: {
    google: "JI7vZ_FA4g3xemqDFyHOq7q1stUTiTA0Z__HCWVQMKY",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  )
}