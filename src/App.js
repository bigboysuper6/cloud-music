import "./App.css";
import NavBar from "./components/navBar";
import FoundMusic from "./routes/foundMusic";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "rgb(37,37,37)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          flexWrap: "wrap",
          display: "flex",
          justifyContent: "center",
          width: "61rem",
          margin: "0.625rem",
        }}
      >
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
