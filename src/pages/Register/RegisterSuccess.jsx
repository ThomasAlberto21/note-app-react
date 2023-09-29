import { Link } from 'react-router-dom'
import registerSuccess from '../../../public/images/registerSuccess.png'

const RegisterSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center py-20 bg-transparent">
      <img src={registerSuccess} alt="" />
      <div className="max-w-[546px] mx-auto w-full mt-12">
        <h4 className="text-black text-[40px] leading-[50px] mb-4">Register Berhasil</h4>
      </div>
      <div className="max-w-[300px] mx-auto w-full">
        <Link
          to="/login"
          className="  hover:bg-opacity-75 transition-all duration-150 block text-center py-3 px-5 bg-blue-500 rounded-md text-white"
        >
          Silahkan Login
        </Link>
      </div>
    </div>
  )
}

export default RegisterSuccess
