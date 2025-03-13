import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ContentContainer from './ContentContainer';
import { MenuItem } from './MenuItemComponent';
import Footer from './Footer';
import Seo from './Seo';

// Definição do menu de documentação
const documentationMenuItems: MenuItem[] = [
  {
    id: 'introduction',
    label: 'Introduction',
    href: '/docs'
  },
  {
    id: 'getting-started',
    label: 'Getting Started',
    href: '/docs/getting-started'
  },
  {
    id: 'configuration',
    label: 'Configuration',
    href: '/docs/configuration'
  },
  {
    id: 'database',
    label: 'Database',
    subItems: [
      { id: 'mysql', label: 'Using Mysql', href: '/docs/database/mysql' },
      { id: 'mongo', label: 'Using Mongodb', href: '/docs/database/mongodb' },
      { id: 'postgres', label: 'Using Postgres', href: '/docs/database/postgres' },
      { id: 'sqlserver', label: 'Using Sqlserver', href: '/docs/database/sqlserver' },
      { id: 'sqlite', label: 'Using Sqlite', href: '/docs/database/sqlite' }
    ]
  },
  {
    id: 'migration',
    label: 'ORM',
    subItems: [
      { id: 'migration', label: 'Migrations', href: '/docs/orm/migration' },
      { id: 'schema', label: 'Schemas', href: '/docs/orm/schema' },
      { id: 'query-builder', label: 'Query Builders', href: '/docs/orm/query-builder' },
      { id: 'entity', label: 'Entities', href: '/docs/orm/entity' },
    ]
  },
];

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  keywords?: string;
}

const DocumentationLayout: React.FC<LayoutProps> = ({ children, title, description, keywords }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen bg-white">
      <Seo title={title} description={description} keywords={keywords} />
      <Header toggleSidebar={toggleSidebar} />

      <div className="flex">
        <Sidebar 
          menuItems={documentationMenuItems} 
          isOpen={sidebarOpen} 
          toggleSidebar={toggleSidebar} 
        />
        
        {/* Main content area with left margin to account for fixed sidebar */}
        <div className="flex-1 md:ml-64">
          <ContentContainer>{children}</ContentContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocumentationLayout;
