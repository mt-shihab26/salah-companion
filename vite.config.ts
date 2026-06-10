import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { nitro } from 'nitro/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { reactCompilerPreset } from '@vitejs/plugin-react'

import react from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    resolve: { tsconfigPaths: true },
    plugins: [
        devtools(),
        nitro(),
        tailwindcss(),
        tanstackStart(),
        react(),
        babel({ presets: [reactCompilerPreset()] }),
    ],
})
