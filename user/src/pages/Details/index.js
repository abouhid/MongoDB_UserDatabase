import React, { useState, useEffect } from "react";
import api from "../../services/services";
import { Link, useParams } from "react-router-dom";
import "./index.css";

const Details = () => {
  const { id } = useParams();
  const [info, setInfo] = useState({
    user: {
      name: "",
      registration: 0,
      active: true,
      address: {
        city: "",
        state: "",
      },
    },
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

  return (
    <div className="user-info">
      <h1>{info.user.name}</h1>
      <h1>{info.user.registration}</h1>
      <h1>{info.user.active ? "User is Active" : "User is not Active"}</h1>

      <h1>{info.user.address.city}</h1>
      <h1>{info.user.address.state}</h1>
      <br />
      <Link to={"/"}>Back</Link>
      <Link to={`/editUser/${info.user._id}`}>Edit User</Link>
      <Link to={`/deleteUser/${info.user._id}`}>Delete User</Link>
    </div>
  );
};

export default Details;
