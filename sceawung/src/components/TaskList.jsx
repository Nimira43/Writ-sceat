import TaskItem from './TaskItem'

const TaskList = ({
  tasks,
  showOnlyIncomplete
}) => {
  return (
    <ul>
      {tasks
        .filter((task) => !showOnlyIncomplete || !task.done)
        .map((task) => (
          <li
            key={task.id}
            className='task-list-item'
          >
            <TaskItem task={task} />
          </li>
        ))
      }     
    </ul>
  )
}

export default TaskList
