import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditProduct = () =>{

    const { _id } = useParams();

    const [info, setInfo] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res => {
                console.log(res);
                setInfo(res.data.product);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const changeHandler = (e) =>{
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    const editProduct = (e) =>{
        e.preventDefault();

        // let formInfo = {title, price, description};

        axios.put(`http://localhost:8000/api/products/edit/${_id}`, info)
            .then(res => {
                console.log("response after posting form", res)
                
            })
            .catch(err => console.log("errrrr", err))
    }

    return(
        <>
            <div style={{display: "flex"}} >
                <form onSubmit={editProduct} className='mx-auto'>
                    <div className='form-group'>
                        <label htmlFor="">Title: </label>
                        <input type="text" name="title" id="" className='form-control' value={info.title} onChange={changeHandler}/>
                    </div>
                    <div>
                        <label htmlFor="">Price: </label>
                        <input type="number" name="price" id="" className='form-control' value={info.price} onChange={changeHandler}/>
                    </div>
                    <div>
                        <label htmlFor="">Description: </label>
                        <textarea name="description" id="" cols="30" rows="10" className='form-control' value={info.description} onChange={changeHandler}></textarea>
                    </div>
                    <input type="submit" value="Update" className='btn btn-success' />
                </form>
            </div>
        </>
    )
    
}

export default EditProduct;