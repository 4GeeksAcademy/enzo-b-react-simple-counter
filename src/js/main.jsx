import React from 'react'
import ReactDOM from 'react-dom/client'
import SimpleCounter from './components/SimpleCounter';
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleCounter/>
  </React.StrictMode>,
)
