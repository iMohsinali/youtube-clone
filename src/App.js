import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Recommand from "./Recommand";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/search/:searchTerm" element={"hello"} >
          
          </Route>
          <Route path='/' element ={<div className="app_page">
        <Sidebar />
        <Recommand />
        
      </div>}>

          </Route>
        </Routes>
      </Router>

     
      
     
    </div>
  );
}

export default App;
