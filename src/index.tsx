import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
