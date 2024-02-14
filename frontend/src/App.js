import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/RegisterPage/Register";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <LandingPage/> */}
      <Login/>
    </div>
  );
}

export default App;
