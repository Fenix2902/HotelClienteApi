import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Footer } from './Footer/Footer'
import { Menu } from './Menu/Menu'
import { Descripcion } from './Descripcion/Descripcion'
import { Carrousel } from './Carrousel/Carrousel'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu/>
    <Home/>
    
  </React.StrictMode>,
)
