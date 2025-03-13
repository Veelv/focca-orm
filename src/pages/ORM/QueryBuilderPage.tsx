import { Link } from "react-router";
import DocumentationLayout from "../../components/DocumentationLayout";
import Code from "../../components/Code";

const QueryBuilderPage = () => {
  return (
    <DocumentationLayout title="Detailed Documentation on Query Builder in FOCCA ORM">
      <div className="prose prose-green max-w-none">
        <h1 className="text-3xl font-bold mb-6 text-tree">
          Detailed Documentation on Query Builder in FOCCA ORM
        </h1>

        <p className="mb-6 text-gray-700 leading-relaxed">
          The Query Builder in FOCCA ORM provides a fluent interface for
          constructing and executing database queries. It allows developers to
          build complex SQL queries without writing raw SQL, making it easier to
          interact with the database in a more structured way. This
          documentation will guide you through using the Query Builder to
          perform various database operations.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          What is the Query Builder?
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          The Query Builder is a powerful tool that allows you to construct SQL
          queries programmatically. It abstracts the underlying SQL syntax and
          provides a fluent interface for building queries, making it easier to
          read and maintain your code.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Core Features
        </h2>
        <ul className="list-disc list-inside mb-6 text-gray-700 leading-relaxed">
          <li>
            <strong>Fluent Interface:</strong> Chain methods to build queries in
            a readable manner.
          </li>
          <li>
            <strong>Dynamic Query Building:</strong> Construct queries based on
            runtime conditions.
          </li>
          <li>
            <strong>Support for Various Operations:</strong> Perform SELECT,
            INSERT, UPDATE, and DELETE operations easily.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Basic Usage
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          To use the Query Builder, you first need to create an instance by
          passing a database connection. Then, you can chain methods to build
          your query.
        </p>
        <Code
          code={`
import { Connection } from './Connection';
import { QueryBuilder } from './QueryBuilder';

const connection = new Connection();
const queryBuilder = new QueryBuilder(connection);

// Example of a SELECT query
const users = await queryBuilder
  .table('users')
  .select('id', 'name', 'email')
  .where('is_active', '=', true)
  .orderBy('created_at', 'desc')
  .get();
`}
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Query Methods
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Selecting Data
        </h3>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Use the <code>select</code> method to specify which fields to retrieve
          from the database.
        </p>
        <Code
          code={`
const users = await queryBuilder
  .table('users')
  .select('id', 'name', 'email')
  .get();
`}
        />

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Filtering Results
        </h3>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Use the <code>where</code> method to filter results based on specific
          conditions.
        </p>
        <Code
          code={`
const activeUsers = await queryBuilder
  .table('users')
  .where('is_active', '=', true)
  .get();
`}
        />

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Inserting Data
        </h3>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Use the <code>insert</code> method to add new records to a table.
        </p>
        <Code
          code={`
await queryBuilder
  .table('users')
  .insert({ name: 'John Doe', email: 'john@example.com', is_active: true });
`}
        />

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Updating Data
        </h3>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Use the <code>update</code> method to modify existing records.
        </p>
        <Code
          code={`
await queryBuilder
  .table('users')
  .where('id', '=', 1)
  .update({ is_active: false });
`}
        />

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Deleting Data
        </h3>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Use the <code>delete</code> method to remove records from a table.
        </p>
        <Code
          code={`
await queryBuilder
  .table('users')
  .where('id', '=', 1)
  .delete();
`}
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Advanced Querying
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          The Query Builder supports advanced querying features such as joining
          tables, ordering results, and limiting the number of results.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Joining Tables
        </h3>
        <Code
          code={`
const postsWithUsers = await queryBuilder
  .table('posts')
  .join('users', 'posts.user_id', '=', 'users.id')
  .select('posts.title', 'users.name')
  .get();
`}
        />

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Ordering Results
        </h3>
        <Code
          code={`
const orderedUsers = await queryBuilder
  .table('users')
  .orderBy('created_at', 'asc')
  .get();
`}
        />

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Limiting Results
        </h3>
        <Code
          code={`
const limitedUsers = await queryBuilder
  .table('users')
  .limit(10)
  .get();
`}
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Conclusion
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          The Query Builder in FOCCA ORM provides a flexible and powerful way to
          interact with your database. By using its fluent interface, you can
          construct complex queries without the need for raw SQL, making your
          code cleaner and easier to maintain.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Next Steps
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          After mastering the Query Builder, you may want to explore more
          advanced features of FOCCA ORM, such as relationships and migrations.
          You can find the Schema Builder documentation
          <Link to="/docs/orm/schema-builder" className="text-[#1ED9A4]">
            {" "}
            here
          </Link>
          .
        </p>
      </div>
    </DocumentationLayout>
  );
};

export default QueryBuilderPage;
