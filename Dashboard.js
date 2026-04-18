import { Link, Outlet } from "react-router-dom";
export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard Page</h1>

      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
      </div>

      <Outlet />
    </div>
  );
}