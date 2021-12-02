import { Route, BrowserRouter } from "react-router-dom";
// import {} from 'react-router';
import Home from "../pages/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Route path="/">
        <Home />
      </Route>
    </BrowserRouter>
  );
}
