import React, { useEffect, useState } from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users').then(res => res.json()).then(json => {
      setUsers(json.data);
    }).catch(err => {
      console.warn(err);
      alert('Ошибка при получении пользователей');
    });
  }, []);

  return (
    <div className="App">
      <Users />
      {/* <Success /> */}
    </div>
  );
}

export default App;