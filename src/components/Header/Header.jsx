import "./Header.css";
import Navigation from "./Navigation";
import { navigations } from "./HeaderConstants";

const Header = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-3">
        <div className="logo">
            <img src="images/logo.png" alt="logo" />
        </div>
        <div className="navigations flex items-center gap-x-24">
            {
                navigations.map((navigation, index) => 
                    <Navigation nav={navigation} key={index}/>
                )
            }
        </div>
    </nav>
  )
}

export default Header