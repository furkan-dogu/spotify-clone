import Navigation from "./navbar/Navigation";
import Auth from "./navbar/Auth";
import { useMatch } from "react-router-dom";

const Navbar = () => {

  const searchMatch = useMatch("/search")
  
  return (
    <nav className="h-[3.75rem] flex items-center justify-between px-8">
      <Navigation />
      {searchMatch && (
        <div>
          Search Kısmındasın
        </div>
      )}
      <Auth />
    </nav>
  );
};

export default Navbar;
