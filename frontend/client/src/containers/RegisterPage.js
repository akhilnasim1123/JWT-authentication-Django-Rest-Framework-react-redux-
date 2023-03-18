import { useState } from "react";
import Layout from "../components/Layout";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../features/user";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { registered, loading } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const { first_name, last_name, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(register({ first_name, last_name, email, password }));
  };

  if (registered) return <Navigate to="/login" />;
  return (
    <Layout title="auth site | Register" content="Register Page">
      <div
        className="row"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <div className="col-md-6">
          <h1>
            <b style={{ color: "darkgray" }}>RegisterPage</b>
          </h1>
          <form className="mt-5 " onSubmit={onSubmit}>
            <div className="form-control mt-3">
              <label className="form-label" htmlFor="first_name">
                First Name
              </label>
              <input
                className="form-control"
                type="text"
                name="first_name"
                onChange={onChange}
                value={first_name}
                required
              />
            </div>

            <div className="form-control mt-3">
              <label className="form-label" htmlFor="last_name">
                Last Name
              </label>
              <input
                className="form-control"
                type="text"
                name="last_name"
                onChange={onChange}
                value={last_name}
                required
              />
            </div>

            <div className="form-control mt-3">
              <label className="form-label" htmlFor="email_name">
                Email Address
              </label>
              <input
                className="form-control"
                type="email"
                name="email"
                onChange={onChange}
                value={email}
                required
              />
            </div>

            <div className="form-control mt-3">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                className="form-control"
                type="password"
                name="password"
                onChange={onChange}
                value={password}
                required
              />
            </div>
            {loading ? (
              <div
                className="spinner-border text-dark text-center mt-3"
                role="status"
              >
                <span className="sr-only"></span>
              </div>
            ) : (
              <button
                className="btn mt-3"
                style={{
                  backgroundColor: "rgb(22, 36, 61)",
                  color: "whitesmoke",
                  float: "right",
                }}
              >
                Register
              </button>
            )}
          </form>
        </div>
        <div className="col-6 mt-5">
          <div className="mt-5 register-para"></div>
          <p style={{ fontFamily: "sans-serif", fontSize: "18px" }}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
        </div>
      </div>
    </Layout>
  );
};
export default RegisterPage;
