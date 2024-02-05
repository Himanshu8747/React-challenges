import PropTypes from 'prop-types';
import "../App.css"

const TodoItem = ({task,deleteTask,toggleCompleted}) => {
    const handleToggle = () => {
        toggleCompleted(task.id);
    }
  return (
    <div className='todoItem'>
        <input className='todocheckbox' type='checkbox' checked={task.completed} onChange={handleToggle}/>
        <span>{task.text}</span>
        <button className='btn red' onClick={()=>deleteTask(task.id)}>X</button>
    </div>
  )
}

TodoItem.propTypes = {
    task: PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleCompleted: PropTypes.func.isRequired,
  };

export default TodoItem;
