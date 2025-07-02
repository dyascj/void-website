/* eslint-disable @next/next/no-img-element */
'use client'

import Link from "next/link"
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FaDiscord } from "react-icons/fa"
import { IoLogoGithub } from "react-icons/io"
import { HiSun, HiMoon } from "react-icons/hi"
import { discordLink, githubLink, downloadLink } from "../links"

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-9 h-9" />
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative w-9 h-9 rounded-full bg-void-bg-secondary-light dark:bg-void-bg-secondary-dark hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 flex items-center justify-center group"
      aria-label="Toggle theme"
    >
      <HiSun className="w-4 h-4 text-amber-500 transition-all duration-200 scale-100 rotate-0 dark:scale-0 dark:rotate-90 absolute" />
      <HiMoon className="w-4 h-4 text-slate-600 dark:text-slate-300 transition-all duration-200 scale-0 rotate-90 dark:scale-100 dark:rotate-0 absolute" />
    </button>
  )
}

export const Header = () => {
    return (
        <header className='sticky top-0 z-50 w-full bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-void-border-light dark:border-void-border-dark'>
            <div className='max-w-7xl mx-auto px-6 h-16'>
                <div className='flex items-center justify-between h-full'>
                    {/* Logo */}
                    <Link href='/' className='group flex items-center gap-3 hover:opacity-80 transition-opacity duration-200'>
                        <img 
                            className='w-8 h-8 group-hover:scale-105 transition-transform duration-200' 
                            src={`${process.env.NEXT_PUBLIC_LOGO_URL!}`} 
                            alt='Void Logo' 
                        />
                        <div className="text-2xl font-semibold tracking-tight text-void-text-primary-light dark:text-void-text-primary-dark">
                            Void
                        </div>
                    </Link>

                    {/* Navigation */}
                    <nav className='hidden md:flex items-center gap-8'>
                        <Link 
                            href={downloadLink} 
                            className='text-void-text-secondary-light dark:text-void-text-secondary-dark hover:text-void-text-primary-light dark:hover:text-void-text-primary-dark transition-colors duration-200 font-medium'
                        >
                            Download
                        </Link>
                        <Link 
                            href={githubLink} 
                            className='text-void-text-secondary-light dark:text-void-text-secondary-dark hover:text-void-text-primary-light dark:hover:text-void-text-primary-dark transition-colors duration-200 font-medium'
                        >
                            Contribute
                        </Link>
                        <a 
                            href={discordLink} 
                            target='_blank' 
                            rel="noreferrer noopener nofollow" 
                            className='text-void-text-secondary-light dark:text-void-text-secondary-dark hover:text-void-text-primary-light dark:hover:text-void-text-primary-dark transition-colors duration-200 font-medium'
                        >
                            Discord
                        </a>
                    </nav>

                    {/* Right side */}
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        
                        {/* Mobile menu or CTA */}
                        <div className="flex md:hidden items-center gap-2">
                            <a href={githubLink} target='_blank' rel="noreferrer noopener nofollow">
                                <IoLogoGithub className='w-5 h-5 text-void-text-secondary-light dark:text-void-text-secondary-dark hover:text-void-text-primary-light dark:hover:text-void-text-primary-dark transition-colors duration-200' />
                            </a>
                            <a href={discordLink} target='_blank' rel="noreferrer noopener nofollow">
                                <FaDiscord className='w-5 h-5 text-void-text-secondary-light dark:text-void-text-secondary-dark hover:text-void-text-primary-light dark:hover:text-void-text-primary-dark transition-colors duration-200' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

