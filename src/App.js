import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import Login from "./components/login";
import SignUp from "./components/signup";
import Profile from "./components/profile.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashBoard from "./components/dashboard";
import { AuthProvider } from "./context/AuthContext.js";
import FormDialog from "./components/dialog.js";

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
            <Route path="/edit/:id" element={<FormDialog />}/>
            <Route path="/profile" element={<Profile />}/>
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
