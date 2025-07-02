/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react';
import { StarOnGithubButton, DownloadButton } from '@/app/Buttons';
import { discordLink } from '../links';
import { VscVscode } from 'react-icons/vsc';
import { FaArrowsLeftRight } from 'react-icons/fa6';

// Hero Section
const HeroSection = () => {
    return (
        <section className='relative overflow-hidden bg-white dark:bg-black'>
            <div className='max-w-6xl mx-auto px-6 pt-20 pb-32'>
                <div className='text-center animate-fade-in'>
                    {/* Logo */}
                    <div className='mb-8'>
                        <img 
                            className='mx-auto w-24 h-24 mb-6' 
                            src='/void/slice_of_void.png' 
                            alt='Void Logo' 
                        />
                    </div>

                    {/* Main Headline */}
                    <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-void-text-primary-light dark:text-void-text-primary-dark mb-6'>
                        The open source
                        <br />
                        <span className='bg-gradient-to-r from-void-accent-blue to-purple-600 bg-clip-text text-transparent'>
                            AI code editor.
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className='text-xl sm:text-2xl text-void-text-secondary-light dark:text-void-text-secondary-dark max-w-3xl mx-auto mb-8 leading-relaxed'>
                        Void is an open source Cursor alternative. Write code with the best AI tools, use any model, and retain full control over your data.
                    </p>

                    {/* CTA Buttons */}
                    <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                        <DownloadButton posthogLabel="hero" />
                        <StarOnGithubButton posthogLabel="hero" />
                    </div>

                    {/* YC Badge */}
                    <div className='mt-12 flex justify-center'>
                        <div className='flex items-center text-void-text-secondary-light dark:text-void-text-secondary-dark'>
                            <span className='text-sm font-medium mr-2'>Backed by</span>
                            <img src="/yc.svg" className="h-4 w-auto" alt="Y Combinator Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Feature Card Component
const FeatureCard = ({ 
    title, 
    description, 
    imageSrc, 
    imageAlt,
    reverse = false 
}: { 
    title: string; 
    description: string; 
    imageSrc: string; 
    imageAlt: string;
    reverse?: boolean;
}) => {
    return (
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
            <div className='flex-1 space-y-6'>
                <h3 className='text-3xl lg:text-4xl font-bold text-void-text-primary-light dark:text-void-text-primary-dark'>
                    {title}
                </h3>
                <p className='text-lg text-void-text-secondary-light dark:text-void-text-secondary-dark leading-relaxed'>
                    {description}
                </p>
            </div>
            <div className='flex-1 flex justify-center'>
                <div className='relative'>
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className='w-full max-w-lg rounded-2xl shadow-2xl border border-void-border-light dark:border-void-border-dark'
                    />
                </div>
            </div>
        </div>
    )
}

// Core Features Section
const CoreFeaturesSection = () => {
    return (
        <section className='py-32 bg-void-bg-secondary-light dark:bg-void-bg-secondary-dark'>
            <div className='max-w-6xl mx-auto px-6'>
                <div className='text-center mb-20'>
                    <h2 className='text-4xl lg:text-5xl font-bold text-void-text-primary-light dark:text-void-text-primary-dark mb-6'>
                        The AI Features You Love.
                    </h2>
                </div>

                <div className='space-y-32'>
                    {/* Tab Feature - Image Left, Text Right */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        <div className='bg-[#1e1e1e] rounded-2xl p-8 flex items-center justify-center'>
                            <img 
                                src="/demos/autocomplete3.png" 
                                alt="Tab autocomplete feature" 
                                className='rounded-xl object-contain max-h-80 w-full shadow-lg'
                            />
                        </div>
                        <div>
                            <h3 className='text-3xl lg:text-4xl font-bold text-void-text-primary-light dark:text-void-text-primary-dark mb-6'>
                                Tab
                            </h3>
                            <p className='text-xl text-void-text-secondary-light dark:text-void-text-secondary-dark leading-relaxed'>
                                Press 'Tab' to apply autocomplete.
                            </p>
                        </div>
                    </div>

                    {/* Quick Edit Feature - Text Left, Image Right */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        <div className='order-2 lg:order-1'>
                            <h3 className='text-3xl lg:text-4xl font-bold text-void-text-primary-light dark:text-void-text-primary-dark mb-6'>
                                Quick Edit
                            </h3>
                            <p className='text-xl text-void-text-secondary-light dark:text-void-text-secondary-dark leading-relaxed'>
                                Edit your selection inline.
                            </p>
                        </div>
                        <div className='order-1 lg:order-2 bg-[#1e1e1e] rounded-2xl p-8 flex items-center justify-center'>
                            <img 
                                src="/demos/cmdK1.png" 
                                alt="Quick edit feature" 
                                className='rounded-xl object-contain max-h-80 w-full shadow-lg'
                            />
                        </div>
                    </div>

                    {/* Chat Feature - Image Left, Text Right */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        <div className='bg-[#1e1e1e] rounded-2xl p-8 flex items-center justify-center'>
                            <img 
                                src="/demos2/AgentMode.png" 
                                alt="Chat and agent mode features" 
                                className='rounded-xl object-contain max-h-80 w-full shadow-lg'
                            />
                        </div>
                        <div>
                            <h3 className='text-3xl lg:text-4xl font-bold text-void-text-primary-light dark:text-void-text-primary-dark mb-6'>
                                Chat
                            </h3>
                            <p className='text-xl text-void-text-secondary-light dark:text-void-text-secondary-dark leading-relaxed'>
                                Agent Mode, Gather Mode, and normal chat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// VS Code Integration Section
const VSCodeSection = () => {
    return (
        <section className='py-32 bg-white dark:bg-black'>
            <div className='max-w-4xl mx-auto px-6 text-center'>
                <h2 className='text-4xl lg:text-5xl font-bold text-void-text-primary-light dark:text-void-text-primary-dark mb-6'>
                    Powered by VS Code.
                </h2>
                <p className='text-xl text-void-text-secondary-light dark:text-void-text-secondary-dark mb-12 max-w-2xl mx-auto'>
                    Void is a fork of VS Code. We let you transfer over all your themes, keybinds, and settings in one click.
                </p>
                
                <div className='flex items-center justify-center gap-8'>
                    <VscVscode className='w-20 h-20 text-void-text-primary-light dark:text-void-text-primary-dark' />
                    <FaArrowsLeftRight className='w-6 h-6 text-void-text-secondary-light dark:text-void-text-secondary-dark' />
                    <img 
                        className='w-20 h-20' 
                        src={process.env.NEXT_PUBLIC_LOGO_URL || '/void/slice_of_void.png'} 
                        alt='A slice of the void' 
                    />
                </div>
            </div>
        </section>
    )
}

// Provider Logo Component
const ProviderLogo = ({ src, alt, name, className, size }: { src: string; alt: string; name: string; className?: string; size: 'sm' | 'lg' }) => {
    return (
        <div className={`${size === 'lg' ? 'w-14 h-14 sm:w-28 sm:h-28' : 'w-14 h-14 sm:w-20 sm:h-20'} bg-white flex justify-center items-center shadow-xl rounded-lg overflow-hidden border border-gray-300/40 relative transition-transform duration-200 hover:-translate-y-1`}>
            <img src={src} alt={alt} className={`${className}`} />
        </div>
    );
};

// Any LLM Anywhere Section
const AnyLLMSection = () => {
    return (
        <section className='py-32 bg-void-bg-secondary-light dark:bg-void-bg-secondary-dark'>
            <div className='max-w-6xl mx-auto px-6'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl lg:text-5xl font-bold text-void-text-primary-light dark:text-void-text-primary-dark mb-6'>
                        Any LLM, Anywhere.
                    </h2>
                    <p className='text-xl text-void-text-secondary-light dark:text-void-text-secondary-dark max-w-2xl mx-auto'>
                        Void doesn't send your messages through a private backend like Cursor or Windsurf. Cut out the middleman and connect directly.
                    </p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    {/* Private LLMs */}
                    <div className='bg-white dark:bg-void-bg-secondary-dark rounded-xl p-8 shadow-lg border border-void-border-light dark:border-void-border-dark'>
                        <h3 className='text-center text-3xl font-bold text-void-text-primary-light dark:text-void-text-primary-dark mb-6'>
                            Private LLMs
                        </h3>

                        <div className="mx-auto w-fit grid grid-cols-4 max-w-[500px] place-items-center gap-4 mb-6">
                            <ProviderLogo size={'sm'} className='p-1 opacity-[80%] h-10 sm:h-20' src="/ollama.png" alt="Ollama Logo" name="Ollama (Provider)" />
                            <ProviderLogo size={'sm'} className='' src="/deepseek.png" alt="DeepSeek Logo" name="DeepSeek R1, V3" />
                            <ProviderLogo size={'sm'} className='p-2' src="/gemma3.png" alt="gemma" name="Google Gemma 3" />
                            <ProviderLogo size={'sm'} className='w-10 sm:w-20 h-auto' src="/meta.svg" alt="Llama" name="Llama 4" />
                            <ProviderLogo size={'sm'} className='p-2' src="/qwen.png" alt="Qwen Logo" name="Qwen 2.5 Coder, QwQ" />
                            <ProviderLogo size={'sm'} className='p-2' src="/mistral_small.png" alt="mistral" name="Mistral, Codestral" />
                            <ProviderLogo size={'sm'} className='p-4' src="/vllm.png" alt="vLLM Logo" name="vLLM (Provider)" />
                            <ProviderLogo size={'sm'} className='p-3 opacity-[80%]' src="/openai-logomark.png" alt="openai-compatible" name="Any OpenAI-Compatible Endpoint" />
                        </div>

                        <p className='text-balance mx-auto text-center max-w-[80%] text-void-text-secondary-light dark:text-void-text-secondary-dark'>
                            Never run out of API credits again. Host any open source model with Void: DeepSeek, Llama, Gemini, Qwen, and more.
                        </p>
                    </div>

                    {/* Frontier LLMs */}
                    <div className='bg-white dark:bg-void-bg-secondary-dark rounded-xl p-8 shadow-lg border border-void-border-light dark:border-void-border-dark'>
                        <h3 className='text-center text-3xl font-bold text-void-text-primary-light dark:text-void-text-primary-dark mb-6'>
                            Frontier LLMs
                        </h3>

                        <div className='flex gap-2 items-center justify-center mb-6'>
                            <ProviderLogo size={'lg'} className='md:p-2 p-1' src="/claude-icon.png" alt="Claude Logo" name="Anthropic" />
                            <ProviderLogo size={'lg'} className='p-1 opacity-[80%] md:p-2' src="/openai-logomark.png" alt="OpenAI Logo" name="OpenAI" />
                            <ProviderLogo size={'lg'} className='md:p-3 p-1' src="/gemini.png" alt="Gemini Logo" name="Google Gemini" />
                            <ProviderLogo size={'lg'} className='opacity-[80%]' src="/grok.png" alt="Grok Logo" name="xAI (Grok)" />
                        </div>

                        <p className='text-balance mx-auto text-center text-void-text-secondary-light dark:text-void-text-secondary-dark max-w-[80%]'>
                            Directly connect to any provider. Use models like Gemini 2.5, Claude 3.7, Grok 3, o4-mini, and Qwen 3.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Grid Element Component for Latest Features
const GridElement = ({ name, src, alt, imageClassName = '' }: { name: string; src: string; alt: string; imageClassName?: string }) => {
    return (
        <div className="bg-white dark:bg-void-bg-secondary-dark rounded-xl p-6 shadow-lg border border-void-border-light dark:border-void-border-dark">
            <h3 className='text-center text-xl font-semibold text-void-text-primary-light dark:text-void-text-primary-dark mb-4'>
                {name}
            </h3>
            <div className='flex items-center justify-center bg-[#252526] rounded-lg'>
                <div className="w-full h-[300px] flex items-center justify-center">
                    <img src={src} alt={alt} className={`max-h-[300px] max-w-full w-auto h-auto rounded-lg object-contain ${imageClassName}`} />
                </div>
            </div>
        </div>
    )
}

// Latest Features Section
const LatestFeaturesSection = () => {
    return (
        <section className='py-32 bg-white dark:bg-black'>
            <div className='max-w-6xl mx-auto px-6'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl lg:text-5xl font-bold text-void-text-primary-light dark:text-void-text-primary-dark mb-6'>
                        The Latest Features.
                    </h2>
                </div>
                
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-[1200px] mx-auto">
                    <GridElement imageClassName='px-4 py-4 lg:px-24 lg:py-8' name='Checkpoints for LLM Changes.' src='/demos2/Checkpoints2.png' alt='Checkpoints for LLM Changes.' />
                    <GridElement imageClassName='px-4 py-4 lg:px-32 lg:py-4' name='Lint Error Detection.' src='/demos2/LintErrors3.png' alt='Lint Error Detection.' />
                    <GridElement imageClassName='px-4 py-4 lg:px-20 lg:py-8' name='Native Tool Use.' src='/demos2/GatherMode.png' alt='Native Tool Use.' />
                    <GridElement name='Fast Apply, Even on 1000-Line Files.' src='/demos/instant.png' alt='Fast Apply, Even on 1000-Line Files.' />
                </div>
            </div>
        </section>
    )
}

// Agent Mode and MCP Section
const AgentModeSection = () => {
    return (
        <section className='py-32 bg-void-bg-secondary-light dark:bg-void-bg-secondary-dark'>
            <div className='max-w-6xl mx-auto px-6'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl lg:text-5xl font-bold text-void-text-primary-light dark:text-void-text-primary-dark mb-6'>
                        Agent Mode and MCP.
                    </h2>
                    <p className='text-xl text-void-text-secondary-light dark:text-void-text-secondary-dark max-w-2xl mx-auto'>
                        Use any model in Agent mode - even open source models that don't natively support tool calling.
                    </p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    {/* Agent Mode */}
                    <div className='bg-white dark:bg-void-bg-secondary-dark rounded-xl shadow-lg p-8 border border-void-border-light dark:border-void-border-dark'>
                        <h3 className='text-center text-3xl font-bold text-void-text-primary-light dark:text-void-text-primary-dark mb-6'>
                            Agent Mode
                        </h3>
                        <p className='text-balance mx-auto text-center text-void-text-secondary-light dark:text-void-text-secondary-dark'>
                            Agent mode can search, create, edit, and delete files & folders. It also has terminal access and MCP tool access.
                        </p>
                    </div>

                    {/* Gather Mode */}
                    <div className='bg-white dark:bg-void-bg-secondary-dark rounded-xl shadow-lg p-8 border border-void-border-light dark:border-void-border-dark'>
                        <h3 className='text-center text-3xl font-bold text-void-text-primary-light dark:text-void-text-primary-dark mb-6'>
                            Gather Mode
                        </h3>
                        <p className='text-balance mx-auto text-center text-void-text-secondary-light dark:text-void-text-secondary-dark'>
                            Gather mode is a restricted version of Agent mode that can only read and search, but not modify or edit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Community Section
const CommunitySection = () => {
    return (
        <section className='py-32 bg-white dark:bg-black'>
            <div className='max-w-4xl mx-auto px-6 text-center'>
                <h2 className='text-4xl lg:text-5xl font-bold text-void-text-primary-light dark:text-void-text-primary-dark mb-6'>
                    Join The Community
                </h2>
                <p className='text-xl text-void-text-secondary-light dark:text-void-text-secondary-dark mb-12 max-w-2xl mx-auto'>
                    We host weekly contributor meetups in our Discord server and share early releases with our community. Feel free to join!
                </p>
                
                <a
                    href={discordLink}
                    target='_blank'
                    rel="noreferrer noopener nofollow"
                    className='inline-flex items-center gap-3 bg-void-accent-blue hover:bg-void-accent-blue-hover text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200'
                >
                    <span>Join Discord</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                    </svg>
                </a>
            </div>
        </section>
    )
}

// Final CTA Section
const FinalCTASection = () => {
    return (
        <section className='py-32 bg-gradient-to-br from-void-accent-blue to-purple-600'>
            <div className='max-w-4xl mx-auto px-6 text-center'>
                <h2 className='text-4xl lg:text-5xl font-bold text-white mb-6'>
                    Get Started with Void.
                </h2>
                <p className='text-xl text-white/80 mb-12 max-w-2xl mx-auto'>
                    Download now and experience the future of AI-powered development.
                </p>
                
                <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                    <DownloadButton posthogLabel="footer" />
                    <StarOnGithubButton posthogLabel="footer" />
                </div>
            </div>
        </section>
    )
}

// Main Landing Page Component
export default function LandingPage() {
    return (
        <div className='relative'>
            <HeroSection />
            <CoreFeaturesSection />
            <VSCodeSection />
            <AnyLLMSection />
            <LatestFeaturesSection />
            <AgentModeSection />
            <CommunitySection />
            <FinalCTASection />
        </div>
    )
}
