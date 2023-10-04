import Swal from 'sweetalert2'
import axios from 'axios'
import Navbar from '../../layout/Navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddNotes = () => {
  const navigate = useNavigate()
  const [notes, setNotes] = useState({
    title: '',
    description: ''
  })

  const { title, description } = notes

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const token = localStorage.getItem('token')
      const data = { title, description }
      const response = await axios.post('http://localhost:3000/notes', data, {
        headers: {
          Authorization: token
        }
      })
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Berhasil Menambahkan Note',
          showConfirmButton: false,
          timer: 1500
        })
        setNotes((prevNotes) => {
          return [notes, ...prevNotes]
        })

        navigate('/home')
      }
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Gagal Menambahkan Note',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  return (
    <div className="w-full">
      <Navbar />
      <div className="max-w-screen-lg mx-auto mt-10 p-5">
        <form action="" onSubmit={handleSubmit}>
          <input
            onChange={(e) => setNotes({ ...notes, title: e.target.value })}
            type="text"
            placeholder="Masukkan title"
            className="border-none text-6xl focus:outline-none font-semibold"
          />
          <textarea
            onChange={(e) => setNotes({ ...notes, description: e.target.value })}
            cols="30"
            rows="20"
            placeholder="Masukkan isi note"
            className="border-none text-xl focus:outline-none mt-5"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-5 py-4 rounded-md mt-5 w-full"
          >
            Tambah Note
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddNotes
