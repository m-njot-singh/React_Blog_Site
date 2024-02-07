import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import {Blog} from '../../assets/Blog.svg'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className='shadow sticky z-50 top-0'>
      <Container>
        <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5'>
          <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
            <div >
            <Link to="/" className="flex items-center">
                        <img
                            // src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            src='src/assets/Blog.svg'
                            className="mr-3 h-24 w-50"
                            alt="Logo"
                        />
                    </Link>   
            </div>
            <div>
            <ul className='flex text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
            </div>
                    
          </div>
          
        </nav>
        </Container>
    </header>
  )
}

export default Header