import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { Link } from "react-router-dom";
import {CitySearch} from "./CitySearch";

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="sticky top-0 z-50 bg-background/95 border-b backdrop-blur backdrop-filter supports-[backdrop-filter]:bg-background/60 py-2">
      <div className="container flex justify-between items-center h-16">
        <Link to={"/"}>
          <img
            src={
              theme === "dark"
                ? "/images/pooya-samimi-dark.png"
                : "/images/pooya-samimi-light.png"
            }
            alt="logo"
            className="h-14"
          />
        </Link>
        <div className="flex gap-4">
          <CitySearch />
          <div
            className={`flex items-center cursor-pointer transition-transform duration-500 ${
              theme === "dark" ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="w-6 h-6 text-yellow-500" />
            ) : (
              <Moon className="w-6 h-6 text-blue-500" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
