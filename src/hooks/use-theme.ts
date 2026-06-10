import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
    try {
        const stored = localStorage.getItem('theme')
        if (stored === 'light' || stored === 'dark') return stored
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    } catch {
        return 'light'
    }
}

export function useTheme() {
    const [theme, setThemeState] = useState<Theme>(getInitialTheme)

    useEffect(() => {
        const root = document.documentElement
        root.classList.toggle('dark', theme === 'dark')
        try {
            localStorage.setItem('theme', theme)
        } catch {
            // ignore
        }
    }, [theme])

    function toggle() {
        setThemeState((t) => (t === 'dark' ? 'light' : 'dark'))
    }

    return { theme, toggle }
}
