import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='w-full shadow-sm bg-white sticky top-0 z-50'>
        <nav className='flex justify-between items-center max-w-7xl mx-auto px-6 py-4'>
          
          <div className='cursor-pointer'>
            <NavLink to="/">
              <img src={logo} alt="logo" className="h-10 transition-transform duration-300 hover:scale-105" />
            </NavLink>
          </div>

          <div className='hidden md:block'>
            <ul className='flex gap-8 font-medium text-gray-700'>
              <NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'hover:text-blue-600 transition-colors pb-1'}>
                <li>Home</li>
              </NavLink>
              <NavLink to='/doctors' className={({ isActive }) => isActive ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'hover:text-blue-600 transition-colors pb-1'}>
                <li>All Doctors</li>
              </NavLink>
              <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'hover:text-blue-600 transition-colors pb-1'}>
                <li>About</li>
              </NavLink>
              <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'hover:text-blue-600 transition-colors pb-1'}>
                <li>Contact</li>
              </NavLink>
            </ul>
          </div>

          <div>
            <button 
              onClick={() => navigate('/login')}
              className='bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 hover:shadow-md transition-all duration-300'
            >
              Create Account
            </button>
          </div>

        </nav>
      </div>
    </>
  )
}

export default Header