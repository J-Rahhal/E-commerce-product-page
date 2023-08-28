import Menu from "../assets/images/icon-menu.svg";
import Logo from "../assets/images/logo.svg";
import Cart from "../assets/images/icon-cart.svg";
import Profile from "../assets/images/image-avatar.png";
const Nav = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b-2">
      <div className="flex items-center gap-6">
        <img src={Menu} alt="Mobile menu" />
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex items-center justify-end gap-6">
        <img src={Cart} alt="Cart icon" />
        <img src={Profile} alt="Profile picture" className="w-1/5" />
      </div>
    </nav>
  );
};
export default Nav;
