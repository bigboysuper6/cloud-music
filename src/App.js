import "./App.css";
import NavBar from "./components/navBar";
import FoundMusic from "./components/foundMusic";
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
        <FoundMusic />
      </div>
    </div>
  );
}

export default App;
