import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vazifa 4dars ',
  description: 'Created with Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
