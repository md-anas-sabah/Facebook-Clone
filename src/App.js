import "./App.css";
import Feed from "./Feed";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Sidebar />
        <Feed />
      </div>
      {/* Widget */}
    </div>
  );
}

export default App;
