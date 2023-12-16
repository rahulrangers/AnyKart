import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1001569910908-h0d91flus52h0hdb99539fr4nlanp193.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
   
  </React.StrictMode>,
)
