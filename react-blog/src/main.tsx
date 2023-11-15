import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'
import { HashRouter } from 'react-router-dom';
import './styles/tailwind.css'
import './i18n';

ReactDom.createRoot(document.getElementById('root') as HTMLElement).render(
    <HashRouter>
        <App />
    </HashRouter>
)