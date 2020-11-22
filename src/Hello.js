import React from 'react';
import './Hello.css';

function Hello ({name}){
    return <h1 className="myname">Hello from <strong>{name}</strong></h1>
}
export default Hello;