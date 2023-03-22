import React, { useState } from "react";
import loader from "./assets/loader.gif";

// user data API
const URL = "https://reqres.in/api/users?page=1";

function App() {
  const [users, setUsers] = useState([]); // state to manage user data
  const [loading, setLoading] = useState(false);

  // funtion to fetch user data
  const fetchUsers = async () => {
    setLoading(true); // show loading screen when data is loading
    const response = await fetch(URL);
    const data = await response.json();
    setLoading(false); // stop showing loading message once data is loaded
    setUsers(data.data); // update user data state
  };

  return (
    <div className="App">
      <nav>
        <h1>BRAND</h1>
        <button className="userBtn" onClick={fetchUsers}>
          Get Users
        </button>
      </nav>
      {loading ? (
        <div className="loader">
          <img src={loader} alt="loader" />
        </div>
      ) : (
        <div className="card-grid">
          {/* map through users array */}
          {users.map((user) => (
            <div key={user.id} className="card">
              <img src={user.avatar} alt={user.first_name} />
              <h2>
                {/* display user details */}
                {user.first_name} {user.last_name}
              </h2>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
