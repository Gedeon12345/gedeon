import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './index2.css'
// import App from './App.jsx'
import App from './wednesday/App'
// import Navbar from './navbar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Navbar /> */}
  </StrictMode>,
)