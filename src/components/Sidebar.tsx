import React from 'react';
import { Link } from 'react-router';
import MenuItemComponent, { MenuItem } from './MenuItemComponent';

type SidebarProps = {
  menuItems: MenuItem[];
  isOpen: boolean;
  toggleSidebar: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ menuItems, isOpen }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"></div>
      )}

      {/* Sidebar - fixed on desktop, slide on mobile */}
      <aside 
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } md:fixed md:w-64 md:z-10 md:h-full md:shadow`}
      >
        <div className="px-4 py-2 h-full overflow-y-auto">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <Link to="/" className="flex">
              <img
                src="/focca.svg"
                alt="FOCCA Logo"
                className="h-8 text-blue-500"
              />
              <span className="ml-3 font-semibold text-gray-800"> &nbsp;</span>
            </Link>
          </div>

          <h3 className="text-xs uppercase font-bold text-gray-500 mb-4 tracking-wider">Documentação</h3>
          <div className="space-y-1">
            {menuItems.map((item) => (
              <MenuItemComponent key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-gray-200">
            <h3 className="text-xs uppercase font-bold text-gray-500 mb-4 tracking-wider">Recursos</h3>
            <a href="/docs/utils" className="block py-2 px-3 text-gray-700 hover:text-green-600 transition-colors">
              Utils
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
