import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    render() { 
        let {firstname, lastname, age, haircolor } = this.props;
        
        return (
            <div>
                <h1> {lastname}, {firstname}</h1>
                <h3>Age: {this.state.age}</h3>
                <h3>Hair Color: {haircolor}</h3>
                <button onClick={ () => this.setState({age: this.state.age+1})}> Birthday Button for {firstname} {lastname} </button>
            </div>
        );
    }
}
 
export default PersonCard;
