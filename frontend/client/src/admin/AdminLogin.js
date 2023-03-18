import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkAdmin } from "../features/user";
import { adminLog } from "../context/Store";
import { Navigate } from "react-router-dom";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { loading, registered } = useSelector(

    (state) => state.user

  );

  const {isAdminAuthenticated}=useSelector(
    (state) => state.admin
  )
  console.log(isAdminAuthenticated)
  const [formData, setAdminFormData] = useState({

    email: "",
    password: "",

  });
  const { email, password } = formData;


  const onchange = (e) => {
    setAdminFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    console.log(email);
    e.preventDefault();
    dispatch(adminLog({ email, password }));
    
  };

	if (isAdminAuthenticated) return <Navigate to='/user-details' />;
  return (
    
    <div className="bg-dark text-white" style={{ height: "700px" }}>
      <form
        onSubmit={submitHandler}
        className="col"
        style={{ width: "50%", marginLeft: "40%", paddingTop: "15%" }}
      >
        <div className="form-outline mb-4 w-50">
          <input
            type="email"
            id="form2Example1"
            name="email"
            onChange={onchange}
            value={email}
            className="form-control"
          />
          <label className="form-label" for="form2Example1">
            Email address
          </label>
        </div>

        <div className="form-outline mb-4 w-50">
          <input
            type="password"
            id="form2Example2"
            name="password"
            onChange={onchange}
            value={password}
            className="form-control"
          />
          <label className="form-label" for="form2Example2">
            Password
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
