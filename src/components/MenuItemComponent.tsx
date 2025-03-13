import React, { useState } from "react";

export type MenuItem = {
  id: string;
  label: string;
  href?: string;
  subItems?: MenuItem[];
};

// MenuItem Component
const MenuItemComponent: React.FC<{ item: MenuItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubItems = item.subItems && item.subItems.length > 0;

  return (
    <div className="mb-2">
      <div
        className={`flex items-center justify-between py-2 px-3 rounded-md cursor-pointer ${
          hasSubItems ? "hover:bg-gray-100" : "hover:text-green-600"
        }`}
        onClick={() => hasSubItems && setIsOpen(!isOpen)}
      >
        {item.href ? (
          <a
            href={item.href}
            className="w-full text-gray-700 hover:text-green-600 transition-colors"
          >
            {item.label}
          </a>
        ) : (
          <span className="text-gray-700 font-medium">{item.label}</span>
        )}
        {hasSubItems && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transition-transform ${
              isOpen ? "transform rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </div>
      {hasSubItems && isOpen && (
        <div className="pl-4 mt-1 border-l-2 border-gray-200">
          {item.subItems?.map((subItem) => (
            <a
              key={subItem.id}
              href={subItem.href}
              className="block py-2 px-3 text-sm text-gray-600 hover:text-green-600 transition-colors"
            >
              {subItem.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItemComponent;
