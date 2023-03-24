import { Routes, Route } from "react-router-dom";
import TPP from "./components/portrait/TPP";
import { Container } from "react-bootstrap";
import Footer from "./components/generalComponents/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<TPP />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
