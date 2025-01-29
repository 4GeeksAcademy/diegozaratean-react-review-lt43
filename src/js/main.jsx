import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import Card from './components/Card';
import Form from './components/Form';
import Series from './components/series';
import Tareas from './components/Tareas';
import Onkey from './components/onkey';
import Onsu from './components/onsu';
import Counter from './components/Counter';
import Getdata from './components/Getdata';
import Test from './components/Test';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>,
)
