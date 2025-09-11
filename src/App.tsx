import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navber";
import Home from "./pages/Home";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        {/* /home-custom */}
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
