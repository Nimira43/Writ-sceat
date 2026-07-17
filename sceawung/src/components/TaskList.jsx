import TaskItem from './TaskItem'

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          className='task-list-item'
        >
          <TaskItem task={task} />
        </li>
      ))}     
    </ul>
  )
}

export default TaskList
