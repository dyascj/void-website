'use client'

import { FiDownload } from "react-icons/fi"
import { IoLogoGithub } from "react-icons/io"
import posthog from "posthog-js"
import { githubStarLink, downloadLink } from "@/components/links"

export const StarOnGithubButton = ({ label = undefined, posthogLabel }: { label?: string, posthogLabel?: string }) => {
    return (
        <a
            href={githubStarLink}
            target="_blank"
            rel="noreferrer noopener nofollow"
            draggable={false}
            tabIndex={0}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-void-bg-secondary-dark text-void-text-primary-light dark:text-void-text-primary-dark border border-void-border-light dark:border-void-border-dark rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-600 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md"
            onClick={() => posthog.capture('ButtonContribute', { posthogLabel })}
        >
            <IoLogoGithub className='w-5 h-5' />
            <span>{label ? label : `Star on GitHub`}</span>
        </a>
    )
}

export const DownloadButton = ({ posthogLabel }: { posthogLabel?: string }) => {
    return (
        <a
            href={downloadLink}
            draggable={false}
            tabIndex={0}
            className="inline-flex items-center gap-3 px-6 py-3 bg-void-accent-blue hover:bg-void-accent-blue-hover text-white rounded-xl font-semibold active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl"
            onClick={() => posthog.capture('ButtonGetAccess', { posthogLabel })}
        >
            <span>Download Beta</span>
            <FiDownload className='w-5 h-5' />
        </a>
    )
}

