import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Header from "components/Header";

import { ROUTE_LIST } from "consts";

export default function App(): JSX.Element {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="*" element={<NoMatch />} /> */}
        {ROUTE_LIST.map((d) => (
          <Route key={d.name} path={d.path} element={<d.component />} />
        ))}
      </Routes>
    </Router>
  );
}
