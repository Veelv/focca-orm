export type MenuItem = {
    id: string;
    label: string;
    href?: string;
    subItems?: MenuItem[];
  };
  
  export type LayoutProps = {
    children: React.ReactNode;
  };
  
  export type SidebarProps = {
    menuItems: MenuItem[];
    isOpen: boolean;
    toggleSidebar: () => void;
  };
  
  export type ContentContainerProps = {
    children: React.ReactNode;
  };
  
  export type HeaderProps = {
    toggleSidebar: () => void;
  };