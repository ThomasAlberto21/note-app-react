import { Link } from 'react-router-dom'
import registerSuccess from '../../../public/images/registerSuccess.png'

const RegisterSuccess = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen mb-20">
      <img src={registerSuccess} alt="image" className="w-auto h-full" />
      <h1 className="font-semibold text-3xl">
        Register Berhasil Silahkan
        <span className="text-blue-600">
          <Link to="/login"> login </Link>
        </span>
      </h1>
    </div>
  )
}

export default RegisterSuccess
