/* eslint-disable @next/next/no-img-element */

import { binariesLink, discordLink, releaseLink } from '@/components/links';
import { FaApple, FaWindows } from 'react-icons/fa';
import './twinkle.css'
import Image from 'next/image';
import SparkleOverlay from './SparkleOverlay';

// Add this top-level cache (outside the function)
let cachedVersion: string | null = null;
let lastChecked: number = 0; // epoch ms
const TTL = 15 * 60 * 1000; // 15 minutes

// All required asset filenames (can be regex or exact)
const REQUIRED_ASSETS = [
    (v: string) => `VoidSetup-x64-${v}.exe`,
    (v: string) => `VoidSetup-arm64-${v}.exe`,
    (v: string) => `Void.x64.${v}.dmg`,
    (v: string) => `Void.arm64.${v}.dmg`,
    // (v: string) => `Void-${v}.glibc2.29-x86_64.AppImage`,
];

// Server-side helper
async function getLatestReleaseVersion(): Promise<string> {
    const now = Date.now();
    if (cachedVersion && now - lastChecked < TTL) {
        return cachedVersion;
    }

    try {
        const response = await fetch('https://api.github.com/repos/voideditor/binaries/releases/latest', {
            // Avoid Next.js caching here—we handle our own
            cache: 'no-store',
        });

        if (response.ok) {
            const data = await response.json();
            const version = data.tag_name;
            const assetNames: string[] = data.assets.map((a: any) => a.name);

            const allAssetsExist = REQUIRED_ASSETS.every((makeName) =>
                assetNames.includes(makeName(version))
            );

            if (allAssetsExist) {
                cachedVersion = version;
                lastChecked = now;
                return version;
            } else {
                console.warn('Some expected assets are missing in latest release');
            }
        }
    } catch (e) {
        console.error('Failed to fetch latest release:', e);
    }

    return cachedVersion ?? '1.99.30023';
}

// Floating Element (keeping the original animated logo)
const FloatingElement = () => (
    <div className='relative flex flex-col items-center'>
        <div className='animate-float'>
            <Image
                width={23 * 4 * 1.5}
                height={24 * 4 * 1.5}
                draggable={false}
                src='/void/logo_cube_noshadow.png'
                alt='Slice of the Void logo'
            />
        </div>
        <svg
            className='absolute -bottom-6 opacity-20 animate-shadow'
            width='75'
            height='22.5'
            viewBox='-9 -3 54 15'
        >
            <defs>
                <filter id='blur' x='-50%' y='-50%' width='300%' height='300%'>
                    <feGaussianBlur in='SourceGraphic' stdDeviation='2.25' />
                </filter>
            </defs>
            <ellipse cx='18' cy='4.5' rx='18' ry='4.5' fill='currentColor' filter='url(#blur)' />
        </svg>
    </div>
);

// Modern Download button with preserved sparkle effects
const DownloadButton = ({ url, children, className }: { url: string; children: React.ReactNode; className?: string }) => (
    <a
        draggable={false}
        tabIndex={0}
        className={`group gap-2 flex justify-center items-center drop-shadow-xl p-3 py-4 rounded-xl font-semibold 
        bg-void-accent-blue hover:bg-void-accent-blue-hover text-white
        hover:scale-105 active:scale-95 transition-all duration-200 outline-none cursor-pointer ${className}`}
        href={url}
    >
        {children}
    </a>
);

