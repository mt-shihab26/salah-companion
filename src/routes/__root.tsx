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
