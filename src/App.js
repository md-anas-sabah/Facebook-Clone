import "./App.css";
import Feed from "./Feed";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import Widget from "./Widget";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default App;
