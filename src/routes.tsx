import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import DocPage from "./pages/DocPage";
import GettingStartePage from "./pages/GettingStartePage";
import ConfigurationPage from "./pages/ConfigurationPage";
import MysqlPage from "./pages/Database/MysqlPage";
import MongodbPage from "./pages/Database/MongodbPage";
import PostgresPage from "./pages/Database/PostgresPage";
import SqlserverPage from "./pages/Database/SqlserverPage";
import SqlitePage from "./pages/Database/SqlitePage";
import MigrationsPage from "./pages/ORM/MigrationsPage";
import SchemaPage from "./pages/ORM/SchemaPage";
import QueryBuilderPage from "./pages/ORM/QueryBuilderPage";
import EntityPage from "./pages/ORM/EntityPage";
import UtilsPage from "./pages/UtilsPage";

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/docs",
      element: <DocPage />,
    },
    {
      path: "/docs/getting-started",
      element: <GettingStartePage />,
    },
    {
      path: "/docs/configuration",
      element: <ConfigurationPage />,
    },
    {
      path: "/docs/database/mysql",
      element: <MysqlPage />,
    },
    {
      path: "/docs/database/mongodb",
      element: <MongodbPage />,
    },
    {
      path: "/docs/database/postgres",
      element: <PostgresPage />,
    },
    {
      path: "/docs/database/sqlserver",
      element: <SqlserverPage />,
    },
    {
      path: "/docs/database/sqlite",
      element: <SqlitePage />,
    },
    {
      path: "/docs/orm/migration",
      element: <MigrationsPage />,
    },
    {
      path: "/docs/orm/schema",
      element: <SchemaPage />,
    },
    {
      path: "/docs/orm/query-builder",
      element: <QueryBuilderPage />,
    },
    {
      path: "/docs/orm/entity",
      element: <EntityPage />,
    },
    {
      path: "/docs/utils",
      element: <UtilsPage />,
    },
  ],
  { basename: "/focca-orm" }
);

export default routes;
