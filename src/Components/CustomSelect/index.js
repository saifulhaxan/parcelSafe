import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './style.css'

export const SelectBox = (props) => {
    const handleClick = (e) => {
        console.log(e)
    }

    return (
        <div className="inputWrapper">
            <div class="inputIcon">
                <FontAwesomeIcon icon={props?.iconShow} />
            </div>
            {props?.label && <label htmlFor={props?.id} className={props?.labelClass}>{props?.label}{props?.required ? '*' : ''}</label>}
            <div className="fieldData">
                <select className={props?.selectClass} name={props?.name}>
                    <option>{props?.name}</option>
                    {Array.isArray(props.option) && props.option.map(item => (
                        <option value={item.code}>{item.name}</option>
                    ))}
                </select>
               {props?.buttonAction && (
                <button type='button' onClick={handleClick}><FontAwesomeIcon icon={faTrashAlt} className="removeField"></FontAwesomeIcon></button>
               )
               }
            </div>

        </div>
    )
}
