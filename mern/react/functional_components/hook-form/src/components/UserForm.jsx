import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");

    return(
        <form>
            <div>
                <label htmlFor="">First name: </label>
                <input type="text" name="" id="" onChange={ (e) => setFirstname(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Last name: </label>
                <input type="text" name="" id="" onChange={ (e) => setLastname(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Email: </label>
                <input type="text" name="" id="" onChange={ (e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Password: </label>
                <input type="password" name="" id="" onChange={ (e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Confirm Password</label>
                <input type="password" name="" id="" onChange={ (e) => setConfirmpassword(e.target.value)}/>
            </div>
            <hr />
            <h3>You Form Data</h3>
            <br />
            <p>First Name: {firstname} </p>
            <p>Last Name: {lastname} </p>
            <p>Email: {email} </p>
            <p>Password: {password} </p>
            <p>Confirm Password: {confirmpassword} </p>
        </form>
    )
}

export default UserForm;