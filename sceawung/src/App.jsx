import { useState } from 'react'
import TaskControls from './components/TaskControls'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { mockData } from './data/mockdata'

const App = () => {
  const [tasks, setTasks] = useState(mockData)

  return (
    <div className='app-wrapper'>
      <h1 className='logo-font'>
        scēawung
      </h1>
      <TaskForm />
      <TaskControls />
      <TaskList tasks={tasks} />
    </div>
  )
}

export default App