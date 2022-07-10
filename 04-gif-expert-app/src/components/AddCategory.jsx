import { useState }from 'react'

export const AddCategory = ({ onAddCategory }) => {
 
  const [inputValue, setinputValue] = useState('one puch');

    const changeValue = ( {target} ) =>{
        console.log(target.value);
        setinputValue(target.value);
    }
    const onSubmit = ( event ) => {
      event.preventDefault();
      if ( inputValue.trim().length <=1 ) return;
      onAddCategory( inputValue );
      setinputValue('');
    }

    return(
      <form onSubmit= { onSubmit }>
      <input
      type="text"
      placeholder="escriba"
      value={ inputValue }
      onChange={ changeValue }
      />
      </form>
    );
}