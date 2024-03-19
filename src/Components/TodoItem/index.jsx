import {CopleteIcon} from '../TodoIcon/CopleteIcon.jsx';
import {DeleteIcon} from '../TodoIcon/DeleteIcon.jsx';
import './TodoItem.css'
function TodoItem(props){
    return (
      <li className='TodoItem'>
        <CopleteIcon completed={props.completed}
        onComplete={props.onComplete} />  
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <DeleteIcon onDelete={props.onDelete}/>
      </li>
    );
  }

  export {TodoItem};