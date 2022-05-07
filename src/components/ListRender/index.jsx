import React, { useState } from 'react';

const ListRender = () => {
  const [list] = useState(['Jonatha', 'Carlos', 'Carneiro']);
  const [users, setUsers] = useState([
    { id: 1, name: 'Jonatha', age: 33 },
    { id: 2, name: 'Carlos', age: 27 },
    { id: 3, name: 'Carneiro', age: 47 },
  ]);
  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    {
      console.log(randomNumber);
    }
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };
  return (
    <div>
      <div>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </div>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
        <button onClick={deleteRandom}>Delete Random User</button>
      </div>
    </div>
  );
};

export default ListRender;
