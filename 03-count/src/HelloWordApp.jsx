import propTypes from 'prop-types';

export function App(){
    return (<h1>Hola mundo</h1>);
}
export const HelloWordsApp= ({ title,subTitle }) =>{
    return( 
        <>
        <h1>{ message.edad }</h1>
        <h3>{ title }</h3>
        <p>{ subTitle }</p>
        </>
);
}
 const message ={
    nombre: "roberto",
    edad: 23
 }
 HelloWordsApp.propTypes={
    title: propTypes.string.isRequired
 }