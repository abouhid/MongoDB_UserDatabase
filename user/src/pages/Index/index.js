import React, { useState, useEffect } from "react";
import api from "../../services/services";
import { Link } from "react-router-dom";
import "./index.css";

const Users = () => {
  const [users, setUsers] = useState({
    user: [],
    userInfo: {},
    page: 1,
  });

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async (page = 1) => {
    const response = await api.get(`/users?page=${page}`);
    const { docs, ...userInfo } = response.data;
    setUsers({
      user: docs,
      userInfo,
      page,
    });
  };

  const prevPage = () => {
    const { page } = users;
    if (page === 1) return;
    const pageNumber = page - 1;
    loadUsers(pageNumber);
  };
  const nextPage = () => {
    const { page, userInfo } = users;
    if (page === userInfo.pages) return;
    const pageNumber = page + 1;
    loadUsers(pageNumber);
  };

  return (
    <div className="user-list">
      <Link to="/createUser">
        <button>Create New User</button>
      </Link>

      {users.user.map((el) => (
        <article key={el._id}>
          <strong>{el.name}</strong>
          <p>{el.registration}</p>
          <p>
            <Link to={`/users/${el._id}`}>Access</Link>
          </p>
        </article>
      ))}
      <div className="actions">
        <button disabled={users.page === 1} onClick={prevPage}>
          Previous
        </button>
        <button
          disabled={users.page === users.userInfo.pages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Users;
