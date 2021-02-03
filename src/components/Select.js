import React from 'react';
import {useForm} from 'react-hook-form'

function Select(props) {
    const {register} = useForm();
    return (
        <div className="flex-flex-col">
            <label htmlFor="title" className="leading-loose">{props.title}</label>
            <select  type={props.type} name={props.name} placeholder={props.title} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" ref={props.register}>
            <option value='regional'>Regional</option>
            <option value='nasional'>Nasional</option>
            <option value='internasional'>Internasional</option>
            </select>
        </div>
    );
}

export default Select;