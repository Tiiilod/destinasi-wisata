import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import JatimParkWebsite from "./project3/project.jsx";
import Navbar from "./project3/project.jsx";
// import App from "./project3/project.jsx";


import App from './project/project.jsx';

// import map from './web.jsx'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
