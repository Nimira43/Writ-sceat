import TaskControls from './components/TaskControls'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

const App = () => {
  return (
    <div className='app-wrapper'>
      <h1 className='logo-font'>
        scēawung
      </h1>
      <TaskForm />
      <TaskControls />
      <TaskList />
    </div>
  )
}

export default App