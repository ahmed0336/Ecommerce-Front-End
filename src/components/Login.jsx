import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Login = () => {

    const [Email,setEmail] =useState('')
    const [Password,setPassword] =useState('')

    const loginfunction = () =>{

        console.log(Email,Password)  
    }

    return (
        <>
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
