import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import authentication context
import Button from "./Button";

const headerStyle = {
  backgroundColor: "#1a202c",
  color: "white",
  padding: "1rem 0",
};

const containerStyle = {
  margin: "0 auto",
  padding: "0 1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const navStyle = {
  display: "flex",
  gap: "1rem",
  listStyle: "none",
  padding: 0,
  margin: 0,
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  transition: "color 0.3s",
  alignItems: "center",
  justifyContent: "center",
  margin: "0.7rem",
};

export default function Header() {
  const { user, logout } = useAuth(); // Use authentication context
  // Use authentication context
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call logout function from AuthContext
    navigate("/login"); // Redirect to login page
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <Link
          to="/"
          style={{ ...linkStyle, fontSize: "1.5rem", fontWeight: "bold" }}
        >
          Jugadu
        </Link>
        <nav>
          <ul style={navStyle}>
            <li style={linkStyle}>
              <Link to="/detect">Crack Detector</Link>
            </li>
            <li style={linkStyle}>
              <Link to="/vol">Volume Detector</Link>
            </li>
            <li style={linkStyle}>
              <Link to="/about">About</Link>
            </li>
            <li style={linkStyle}>
              <Link to="/schedule">Schedule</Link>
            </li>
            <li style={linkStyle}>
              <Link to="/contact">Contact</Link>
            </li>

            <li>
              {user ? (
                <Button name="Logout" onClick={handleLogout} />
              ) : (
                <Link to="/login">
                  <Button name="Login" />
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
