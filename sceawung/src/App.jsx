import { useState } from 'react'
import TaskControls from './components/TaskControls'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { mockData } from './data/mockdata'

const App = () => {
  const [tasks, setTasks] = useState(mockData)
  const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false)

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask]
    setTasks(updatedTasks)
  }

  const toggleTaskDone = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? {...task, done: !task.done} : task
    )
    setTasks(updatedTasks)
  }

  const sortTasks = () => {
    const sortedTasks = [...tasks]
      .sort((a, b) => a.priority - b.priority)
    setTasks(sortedTasks)
  }

  return (
    <div className='app-wrapper'>
      <h1 className='logo-font'>
        scēawung
      </h1>
      <TaskForm addTask={addTask}/>
      <TaskControls
        showOnlyIncomplete={showOnlyIncomplete}
        setShowOnlyIncomplete={setShowOnlyIncomplete}
        sortTasks={sortTasks}
      />
      <TaskList
        tasks={tasks}
        showOnlyIncomplete={showOnlyIncomplete}
        toggleTaskDone={toggleTaskDone}
      />
    </div>
  )
}

export default App