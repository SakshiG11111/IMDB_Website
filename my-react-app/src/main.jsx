
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
// In your React app entry point (e.g., src/main.jsx)
// import '@fortawesome/fontawesome-free/css/all.min.css';

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
