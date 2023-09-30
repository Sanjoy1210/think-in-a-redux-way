import Home from "@pages/Home";
import Video from "@pages/Video";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:id" element={<Video />} />
      </Routes>
    </Router>
  );
}

export default App;
