import { Button } from "@chakra-ui/react";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Footer from "./Components/Footer";
import Headers from "./Components/Headers";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Upload from "./Components/Upload";
import Videos from "./Components/Videos";


function App() {
  return <>

  <Router>
    <Headers />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/videos" element={<Videos />}/>
      <Route path="/upload" element={<Upload />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
    </Routes>
    <Footer />
  </Router>
  
  </>

}

export default App;
