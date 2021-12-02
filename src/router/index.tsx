import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Header from "../components/Header";
import Home from "../pages/Home";
import NoMatch from "../pages/NoMatch";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}
