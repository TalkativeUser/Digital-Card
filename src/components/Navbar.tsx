import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useContext } from 'react';
import { cartContext } from '../context/ForProvided';

const navStyles = {
  marginTop: "30px",
  marginInline: "6%",
  paddingBlock: "8px",
  borderRadius: "46px",
  background: "#d6d6d696",
  border: "1px solid aqua"
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const context = useContext(cartContext);

 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav id='navScaling' className={`fixed-top transition-all overflow-hidden duration-500 ease-in-out backdrop-blur-sm ${styles.navMenu}`} style={navStyles}>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-[#0fd2c7] hover:bg-[#0fd2c7] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={menuOpen}
                onClick={toggleMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* <!-- Icon when menu is closed. --> */}
                <svg
                  className={`h-6 w-6 ${menuOpen ? 'hidden' : 'block'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* <!-- Icon when menu is open. --> */}
                <svg
                  className={`h-6 w-6 ${menuOpen ? 'block' : 'hidden'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavLink
                    to="/home"
                    className={({ isActive }) => isActive ? `text-decoration-none rounded-md px-3 py-2 text-xl font-bold text-black ${styles.activeClass}` : "text-decoration-none rounded-md px-3 py-2 text-xl font-bold text-[#0fd2c7]"}
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/faq"
                    className={({ isActive }) => isActive ? `text-decoration-none rounded-md px-3 py-2 text-xl font-bold text-black ${styles.activeClass}` : "text-decoration-none rounded-md px-3 py-2 text-xl font-bold text-[#0fd2c7]"}
                  >
                    FAQ
                  </NavLink>
                {context?.isAdmin?  <NavLink
                    to="/users"
                    className={({ isActive }) => isActive ? `text-decoration-none rounded-md px-3 py-2 text-xl font-bold text-black ${styles.activeClass}` : "text-decoration-none rounded-md px-3 py-2 text-xl font-bold text-[#0fd2c7]"}
                  >
                    Users
                  </NavLink>:""}

                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {context?.f_L_token ? (
                    <>
                      <div onClick={context?.signOut} className="text-decoration-none rounded-md px-3 py-2 text-xl font-bold text-[#0fd2c7] cursor-pointer">Sign Out</div>
                      {context.firstCharInUserName ? (
                        <NavLink to="/dashboard" className="text-decoration-none rounded-full me-3 w-11 h-11 bg-[#0287d0] border-2 text-xl font-bold text-[#0fd2c7] flex items-center justify-center">
                          <div className="profileImage">
                            <h4 className='m-0 text-white'>{context.firstCharInUserName}</h4>
                          </div>
                        </NavLink>
                      ) : (
                        <NavLink to="/dashboard" className="text-decoration-none rounded-md px-3 text-xl font-bold text-[#0fd2c7]">
                          <div className="profileImage flex items-center">
                            <img
                              className='w-[45px] h-[45px] rounded-full cursor-pointer hover:border-2 border-indigo-600'
                              src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                              alt=""
                            />
                          </div>
                        </NavLink>
                      )}
                    </>
                  ) : (
                    <>
                      <NavLink to="/login" className={({ isActive }) => isActive ? `text-decoration-none block rounded-md px-3 py-2 font-bold text-xl text-black ${styles.activeClass}`  : "text-decoration-none block rounded-md px-3 py-2 font-bold text-xl text-[#0fd2c7]"} >Login</NavLink>
                      <NavLink to="/signUp"               className={({ isActive }) => isActive ? `text-decoration-none block rounded-md px-3 py-2 font-bold text-xl text-black ${styles.activeClass}`  : "text-decoration-none block rounded-md px-3 py-2 font-bold text-xl text-[#0fd2c7]"}  >Sign Up</NavLink>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className={`sm:hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <NavLink
              to="/home"
              className={({ isActive }) => isActive ? `text-decoration-none block rounded-md px-3 py-2 font-bold text-xl text-black ${styles.activeClass}` : "text-decoration-none block rounded-md px-3 py-2 font-bold text-xl text-[#0fd2c7]"}
              aria-current="page"
            >
              Home
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) => isActive ? `text-decoration-none block rounded-md px-3 py-2 font-bold text-xl text-black ${styles.activeClass}`  : "text-decoration-none block rounded-md px-3 py-2 font-bold text-xl text-[#0fd2c7]"}
            >
              FAQ
            </NavLink>
            <NavLink
              to="/users"
              className={({ isActive }) => isActive ? `text-decoration-none block rounded-md px-3 py-2 font-bold text-xl text-black ${styles.activeClass}`  : "text-decoration-none block rounded-md px-3 py-2 font-bold text-xl text-[#0fd2c7]"}
            >
              Users
            </NavLink>
            {context?.f_L_token ? (
              <>
                <div onClick={context?.signOut} className="text-decoration-none block rounded-md px-3 py-2 font-bold text-xl text-[#0fd2c7] cursor-pointer">Sign Out</div>
                {context.firstCharInUserName ? (
                  <NavLink to="/dashboard" className="text-decoration-none rounded-full ms-3 w-11 h-11 bg-[#0287d0] border-2 text-xl font-bold text-[#0fd2c7] flex items-center justify-center">
                    <div className="profileImage">
                      <h4 className='m-0 text-white'>{context.firstCharInUserName}</h4>
                    </div>
                  </NavLink>
                ) : (
                  <NavLink to="/dashboard" className="text-decoration-none rounded-md px-3 ms-3 text-xl font-bold text-[#0fd2c7]">
                    <div className="profileImage flex items-center">
                      <img
                        className='w-[45px] h-[45px] rounded-full cursor-pointer hover:border-2 border-indigo-600'
                        src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                        alt=""
                      />
                    </div>
                  </NavLink>
                )}
              </>
            ) : (
              <>
                <NavLink to="/login"               className={({ isActive }) => isActive ? `text-decoration-none block rounded-md px-3 py-2 font-bold text-xl text-black ${styles.activeClass}`  : "text-decoration-none block rounded-md px-3 py-2 font-bold text-xl text-[#0fd2c7]"} >Login</NavLink>
                <NavLink to="/signUp"               className={({ isActive }) => isActive ? `text-decoration-none block rounded-md px-3 py-2 font-bold text-xl text-black ${styles.activeClass}`  : "text-decoration-none block rounded-md px-3 py-2 font-bold text-xl text-[#0fd2c7]"}  >Sign Up</NavLink>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
