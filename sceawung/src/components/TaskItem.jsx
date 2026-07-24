import { VscEdit, VscTrash } from 'react-icons/vsc'

const TaskItem = ({ task, toggleTaskDone }) => {
  return (
    <>
      <div className='task-item-wrapper'>
        <input
          className='checkbox'
          type='checkbox'
          onChange={() => toggleTaskDone(task.id)}
          checked={task.done}
         
        />
        <span
          className='task-item'
          style={{
            textDecoration: task.done ? 'line-through' : 'none',
          }}
        >
          {task.text}
          <span className='priority-tag'>
            {task.priority}
          </span>
        </span>
      </div> 
      <div className='task-item-button-wrapper'>
        <button className='plain-btn'>
          <VscEdit />
        </button>
        <button className='plain-btn'>
          <VscTrash />
        </button>
      </div>
    </>
  )
}

export default TaskItem
