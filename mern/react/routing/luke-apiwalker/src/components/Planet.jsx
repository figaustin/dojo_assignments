import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';

const Planet = () => {


    const { id } = useParams();
    let [info, setInfo] = useState({});
    let [error, setError] = useState(false);

    useEffect(() => {
        axios.get("https://swapi.dev/api/planets/" + id + "/")
            .then(response => {
                console.log(response.data)
                setInfo(response.data)
            })
            .catch(response => {
                console.log("These aren't the droids you are looking for...")
                setError(true)
            })
    }, [id])

    return (
        <>
            <div>
                {
                    error == false ?
                        <div>
                            <h1>{info.name}</h1>
                            <h3>Climate: {info.climate}</h3>
                            <h3>Terrain: {info.terrain}</h3>
                            {
                                info.surface_water > 0 ?
                                    <h3>Surface Water: true</h3>
                                    :
                                    <h3>Surface Water: false</h3>
                            }
                            <h3>Population: {info.population}</h3>
                        </div>
                        :
                        <div>
                            <h1>These are not the droids you're looking for...</h1>
                            <img src="https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2017/05/ANH-Ben-identification.jpg" alt="" style={{ height: "200px" }} />
                        </div>

                }

            </div>

        </>

    )
}

export default Planet;