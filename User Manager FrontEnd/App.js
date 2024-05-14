import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import NavBar from "./layout/NavBar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddUser from "./userService/AddUser.js";
import EditUser from "./userService/EditUser.js";
import ViewUser from "./userService/ViewUser.js";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route element={<Home />} exact path="/"></Route>
          <Route element={<AddUser />} exact path="/addUser"></Route>
          <Route element={<EditUser />} exact path="/editUser/:id"></Route>
          <Route element={<ViewUser />} exact path="/viewUser/:id"></Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
