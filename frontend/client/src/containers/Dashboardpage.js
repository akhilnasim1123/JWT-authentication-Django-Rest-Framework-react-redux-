import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import { checkAdmin } from "../features/user";
import { Navigate } from "react-router-dom";

const DashboardPage = () => {
  const { user, isAuthenticated, loading } = useSelector((state) => state.user);
  {
    if (!isAuthenticated) return <Navigate to="/login" />;
  }
  return (
    <Layout title="auth site | DashBoard" content="DashBoard">
      {loading || user === null ? (
        <div
          className="spinner-border text-dark text-center mt-3"
          role="status"
        >
          <span className="sr-only"></span>
        </div>
      ) : (
        <>
          <h1>Dash Board</h1>
          <h1>{user.first_name}</h1>
        </>
      )}
    </Layout>
  );
};
export default DashboardPage;
