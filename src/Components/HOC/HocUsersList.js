import React from 'react';
import HOC from './HOC';

const UsersList = ({ data }) => {
  let renderUsers = data.map((user) => {
    return (
      <div key={user.id}>
        <p>{user.name}</p>
      </div>
    )
  });

  return (
    <>
      {renderUsers}
    </>
  )
}

let SearchUsers = HOC(UsersList, "users");

export default SearchUsers;