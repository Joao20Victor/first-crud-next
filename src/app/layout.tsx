import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from './../style/registry'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'First Crud in NextJs',
  description: 'created by João',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <StyledComponentsRegistry>
            {children}  
          </StyledComponentsRegistry>
        </body>
    </html>
  )
}
