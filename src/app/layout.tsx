import type { Metadata } from 'next'
import { poppins } from './font'
import '../styles/globals.css'
import { Toaster } from '@/components/ui/toaster'
import StoreProvider from './StoreProvider'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
// import { ThemeProvider } from '@mui/material/styles'

export const metadata: Metadata = {
    title: 'Pro-Delivery',
    description:
        'a web application which enable individual to get education document seamlessly',
    generator: 'Next.js',
    manifest: '/manifest.json',
    keywords: [
        'nextjs',
        'next13',
        'pwa',
        'next-pwa',
        'pro delivery',
        'education',
    ],
    themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#fff' }],
    authors: [
        { name: 'pro-delivery' },
        {
            name: 'pro-delivery',
            url: '',
        },
    ],
    viewport:
        'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
    icons: {
        icon: '/favicon.png',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body className={poppins.className}>
                <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                    {/* <ThemeProvider theme={theme}> */}
                    <StoreProvider>{children}</StoreProvider>
                    {/* </ThemeProvider> */}
                </AppRouterCacheProvider>
            </body>
            <Toaster />
        </html>
    )
}
