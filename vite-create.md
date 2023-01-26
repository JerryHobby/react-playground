    npm create vite

    npm i bootstrap
    npm i font-awesome
    npm i lodash
    npm i prop-types
    npm i react-router-dom
    npm i

    npm run dev

vite.config

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
plugins: [react()],
server: {
host: '0.0.0.0',
},
});
