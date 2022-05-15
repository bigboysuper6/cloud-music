import "./App.css";
import NavBar from "./components/navBar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/system";
import MusicBar from "./components/musicBar";

function App() {
  return (
    <div>
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
          }}
        >
          <NavBar />
          <Outlet test="test" />
          <MusicBar />
        </div>
      </div>
    </div>
  );
}

export default App;
