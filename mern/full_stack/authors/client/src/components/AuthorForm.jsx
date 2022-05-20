import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';

const AuthorForm = () => {

    let [name, setName] = useState("");
    let [errors, setErrors] = useState({});
    let history = useHistory();

    const createAuthor = (e) => {
        e.preventDefault();

        let formInfo = {name}
        axios.post("http://localhost:8000/api/authors/new", formInfo)
            .then(res => {
                console.log("Response after posting form", res)

                if(res.data.error){
                    setErrors(res.data.error.errors);
                }
                else{
                    setName("")
                    history.push("/")
                }
            })
            .catch(err => console.log("ERROR!!!", err))
    }

    return (
        <>
            <h3><Link to="/">Home</Link></h3>
            <h4>Add a new author: </h4>
            <div>
                <form onSubmit={createAuthor} className='mx-auto container'>
                    <div className='form-group'>
                        <label >Name:</label>
                        <input type="text" className='form-control' onChange={(e) => setName(e.target.value)}/>
                        <p className="text-danger">{errors.name?.message}</p>
                    </div>
                    <button><Link to="/">Cancel</Link></button><input type="submit" value="Submit" />
                </form>
            </div>
        </>
    )

}

export default AuthorForm;