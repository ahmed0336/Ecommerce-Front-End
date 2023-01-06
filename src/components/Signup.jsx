import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const  Signup = ()  => {

  const Navigate = useNavigate()

  
 
    const [FormField,setFormField]=useState({
        name:"",
        email:"",
        password:"",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hello ",e)
        if (!FormField.name || !FormField.email || !FormField.password  ) {
            
            return;
        }

        fetch('http://127.0.0.1:5000/register', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // object ko json string convert krna hoga jset uper FormField me hai
            body: JSON.stringify(FormField)

        }).then(res => res.json())
            .then(data => {

                 localStorage.setItem('user',JSON.stringify(data))

            
        // fetchProducts()

       
        setFormField({
            name:" ",
            email:" ",
            password:""
        })
          
                

                console.log("data==>", data);
            })

            

            

    }



    function updateForm (event, field)  {

        // console.log("event",event)
        // console.log("field",field)

        if (field === 'name') {
            setFormField({
                ...FormField,
                name: event.target.value
            })
        } else if (field === 'email') {
            setFormField({
                ...FormField,
                email: event.target.value
            })
        }
        else if (field === 'password') {
            setFormField({
                ...FormField,
                password: event.target.value
            })
        }

    }


  return (
    <Form  >
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value={FormField.name}  onChange={(event) => updateForm(event, 'name')}  />
        <Form.Text className="text-muted">
          Enter Your Full Name
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={FormField.email}  onChange={(event) => updateForm(event, 'email')}  />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  value={FormField.password} onChange={(event) => updateForm(event, 'password')} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit} >
        Submit
      </Button>
    </Form>
  );
}

export default Signup;