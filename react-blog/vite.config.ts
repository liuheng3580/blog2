import { defineConfig } from 'vite'
import plugins from './build/plugin'
import path from 'path'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'


export default defineConfig({
    server: {
        port: 3005,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true
            }
        }
    },
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        assetsDir: 'assets',
        sourcemap: false,
        minify: 'terser',
        rollupOptions: {
            output: {
                // manualChunks(id) {

                // }
            }
        }
    },
    css: {
        postcss: {
            plugins: [
                tailwindcss,
                autoprefixer,
            ]
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        },
        extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']
    },
    plugins
})