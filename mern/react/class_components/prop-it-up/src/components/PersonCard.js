import React, { Component } from 'react';

class PersonCard extends Component {
    render() { 
        const {firstname, lastname, age, haircolor } = this.props;
        return (
            <div>
                <h1> {lastname}, {firstname}</h1>
                <h3>Age: {age}</h3>
                <h3>Hair Color: {haircolor}</h3>
            </div>
        );
    }
}
 
export default PersonCard;
