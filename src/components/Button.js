import React,{useEffect} from 'react';

function Button(props) {
    return (
        <button type={props.type}  className={`button bg-${props.color}-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none`}>{props.label}</button>
    );
}

export default Button;