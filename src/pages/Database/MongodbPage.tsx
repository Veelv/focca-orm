import DocumentationLayout from "../../components/DocumentationLayout";
import Code from "../../components/Code"; // Make sure the path is correct
import { Link } from "react-router";

const MongoPage = () => {
    return (
        <DocumentationLayout title="FOCCA ORM Documentation for MongoDB">
            <div className="prose prose-green max-w-none">
                <h1 className="text-3xl font-bold mb-6 text-tree">
                    FOCCA ORM Documentation for MongoDB
                </h1>

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
                    To use MongoDB in Focca Library, follow the steps below:
                </h2>

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
                    Requirements
                </h2>
                <ul className="mb-6 text-gray-700 leading-relaxed">
                    <li>Node.js installed</li>
                    <li>MongoDB running</li>
                    <li>mongodb package installed</li>
                </ul>
                <Code
                    tabs={[{ label: "NPM", code: "npm install mongodb" }]}
                />

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
                    Database Configuration
                </h2>
                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">
                    Create the Configuration File
                </h3>
                <p className="mb-6 text-gray-700 leading-relaxed">
                    FOCCA uses a configuration file called <code>focca.config.json</code> to manage connections to the database. You can create this file manually or use the CLI command to generate the configuration.
                </p>
                <Code
                    code={`{
  "default": "mongodb",
  "connections": {
    "mongodb": {
      "driver": "mongodb",
      "url": "mongodb://localhost:27017/your_database_name"
    }
  }
}`}
                />
                <p className="mb-6 text-gray-700 leading-relaxed">
                    Note: Replace <code>your_database_name</code> with the name of the database you want to use.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">
                    Use the CLI Command to Create the Configuration
                </h3>
                <p className="mb-6 text-gray-700 leading-relaxed">
                    Run the following command to create the database configuration:
                </p>
                <Code
                    tabs={[{ label: "Bash", code: "npx focca config:database mongodb" }]}
                />
                <p className="mb-6 text-gray-700 leading-relaxed">
                    This will generate a <code>focca.config.json</code> file with the default settings for MongoDB.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
                    Connecting to the Database
                </h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                    To connect to the MongoDB database, you can use the <code>Database</code> class from FOCCA. The default connection will be the one defined in the configuration file.
                </p>
                <Code
                    code={`import { Database } from 'focca';

async function initialize() {
  await Database.getConnection('mongodb');
  console.log('Connection to MongoDB established successfully!');
}

initialize().catch(console.error);`}
                />

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
                    Creating Migrations
                </h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                    Although MongoDB is a NoSQL database and does not use migrations in the same way as relational databases, you can use FOCCA to manage data structure and perform update operations.
                </p>
                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">
                    Create a New Migration (Optional)
                </h3>
                <Code
                    tabs={[{ label: "Bash", code: "npx focca create:migration MigrationName" }]}
                />
                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">
                    Migration Structure
                </h3>
                <p className="mb-6 text-gray-700 leading-relaxed">
                    The generated migration will have an <code>up</code> method to apply changes and a <code>down</code> method to revert changes.
                </p>
                <Code
                    code={`import { Migration } from 'focca';

export default class MigrationName extends Migration {
  async up() {
    // Code to update data structure
  }

  async down() {
    // Code to revert data structure
  }
}`}
                />

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
                    Running Migrations
                </h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                    To apply all pending migrations, run:
                </p>
                <Code
                    tabs={[{ label: "Bash", code: "npx focca migrate" }]}
                />

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
                    Creating Models
                </h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                    Models represent the entities in your database.
                </p>
                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">
                    Create a New Model
                </h3>
                <Code
                    tabs={[{ label: "Bash", code: "npx focca create:entity ModelName" }]}
                />
                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">
                    Model Structure
                </h3>
                <Code
                    code={`import { Entity } from 'focca';

export class ModelName extends Entity {
  protected static collection = 'collection_name'; // Collection name in MongoDB
  protected static primaryKey = '_id'; // Default primary key for MongoDB
  protected static fillable = ['field1', 'field2'];
}`}
                />

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
                    Running Seeders
                </h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                    Seeders are used to populate the database with initial data.
                </p>
                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">
                    Create a New Seeder
                </h3>
                <Code
                    tabs={[{ label: "Bash", code: "npx focca create:seeder SeederName" }]}
                />
                <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">
                    Seeder Structure
                </h3>
                <Code
                    code={`import { Seeder } from 'focca';

export class SeederName extends Seeder {
  async run() {
    await this.insert([
      { field1: 'value1', field2: 'value2' },
      { field1: 'value3', field2: 'value4' },
    ]);
  }
}`}
                />

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
                    Running Seeders
                </h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                    To run a specific seeder, use:
                </p>
                <Code
                    tabs={[{ label: "Bash", code: "npx focca run:seeder SeederName" }]}
                />

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
                    Final Considerations
                </h2>
                <ul className="mb-6 text-gray-700 leading-relaxed">
                    <li>Ensure that MongoDB is running and accessible.</li>
                    <li>Check the permissions of the user configured in the configuration file.</li>
                    <li>Refer to the FOCCA documentation for more details on advanced features and customizations.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
                    Example of Available CLI Commands:
                </h2>
                <ul className="mb-6 text-gray-700 leading-relaxed">
                    <li><code>info</code>: Displays information about the application.</li>
                    <li><code>create:migration</code>: Creates a new migration.</li>
                    <li><code>create:entity</code>: Creates a new model.</li>
                    <li><code>create:seeder</code>: Creates a new seeder.</li>
                    <li><code>migrate</code>: Executes all pending migrations.</li>
                    <li><code>rollback</code>: Reverts the last migration.</li>
                    <li><code>refresh</code>: Restores the database and reapplies migrations.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
                    Next Steps
                </h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                    Check the documentation for more information:
                </p>
                <div className="flex">
                    <Link to="/docs/database/mysql" className="text-[#1ED9A4]">Focus Mysql</Link>
                    <Link to="/docs/database/sqlite" className="text-[#1ED9A4] ml-3">Focus Sqlite</Link>
                    <Link to="/docs/database/postgres" className="text-[#1ED9A4] ml-3">Focus Postgres</Link>
                    <Link to="/docs/database/sqlserver" className="text-[#1ED9A4] ml-3">Focus SqlServer</Link>
                </div>
            </div>
        </DocumentationLayout>
    );
}

export default MongoPage;