import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios'

const People = () =>{

    const { id } = useParams();
    let [info, setInfo] = useState({});
    let[error, setError] = useState(false)


    useEffect(() => {
        axios.get("https://swapi.dev/api/people/" + id + "/")
            .then(response =>{
                console.log(response.data)
                setInfo(response.data)
                
            })
            .catch(response =>{
                console.log("These aren't the droids you are looking for...")
                setError(true)
            })
    },[id])

    return(
        <>
            {
                error == false?
            <div>
                <hr />
                <h1>{info.name}</h1>
                <h3>Height: {info.height} cm</h3>
                <h3>Mass: {info.mass} kg</h3>
                <h3>Hair Color: {info.hair_color}</h3>
                <h3>Skin Color: {info.skin_color}</h3>
            </div> 
            :
            <div>
                <h1>These are not the droids you're looking for...</h1>
                <img src="https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2017/05/ANH-Ben-identification.jpg" alt="" style={{height: "200px"}}/>
            </div>
            }
        </>
    )

}
export default People;