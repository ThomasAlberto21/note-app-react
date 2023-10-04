import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../layout/Navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const UpdateNote = () => {
  const navigate = useNavigate()
  const [notes, setNotes] = useState({
    title: '',
    description: ''
  })
  const { id_note } = useParams()
  const { title, description } = notes

  useEffect(() => {
    const getNoteById = async () => {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.get(`http://localhost:3000/notes/${id_note}`, {
          headers: {
            Authorization: token
          }
        })
        const notes = response.data.data
        setNotes(notes)
      } catch (error) {
        console.log(error)
      }
    }

    getNoteById()
  }, [id_note])

  const updateNote = async (e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem('token')
      const notes = { title, description }
      const response = await axios.put(`http://localhost:3000/notes/${id_note}`, notes, {
        headers: {
          Authorization: token
        }
      })
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Berhasil Mengupdate Note',
          showConfirmButton: false,
          timer: 1500
        })
        const updatedNote = response.data.data
        setNotes(updatedNote)
        navigate('/home')
      }
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Gagal Mengupdate Note',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  return (
    <div className="w-full">
      <Navbar />
      <div className="max-w-screen-lg mx-auto mt-10 p-5">
        <form action="" onSubmit={updateNote}>
          <input
            type="text"
            placeholder="Masukkan title"
            className="border-none text-6xl focus:outline-none font-semibold"
            value={notes.title}
            name="title"
            onChange={(e) => setNotes({ ...notes, title: e.target.value })}
          />
          <textarea
            cols="30"
            rows="20"
            placeholder="Masukkan isi note"
            className="border-none text-xl focus:outline-none mt-5"
            value={notes.description}
            name="note"
            onChange={(e) => setNotes({ ...notes, description: e.target.value })}
          />
          <button
            type="submit"
            onClick={updateNote}
            className="bg-blue-500 text-white px-5 py-4 rounded-md mt-5 w-full"
          >
            Update Note
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateNote
