import HomePage from './components/page/home'
import LoginPage from './components/page/login'

import {Route, BrowserRouter, Routes} from "react-router-dom"


import './components/ui/cssbaseline/cssbaseline.scss'

export default function App() {

  return (
  <div className="container">

      <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

      </Routes>
      </BrowserRouter>

  </div>
  ) 
}