// Actual page content (Client Component with data hydration)
function DownloadBetaClient({ releaseVersion }: { releaseVersion: string }) {
    const downloadLinks = {
        windows: {
            x64: `https://github.com/voideditor/binaries/releases/download/${releaseVersion}/VoidSetup-x64-${releaseVersion}.exe`,
            arm: `https://github.com/voideditor/binaries/releases/download/${releaseVersion}/VoidSetup-arm64-${releaseVersion}.exe`,
        },
        mac: {
            intel: `https://github.com/voideditor/binaries/releases/download/${releaseVersion}/Void.x64.${releaseVersion}.dmg`,
            appleSilicon: `https://github.com/voideditor/binaries/releases/download/${releaseVersion}/Void.arm64.${releaseVersion}.dmg`,
        },
        linux: {
            x64: `https://github.com/voideditor/binaries/releases/download/${releaseVersion}/Void-${releaseVersion}.glibc2.29-x86_64.AppImage`,
        },
    };

    return (
        <main className='min-h-screen bg-white dark:bg-black text-void-text-primary-light dark:text-void-text-primary-dark'>
            <div className='max-w-7xl mx-auto px-6'>
                <section className='pt-16 pb-8'>
                    <div className='bg-white dark:bg-void-bg-secondary-dark rounded-3xl shadow-2xl border border-void-border-light dark:border-void-border-dark overflow-hidden'>
                        <div className='flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12'>
                            {/* Left content */}
                            <div className='p-8 lg:p-12 space-y-8'>
                                <div className='text-center lg:text-left'>
                                    <h1 className='text-4xl lg:text-5xl font-bold text-void-text-primary-light dark:text-void-text-primary-dark mb-6'>
                                        Download Void.
                                    </h1>
                                    <p className='text-xl text-void-text-secondary-light dark:text-void-text-secondary-dark max-w-lg'>
                                        Try the beta edition of Void, and help us improve by providing{' '}
                                        <a 
                                            href={discordLink} 
                                            target='_blank' 
                                            rel='noreferrer noopener nofollow' 
                                            className='text-void-accent-blue hover:text-void-accent-blue-hover underline transition-colors'
                                        >
                                            feedback
                                        </a>
                                        .
                                    </p>
                                </div>

                                <div className='space-y-4 max-w-lg'>
                                    {/* Mac Downloads */}
                                    <div className='flex items-center gap-4'>
                                        <DownloadButton url={downloadLinks.mac.appleSilicon} className='relative flex-1'>
                                            <SparkleOverlay number={25} seed={42} />
                                            <span className='flex items-center gap-3'>
                                                <span className='text-lg font-semibold'>Download for Mac</span>
                                                <FaApple className='w-6 h-6' />
                                            </span>
                                        </DownloadButton>
                                        <DownloadButton url={downloadLinks.mac.intel} className='relative px-6'>
                                            <SparkleOverlay number={15} seed={501} />
                                            <span className='flex items-center gap-2'>
                                                <span className='text-lg font-semibold'>Intel</span>
                                                <FaApple className='w-5 h-5' />
                                            </span>
                                        </DownloadButton>
                                    </div>

                                    {/* Windows Downloads */}
                                    <div className='flex items-center gap-4'>
                                        <DownloadButton url={downloadLinks.windows.x64} className='relative flex-1'>
                                            <SparkleOverlay number={25} seed={43} />
                                            <span className='flex items-center gap-3'>
                                                <span className='text-lg font-semibold'>Download for Windows</span>
                                                <FaWindows className='w-6 h-6' />
                                            </span>
                                        </DownloadButton>
                                        <DownloadButton url={downloadLinks.windows.arm} className='relative px-6'>
                                            <SparkleOverlay number={15} seed={100} />
                                            <span className='flex items-center gap-2'>
                                                <span className='text-lg font-semibold'>ARM</span>
                                                <FaWindows className='w-5 h-5' />
                                            </span>
                                        </DownloadButton>
                                    </div>
                                </div>
                            </div>

                            {/* Right - Animated Logo */}
                            <div className='flex justify-center items-center text-void-text-secondary-light dark:text-void-text-secondary-dark p-8 lg:p-12'>
                                <FloatingElement />
                            </div>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className='text-center mt-8 space-y-4 text-void-text-secondary-light dark:text-void-text-secondary-dark'>
                        <p>
                            For Linux users, download Void{' '}
                            <a 
                                href={binariesLink} 
                                target='_blank' 
                                rel='noreferrer noopener nofollow' 
                                className='text-void-accent-blue hover:text-void-accent-blue-hover underline transition-colors'
                            >
                                here
                            </a>
                            .
                        </p>
                        <p>
                            Alternatively, download Void from the source on{' '}
                            <a 
                                href={releaseLink} 
                                target='_blank' 
                                rel='noreferrer noopener nofollow' 
                                className='text-void-accent-blue hover:text-void-accent-blue-hover underline transition-colors'
                            >
                                GitHub
                            </a>
                            .
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default async function DownloadBetaPage() {
    const releaseVersion = await getLatestReleaseVersion();

    return <DownloadBetaClient releaseVersion={releaseVersion} />;
}