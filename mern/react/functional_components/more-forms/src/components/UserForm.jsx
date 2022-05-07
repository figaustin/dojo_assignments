import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");

    

    return(
        <form onSubmit={ (e) => e.preventDefault() }>
            <div>
                <label htmlFor="">First name: </label>
                <input type="text" name="" id="" onChange={(e) => setFirstname(e.target.value)}/>
                {
                    firstname.length <= 2 ? <p style={{color:'red'}}> First name must be at least 2 characters!</p> : ''
                }
            </div>
            <div>
                <label htmlFor="">Last name: </label>
                <input type="text" name="" id="" onChange={ (e) => setLastname(e.target.value)}/>
                {
                    lastname.length <= 2 ? <p style={{color:'red'}}> Last name must be at least 2 characters!</p> : ''
                }
            </div>
            <div>
                <label htmlFor="">Email: </label>
                <input type="text" name="" id="" onChange={ (e) => setEmail(e.target.value)}/>
                {
                    email.length <= 5 ? <p style={{color:'red'}}> Email must be at least 5 characters!</p> : ''
                }
            </div>
            <div>
                <label htmlFor="">Password: </label>
                <input type="password" name="" id="" onChange={ (e) => setPassword(e.target.value)}/>
                {
                    password.length <= 8 ? <p style={{color:'red'}}> Password must be at least 8 characters!</p> : ''
                }
            </div>
            <div>
                <label htmlFor="">Confirm Password</label>
                <input type="password" name="" id="" onChange={ (e) => setConfirmpassword(e.target.value)}/>
                {
                    confirmpassword != password ? <p style={{color:'red'}}> Passwords must match!</p> : ''
                }
            </div>
            <hr />
            <h3>Your Form Data</h3>
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