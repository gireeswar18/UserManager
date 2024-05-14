import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {

	const [user, setUser] = useState({
		name : "",
		email : ""
	});

	const {id} = useParams();

	useEffect(() => {
		loadUser()
	}, [])

	const loadUser = async () => {
		const result = await axios.get(`http://localhost:8080/user/getUser/${id}`);
		setUser(result.data);
	}

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border border-2 shadow my-2 rounded p-4">
            <div className="card">
              <div className="card-header">User Details</div>
              <div className="p-3">
                <p className="card-text">Name: {user.name}</p>
                <p className="card-text">Email: {user.email}</p>

                <Link to="/" className="btn btn-success">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
