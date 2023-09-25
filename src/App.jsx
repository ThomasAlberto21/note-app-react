import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/login.jsx'
import Navbar from './layout/Navbar.jsx'
import Register from './pages/Register/Register.jsx'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

const NavbarConditional = () => {
  const location = useLocation()
  const showNavbar = location.pathname !== '/login' && '/register'
  return showNavbar ? <Navbar /> : null
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarConditional />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
