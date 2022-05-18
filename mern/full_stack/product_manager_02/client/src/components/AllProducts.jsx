import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const AllProducts = () => {

    let[allProducts, setAllProducts] = useState([])

    useEffect(() => {

        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log(res)
                setAllProducts(res.data.products)})
            .catch(err => {console.log("Something went wrong", err)})
    }, [])

    return(
        <>
            <div>
                {
                    allProducts.map((prodObj, idx) => {
                        return(
                            <div key={idx}>
                                <h3><Link to={`/products/${prodObj._id}`}>{prodObj.title}</Link></h3>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default AllProducts;