import { Icon } from '@iconify/react'

import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const SearchBar = ({ searchNotes, setTitle }) => {
  const [title] = useState('')

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    searchNotes(title)
  }

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-2xl text-gray-800 pointer-events-none">
          <Icon icon="material-symbols:search" />
        </div>
        <input
          type="search"
          id="default-search"
          className="w-full  py-3 pl-10 text-sm text-gray-800 bg-transparent border-2 border-gray-900 rounded-lg placeholder:text-gray-800 "
          placeholder="Cari Note..."
          onChange={handleChange}
        />
      </div>
    </form>
  )
}

export default SearchBar
