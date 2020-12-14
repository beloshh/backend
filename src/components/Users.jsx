import React, { useEffect, useState } from "react";
import Paginate from "./Paginate";
import Bulma from "./Bulma";
import axios from "axios";
import "../style/bulma.css";
import { Paginator } from "../js/Paginator";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("logging the error");
    alert(
      "an unexpected error occured. The server or your internet connection may be down"
    );
  }
  return Promise.reject(error);
});

function Users(props) {
  const [users, setUsers] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const pageSize = 4;

  useEffect(() => {
    async function getUsers() {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setUsers(result.data);
    }

    getUsers();
  });

  function handlePageChange(page) {
    setcurrentPage(page);
  }

  const allUsers = Paginator(users, currentPage, pageSize);
  return (
    <div>
      <ul>
        {allUsers.map((user) => (
          <Bulma
            key={user.id}
            name={user.name}
            id={user.id}
            email={user.email}
            catchPhrase={user.company.catchPhrase}
          />
        ))}
      </ul>
      <div id="long">
        <Paginate
          itemsCount={users.length}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Users;
