import { Link } from "react-router";
import DocumentationLayout from "../../components/DocumentationLayout";
import Code from "../../components/Code";

const SchemaPage = () => {
  return (
    <DocumentationLayout title="Detailed Documentation on Schema Builder in FOCCA ORM">
      <div className="prose prose-green max-w-none">
        <h1 className="text-3xl font-bold mb-6 text-tree">
          Detailed Documentation on Schema Builder in FOCCA ORM
        </h1>

        <p className="mb-6 text-gray-700 leading-relaxed">
          The Schema Builder in FOCCA ORM provides a powerful, fluent interface
          for creating and modifying database tables. It offers a
          database-agnostic way to define your database structure without
          writing raw SQL. This documentation will guide you through using the
          Schema Builder to create tables, columns, indexes, and relationships.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          What is the Schema Builder?
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          The Schema Builder is a key component of the FOCCA ORM that allows you
          to define and manipulate database tables through an intuitive API.
          Instead of writing database-specific SQL statements, you can use the
          Schema Builder to create consistent, vendor-neutral database schemas
          that work across different database systems.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Benefits of Using Focca Schemas
        </h2>
        <ul className="list-disc list-inside mb-6 text-gray-700 leading-relaxed">
          <li>
            <strong>Organization:</strong> Schemas provide a structured way to
            define your database layout.
          </li>
          <li>
            <strong>Clarity:</strong> Clear definitions of tables and
            relationships help developers understand the data model.
          </li>
          <li>
            <strong>Maintainability:</strong> Easier to manage changes to the
            database structure over time.
          </li>
          <li>
            <strong>Collaboration:</strong> Facilitates teamwork by providing a
            common understanding of the database structure.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Core Components
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          The Schema Builder consists of three main classes:
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700 leading-relaxed">
          <li>
            <strong>Schema:</strong> The main entry point for creating,
            modifying, and dropping tables
          </li>
          <li>
            <strong>Blueprint:</strong> Defines the structure of a table
            including columns, indexes, and modifiers
          </li>
          <li>
            <strong>ForeignKeyDefinition:</strong> Handles the creation of
            foreign key constraints
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Creating Tables
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          To create a new table, use the static <code>create</code> method of
          the <code>Schema</code> class. This method accepts a table name and a
          callback function that receives a <code>Blueprint</code> instance to
          define the table structure.
        </p>
        <Code
          code={`
import { Schema } from '../Schema/Schema';

// Using async/await
async function createTable() {
  await Schema.create('users', (table) => {
    table.id(); // Creates an auto-incrementing primary key named 'id'
    table.string('name', 100);
    table.string('email').unique();
    table.timestamps(); // Adds created_at and updated_at columns
  });
}

// Using promise chain
Schema.create('products', (table) => {
  table.id();
  table.string('name');
  table.decimal('price', 8, 2);
  table.timestamps();
}).then(() => {
  console.log('Products table created successfully');
}).catch(error => {
  console.error('Error creating products table:', error);
});
`}
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Column Types
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          The Blueprint class provides various methods for defining different
          column types:
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          String & Text Types
        </h3>
        <Code
          code={`
table.string('username', 50);     // VARCHAR(50)
table.char('code', 10);           // CHAR(10) 
table.text('description');        // TEXT
table.mediumText('content');      // MEDIUMTEXT
table.longText('article');        // LONGTEXT
`}
        />

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Numeric Types
        </h3>
        <Code
          code={`
table.integer('count');           // INTEGER
table.bigInteger('big_number');   // BIGINT
table.unsignedBigInteger('views'); // UNSIGNED BIGINT
table.decimal('price', 8, 2);     // DECIMAL(8,2)
table.float('amount', 8, 2);      // FLOAT(8,2)
table.double('measurement');      // DOUBLE
`}
        />

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Boolean and Date Types
        </h3>
        <Code
          code={`
table.boolean('is_active');       // BOOLEAN/TINYINT
table.date('birth_date');         // DATE
table.dateTime('published_at');   // DATETIME
table.time('opening_time');       // TIME
table.timestamp('last_login');    // TIMESTAMP
`}
        />

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Special Types
        </h3>
        <Code
          code={`
table.json('metadata');           // JSON
table.binary('file_data');        // BLOB
table.uuid('id');                 // VARCHAR(36)
table.enum('status', ['pending', 'active', 'cancelled']); // ENUM
`}
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Column Modifiers
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          After defining a column, you can chain modifiers to customize it
          further:
        </p>
        <Code
          code={`
// Make column nullable
table.string('middle_name').nullable();

// Set a default value
table.boolean('is_active').default(true);

// Make unsigned (for numeric types)
table.integer('position').unsigned();

// Make unique
table.string('email').unique();

// Create an index
table.string('username').index();

// Set as primary key
table.uuid('custom_id').primary();

// Not nullable (this is the default, but can be explicit)
table.string('password').notNullable();
`}
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Timestamps and Soft Deletes
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          FOCCA ORM provides convenient methods for adding timestamp columns and
          implementing soft deletes:
        </p>
        <Code
          code={`
// Add created_at and updated_at columns
table.timestamps();

// Add deleted_at for soft deletes
table.softDeletes();
`}
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Defining Relationships
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Foreign key relationships can be defined using the fluent interface
          provided by the Schema Builder:
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Single Column Foreign Key
        </h3>
        <Code
          code={`
await Schema.create('posts', (table) => {
  table.id();
  table.string('title');
  table.text('content');
  table.unsignedBigInteger('user_id');
  table.timestamps();
  
  // Define foreign key constraint
  table.foreign('user_id')
    .references('id')
    .on('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')
    .getForeignKeyDefinition();
});
`}
        />

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Polymorphic Relationships
        </h3>
        <Code
          code={`
await Schema.create('images', (table) => {
  table.id();
  table.string('url');
  // This will create 'imageable_type' and 'imageable_id' columns
  table.morphs('imageable');
  table.timestamps();
});
`}
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Indexes
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Indexes improve query performance and can be created in several ways:
        </p>
        <Code
          code={`
// Method 1: Index on a column
table.string('email').index();

// Method 2: Index on one or more columns
table.index(['first_name', 'last_name']);

// Create a unique index
table.string('username').unique();
`}
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Dropping Tables
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          To drop a table if it exists:
        </p>
        <Code
          code={`
await Schema.dropIfExists('users');
`}
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Complete Example
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Here's a comprehensive example showing a schema with multiple tables
          and relationships:
        </p>
        <Code
          code={`
// Create users table
await Schema.create('users', (table) => {
  table.id();
  table.string('name');
  table.string('email').unique();
  table.string('password');
  table.timestamp('email_verified_at').nullable();
  table.timestamps();
  table.softDeletes();
});

// Create categories table
await Schema.create('categories', (table) => {
  table.id();
  table.string('name');
  table.string('slug').unique();
  table.text('description').nullable();
  table.timestamps();
});

// Create posts table with relationships
await Schema.create('posts', (table) => {
  table.id();
  table.string('title');
  table.string('slug').unique();
  table.text('content');
  table.enum('status', ['draft', 'published', 'archived']).default('draft');
  table.unsignedBigInteger('user_id');
  table.unsignedBigInteger('category_id');
  table.timestamps();
  table.softDeletes();
  
  // Define foreign key relationships
  table.foreign('user_id')
    .references('id')
    .on('users')
    .onDelete('CASCADE')
    .getForeignKeyDefinition();
    
  table.foreign('category_id')
    .references('id')
    .on('categories')
    .onDelete('CASCADE')
    .getForeignKeyDefinition();
});

// Create pivot table for many-to-many relationship
await Schema.create('post_tag', (table) => {
  table.unsignedBigInteger('post_id');
  table.unsignedBigInteger('tag_id');
  
  // Primary key on the combination
  table.index(['post_id', 'tag_id']);
  
  // Foreign keys
  table.foreign('post_id')
    .references('id')
    .on('posts')
    .onDelete('CASCADE')
    .getForeignKeyDefinition();
    
  table.foreign('tag_id')
    .references('id')
    .on('tags')
    .onDelete('CASCADE')
    .getForeignKeyDefinition();
});
`}
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Database Driver Support
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          The Schema Builder supports multiple database drivers, automatically
          adapting the SQL syntax to match the specific requirements of each:
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700 leading-relaxed">
          <li>MySQL/MariaDB</li>
          <li>PostgreSQL</li>
          <li>SQLite</li>
          <li>SQL Server</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Best Practices
        </h2>
        <ul className="list-disc list-inside mb-6 text-gray-700 leading-relaxed">
          <li>
            <strong>Define relationships correctly:</strong> Always ensure
            foreign keys reference the correct columns and tables.
          </li>
          <li>
            <strong>Use proper column types:</strong> Choose the appropriate
            data type for each column based on the data it will store.
          </li>
          <li>
            <strong>Add indexes strategically:</strong> Add indexes to columns
            that will be frequently searched or used in JOIN operations.
          </li>
          <li>
            <strong>Create tables in the right order:</strong> Create parent
            tables before child tables to ensure foreign key constraints can be
            properly established.
          </li>
          <li>
            <strong>Use transactions for related tables:</strong> When creating
            multiple related tables, consider wrapping them in a transaction to
            ensure consistency.
          </li>
          <li>
            <strong>Use UUID for distributed systems:</strong> Consider using
            UUIDs instead of auto-incrementing IDs for distributed systems.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Using Schema in Migrations
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          The Schema Builder is typically used within migration files to create
          and modify database tables:
        </p>
        <Code
          code={`
import { Migration } from '../cli/Migration';
import { Schema } from '../Schema/Schema';

export class CreateUsersTable extends Migration {
    async up(): Promise<void> {
        await Schema.create('users', (table) => {
            table.id();
            table.string('name');
            table.string('email').unique();
            table.string('password');
            table.timestamps();
        });
    }

    async down(): Promise<void> {
        await Schema.dropIfExists('users');
    }
}
`}
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Conclusion
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          The Schema Builder in FOCCA ORM provides a powerful, intuitive way to
          define and manage your database structure. By using this fluent
          interface, you can create complex database schemas without writing
          vendor-specific SQL, ensuring your application remains portable across
          different database systems. Leverage the various column types,
          modifiers, and relationship methods to create a well-structured
          database that supports your application's needs.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Next Steps
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          After understanding how to create database schemas, you might want to
          learn about querying data using the ORM. You can find the Query
          Builder documentation
          <Link to="/docs/orm/query-builder" className="text-[#1ED9A4]"> Query Builder </Link> or
          <Link to="/docs/orm/entity" className="text-[#1ED9A4]"> Entities</Link>          
        </p>
      </div>
    </DocumentationLayout>
  );
};

export default SchemaPage;
