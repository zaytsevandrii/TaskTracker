import React from 'react'
import Task from './Task'

const Tasks = ({tasks,deleteTask,toggleReminder}) => {

  return (
    <>
        {tasks.map((task)=>(
        <Task key={task.id} toggleReminder={toggleReminder} task={task} deleteTask={deleteTask}/>
        ))}
        

    </>
  )
}

export default Tasks