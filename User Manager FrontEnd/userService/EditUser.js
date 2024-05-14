import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const {id} = useParams();

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/getUser/${id}`);
    setUser(result.data);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/editUser/${id}`, user)
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border border-2 shadow my-2 rounded p-4">
          <h3 className="mb-5">Edit User</h3>

          <form onSubmit={(e) => onSubmitForm(e)}>
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type={"text"}
              placeholder="Enter your Name"
              name="name"
              className="form-control mb-4"
              value={name}
              onChange={(e) => onInputChange(e)}
            ></input>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type={"email"}
              placeholder="Enter your Email"
              name="email"
              className="form-control mb-4"
              value={email}
              onChange={(e) => onInputChange(e)}
            ></input>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type={"password"}
              placeholder="Enter your Password"
              name="password"
              className="form-control mb-4"
              value={password}
              onChange={(e) => onInputChange(e)}
            ></input>
            <button className="btn btn-outline-primary me-3" type={"submit"}>
              Register
            </button>
            <Link className="btn btn-outline-danger" to="/">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
