/* eslint-disable */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Components/Navbar.js";
import Content from "./Components/Content";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./Components/Detail";
import { useState } from "react";
import data from "./data";
import data2 from "./data2";

function App() {
  const [info, setInfo] = useState(data);
  const [info2, setInfo2] = useState(data2);
  const [finalData, setFinalData] = useState([]);

  return (
    <div className="App">
      <div id="TOP">
        <NavbarComponent />
        <div className="main-bg"></div>
        {/* BACK GROUND  */}

        <Routes>
          <Route
            path="/"
            element={
              <Content
                info={info}
                info2={info2}
                finalData={finalData}
                setFinalData={setFinalData}
              />
            }
          />
          {/* HOME  */}
          <Route
            path="/detail"
            element={
              <Detail finalData={finalData} setFinalData={setFinalData} />
            }
          />
          {/* DETAIL  */}
          <Route
            path="/detail/:id"
            element={
              <Detail finalData={finalData} setFinalData={setFinalData} />
            }
          />
          {/* DETAIL TO CHOSE */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
