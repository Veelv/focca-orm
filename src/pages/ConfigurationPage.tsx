import Code from "../components/Code";
import DocumentationLayout from "../components/DocumentationLayout";
import { Link } from "react-router";

const ConfigurationPage = () => {
  return (
    <DocumentationLayout title="FOCCA Library Configuration">
      <div className="prose prose-green max-w-none">
        <h1 className="text-3xl font-bold mb-6 text-tree">
          FOCCA Library Configuration
        </h1>

        <p className="mb-6 text-gray-700 leading-relaxed">
          After installing the FOCCA library, the next step is to configure the
          database connection. Follow the steps below to complete this
          configuration.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Step 1: Generate the Configuration File
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          To configure the database connection, use the following command.
          Replace mysql with the type of database you want to configure (for
          example, mongodb, sqlite, etc.):
        </p>
        <Code
          tabs={[{ label: "Bash", code: "npx focca config:database mysql" }]}
        />
        <p className="mb-6 text-gray-700 leading-relaxed">
          This command will create a focca.config.json file in the root of your
          project, containing the necessary settings to connect to the specified
          database.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Step 2: Check and Edit the Configuration File
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          After generating the configuration file, open the focca.config.json
          and verify that the connection information is correct. The file should
          have a structure similar to this:
        </p>
        <Code
          code={`{
  "default": "mysql",
  "connections": {
    "mysql": {
      "driver": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "your_username",
      "password": "your_password",
      "database": "your_database"
    }
  }
}`}
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Step 3: Adjust the Settings
        </h2>
        <div className="space-y-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 rounded-full bg-[#1ED9A4] mr-3"></div>
            </div>
            <div>
              <p className="text-gray-700">
                <span className="font-bold">driver:</span> The type of database
                you are using (for example, mysql, mongodb, sqlite, postgres,
                sqlserver).
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 rounded-full bg-[#1ED9A4] mr-3"></div>
            </div>
            <div>
              <p className="text-gray-700">
                <span className="font-bold">host:</span> The address of the
                database server (usually localhost for local development).
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 rounded-full bg-[#1ED9A4] mr-3"></div>
            </div>
            <div>
              <p className="text-gray-700">
                <span className="font-bold">port:</span> The port on which the
                database is listening (for example, 3306 for MySQL).
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 rounded-full bg-[#1ED9A4] mr-3"></div>
            </div>
            <div>
              <p className="text-gray-700">
                <span className="font-bold">username:</span> The username for
                database authentication.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 rounded-full bg-[#1ED9A4] mr-3"></div>
            </div>
            <div>
              <p className="text-gray-700">
                <span className="font-bold">password:</span> The password
                corresponding to the username.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 rounded-full bg-[#1ED9A4] mr-3"></div>
            </div>
            <div>
              <p className="text-gray-700">
                <span className="font-bold">database:</span> The name of the
                database you want to connect to.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
            Next Steps
          </h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
          After setting up the FOCCA library, the next step is to use the database. You can find out how to use the database and configure the ideal one for your project
            <div className="flex">
              <Link to="/docs/database/mysql" className="text-[#1ED9A4]">
                Focus Mysql
              </Link>

              <Link to="/docs/database/mongodb" className="text-[#1ED9A4] ml-3">
                Focus Mongodb
              </Link>

              <Link to="/docs/database/postgres" className="text-[#1ED9A4] ml-3">
                Focus Postgres
              </Link>

              <Link to="/docs/database/sqlserver" className="text-[#1ED9A4] ml-3">
                Focus Sqlserver
              </Link>

              <Link to="/docs/database/sqlite" className="text-[#1ED9A4] ml-3">
                Focus Sqlite
              </Link>
            </div>
          </p>
        </div>
      </div>
    </DocumentationLayout>
  );
};

export default ConfigurationPage;
