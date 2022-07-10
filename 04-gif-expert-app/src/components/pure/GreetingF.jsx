import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = ({ name }) => {

    const birthday = ()  =>{
        setage(age +1)
        }
    const [age, setage] = useState(0);
    return (
    <div>
        <h4>{ name }</h4>
        <p>{ age }</p>
        <div>
            <button onClick={ birthday }>Sumar 1 año</button>
        </div>
    </div>
    );
};


GreetingF.propTypes = {

};


export default GreetingF;
