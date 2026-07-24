import TaskItem from './TaskItem'

const TaskList = ({
  tasks,
  showOnlyIncomplete,
  toggleTaskDone
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
            <TaskItem
              task={task}
              toggleTaskDone={toggleTaskDone}
            />
          </li>
        ))
      }     
    </ul>
  )
}

export default TaskList
