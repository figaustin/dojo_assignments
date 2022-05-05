import React from 'react';

const PersonCard = (props) => {

    const {firstname, lastname, age, haircolor} = props;
    return(
        <>
            <div>
                <h1>{lastname}, {firstname}</h1>
                <h3>Age: {age}</h3>
                <h3>Hair Color: {haircolor}</h3>
            </div>
        </>
    )
}
 
export default PersonCard;
