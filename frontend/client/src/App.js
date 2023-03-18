import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import Homepage from "./containers/Homepage";
import DashboardPage from "./containers/Dashboardpage";
import RegisterPage from "./containers/RegisterPage";
import Loginpage from "./containers/Loginpage";
import { useEffect } from "react";
import { checkAuth } from "./features/user";
import AdminLogin from "./admin/AdminLogin";
import AdminPage from "./admin/adminPage";
import UserData from "./admin/User";
import PersonalProfile from "./containers/ProfilePage";

const App = () => {
  const { isAdminAuthenticated } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/user-details" element={<UserData />} />
        <Route path="/profile" element={<PersonalProfile />} />
      </Routes>
    </Router>
  );
};
export default App;
