import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import bgImg from "./bgImage.jpg";
import Navbar from "./navbar/Navbar";
import Createpost from "./content/Createpost/Createpost";
import Mypost from "./content/mypost/Mypost";

function App() {
  return (
    <BrowserRouter>
      <img className="bgImage" src={bgImg} alt="gif" />
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Createpost />} />
          <Route path="/mypost" element={<Mypost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
