import React, { useState, useEffect } from "react";
import { Redirect, Link, useParams } from "react-router-dom";
import "./update.css";
import api from "../../services/services";

const Update = () => {
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
    Redirect: false,
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
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo((prevState) => ({
      user: { ...prevState.user, [name]: value },
    }));
  };
  const handleAddressChange = (event) => {
    const { name, value } = event.target;
    setInfo((prevState) => {
      const user = { ...prevState.user };
      user.address[name] = value;
      return { user };
    });
  };
  const handleSubmit = (event) => {
    fetch(`http://localhost:3001/system/users/${id}`, {
      method: "put",
      id: id,
      body: JSON.stringify(info.user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => {
      if (data.ok) {
        setInfo((prevState) => ({
          user: { ...prevState.user },
          Redirect: true,
        }));
      }
    });

    event.preventDefault();
  };

  return info.Redirect ? (
    <Redirect to="/" />
  ) : (
    <form onSubmit={(e) => handleSubmit(e)}>
      <fieldset>
        <legend>Edit User</legend>
        <div className="user-update">
          <label htmlFor="name">Name</label> <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Username"
            minLength="3"
            maxLength="100"
            required
            value={info.user.name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="user-update">
          <label htmlFor="registration">Registration</label> <br />
          <input
            type="text"
            id="registration"
            name="registration"
            placeholder="Registration"
            min="1"
            max="99999"
            required
            value={info.user.registration}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="user-update">
          <label htmlFor="city">City</label> <br />
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City"
            minLength="3"
            maxLength="100"
            required
            value={info.user.address.city}
            onChange={(e) => handleAddressChange(e)}
          />
        </div>
        <div className="user-update">
          <label htmlFor="state">State</label> <br />
          <input
            type="text"
            id="state"
            name="state"
            placeholder="State"
            minLength="2"
            maxLength="2"
            required
            value={info.user.address.state}
            onChange={(e) => handleAddressChange(e)}
          />
        </div>
        <div className="user-update">
          <label>
            <input
              type="radio"
              name="active"
              checked={info.user.active === "true"}
              value="true"
              onChange={(e) => handleChange(e)}
            />
            Active
          </label>
          <label>
            <input
              type="radio"
              name="active"
              checked={info.user.active === "false"}
              value="false"
              onChange={(e) => handleChange(e)}
            />
            Not Active
          </label>
          <br />
        </div>

        <button type="submit">Edit User</button>
      </fieldset>
      <Link to="/">
        <button>Back</button>
      </Link>
    </form>
  );
};

export default Update;
