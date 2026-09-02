import type { Metadata } from "next"
import { Fraunces, Geist } from "next/font/google"
import { TooltipProvider } from "@/components/ui/tooltip"
import "./globals.css"

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Cash Today — extra money you can start now",
  description:
    "Legal extra-income ideas you can start today: gigs, local services, selling stuff, and a few Cursor-shaped plays. Filter, shortlist, and do the next two hours.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <TooltipProvider>{children}</TooltipProvider>
        <footer className="mt-auto border-t border-foreground/10 px-4 py-6 text-center text-xs text-muted-foreground sm:px-6">
          Cash Today is a planning board, not financial, medical, or employment
          advice. Pay your taxes. Skip anything that only works if it is shady.
        </footer>
      </body>
    </html>
  )
}
