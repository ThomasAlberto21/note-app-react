import Navbar from '../../layout/Navbar'

const UpdateNote = () => {
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
