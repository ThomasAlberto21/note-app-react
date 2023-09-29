import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/login.jsx'
import Navbar from './layout/Navbar.jsx'
import Register from './pages/Register/Register.jsx'
import RegisterSuccess from './pages/Register/RegisterSuccess.jsx'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

const NavbarConditional = () => {
  const location = useLocation()
  const showNavbar = location.pathname !== '/login' && '/register'
  return showNavbar ? <Navbar /> : null
}

const App = () => {
  const isLogin = false

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<NavbarConditional />} />
        **{isLogin ? <Route path="/" element={<Home />} /> : <Route path="/" element={<Login />} />}
        **
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/succes-register" element={<RegisterSuccess />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
