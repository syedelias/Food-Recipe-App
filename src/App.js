import "./App.css";
import Find from "./Components/Find";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import RecipeView from "./Components/RecipeView";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/home" element={<Header />} />
          <Route path="/recipe/:id" element={<RecipeView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
