import React, { useState } from 'react';

function ToDoList() {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [completedTaskCount, setCompletedTaskCount] = useState(0);

  const handleSubmit = () => {
    if (newTask.trim()) {
      const newTaskObj = {
        id: taskList.length + 1,
        task: newTask,
        complete: false
      };
      setTaskList(prevList => [...prevList, newTaskObj]);
      setNewTask("");
    }
  }
  const markTask = (id) => {
    let taskLists = taskList.map((task) => {
      let item = {};
      if (task.id === id) {
        if (!task.complete) {
          setCompletedTaskCount(completedTaskCount + 1);
        }
        else {
          setCompletedTaskCount(completedTaskCount - 1);
        }
        item = { ...task, complete: !task.complete };
      } else item = { ...task };
      return item;
    });
    setTaskList(taskLists);
  }

  const taskListSection = () => (
    <ul>
      {taskList && taskList.map((item, idx) =>
        <li key={item.id} className={item.complete ? 'is-done' : ''} onClick={(e) => markTask(item.id)}>{item.task}</li>
      )}
    </ul>
  )

  const styles = () => (
    <style>{`
      .is-done {
        text-decoration: line-through;
      }
      `}
    </style>
  )

  return (
    <div className="App">
      <h3>ToDoList:</h3>
      <input type="text" name="new-task" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <input type="submit" name="Add" onClick={handleSubmit} />
      <p className='task-counter'>{taskList.length - completedTaskCount} remaining out of {taskList.length} tasks</p>
      {taskListSection()}
      {styles()}
    </div>
  );
}

export default ToDoList;