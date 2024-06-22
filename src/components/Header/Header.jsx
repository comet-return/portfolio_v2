import "./Header.css";
import Navigation from "./Navigation";
import { navigations } from "../../utils/HeaderConstants";
import { HeaderAnimation } from "../../utils/Animation";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Header = () => {
    HeaderAnimation();
  const showDropdown = () => {
    let dropdown = document.querySelector(".dropdown");
    dropdown.classList.toggle("hidden");
  };
  return (
    <nav className="flex md:justify-between justify-around items-center px-10 py-4">
      <div className="logo">
        <h1 className="text-3xl">Mohammad <span>Zaid</span></h1>
      </div>
      <div className="navs md:flex hidden items-center lg:gap-x-24 gap-x-12">
        {navigations.map((navigation, index) => (
          <Navigation nav={navigation} key={index} />
        ))}
      </div>

      {/* hamburger Menu */}
      <div className="md:hidden block relative">
        <button className="text-2xl" onClick={showDropdown}>
            <HiOutlineMenuAlt1 />
        </button>
        <div className="dropdown hidden space-y-3 absolute z-10 px-16 py-6 rounded text-center right-0">
          {navigations.map((navigation, index) => (
            <Navigation nav={navigation} key={index} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
