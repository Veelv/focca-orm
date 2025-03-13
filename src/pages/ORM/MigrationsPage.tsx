import { Link } from "react-router";
import DocumentationLayout from "../../components/DocumentationLayout";
import Code from "../../components/Code";

const MigrationsPage = () => {
  return (
    <DocumentationLayout title="Detailed Documentation on Migrations in FOCCA ORM">
      <div className="prose prose-green max-w-none">
        <h1 className="text-3xl font-bold mb-6 text-tree">
          Detailed Documentation on Migrations in FOCCA ORM
        </h1>

        <p className="mb-6 text-gray-700 leading-relaxed">
          Migrations are an essential part of database management in applications, allowing you to version and apply changes to the database structure in a controlled manner. The FOCCA ORM provides a robust interface for creating, applying, and reverting migrations. Below, you will find a detailed explanation of how to use migrations in FOCCA.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          What are Migrations?
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Migrations are scripts that define changes to the database structure, such as creating or modifying tables and columns. They allow you to keep track of changes to the database over time, facilitating team collaboration and the implementation of new features. Migrations help ensure that all developers and production environments are always in sync with the database structure.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Benefits of Migrations
        </h2>
        <ul className="list-disc list-inside mb-6 text-gray-700 leading-relaxed">
          <li><strong>Versioning:</strong> Each migration is versioned, allowing you to know exactly what changes were made and when.</li>
          <li><strong>Reversibility:</strong> Migrations can be reverted, allowing you to undo changes if necessary.</li>
          <li><strong>Collaboration:</strong> Facilitates teamwork, as all developers can apply the same migrations in their local environments.</li>
          <li><strong>Automation:</strong> Allows for the automation of the database update process, reducing the possibility of manual errors.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Creating a New Migration
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          To create a new migration, you can use the CLI command <code>create:migration</code>. This command generates a migration file with a timestamp and the specified name.
        </p>
        <Code code={`npx focca create:migration MigrationName`} />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Migration File Structure
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Each migration file follows a standard structure that includes two main functions: <code>up()</code> and <code>down()</code>.
        </p>
        <Code code={`
import { Migration } from '../cli/Migration';

export class MigrationName extends Migration {
    async up(): Promise<void> {
        // Code to apply the migration (e.g., create tables, add columns)
    }

    async down(): Promise<void> {
        // Code to revert the migration (e.g., drop tables, remove columns)
    }
}`} />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Running Migrations
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          After creating your migrations, you can apply them to the database using the <code>migrate</code> command.
        </p>
        <Code code={`npx focca migrate`} />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Example Migration
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Here is a practical example of a migration that creates a users table:
        </p>
        <Code code={`
import { Migration } from '../cli/Migration';
import { Schema } from '../Schema/Schema';

export class CreateUsersTable extends Migration {
    async up(): Promise<void> {
        await Schema.create('users', (table) => {
            table.id(); // Creates an ID column
            table.string('name'); // Creates a name column
            table.string('email').unique(); // Creates an email column with a unique constraint
            table.timestamps(); // Creates created_at and updated_at columns
        });
    }

    async down(): Promise<void> {
        await Schema.dropIfExists('users'); // Drops the users table
    }
}`} />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Reverting Migrations
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          If you need to revert the last applied migration, use the <code>rollback</code> command.
        </p>
        <Code code={`npx focca rollback`} />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Updating All Migrations
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          To update the database by rolling back all migrations and reapplying them, you can use the <code>refresh</code> command.
        </p>
        <Code code={`npx focca refresh`} />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Conclusion
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Migrations in the FOCCA ORM provide a powerful and flexible way to manage the database structure. With the ability to create, apply, and revert migrations, you can ensure that your database evolves in a controlled and organized manner. Use the commands and migration structure to keep your database up to date and in line with your application's needs.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Next Steps
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
            After creating a migration, you can see the step by step how to create the schemas. You can find the setup guide 
            <Link to="/docs/orm/schema" className="text-[#1ED9A4]"> here</Link>.
        </p>
      </div>
    </DocumentationLayout>
  );
};

export default MigrationsPage;