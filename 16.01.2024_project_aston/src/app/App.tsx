import React from 'react';
import './App.css';

const Button  = ({text,img,className,cb}) => {
    return ( <button className={className} onClick={cb}>
        {img && <img src={img}/>}
        {text}
    </button> );
}

const input = ({type,label,className,onChange,value})=>{
    return <>
    
    </>
}
 


function App() {
    return <div>добрый день!</div>;
}
export Button;
export default App;
