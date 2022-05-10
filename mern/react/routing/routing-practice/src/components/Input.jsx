import React from 'react';
import { useParams } from 'react-router-dom';

const Input = ()=>{

    const { input, textcolor, bgcolor } = useParams();

    return (
        <>
            {

                isNaN(input)?
                    <h1 style={{color: textcolor, backgroundColor: bgcolor}}>The word is: {input}</h1>:
                    <h1>The number is: {input} </h1>
            }
        </>
    )
}
export default Input;