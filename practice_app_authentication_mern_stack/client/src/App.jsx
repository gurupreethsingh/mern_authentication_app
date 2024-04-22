import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Testing from "./pages/Testing";
import DefectReport from "./pages/DefectReport";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [user, setUser] = useState({
    isLoggedIn: true,
    username: "ecoders",
    role: ["admin", "normal", "Test Engineer", "developer"],
  });

  return (
    <Router>
      <Header
        isLoggedIn={user.isLoggedIn}
        username={user.isLoggedIn ? user.username : ""}
        role={user.isLoggedIn ? user.role[0] : ""}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              username={user.username}
              role={user.role}
              isLoggedIn={user.isLoggedIn}
            />
          }
        />

        {user.isLoggedIn && user.role.includes("admin") && (
          <Route
            path="/admin"
            element={
              <Admin
                username={user.username}
                role={user.role}
                isLoggedIn={user.isLoggedIn}
              />
            }
          />
        )}

        {user.isLoggedIn && (
          <Route
            path="/profile"
            element={
              <Profile
                username={user.username}
                role={user.role}
                isLoggedIn={user.isLoggedIn}
              />
            }
          />
        )}

        {user.isLoggedIn && user.role.includes("Test Engineer") && (
          <>
            <Route
              path="/testing"
              element={
                <Testing
                  username={user.username}
                  role={user.role}
                  isLoggedIn={user.isLoggedIn}
                />
              }
            />
            <Route
              path="/defectreport"
              element={
                <DefectReport
                  username={user.username}
                  role={user.role}
                  isLoggedIn={user.isLoggedIn}
                />
              }
            />
          </>
        )}

        {!user.isLoggedIn && (
          <Route path="/login" element={<Login setUser={setUser} />} />
        )}
        {!user.isLoggedIn && (
          <Route path="/register" element={<Register setUser={setUser} />} />
        )}

        {/* Redirect to login page if user is not logged in */}
        {!user.isLoggedIn && (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
