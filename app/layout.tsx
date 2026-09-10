import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
// import { Lato } from "next/font/google"
import { Share_Tech_Mono } from "next/font/google";
import SplashCursor from '../components/SplashCursor'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

// fonte utilizada no projeto como um todo
// const lato = Lato({
//   weight: ['400'],
//   variable: "--font-lato",
//   subsets: ["latin"]
// })

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
  weight: "400",
});

// nome e icone na aba
export const metadata: Metadata = {
  title: "Felipe Deangelles",
  icons: {
    icon: '/taghtml.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${shareTechMono.className} antialiased`}
      > 
        {/* cursor com efeito */}
        <SplashCursor />
        {/* temas para ser alterados */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          {/* mensagem de sucesso ou falha com toastify */}
          <ToastContainer position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
