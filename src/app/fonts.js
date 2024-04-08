import { Fira_Sans, Inter, PT_Sans, Poppins } from "next/font/google";
import localFont from 'next/font/local'

export const sans = Fira_Sans({
    subsets: ["latin"],
    display: "fallback",
    weight: ['100', '200', '400', '500', '600', '700', '800', '900']
});

export const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ['100', '200', '400', '500', '600', '700', '800', '900']
})
export const ptSans = PT_Sans({
    subsets: ["latin"],
    display: "optional",
    weight: ['400', '700']
})

export const ceraRegular = localFont({ src: '../../public/fonts/cera-pro/CeraPro-Regular.ttf' });


export const ceraMedium = localFont({ src: '../../public/fonts/cera-pro/CeraPro-Medium.ttf' });


export const ceraBold = localFont({ src: '../../public/fonts/cera-pro/CeraPro-Bold.ttf' });


export const ceraBlack = localFont({ src: '../../public/fonts/cera-pro/CeraPro-Black.ttf' })