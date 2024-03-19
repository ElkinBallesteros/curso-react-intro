import React from 'react'
import { ReactComponent as CheckSvg} from './icons/check.svg';
import { ReactComponent as DeleteSvg} from './icons/delete.svg';
import './TodoIcon.css'

const iconTypes = {
    "check": (color) => <CheckSvg 
    className="Icon-svg" fill={color}/>, 
    "delete": (color) => <DeleteSvg 
    className="Icon-svg" fill={color}/>
}

function TodoIcon(props) {
  return (
    <span
    className={`Icon-container Icon-container-${props.type}`}
    onClick={props.onClick}>
        {iconTypes[props.type](props.color)}
    </span>
  )
}

export {TodoIcon}