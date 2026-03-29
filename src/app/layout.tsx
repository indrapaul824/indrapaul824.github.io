import type { Metadata } from 'next'
import { Sora, DM_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'

const sora = Sora({ subsets: ['latin'], variable: '--font-sora' })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })

export const metadata: Metadata = {
  title: 'Indrashis Paul | Product Manager',
  description: 'Product Manager at Moveworks (ServiceNow). Enterprise search, content platforms, and AI — from the ground up.',
  keywords: ['Indrashis Paul', 'Product Manager', 'Moveworks', 'Enterprise AI', 'ServiceNow'],
  openGraph: {
    title: 'Indrashis Paul | Product Manager',
    description: 'Product Manager at Moveworks (ServiceNow) — Enterprise Search, Content Platform, AI',
    url: 'https://indrapaul824.github.io',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sora.variable} ${dmSans.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/images/favicon.webp" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NZMBM5D60Z" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-NZMBM5D60Z');`,
          }}
        />
        <meta name="google-site-verification" content="LE8oOakjxBhO0ta1wHgS0Ky5CzvG4neN-QJIYWIYfD0" />
      </head>
      <body className="bg-void text-text-primary font-dm antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
