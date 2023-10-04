import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useState, useContext } from 'react'
import { Icon } from '@iconify/react'
import { Context } from '../Context.jsx'

const Navbar = () => {
  const { name } = useContext(Context)
  const navigate = useNavigate()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const logout = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.delete('http://localhost:3000/api/user/logout', {
        headers: {
          Authorization: token
        }
      })
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Berhasil Logout',
          showConfirmButton: false,
          timer: 1500
        })
      }

      navigate('/login')
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Gagal Logout',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  const getName = () => {
    return localStorage.getItem('name', name)
  }

  const nameUser = getName()

  return (
    <nav className="bg-white border-gray-200 ">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-5">
        <Link to='/home' className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">
            Note App
          </span>
        </Link>
        <div
          className="flex justify-center items-center gap-3 cursor-pointer"
          onClick={handleDropdown}
        >
          <span>{nameUser}</span>
          <Icon icon="mingcute:down-fill" />
          {dropdownOpen && (
            <div
              className="bg-white px-10 py-3 absolute mt-24 border rounded-md hover:bg-gray-400"
              onClick={logout}
            >
              <span>Logout</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
