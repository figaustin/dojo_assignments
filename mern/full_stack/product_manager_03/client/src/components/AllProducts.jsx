import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const AllProducts = () => {

    let[allProducts, setAllProducts] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log(res)
                setAllProducts(res.data.products)})
            .catch(err => {console.log("Something went wrong", err)})
    }, [])

    const deleteProduct = (prodId, idx) => {
        
        axios.delete(`http://localhost:8000/api/products/delete/${prodId}`)
            .then(res => {
                console.log(res)
                
            })
            .catch(err => {console.log(err)})

        let filtered = allProducts.filter((prod, i)=> {
            return i != idx
        })

        setAllProducts(filtered);
    }

    return(
        <>
            <div>
                {
                    allProducts.map((prodObj, idx) => {
                        return(
                            <div key={idx}>
                                <h3><Link to={`/products/${prodObj._id}`}>{prodObj.title}</Link></h3>
                                <p><Link to={`/products/${prodObj._id}/edit`} className="btn btn-dark">Edit</Link></p>
                                <p><button className='btn btn-dark' onClick={(e) => deleteProduct(prodObj._id, idx)}>Delete</button></p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default AllProducts;