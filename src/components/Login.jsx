import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {

    const [Email,setEmail] =useState('')
    const [Password,setPassword] =useState('')

    const Navigate =useNavigate()

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

    var raw = JSON.stringify({
        "email": Email,
        "password": Password
      });
      
      var requestOptions = {
        method: 'POST',
        headers: {
                    'Content-Type': 'application/json'
                },
        body: raw,
        redirect: 'follow'
      };

      fetch("http://127.0.0.1:5000/login", requestOptions)
  .then(response => response.json())
  .then(result =>{

    // if()
    console.log(result.name)
    if(result.name){

        localStorage.setItem("user",JSON.stringify(result) )
        
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
