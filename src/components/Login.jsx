import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {

    const [Email,setEmail] =useState('')
    const [Password,setPassword] =useState('')

    const Navigate =useNavigate()

    // const tokenjwt = localStorage.getItem('Token')  
    const tokenjwt = JSON.parse(localStorage.getItem('Token'))

    console.log("t1",tokenjwt)

    useEffect(()=>{
   
      const Token = localStorage.getItem('user')  

      if(Token){
        Navigate('/')
      }
        
        
    },[])

    const loginfunction = () =>{

        let logindata ={Email ,Password }
     
    //   fetch("http://127.0.0.1:5000/login",{
    //     method:"Post",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(logindata)
        
    //   }).then((resp))  
    

    // fetch api promise return krta hai
    let myHeaders = new Headers();

//     myHeaders.append("ahmed", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzYjdmMTg2ZTM3YWE4MDM1MzRhOWY1YyIsIm5hbWUiOiJzYWZkYXIiLCJlbWFpbCI6InNhZmRhckBnbWFpbC5jb20iLCJfX3YiOjB9LCJpYXQiOjE2NzMyNjYzMjcsImV4cCI6MTY3MzI3MzUyN30.TS1voEaXihmviBqa1_0yzc0zv0sQQwjNi21nN_AJOnw");
myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "email": Email,
        "password": Password
      });
      
      var requestOptions = {
        method: 'POST',
        headers:myHeaders,
        // headers:{
        //   ahmed:tokenjwt
        // },
        
        body: raw,
        redirect: 'follow'
      };


      fetch("http://127.0.0.1:5000/login", requestOptions)
  .then(response => response.json())
  .then(result =>{

    // if()
    console.log(result.auth)
    if(result.auth){

        localStorage.setItem("user",JSON.stringify(result.user) )
        localStorage.setItem("Token",JSON.stringify(result.auth) )
        
        // toast.success(result.name, {
            toast.success("Login Sucessfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            Navigate('/')
        
    }
    else{

        toast.error("Wrong Credential", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        
    }

  } 
  )
  .catch(error => console.log('error', error));
    
    }

    return (
        <>
        <ToastContainer />
            <h1>login</h1>

            <Card >
                <Card.Header>Featured</Card.Header>
                <Card.Body variant="flush">
                  <input type="email" className='form-control mt-4' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}  />
                  <input type="password" className='form-control mt-4' placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}  />
                  <button type='submit' className='btn btn-primary mt-4' onClick={()=>loginfunction()} >Submit</button>
                </Card.Body>
            </Card>

        </>
    )
}

export default Login;
