import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Team from './Compenent/Team.jsx';
import Section1 from './Compenent/Section1.jsx';
import Section2 from './Compenent/Section2.jsx';
import Services from './Compenent/Services.jsx';
import Section3 from './Compenent/Section3.jsx';
import Blog from './Compenent/Blog.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      { path: '/', element: <Section1/> },
      { path: '/about', element: <Section2/> },
      { path: '/service', element:  <Services/> },
      { path: '/project', element: <Section3/> },
      { path: '/team', element: <Team/> },
      { path: '/Blog', element: <Blog/> },
    
  
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
