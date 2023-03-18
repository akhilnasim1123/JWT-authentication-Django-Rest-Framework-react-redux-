import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";

const Homepage = () => {
  const { user, isAuthenticated, loading } = useSelector((state) => state.user);
  {
    if (!isAuthenticated) return <Navigate to="/login" />;
  }
  return (
    <Layout title="auth site | Home" content="Hom Page">
      <h1>Homepage</h1>
    </Layout>
  );
};
export default Homepage;
