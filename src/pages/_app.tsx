import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {Playfair_Display, Source_Sans_3} from "next/font/google";

const straightFont = Source_Sans_3({
    variable: "--font-family-straight"
})

const cursiveFont = Playfair_Display({
    variable: "--font-family-cursive"
})

export default function App({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />;
}
