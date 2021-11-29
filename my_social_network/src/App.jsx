import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
import User from "./pages/User/User";
import Profile from "./pages/Profile/Profile";
import Private from "./Components/PrivateRoute/PrivateRoute"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}  />
            
          <Route exact path="/admin" element={<Private role="admin"><Admin /></Private>}  />

          <Route exact path="/admin/profile/*" element={<Profile/>} />

          <Route exact path="/user" element={<Private role="user"><User/></Private>} />
        </Routes>
    </Router>  
    </div> 
  );
}

export default App;
