import { createRootRoute } from '@tanstack/react-router'

import { SiteFooter } from '#/components/screens/layout/site-footer'
import { TooltipProvider } from '#/components/ui/tooltip'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { HeadContent, Outlet, Scripts } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

import styles from '#/styles.css?url'

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {
                title: 'Salah Companion — Every Dua of the Salah, in One Place',
            },
            {
                charSet: 'utf-8',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                name: 'description',
                content:
                    'Arabic text with tashkeel, transliteration, and multiple translations side-by-side — backed by authentic Quranic and hadith references.',
            },
            {
                name: 'keywords',
                content:
                    'salah, dua, prayer, islam, quran, arabic, tashkeel, transliteration, supplication, hadith',
            },
            {
                name: 'author',
                content: 'Salah Companion',
            },
            {
                property: 'og:type',
                content: 'website',
            },
            {
                property: 'og:title',
                content: 'Salah Companion — Every Dua of the Salah, in One Place',
            },
            {
                property: 'og:description',
                content:
                    'Arabic text with tashkeel, transliteration, and multiple translations side-by-side — backed by authentic Quranic and hadith references.',
            },
            {
                name: 'twitter:card',
                content: 'summary_large_image',
            },
            {
                name: 'twitter:title',
                content: 'Salah Companion — Every Dua of the Salah, in One Place',
            },
            {
                name: 'twitter:description',
                content:
                    'Arabic text with tashkeel, transliteration, and multiple translations side-by-side — backed by authentic Quranic and hadith references.',
            },
        ],
        links: [
            {
                rel: 'stylesheet',
                href: styles,
            },
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
