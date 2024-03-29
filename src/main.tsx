import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import App from './App.tsx'
import Detail from './Detail.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/detail/:idNum" element={<Detail />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
