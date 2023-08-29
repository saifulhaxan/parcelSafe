import React from 'react'
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CustomButton = (props) => {
  return (
    <>
      <button type={props?.type} className={`customButton ${props?.variant} ${props?.className}`} onClick={props?.onClick}>{props?.text} <FontAwesomeIcon icon={props.icon} /></button>
    </>
  )
}
export default CustomButton;
