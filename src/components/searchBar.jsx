import { Icon } from '@iconify/react'

const SearchBar = () => {
  return (
    <form className="">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-2xl text-gray-800 pointer-events-none">
          <Icon icon="material-symbols:search" />
        </div>
        <input
          type="search"
          id="default-search"
          className="w-full  py-3 pl-10 text-sm text-white bg-transparent border-2 border-gray-900 rounded-lg placeholder:text-gray-800 "
          placeholder="Cari Note..."
          required
        />
      </div>
    </form>
  )
}

export default SearchBar
