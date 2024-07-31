import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Working from './components/Working';
import Data1 from './components/Data1';
import FoldHope from './components/FoldHope';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Working" element={<Working />} />
        <Route path="/Data1" element={<Data1 />} />
        <Route path="/FoldHope" element={<FoldHope />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
