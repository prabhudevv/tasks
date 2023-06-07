import React from 'react';
import ToDoList from './Components/ToDoList';
import Machine from './Components/Machine';
import StopWatch from './Components/StopWatch'

function App() {
  return (
    <>
      <StopWatch />
      <Machine />
      <ToDoList />
    </>
  );
}

export default App;