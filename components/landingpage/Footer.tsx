'use client'

import { FaDiscord } from "react-icons/fa"
import { changelogLink, discordLink, emailLink, githubLink, support_email } from "../links"
import { IoLogoGithub } from "react-icons/io"

export const Footer = () => {
    return (
        <footer className='border-t border-void-border-light dark:border-void-border-dark bg-void-bg-secondary-light dark:bg-void-bg-secondary-dark'>
            <div className='max-w-6xl mx-auto px-6 py-12'>
                <div className='flex flex-col lg:flex-row justify-between items-center gap-8'>
                    
                    {/* Logo and Company */}
                    <div className='flex flex-col items-center lg:items-start gap-4'>
                        <div className='flex items-center gap-3'>
                            <img 
                                className='w-8 h-8' 
                                src='/void/slice_of_void.png' 
                                alt='Void Logo' 
                            />
                            <span className='text-xl font-semibold text-void-text-primary-light dark:text-void-text-primary-dark'>
                                Void
                            </span>
                        </div>
                        <p className='text-sm text-void-text-secondary-light dark:text-void-text-secondary-dark text-center lg:text-left'>
                            &copy; {new Date().getFullYear()} Glass Devtools, Inc. All rights reserved.
                        </p>
                    </div>

                    {/* Links */}
                    <div className='flex flex-col lg:flex-row items-center gap-6 lg:gap-8'>
                        <div className='flex items-center gap-6'>
                            <a 
                                href={changelogLink} 
                                className="text-void-text-secondary-light dark:text-void-text-secondary-dark hover:text-void-text-primary-light dark:hover:text-void-text-primary-dark transition-colors duration-200 text-sm font-medium"
                            >
                                Changelog
                            </a>
                            <a 
                                href={emailLink} 
                                className="text-void-text-secondary-light dark:text-void-text-secondary-dark hover:text-void-text-primary-light dark:hover:text-void-text-primary-dark transition-colors duration-200 text-sm font-medium"
                            >
                                {support_email}
                            </a>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            <a 
                                href={discordLink} 
                                target='_blank' 
                                rel="noreferrer noopener nofollow" 
                                className='p-2 rounded-lg bg-void-bg-light dark:bg-void-bg-dark hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200'
                                aria-label="Join our Discord"
                            >
                                <FaDiscord className='w-5 h-5 text-void-text-secondary-light dark:text-void-text-secondary-dark hover:text-blue-500 transition-colors duration-200' />
                            </a>
                            <a 
                                href={githubLink} 
                                target='_blank' 
                                rel="noreferrer noopener nofollow"
                                className='p-2 rounded-lg bg-void-bg-light dark:bg-void-bg-dark hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200'
                                aria-label="View on GitHub"
                            >
                                <IoLogoGithub className='w-5 h-5 text-void-text-secondary-light dark:text-void-text-secondary-dark hover:text-void-text-primary-light dark:hover:text-void-text-primary-dark transition-colors duration-200' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
