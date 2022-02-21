import React, {ChangeEvent} from "react";
import {SelectOption} from "../../../models/Select";

export interface SelectProps {
    options: SelectOption[];
    value: string | undefined;
    setValue: (value: string) => void;
}

const Select = (props: SelectProps) => {
    const updateValue = (e: ChangeEvent<HTMLSelectElement>) => {
        props.setValue(e.target.value);
    }
    return (<div className="inline-block relative w-64">
        <select
            value={props.value} onChange={updateValue}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            {props.options.map(option => <option value={option.value} key={option.value}>{option.label}</option>)}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
        </div>
    </div>)
}

export default Select;