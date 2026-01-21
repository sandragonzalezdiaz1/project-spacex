
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

import { ChakraProvider, defaultConfig, createSystem } from '@chakra-ui/react'

const system = createSystem(defaultConfig)

createRoot(document.getElementById('root')).render(
      <BrowserRouter>
        <ChakraProvider value={system}>
            <App />
        </ChakraProvider>
      </BrowserRouter>
  
)
