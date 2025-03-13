import { Menu } from "lucide-react";
import React from "react";
import { Link } from "react-router";

type HeaderProps = {
  toggleSidebar: () => void;
};

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white py-5">
      <div className="container mx-auto px-6 flex items-center">
        <div className="flex-grow flex justify-center">
          <Link to="/" className="flex items-center">
            <img
              src="/focca.svg"
              alt="FOCCA Logo"
              className="h-8 text-blue-500"
            />
          </Link>
        </div>
        <button onClick={toggleSidebar} className="md:hidden text-gray-700 mr-4">
          <Menu />
        </button>
      </div>
    </header>
  );
};

export default Header;