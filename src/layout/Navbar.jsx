const Navbar = () => {
  return (
    <nav className='bg-white border-gray-200 '>
      <div className='max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href='https://flowbite.com/' className='flex items-center'>
          <span className='self-center text-2xl font-semibold whitespace-nowrap text-gray-900'>
            Note App
          </span>
        </a>
        <div className='flex md:order-2 cursor-pointer'>
          <span>Thomas Alberto</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
