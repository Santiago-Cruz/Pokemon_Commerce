import React from 'react'
import ReactDOM from 'react-dom/client'
import { BagProvider } from './BagContext';
import App from './App.jsx'
import Bag from './Components/Bag';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BagProvider>
      <App />
    </BagProvider>
  </React.StrictMode>,
)
