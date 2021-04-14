import React, { useState, useEffect } from "react";
import { Redirect, Link, useParams } from "react-router-dom";
import "./delete.css";
import api from "../../services/services";

const Delete = () => {
  const { id } = useParams();

  const [info, setInfo] = useState({
    user: {},
    redirect: false,
  });

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async (page = 1) => {
    const response = await api.get(`/users/${id}`);
    setInfo({
      user: response.data,
    });
  };

  const handleClick = (event) => {
    fetch(`http://localhost:3001/system/users/${id}`, {
      method: "delete",
    }).then((data) => {
      if (data.ok) {
        setInfo((prevState) => ({
          user: { ...prevState.user },
          redirect: true,
        }));
      }
    });

    event.preventDefault();
  };

  return info.redirect ? (
    <Redirect to="/" />
  ) : (
    <fieldset>
      <legend>Delete User</legend>
      <div className="user-delete">
        <label htmlFor="name">Name</label> <br />
        <h5>{info.user.name}</h5>
        <p>Are you sure you want to delete this user?</p>
        <button onClick={(e) => handleClick(e)}>Delete User</button>
      </div>

      <br />
      <Link to="/">
        <button>Back</button>
      </Link>
    </fieldset>
  );
};

export default Delete;
