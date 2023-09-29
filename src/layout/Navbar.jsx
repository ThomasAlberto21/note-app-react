import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { Icon } from '@iconify/react'

const Navbar = () => {
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
        toast.success('Berhasil Logout', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light'
        })
      }

      navigate('/login')
    } catch (error) {
      console.log(error)
      toast.error('Gagal Logout', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
    }
  }

  return (
    <nav className="bg-white border-gray-200 ">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">
            Note App
          </span>
        </a>
        <div
          className="flex justify-center items-center gap-3 cursor-pointer"
          onClick={handleDropdown}
        >
          <span>Thomas Alberto</span>
          <Icon icon="mingcute:down-fill" />
          {dropdownOpen && (
            <div className="bg-white px-10 py-3 absolute mt-24 border rounded-md hover:bg-gray-400">
              <span onClick={logout}>Logout</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
