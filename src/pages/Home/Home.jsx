import Navbar from '../../layout/Navbar'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Home = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    getNote()
  }, [])

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

  return (
    <>
      <div className="w-full">
        <Navbar />
        <div className="max-w-screen-lg mx-auto mt-24 p-5">
          {notes.map((note) => (
            <a
              key={note.id_note}
              href="#"
              className="block max-w p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-3"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {note.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">{note.date}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
