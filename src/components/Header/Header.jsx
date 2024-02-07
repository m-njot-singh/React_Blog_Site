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
                            // src='src/assets/Blog.svg'
                            // src='file:///D:/Blog_Site/appwriteblog-main/src/assets/Blog.svg'
                            src="data:image/svg+xml,%3Csvg id='eMC7VygYOvU1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 3840 2160' shape-rendering='geometricPrecision' text-rendering='geometricPrecision'%3E%3Ctext dx='0' dy='0' font-family='&amp;quot;eMC7VygYOvU1:::Montserrat&amp;quot;' font-size='15' font-weight='700' transform='matrix(48.675829 0 0 45.523865-8.469238 1325.969126)' fill='%23e85b04' stroke-width='0'%3E%3Ctspan y='0' font-weight='700' stroke-width='0'%3E%3C!%5BCDATA%5B
Blog%5D%5D%3E%3C/tspan%3E%3C/text%3E%3Cpath d='M121.02271,157.79953c-3.17845,0-5.07315-1.87363-4.23193-4.18487l2.63126-7.22932c.84122-2.31124,4.09981-4.18487,7.27827-4.18487h23.8226c3.17845,0,5.07315,1.87363,4.23193,4.18487l-2.63126,7.22932c-.84122,2.31124-4.09981,4.18487-7.27827,4.18487h-23.8226Z' transform='matrix(51.647776 0-7.939447 45.026844-3026.784429-5678.41967)' fill='%23545454' stroke-width='0'/%3E%3Ctext dx='0' dy='0' font-family='&amp;quot;eMC7VygYOvU1:::Montserrat&amp;quot;' font-size='15' font-weight='700' transform='matrix(53.198277 0 0 47.386792 1961.859343 1335.792482)' fill='%23fff' stroke-width='0'%3E%3Ctspan y='0' font-weight='700' stroke-width='0'%3E%3C!%5BCDATA%5B
Site%5D%5D%3E%3C/tspan%3E%3C/text%3E%3Cstyle%3E%3C!%5BCDATA%5B@font-face %7Bfont-family: 'eMC7VygYOvU1:::Montserrat';font-style: normal;font-weight: 700;src: url(data:font/ttf;charset=utf-8;base64,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) format('truetype');%7D
%5D%5D%3E%3C/style%3E%3C/svg%3E"
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