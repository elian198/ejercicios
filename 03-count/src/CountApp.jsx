import propTypes from 'prop-types';
import { useState } from 'react';

export const CountApp = ({ value }) =>{

    const [count, setCount] = useState( value );

    const evento = ()=> setCount(count + 1);
    const restar = ()=>  setCount(count - 1);
    const reset = ()=>  setCount(value);
                
    return(
        <>
        <h1>CountAPP</h1>
        <p>{ count }</p>
        <button onClick={ evento }>+1</button>
        <button onClick={ restar }>-1</button>
        <button onClick={ reset }>Reset</button>
        </>
    )
}
CountApp.propTypes={
    value: propTypes.number.isRequired
}