import './index.css';

import * as serviceWorker from './utils/serviceWorker';

import React from 'react';
import { createRoot } from 'react-dom/client';
import Application from './components/Application';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<Application />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
