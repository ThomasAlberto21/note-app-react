import Swal from 'sweetalert2'
import axios from 'axios'
import Navbar from '../../layout/Navbar'
import SearchBar from '../../components/searchBar'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Home = () => {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState([])

  useEffect(() => {
    getNote()
  }, [])

  // Get Note
  const getNote = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.get('http://localhost:3000/notes', {
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

  // Delete Note
  const deleteNote = async (id_note) => {
    const result = await Swal.fire({
      title: 'Apakah anda yakin?',
      text: 'Apakah anda yakin ingin menghapus note ini?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Hapus!'
    })

    if (result.isConfirmed) {
      try {
        const token = localStorage.getItem('token')
        await axios.delete(`http://localhost:3000/notes/${id_note}`, {
          headers: {
            Authorization: token
          }
        })

        setNotes((prevNotes) => {
          return prevNotes.filter((note) => note.id_note !== id_note)
        })
        Swal.fire('Dihapus!', 'Note anda berhasil dihapus.', 'success')
      } catch (error) {
        console.log(error)
        Swal.fire('Gagal!', 'Note anda gagal dihapus.', 'error')
      }
    }
  }

  // Search Note
  const searchNotes = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.get(`http://localhost:3000/notes`, {
        headers: {
          Authorization: token
        },
        params: {
          title: title
        }
      })

      const notes = response.data.data
      setNotes(notes)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="w-full">
        <Navbar />
        <div className="max-w-screen-lg mx-auto mt-24 p-5">
          <div className="flex justify-between items-center mb-10 gap-4">
            <SearchBar searchNotes={searchNotes} setTitle={setTitle} />
            <Link
              to="/add-notes"
              className="py-4 px-5 bg-gray-800 font-bold rounded-md text-white hover:bg-gray-600"
            >
              <Icon icon="material-symbols:add" className=" text-white" />
            </Link>
          </div>
          {notes.map((note) => (
            <div
              key={note.id_note}
              className="flex justify-between items-center max-w p-6 border  rounded-lg shadow  bg-gray-800 border-gray-700 mb-3"
            >
              <div className="block">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{note.title}</h5>
                <p className="font-normal text-gray-400">{note.date}</p>
              </div>
              <div className="flex gap-3">
                <Link
                  to={`/edit-note/${note.id_note}`}
                  className="py-4 px-5 bg-blue-500 rounded-md hover:bg-blue-400"
                >
                  <Icon icon="material-symbols:edit" className="text-2xl text-white" />
                </Link>
                <button
                  className="py-4 px-5 bg-red-500 rounded-md hover:bg-red-400"
                  onClick={() => deleteNote(note.id_note)}
                >
                  <Icon icon="material-symbols:delete" className="text-2xl text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
