import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.tsx'

import { Button } from '@chakra-ui/react';
import { Provider } from './components/ui/provider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider> {/* Uncomment Provider usage */}
      <App /> {/* Render App directly for now */}
    </Provider>
  </StrictMode>,
)
