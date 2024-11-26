import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Users from "./User";
import Roles from "./Roles";



import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/roles" element={<Roles />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

