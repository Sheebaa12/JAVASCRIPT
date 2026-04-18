import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import Dashboard from "./pages/Dashboard";
import Profile from "./dashboard/Profile";
import Settings from "./dashboard/Settings";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/students">Students</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:id" element={<StudentDetails />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
