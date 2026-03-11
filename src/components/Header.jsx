import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='w-full shadow-md'>
        <nav className='flex justify-between items-center max-w-7xl mx-auto px-4 py-3 '>
          
          <div>
            <NavLink to="/">
              <img src={logo} alt="logo" className="h-10" />
            </NavLink>
          </div>

          <div>
            <ul className='flex gap-6 font-medium'>
              <NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'hover:text-blue-500'}>
                <li className='py-1'>Home</li>
              </NavLink>
              <NavLink to='/doctors' className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'hover:text-blue-500'}>
                <li className='py-1'>All Doctors</li>
              </NavLink>
              <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'hover:text-blue-500'}>
                <li className='py-1'>About</li>
              </NavLink>
              <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'hover:text-blue-500'}>
                <li className='py-1'>Contact</li>
              </NavLink>
            </ul>
          </div>

          <div>
            <button 
              onClick={() => navigate('/login')}
              className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors'
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
