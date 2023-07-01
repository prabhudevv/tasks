import React from 'react';
import HOC from './HOC';

const HocToDoList = ({ data }) => {
  let renderToDos = data.map((todo) => {
    return (
      <div key={todo.id}>
        <p>{todo.title}</p>
      </div>
    )
  });

  return (
    <>
      {renderToDos}
    </>
  )
}

let SearchTodos = HOC(HocToDoList, "todos");

export default SearchTodos;