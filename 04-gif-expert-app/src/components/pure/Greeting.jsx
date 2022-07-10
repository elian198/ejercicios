import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {
    constructor(props){
        super(props);
        this.state = {
            age : 20
        }
    }
    render() {
        return (
            <div>
                <h4>{ this.props.name }</h4>
                <p>{ this.state.age }</p>
                <div>
                    <button onClick={ this.birthday }>Agregar 1 año</button>
                </div>
            </div>

        );
    }

    birthday = () => {
        this.setState(( prevState ) => (
        {
         age : prevState.age + 1
        }
        ))
    }
}


Greeting.propTypes = {

};


export default Greeting;
