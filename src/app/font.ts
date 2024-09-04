import { Poppins } from 'next/font/google'
export const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-poppins',
    display: 'swap',
    weight: ['400', '500', '700'],
})
