import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import App from './App.jsx'
import AppContextProvider from './store/context.jsx';

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <AppContextProvider>
    <App />
    </AppContextProvider>
    </BrowserRouter>

)
