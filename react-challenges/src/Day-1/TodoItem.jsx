import PropTypes from 'prop-types';

const TodoItem = ({task,deleteTask,toggleCompleted}) => {
    const handleToggle = () => {
        toggleCompleted(task.id);
    }
  return (
    <div>
        <input type='checkbox' checked={task.completed} onChange={handleToggle}/>
        <span>{task.text}</span>
        <button onClick={()=>deleteTask(task.id)}>X</button>
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
