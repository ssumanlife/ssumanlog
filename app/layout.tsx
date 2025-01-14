import type { Metadata } from 'next'

import '../shared/styles/global.scss'
import { pretendard } from './fonts'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={pretendard.variable}>
      <body>{children}</body>
    </html>
  )
}
