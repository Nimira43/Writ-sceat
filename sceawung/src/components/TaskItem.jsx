import { VscEdit, VscTrash } from 'react-icons/vsc'

const TaskItem = ({ task }) => {
  return (
    <>
      <div className='task-item-wrapper'>
        <input
          className='task-item-checked'
          type='checkbox'
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
        <button className='btn outline-btn'>
          <VscEdit className='icon-dark' />
        </button>
        <button className='btn solid-btn'>
          <VscTrash classNam='icon-light' />
        </button>
      </div>
    </>
  )
}

export default TaskItem
