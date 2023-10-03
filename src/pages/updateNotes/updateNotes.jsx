import axios from 'axios'
import Navbar from '../../layout/Navbar'
import Swal from 'sweetalert2'
import { useState } from 'react'

const UpdateNote = () => {
  const [notes, setNotes] = useState([])

  const updateNote = async (id_note, dataNote) => {
    const token = localStorage.getItem('token')
    try {
      const response = await axios.put(`http://localhost:3000/notes/${id_note}`, dataNote, {
        headers: {
          Authorization: token
        }
      })

      const updatedNote = response.data.data
      setNotes((prevNotes) => {
        return prevNotes.map((note) => {
          if (note.id_note === updatedNote.id_note) {
            return updatedNote
          }

          return note
        })
      })
    } catch (error) {
      console.log(error)
      Swal.fire('Gagal!', 'Note anda gagal diupdate.', 'error')
    }
  }

  return (
    <div className="w-full">
      <Navbar />
      <div className="max-w-screen-lg mx-auto mt-10 p-5">
        <form action="">
          <input
            type="text"
            placeholder="Masukkan title"
            className="border-none text-6xl focus:outline-none font-semibold"
          />
          <textarea
            cols="30"
            rows="20"
            placeholder="Masukkan isi note"
            className="border-none text-xl focus:outline-none mt-5"
          />
          <button type="submit" className="bg-blue-500 text-white px-5 py-4 rounded-md mt-5 w-full">
            Update Note
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateNote
