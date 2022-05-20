import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useHistory, useParams} from 'react-router-dom';

const EditForm = () => {

    const { _id } = useParams();
    const [info, setInfo] = useState({});
    let [errors, setErrors] = useState({});
    let history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${_id}`)
            .then(res => {
                console.log(res);
                setInfo(res.data.author);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const changeHandler = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    const updateAuthor = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/authors/edit/${_id}`, info)
            .then(res => {
                console.log("response after posting form", res)

                if(res.data.error){
                    setErrors(res.data.error.errors);
                }
                else{
                    setInfo({});
                    history.push("/");
                }

            })
            .catch(err => console.log("ERROR!!!", err))
    }

    return (
        <>
            <h3><Link to="/">Home</Link></h3>
            <h4>Edit this author </h4>
            <div>
                <form onSubmit={updateAuthor} className='mx-auto container'>
                    <div className='form-group'>
                        <label >Name:</label>
                        <input type="text" name="name" className='form-control' value={info.name} onChange={changeHandler}/>
                        <p className="text-danger">{errors.name?.message}</p>
                    </div>
                    <button><Link to="/">Cancel</Link></button><input type="submit" value="Update" className='btn btn-success'/>
                </form>
            </div>
        </>
    )

}

export default EditForm;