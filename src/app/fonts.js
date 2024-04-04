import { Fira_Sans, Inter, PT_Sans, Poppins } from "next/font/google";

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