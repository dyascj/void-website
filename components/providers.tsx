'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { ThemeProvider } from 'next-themes'

if (typeof window !== 'undefined') {
    if (process.env.NODE_ENV !== 'development') {

        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
            api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!,
            person_profiles: 'identified_only',
            session_recording: {},
            ip: true,
        })

    }
}
export function CSPostHogProvider({ children }) {
    return <PostHogProvider client={posthog}>
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={true}
            disableTransitionOnChange={false}
        >
            {children}
        </ThemeProvider>
    </PostHogProvider>
}
