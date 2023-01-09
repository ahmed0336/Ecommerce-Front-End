import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Addproduct = () => {

    const [Name,setName] = useState('')
    const [Company,setCompany] = useState('')
    const [Category,setCategory] = useState('')
    const [Price,setPrice] = useState('')

    const [Error, setError] = useState('')

    const userId = JSON.parse(localStorage.getItem('user'))
    const Token = JSON.parse(localStorage.getItem('Token'))
    console.log("userId==>", userId._id)

    const AddProductFun = () => {

        // agar is me kuch nai likha ho tou true bheja hai warna
        // return false ka mtlb hai agar condition true hai tou age chaleyga hi nai

        // isko !name krne se yeh humko true and false bhejyga
        
        if(!Name || !Company || !Category || !Price)
        {
            // console.log(!Name)
            setError(true)
        return false

        }

        var myHeaders = new Headers();
        // myHeaders.append("ahmed", );
        // myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": Name,
            "price": Price,
            "category": Category,
            "userId": userId._id,
            "company": Company
        });

        var requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                ahmed: Token
            },
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/addproduct", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result) {
                    toast.success("Product Added Sucessfully", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    },);

                    setName('')
                    setCompany('')
                    setCategory('')
                    setPrice('')

                      
                }
                else {

                    toast.error("Not Added", {
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
                console.log(result)
            }
            )
            .catch(error => console.log('error', error));



    }

    return (
        <>

            {/* <h1>coming from Addproduct</h1> */}
            <ToastContainer />

            <Card >
                <Card.Header>Add Product</Card.Header>
                <Card.Body variant="flush">
                    <input type="text" className='form-control mt-4' value={Name} placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
                    { 
                     Error && !Name && <div style={{color:"red"}}>
                     Enter Valid Name
                 </div>

                    }
                    
                    <input type="text" className='form-control mt-4' value={Category} placeholder='Enter Category' onChange={(e) => setCategory(e.target.value)} />
                    { 
                     Error && !Category && <div style={{color:"red"}}>
                     Enter Valid Category
                 </div>

                    }
                    <input type="text" className='form-control mt-4' value={Company} placeholder='Enter Company' onChange={(e) => setCompany(e.target.value)} />
                    { 
                     Error && !Company && <div style={{color:"red"}}>
                     Enter Valid Company
                 </div>

                    }
                    <input type="text" className='form-control mt-4' value={Price} placeholder='Enter Price' onChange={(e) => setPrice(e.target.value)} />
                    { 
                     Error && !Price && <div style={{color:"red"}}>
                     Enter Valid Price
                 </div>

                    }
                    <button type='submit' className='btn btn-primary mt-4' onClick={() => AddProductFun()} >Submit</button>
                </Card.Body>
            </Card>







        </>
    )
}

export default Addproduct