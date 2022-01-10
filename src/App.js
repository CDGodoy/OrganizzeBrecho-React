import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/sidebar";
import "./app.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import CostumerView from "./pages/costumerView/CostumerView";


function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home/>} exact/>

          <Route path="/costumers" element={<UserList/>} exact/>

          <Route path="/costumers/view/:id" element={<CostumerView/>} exact/>
        </Routes>

        
      </div>
    </Router>
  );
}

export default App;
