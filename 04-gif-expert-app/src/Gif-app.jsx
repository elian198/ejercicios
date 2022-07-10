import React from 'react';
import { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifApp = () =>{

    const [ categories, setCategories ] = useState(['dragon ball', 'super campeones']);

    const onAddCategory = ( onAddCategory ) => {

        setCategories([ ...categories,  { onAddCategory } ]);
    }

    return(
        <>
         <h1>Git Expert</h1>
         <AddCategory 
         onNewCategory={ onAddCategory }
         />
         <ul>
            {
                categories.map( category =>{
                    return <li key={ category } > { category }</li>
                })
            }
         </ul>
        </>
    );
}