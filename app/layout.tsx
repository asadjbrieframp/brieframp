import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "BriefRamp - Get every client on board, fast.",
  description: "Client onboarding for freelance designers.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  )
}
