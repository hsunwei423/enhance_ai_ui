import { Link, useLocation } from "react-router-dom";

import Logo from "assets/imgs/logo.svg";
import SignupImg from "assets/imgs/signup.png";

import { ROUTE_LIST } from "consts";

export default function Header() {
  const location = useLocation();

  const renderLinkList = () => {
    return (
      <ul className="flex gap-x-1">
        {ROUTE_LIST.map((d) => (
          <li
            className={`px-4 flex items-center justify-center rounded-lg ${
              d.path === location.pathname &&
              "bg-gradient-to-r from-green-400 to-green-500 h-12 text-white"
            }`}
            key={d.name}
          >
            <Link to={d.path}>{d.name}</Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="border-b">
      <header className="max-w-screen-lg mx-auto flex items-center justify-between h-20">
        <img className="object-contain" src={Logo} alt="logo" />

        <div className="flex items-center">
          <nav>{renderLinkList()}</nav>
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 h-12 w-40 rounded-2xl flex items-center justify-center gap-2 ml-16">
            <img src={SignupImg} alt="signup" />
            <span className="font-bold text-white">Free Signup</span>
          </div>
        </div>
      </header>
    </div>
  );
}
