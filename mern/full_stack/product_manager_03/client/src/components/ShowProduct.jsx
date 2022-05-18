import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import {Link} from 'react-router-dom';

const ShowProduct = () => {

    const { _id } = useParams();
    let [info, setInfo] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res => {
                setInfo(res.data.product)
                console.log(res.data.product)
            })
            .catch(err => {console.log("Something went wrong! ", err)})
    }, [])

    const deleteProduct = (prodId) => {
        
        axios.delete(`http://localhost:8000/api/products/delete/${prodId}`)
            .then(res => {
                console.log(res)
            })
            .catch(err => {console.log(err)})
    }

    return(
        <>
            <h1>{info.title}</h1>
            <h3>Price: $ {info.price}</h3>
            <h3>Description: {info.description}</h3>
            <p><Link to="/" className='btn btn-dark' onClick={(e) => deleteProduct(info._id)}>Delete</Link></p>
        </>
    )
}

export default ShowProduct;