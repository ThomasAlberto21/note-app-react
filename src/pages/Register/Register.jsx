import axios from 'axios'
import { Icon } from '@iconify/react'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const item = { name, password }
      const response = await axios.post('http://localhost:3000/api/user/register', item)
      if (response.status === 200) {
        toast.success('Berhasil melakukan register', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light'
        })

        navigate('/succes-register')
      }
    } catch (error) {
      console.log(error)
      toast.error('Gagal melakukan register', {
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

  const togleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      <div className="bg-gray-900 max-w-screen-sm md:w-full mx-3 rounded-xl">
        <div className="text-center">
          <h1 className="text-white font-bold pt-5 text-3xl mb-3">Register</h1>
          <p className="text-white font-medium">Silahkan daftar terlebih dahulu ya</p>
        </div>
        <div className="md:mx-5 px-4 py-12 ">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">
                Nama anda
              </label>
              <input
                type="text"
                className="p-3 w-full rounded-md"
                placeholder="Masukkan nama anda disini..."
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-10 relative">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
                Password Anda (min 10 karakter)
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                className="p-3 w-full rounded-md"
                required
                placeholder="Masukkan password anda disini..."
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pt-6">
                {showPassword ? (
                  <Icon
                    icon="mdi:eye"
                    className="text-black text-xl cursor-pointer"
                    onClick={togleShowPassword}
                  />
                ) : (
                  <Icon
                    icon="mdi:eye-off"
                    className="text-black text-xl cursor-pointer"
                    onClick={togleShowPassword}
                  />
                )}
              </div>
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="p-3 bg-blue-600 text-white w-full rounded-md font-smibold"
            >
              Register
            </button>
          </form>

          <div className="text-center mt-5 text-white">
            <Link to="/login">
              <h1>
                Sudah punya akun? <span className="text-blue-300 cursor-pointer"> Login</span>
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
