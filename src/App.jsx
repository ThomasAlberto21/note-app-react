import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/login.jsx'
import Welcome from './pages/Welcome.jsx'
import Register from './pages/Register/Register.jsx'
import RegisterSuccess from './pages/Register/RegisterSuccess.jsx'
import NotFound from './pages/404.jsx'
import AddNotes from './pages/addNotes/addNotes.jsx'
import UpdateNote from './pages/updateNotes/updateNotes.jsx'
import { Provider } from './Context.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/success-register" element={<RegisterSuccess />} />
          <Route path="/add-notes" element={<AddNotes />} />
          <Route path="/edit-note/:id_note" element={<UpdateNote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App
