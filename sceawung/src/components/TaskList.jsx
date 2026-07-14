import EditTaskForm from './EditTaskForm'
import TaskItem from './TaskItem'

const TaskList = () => {
  return (
    <ul>
      <li>
        <TaskItem />
        <EditTaskForm />
      </li>     
      <li>
        <TaskItem />
        <EditTaskForm />
      </li>     
      <li>
        <TaskItem />
        <EditTaskForm />
      </li>     
    </ul>
  )
}

export default TaskList
