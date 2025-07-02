import GlassProvider from "glass-js";
// import GlassPromptBar from "glass-js-test";
// import GlassPromptBar from "@/_src";

// import { Inter } from "next/font/google";

import "./globals.css";
import { Footer } from "@/components/landingpage/Footer";
import { Header } from "@/components/landingpage/Header";
import { CSPostHogProvider } from '../components/providers'


// const inter = Inter({ subsets: ["latin"] });

// // I guess this is the default if a page doesn't specify metadata?
// export const metadata: Metadata = {
//     title: "Glass",
//     description: "Glass is an AI copilot for React and Next.js developers that makes frontend development fast. Stop wasting time switching between the browser and your code, and make visual changes from the browser in realtime.  ",
//     // icons: [{ url: process.env.BASE_URL + '/glass.svg' }], // no idea what this is for, icon.svg just existing should be fine 
// };



export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
                />
            </head>
            <CSPostHogProvider>
                <body className='font-apple bg-white dark:bg-black text-void-text-primary-light dark:text-void-text-primary-dark transition-colors duration-300'>
                    <GlassProvider>
                        <Header />
                        <main className="min-h-screen">
                            {children}
                        </main>
                        <Footer />
                    </GlassProvider>
                </body>
            </CSPostHogProvider>
        </html>
    );
}
