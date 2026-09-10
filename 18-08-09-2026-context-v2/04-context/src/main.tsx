import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { UserProvider } from './contexts/UserContext.tsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './contexts/CartContext.tsx'
import { ThemeProvider } from './contexts/ThemeContext.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <UserProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </UserProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
