import { useState } from 'react'
import TaskControls from './components/TaskControls'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { mockData } from './data/mockdata'

const App = () => {
  const [tasks, setTasks] = useState(mockData)
  const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false)

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
      <TaskForm />
      <TaskControls
        showOnlyIncomplete={showOnlyIncomplete}
        setShowOnlyIncomplete={setShowOnlyIncomplete}
        sortTasks={sortTasks}
      />
      <TaskList
        tasks={tasks}
        showOnlyIncomplete={showOnlyIncomplete}
      />
    </div>
  )
}

export default App