import Logo from "assets/imgs/logo.svg";

export default function Header() {
  return (
    <div className="container mx-auto">
      <img className="object-contain" src={Logo} alt="logo" />
    </div>
  );
}
