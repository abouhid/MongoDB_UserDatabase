import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Insert = () => {
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
    fetch("http://localhost:3001/system/users/", {
      method: "post",
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
      console.log(info);
    });
    console.log(info);

    event.preventDefault();
  };

  return info.Redirect ? (
    <Redirect to="/" />
  ) : (
    <form onSubmit={(e) => handleSubmit(e)}>
      <fieldset>
        <legend>Create User</legend>
        <div className="user-insert">
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
        <div className="user-insert">
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
        <div className="user-insert">
          <label htmlFor="city">Registration</label> <br />
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City"
            minLength="3"
            maxLength="100"
            required
            value={info.user.city}
            onChange={(e) => handleAddressChange(e)}
          />
        </div>
        <div className="user-insert">
          <label htmlFor="state">Registration</label> <br />
          <input
            type="text"
            id="state"
            name="state"
            placeholder="State"
            minLength="2"
            maxLength="2"
            required
            value={info.user.state}
            onChange={(e) => handleAddressChange(e)}
          />
        </div>
        <div className="user-insert">
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

        <button type="submit">Register</button>
      </fieldset>
    </form>
  );
};

export default Insert;
