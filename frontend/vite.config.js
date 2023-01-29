import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
        svelte(),
        VitePWA({
            includeAssets: ['favicon.ico'],
            registerType: 'autoUpdate',
            injectRegister: 'auto',
            devOptions: {
                enabled: true
            },
            manifest: {
                name: 'Svelte PWA',
                short_name: 'svjs_pwa',
                description: 'Svelte Progressive Web App',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'svjs_pwa_192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: 'svjs_pwa_512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            }
        })
    ]
})
