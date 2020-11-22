import React from "react";

function Dinner(props){
    return (
        <div>
        <h1>Today we are serving </h1>
        <ul>
            <li>{props.dishName}</li>
            <li>{props.sweet}</li>
        </ul>
        </div>
    )
}
export default Dinner;
