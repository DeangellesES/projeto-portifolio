import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Lato } from "next/font/google"
import SplashCursor from '../components/SplashCursor'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

const lato = Lato({
  weight: ['400'],
  variable: "--font-lato",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Felipe Deangelles",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${lato.className} antialiased`}
      ><SplashCursor />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <ToastContainer position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
