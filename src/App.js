import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import Login from "./components/login";
import SignUp from "./components/signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashBoard from "./components/dashboard";
import { AuthProvider } from "./context/AuthContext.js";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<DashBoard />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
