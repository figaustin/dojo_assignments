import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = () => {
    let [title, setTitle] = useState("");
    let [price, setPrice] = useState("");
    let [description, setDesc] = useState("");


    const createProduct = (e) =>{
        e.preventDefault();

        let formInfo = {title, price, description};

        axios.post("http://localhost:8000/api/products/new", formInfo)
            .then(res => {
                console.log("response after posting form", res)
            })
            .catch(err => console.log("errrrr", err))
    }

    return(
        <>
            <div style={{display: "flex"}} >
                <form onSubmit={createProduct} className='mx-auto'>
                    <div className='form-group'>
                        <label htmlFor="">Title: </label>
                        <input type="text" name="" id="" className='form-control' onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="">Price: </label>
                        <input type="number" name="" id="" className='form-control' onChange={(e) => setPrice(e.target.valueAsNumber)}/>
                    </div>
                    <div>
                        <label htmlFor="">Description: </label>
                        <textarea name="" id="" cols="30" rows="10" className='form-control' onChange={(e) => setDesc(e.target.value)}></textarea>
                    </div>
                    <input type="submit" value="Create" className='btn btn-success' />
                </form>
            </div>
        </>
    )

}

export default ProductForm;