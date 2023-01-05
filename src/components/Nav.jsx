import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Nav = () => {

  const navigate = useNavigate()

  const Token = localStorage.getItem('user')
  console.log("Token==>", Token)
  // useEffect(()=>{


  // },[Token])

  const logout = () => {
    console.log("logout runnung ...");
    localStorage.clear();
    navigate('/signup')
  }

  return (
    <>
      <ul className='d-flex ' >
        <li ><Link to="/" >Product</Link></li>
        <li ><Link>Add Product</Link></li>
        <li ><Link>Update Product</Link></li>

        <li ><Link>Profile</Link></li>
        {
          Token ? <li ><Link onClick={() => logout()} to="/signup" >Logout</Link></li> : <li><Link to="/signup" >SignUp</Link></li>
        }

        <li ><Link>Login</Link></li>

      </ul>
    </>
  )
}

export default Nav