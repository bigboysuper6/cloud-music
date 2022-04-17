import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import FoundMusic from "./routes/foundMusic";
import SongList from "./routes/songlist";
ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<FoundMusic />}></Route>
          <Route path="/songlist/:id" element={<SongList />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
