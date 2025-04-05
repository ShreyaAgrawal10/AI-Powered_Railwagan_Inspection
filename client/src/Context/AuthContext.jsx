import { createContext, useContext, useEffect, useState } from "react";

// Create Context
const AuthContext = createContext();

// Custom hook for using auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check for user token when app loads
  useEffect(() => {
    const token = localStorage.getItem("token");
    setUser(token || null);
  }, []);

  // Login function
  const login = (token) => {
    localStorage.setItem("token", token);
    setUser(token);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token"); 
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
