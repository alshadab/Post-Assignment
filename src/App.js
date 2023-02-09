import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Component/Home/Home";
import Post from "./Component/Post/Post";
import About from "./Component/About/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Component/Navbar/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [info, setInfo] = useState([]);
  const URL = process.env.REACT_APP_API_URL;
  const CODE = process.env.REACT_APP_API_CODE;
  const getData = async () => {
    try {
      const res = await axios.get(URL, {
        headers: { "app-id": CODE },
      });
      const data = await res.data.data;
      setInfo(data);
      console.log(info);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  });
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home info={info} />} />
          <Route path="/post/:id" element={<Post info={info} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
