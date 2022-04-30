import { useState } from "react";

import UserInput from "./Components/User/UserInput";
import UserList from "./Components/User/UserList";

import "./App.css";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <UserInput onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
