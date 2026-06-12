import { createRootRoute } from '@tanstack/react-router'

import { SiteFooter } from '#/components/screens/layout/site-footer'
import { TooltipProvider } from '#/components/ui/tooltip'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { HeadContent, Outlet, Scripts } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

import { SITE_URL } from '#/lib/env'
import { SITE_DESCRIPTION, SITE_IMAGE, SITE_KEYWORDS, SITE_TITLE } from '#/lib/meta'

import styles from '#/styles.css?url'

export const Route = createRootRoute({
    head: () => ({
        meta: [
            { charSet: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { title: SITE_TITLE },
            { name: 'description', content: SITE_DESCRIPTION },
            { name: 'keywords', content: SITE_KEYWORDS },
            { name: 'author', content: 'Salah Companion' },
            // Open Graph (Facebook, LinkedIn, Discord, Slack, Mastodon, Bluesky)
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: SITE_URL },
            { property: 'og:title', content: SITE_TITLE },
            { property: 'og:description', content: SITE_DESCRIPTION },
            { property: 'og:image', content: SITE_IMAGE },
            { property: 'og:image:width', content: '512' },
            { property: 'og:image:height', content: '512' },
            { property: 'og:site_name', content: 'Salah Companion' },
            { property: 'og:locale', content: 'en_US' },
            // X / Twitter
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:url', content: SITE_URL },
            { name: 'twitter:title', content: SITE_TITLE },
            { name: 'twitter:description', content: SITE_DESCRIPTION },
            { name: 'twitter:image', content: SITE_IMAGE },
        ],
        links: [
            { rel: 'stylesheet', href: styles },
            { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon', sizes: '32x32' },
            { rel: 'icon', href: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
            { rel: 'icon', href: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
            {
                rel: 'icon',
                href: '/android-chrome-192x192.png',
                type: 'image/png',
                sizes: '192x192',
            },
            {
                rel: 'icon',
                href: '/android-chrome-512x512.png',
                type: 'image/png',
                sizes: '512x512',
            },
            { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
            { rel: 'manifest', href: '/site.webmanifest' },
        ],
    }),
    shellComponent: ({ children }) => (
        <html lang="en">
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
                    }}
                />
                <HeadContent />
            </head>
            <body>
                <TooltipProvider>{children}</TooltipProvider>
                <TanStackDevtools
                    config={{
                        position: 'bottom-right',
                    }}
                    plugins={[
                        {
                            name: 'Tanstack Router',
                            render: <TanStackRouterDevtoolsPanel />,
                        },
                    ]}
                />
                <Scripts />
            </body>
        </html>
    ),
    component: () => (
        <div className="relative flex min-h-screen flex-col">
            <main className="flex-1">
                <Outlet />
            </main>
            <SiteFooter />
        </div>
    ),
})
