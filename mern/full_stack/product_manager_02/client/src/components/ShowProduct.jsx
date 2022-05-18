import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

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

    return(
        <>
            <h1>{info.title}</h1>
            <h3>Price: $ {info.price}</h3>
            <h3>Description: {info.description}</h3>
        </>
    )
}

export default ShowProduct;