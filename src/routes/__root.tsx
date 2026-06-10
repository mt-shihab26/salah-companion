import { createRootRoute } from '@tanstack/react-router'

import { GlobalAudioPlayer } from '#/components/layout/GlobalAudioPlayer'
import { SiteFooter } from '#/components/layout/SiteFooter'
import { TooltipProvider } from '#/components/ui/tooltip'
import { AudioProvider } from '#/contexts/AudioContext'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { HeadContent, Outlet, Scripts } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

import styles from '#/styles.css?url'

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {
                charSet: 'utf-8',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                title: 'Salah Companion',
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
                <HeadContent />
            </head>
            <body>
                <TooltipProvider>
                    <AudioProvider>{children}</AudioProvider>
                </TooltipProvider>
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
            <GlobalAudioPlayer />
        </div>
    ),
})
