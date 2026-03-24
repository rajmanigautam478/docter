import { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import logo from '../assets/logo.svg'

const Header = () => {
  const navigate = useNavigate();
  const { token, user, logout } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);

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

          <div className='flex items-center gap-4'>
            {token ? (
              <div className='flex items-center gap-4'>
                <div className='relative group'>
                  <button 
                    onClick={() => setShowMenu(!showMenu)} 
                    className='flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium border border-blue-100 hover:bg-blue-100 transition-colors'
                  >
                    <div className='w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold'>
                      {user?.name ? user.name[0].toUpperCase() : 'U'}
                    </div>
                    <span className='hidden sm:block'>{user?.name || 'User'}</span>
                    <span className='text-xs'>▼</span>
                  </button>
                  {showMenu && (
                    <div className='absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50'>
                      <div className='py-2'>
                        <button 
                          onClick={() => { navigate('/profile'); setShowMenu(false); }}
                          className='w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 flex items-center gap-2'
                        >
                          👤 My Profile
                        </button>
                        <button 
                          onClick={() => { navigate('/my-appointments'); setShowMenu(false); }}
                          className='w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 flex items-center gap-2'
                        >
                          📅 My Appointments
                        </button>
                        <hr className='my-1 border-gray-100' />
                        <button 
                          onClick={() => { logout(); setShowMenu(false); navigate('/login'); }}
                          className='w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 flex items-center gap-2 font-medium'
                        >
                          🚪 Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                {/* Quick Logout Button for Desktop */}
                <button 
                  onClick={() => { logout(); navigate('/login'); }}
                  className='hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 shadow-sm border border-red-100'
                  title='Logout'
                >
                  <span className='text-lg'>✕</span>
                </button>
              </div>
            ) : (
              <div className='flex items-center gap-3'>
                <button 
                  onClick={() => navigate('/login')}
                  className='hidden sm:block text-gray-600 hover:text-blue-600 font-medium px-4 py-2 transition-colors'
                >
                  Login
                </button>
                <button 
                  onClick={() => navigate('/signup')}
                  className='bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 hover:shadow-md transition-all duration-300'
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>

        </nav>
      </div>
    </>
  )
}

export default Header
