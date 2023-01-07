import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useLocation, useParams } from 'react-router-dom';

const UpdateProduct = () => {

    const [Name, setName] = useState('')
    const [Company, setCompany] = useState('')
    const [Category, setCategory] = useState('')
    const [Price, setPrice] = useState('')

    const [Data, setData] = useState('')

    //    let location =  useLocation()
    let { ProductId } = useParams()
    console.log("useparamms", ProductId)

    //    console.log("location==>",location)

    useEffect(() => {
        UpdateProductGet()
    }, [])

    const UpdateProductGet = () => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`http://localhost:5000/product/${ProductId}`, requestOptions)
            .then(response => response.json())
            .then(result => {

                

                setData(result)
                setName(result.name)
                setPrice(result.price)
                setCompany(result.company)
                setCategory(result.category)
                console.log("get product==>",result)
                // UpdateProductGet()
            }

            )
            .catch(error => console.log('error', error));

    }

    const UpdateProductFun = () => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": Name,
            "price": Price,
            "category": Category,
            "company": Company
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`http://localhost:5000/product/${ProductId}`, requestOptions)
            .then(response => response.json())
            .then(result => console.log("my result",result))
            .catch(error => console.log('error', error));

    }

    return (
        <>
            <p>comming from component of update</p>
            <Card >
                <Card.Header>Add Product</Card.Header>
                <Card.Body variant="flush">
                    <input type="text" className='form-control mt-4' value={Name} placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />

                    <input type="text" className='form-control mt-4' value={Category} placeholder='Enter Category' onChange={(e) => setCategory(e.target.value)} />

                    <input type="text" className='form-control mt-4' value={Company} placeholder='Enter Company' onChange={(e) => setCompany(e.target.value)} />

                    <input type="text" className='form-control mt-4' value={Price} placeholder='Enter Price' onChange={(e) => setPrice(e.target.value)} />

                    <button type='submit' className='btn btn-primary mt-4' onClick={() => UpdateProductFun()} >Update Product</button>
                </Card.Body>
            </Card>
        </>
    )
}

export default UpdateProduct