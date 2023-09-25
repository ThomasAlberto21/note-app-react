import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)

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
          <form className="w-full">
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">
                Nama anda
              </label>
              <input
                type="text"
                id="name"
                className="p-3 w-full rounded-md"
                placeholder="Masukkan nama anda disini..."
                required
              />
            </div>
            <div className="mb-10 relative">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
                Password Anda
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="p-3 w-full rounded-md"
                required
                placeholder="Masukkan password anda disini..."
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
