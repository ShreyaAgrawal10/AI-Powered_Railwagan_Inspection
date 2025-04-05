import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { useAuth } from "./Context/AuthContext";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Detector from "./Pages/Detector";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Schedule from "./Pages/Schedule";
import Volume from "./Pages/Volume";

function AppContent() {
  const { user } = useAuth();
  console.log(user);
  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detect" element={<Detector />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vol" element={<Volume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes> 
  );
}

function App() {
  return (
      <AppContent />
  );
}

export default App;
