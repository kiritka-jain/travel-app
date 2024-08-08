import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import Login from "./components/login";
import SignUp from "./components/signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        < Route path="/" element={<Home />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
