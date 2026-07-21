import { GoSortDesc } from 'react-icons/go'

const TaskControls = ({
  showOnlyIncomplete,
  setShowOnlyIncomplete,
  sortTasks
}) => {
  return (
    <div className='task-controls-wrapper'>
      <label className='task-controls-label'>
        <input
          type='checkbox'
          className='checkbox'
          checked={showOnlyIncomplete}
          onChange={
            () => setShowOnlyIncomplete(!showOnlyIncomplete)
          }
        />
        Incomplete Tasks
      </label>  
      <button
        className='plain-btn'
        onClick={sortTasks}
      >
        <GoSortDesc />
      </button>
    </div>
  )
}

export default TaskControls
