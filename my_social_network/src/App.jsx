import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
import Profile from "./pages/Profile/Profile";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}  />
            
          <Route exact path="/admin" element={<Admin/>} />

          <Route exact path="/admin/profile/*" element={<Profile/>} />
        </Routes>
    </Router>  
    </div> 
  );
}

export default App;
