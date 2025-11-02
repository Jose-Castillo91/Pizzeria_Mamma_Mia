import "./App.css";
import Footer from "./components/Footer";
import Login from "./components/Login";
// import Home from "./components/Home";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Register from "./components/Register";

function App() {
  return <>
  <NavBar/>
  {/* <Home/> */}
  {/* <Register/> */}
  <Login/>
  <Footer/>
  </>;
}

export default App;
