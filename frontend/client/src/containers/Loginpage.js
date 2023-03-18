import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { resetRegistered, login } from "../features/user";
import Layout from "../components/Layout";
const LoginPage = () => {
  const dispatch = useDispatch();
  const { loading, isAuthenticated, registered } = useSelector(
    (state) => state.user
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (registered) dispatch(resetRegistered());
  }, [registered]);

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(login({ email, password }));
  };

  if (isAuthenticated) return <Navigate to="/dashboard" />;
  return (
    <Layout title="auth site | Login" content="Login Page">
      <div
        className="row"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <div className="col-md-6">
          <h1>
            <b style={{ color: "darkgray" }}>Login to Your Account</b>
          </h1>
          <form className="mt-5 " onSubmit={onSubmit}>
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
                type="submit"
                className="btn mt-3"
                style={{
                  backgroundColor: "rgb(22, 36, 61)",
                  color: "whitesmoke",
                  float: "right",
                }}
              >
                Login
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
export default LoginPage;
