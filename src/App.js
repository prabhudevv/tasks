import React from 'react';
import './App.css'
import ToDoList from './Components/ToDoList';
import Machine from './Components/Machine';
import StopWatch from './Components/StopWatch';
import FetchDataFromAPI from './Components/FetchDataFromAPI';
import FetchAndUpdateFromAPI from './Components/FetchAndUpdateFromAPI';

/* HOC Example */
import SearchUsers from './Components/HOC/HocUsersList';
import SearchTodos from './Components/HOC/HocToDoList';

/* Custom Hook */
import Counter from './Components/CustomHook/Counter';

function App() {
  return (
    <>
      {/* <StopWatch />
      <Machine />
      <ToDoList />
      <FetchDataFromAPI />
      <FetchAndUpdateFromAPI/> */}
      <div className='hoc-section'>
        {/* HOC Example */}
        <div><SearchUsers /></div>
        <div><SearchTodos /></div>
      </div>
      <Counter/>
    </>
  );
}

export default App;