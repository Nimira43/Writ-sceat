import { useState } from 'react'
import { GoPlus } from 'react-icons/go'

const TaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState('')
  const [newPriority, setNewPriority] = useState('1')

  const handleSubmit = () => {
    if (newTask.trim()) {
      addTask({
        id: Date.now(),
        text: newTask,
        priority: Number(newPriority),
        done: false
      })
      
      setNewTask('')
      setNewPriority('1')
    }
  }

  return (
    <div>
      <div className='task-form-wrapper'>
        <input
          type='text'
          value={newTask}
          onChange={
            (e) => setNewTask(
              e.target.value
            )
          }
          placeholder='Enter new task'
        />
        <input
          type='number'
          min='1'
          value={newPriority}
          onChange={(e) => {
            const value = e.target.value
            if (value === '') {
              setNewPriority('')
            } else {
              setNewPriority(Number(value))
            }
          }}
          placeholder='Priority'
        />
      </div>
      <button
        className='task-form-btn plain-btn'
        onClick={handleSubmit}
      >
        <GoPlus />
      </button>
    </div>
  )
}

export default TaskForm
