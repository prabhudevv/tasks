import React from 'react';
import './App.css'
import ToDoList from './Components/ToDoList';
import Machine from './Components/Machine';
import StopWatch from './Components/StopWatch';
import FetchDataFromAPI from './Components/FetchDataFromAPI';

function App() {
  return (
    <>
      <StopWatch />
      <Machine />
      <ToDoList />
      <FetchDataFromAPI />
    </>
  );
}

export default App;