import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function App() {

  return (
      <div>
    <Router>
      <Routes>
      <Route path="" index element={<Home />} />
      <Route path="/DayBridge/login" element={<LoginForm/>} />
      <Route path="/DayBridge/signUp" element={<SignUpForm/>} />
      </Routes>
    </Router>
      </div>
  );
}

export default App;
