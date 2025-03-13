import { Link } from "react-router";
import DocumentationLayout from "../../components/DocumentationLayout";
import Code from "../../components/Code";

const EntityPage = () => {
  return (
    <DocumentationLayout title="Detailed Documentation on Entity Class in FOCCA ORM">
      <div className="prose prose-green max-w-none">
        <h1 className="text-3xl font-bold mb-6 text-tree">
          Detailed Documentation on Entity Class in FOCCA ORM
        </h1>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Introduction
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          This TypeScript ORM (Object-Relational Mapping) provides an elegant
          interface for interacting with the database through models. The Entity
          class is the base for all models that represent database tables. The
          ORM implements the Active Record pattern, where each instance of the
          Entity class corresponds to a row in the database table and offers
          methods for CRUD (Create, Read, Update, Delete) operations.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Entity Class
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          The Entity class serves as the foundation for all database models. It
          provides methods for CRUD operations, event handling, and relationship
          management.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Static Properties
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          The Entity class has several configurable static properties:
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700 leading-relaxed">
          <li>
            <strong>table:</strong> Name of the database table.
          </li>
          <li>
            <strong>primaryKey:</strong> Name of the primary key (default:
            "id").
          </li>
          <li>
            <strong>connection:</strong> Name of the database connection.
          </li>
          <li>
            <strong>timestamps:</strong> Enables/disables automatic timestamp
            fields.
          </li>
          <li>
            <strong>softDeletes:</strong> Enables/disables soft deletes.
          </li>
          <li>
            <strong>fillable:</strong> Array of attributes that can be
            mass-assigned.
          </li>
          <li>
            <strong>hidden:</strong> Array of attributes that should be hidden
            when converting to JSON.
          </li>
          <li>
            <strong>casts:</strong> Mapping of attributes to their data types.
          </li>
          <li>
            <strong>appends:</strong> Array of attributes to be added to the
            model.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Basic Configuration
        </h2>
        <Code
          code={`
import { Entity } from "./path/to/Entity";

export class User extends Entity {
  protected static table = "users";
  protected static primaryKey = "id";
  protected static fillable = ["name", "email", "password"];
  protected static hidden = ["password"];
  protected static casts = {
    id: "integer",
    is_admin: "boolean",
    metadata: "object",
    created_at: "date"
  };
}
`}
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Defining Models
        </h2>
        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Basic Example
        </h3>
        <Code
          code={`
import { Entity } from "focca";

export class Product extends Entity {
  protected static table = "products";
  protected static fillable = ["name", "price", "description", "category_id"];
  protected static casts = {
    price: "float",
    category_id: "integer"
  };
}
`}
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Boot Method
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          The <code>protected static boot()</code> method is automatically
          called when the class is loaded. It allows you to define
          initialization logic that should be executed once for the class, such
          as registering events or configuring static properties.
        </p>
        <p className="mb-6 text-gray-700 leading-relaxed">
          You can override this method in your model class to add custom logic.
          For example, you can register events that should be triggered at
          specific moments in the model's lifecycle, such as before creating or
          updating a record.
        </p>
        <Code
          code={`
import { Entity } from "focca";

export class User extends Entity {
  protected static table = "users";

  protected static boot(): void {
    super.boot(); // Call the parent's boot method

    // Register an event to hash the password before saving
    this.saving(function(user: User) {
      if (user.getAttribute("password")) {
        user.setAttribute("password", hashPassword(user.getAttribute("password")));
      }
    });

    // Register an event to send an email after creating the user
    this.created(function(user: User) {
      sendWelcomeEmail(user.getAttribute("email"));
    });
  }
}
`}
        />
        <p className="mb-6 text-gray-700 leading-relaxed">
          By calling <code>super.boot()</code>, you ensure that any
          initialization logic defined in the parent class is also executed.
          This is important for maintaining the default functionality of the ORM
          while adding your own customizations.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Tables and Primary Keys
        </h3>
        <p className="mb-6 text-gray-700 leading-relaxed">
          By default, the table name is determined by the class name (plural and
          lowercase). You can override this by defining the static property{" "}
          <code>table</code>.
        </p>
        <Code
          code={`
protected static table = "product_items"; // Instead of the default "products"
`}
        />
        <p className="mb-6 text-gray-700 leading-relaxed">
          The default primary key is <code>id</code>, but you can modify it:
        </p>
        <Code
          code={`
protected static primaryKey = "product_id";
`}
        />

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Fillable Properties
        </h3>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Defines which attributes can be mass-assigned, such as in the{" "}
          <code>create()</code> method:
        </p>
        <Code
          code={`
protected static fillable = ["title", "content", "author_id"];
`}
        />
        <p className="mb-6 text-gray-700 leading-relaxed">
          If the <code>fillable</code> array is empty, all attributes will be
          considered fillable.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Hidden Properties
        </h3>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Defines attributes that will be excluded when converting the model to
          JSON:
        </p>
        <Code
          code={`
protected static hidden = ["password", "remember_token"];
`}
        />

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Type Casting
        </h3>
        <p className="mb-6 text-gray-700 leading-relaxed">
          The ORM allows you to define type conversions to ensure that
          attributes are of the correct type:
        </p>
        <Code
          code={`
protected static casts = {
  id: "integer",
  price: "float",
  is_active: "boolean",
  options: "object",
  tags: "array",
  published_at: "date"
};
`}
        />
        <p className="mb-6 text-gray-700 leading-relaxed">Supported types:</p>
        <ul className="list-disc list-inside mb-6 text-gray-700 leading-relaxed">
          <li>
            <code>int/integer:</code> Converts to integer.
          </li>
          <li>
            <code>float/double:</code> Converts to floating-point number.
          </li>
          <li>
            <code>string:</code> Converts to string.
          </li>
          <li>
            <code>boolean/bool:</code> Converts to boolean.
          </li>
          <li>
            <code>object:</code> Converts JSON string to object.
          </li>
          <li>
            <code>array:</code> Converts JSON string to array.
          </li>
          <li>
            <code>date:</code> Converts to Date object.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Appended Attributes
        </h3>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Allows you to add attributes that do not exist in the database table:
        </p>
        <Code
          code={`
protected static appends = ["full_name"];

// Getter method for the added attribute
public getFullNameAttribute(): string {
  return \`\${this.getAttribute("first_name")} \${this.getAttribute("last_name")}\`;
}
`}
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          CRUD Operations
        </h2>
        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Creating Records
        </h3>
        <p className="mb-6 text-gray-700 leading-relaxed">
          There are two main ways to create records:
        </p>
        <Code
          code={`
// Using the static create() method:
const user = await User.create({
  name: "João Silva",
  email: "joao@exemplo.com",
  password: "senha123"
});

// Instantiating and saving:
const user = new User({
  name: "Maria Oliveira",
  email: "maria@exemplo.com",
  password: "senha456"
});

await user.save();
`}
        />

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Querying Records
        </h3>
        <Code
          code={`
const allUsers = await User.all(); // Fetch all records
const user = await User.find(1); // Fetch by ID
const user = await User.findOrFail(1); // Fetch by ID or throw error if not found
const activeUsers = await User.where("is_active", "=", true).get(); // Filter with WHERE clause
`}
        />

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Updating Records
        </h3>
        <Code
          code={`
const user = await User.find(1);
if (user) {
  user.setAttribute("name", "Novo Nome");
  user.setAttribute("email", "novo@exemplo.com");
  await user.save();
}
`}
        />

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Deleting Records
        </h3>
        <Code
          code={`
const user = await User.find(1);
if (user) {
  await user.delete();
}
`}
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Queries
        </h2>
        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Query Builder
        </h3>
        <Code
          code={`
const users = await User.query()
  .where("age", ">", 18)
  .where("is_active", "=", true)
  .orderBy("created_at", "desc")
  .limit(10)
  .get();
`}
        />

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Query Methods
        </h3>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Some available methods in the Query Builder:
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700 leading-relaxed">
          <li>
            <code>where(field, operator, value):</code> Adds a WHERE clause.
          </li>
          <li>
            <code>whereIn(field, values):</code> Adds a WHERE IN clause.
          </li>
          <li>
            <code>orderBy(field, direction):</code> Orders the results.
          </li>
          <li>
            <code>limit(value):</code> Limits the number of results.
          </li>
          <li>
            <code>offset(value):</code> Sets the offset for the results.
          </li>
          <li>
            <code>first():</code> Returns the first result.
          </li>
          <li>
            <code>get():</code> Executes the query and returns the results.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Model Events
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          The ORM supports lifecycle events that allow you to execute code at
          specific moments.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Available Events
        </h3>
        <ul className="list-disc list-inside mb-6 text-gray-700 leading-relaxed">
          <li>
            <code>creating:</code> Before creating a new record.
          </li>
          <li>
            <code>created:</code> After creating a new record.
          </li>
          <li>
            <code>updating:</code> Before updating a record.
          </li>
          <li>
            <code>updated:</code> After updating a record.
          </li>
          <li>
            <code>saving:</code> Before saving (creating or updating).
          </li>
          <li>
            <code>saved:</code> After saving (creating or updating).
          </li>
          <li>
            <code>deleting:</code> Before deleting a record.
          </li>
          <li>
            <code>deleted:</code> After deleting a record.
          </li>
          <li>
            <code>restoring:</code> Before restoring a logically deleted record.
          </li>
          <li>
            <code>restored:</code> After restoring a logically deleted record.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Registering Events
        </h3>
        <Code
          code={`
import { Entity } from "focca";

export class User extends Entity {
  protected static table = "users";
  
  protected static boot(): void {
    super.boot();
    
    // Encrypt password before saving
    this.saving(function(user: User) {
      if (user.getAttribute("password")) {
        user.setAttribute("password", hashPassword(user.getAttribute("password")));
      }
    });
    
    // Send email after creating user
    this.created(function(user: User) {
      sendWelcomeEmail(user.getAttribute("email"));
    });
  }
}
`}
        />

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Canceling Operations
        </h3>
        <Code
          code={`
this.deleting(function(user: User) {
  if (user.hasAdminRole()) {
    return false; // Prevent deletion of admin users
  }
});
`}
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Relationships
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          The ORM supports four main types of relationships between models.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          One-to-One
        </h3>
        <Code
          code={`
public profile() {
  return this.hasOne(Profile, "user_id", "id");
}

// Usage:
const user = await User.find(1);
const profile = await user.profile().getResults();
`}
        />

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          One-to-Many
        </h3>
        <Code
          code={`
public posts() {
  return this.hasMany(Post, "author_id", "id");
}

// Usage:
const user = await User.find(1);
const posts = await user.posts().getResults();
`}
        />

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Many-to-One
        </h3>
        <Code
          code={`
public author() {
  return this.belongsTo(User, "author_id", "id");
}

// Usage:
const post = await Post.find(1);
const author = await post.author().getResults();
`}
        />

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Many-to-Many
        </h3>
        <Code
          code={`
public roles() {
  return this.belongsToMany(Role, "user_roles", "user_id", "role_id");
}

// In Role.ts
public users() {
  return this.belongsToMany(User, "user_roles", "role_id", "user_id");
}

// Usage:
const user = await User.find(1);
const roles = await user.roles().get();
`}
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Many-to-Many Operations
        </h2>
        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Attach
        </h3>
        <Code
          code={`
const user = await User.find(1);
// Add a role
await user.roles().attach(5);
// Add multiple roles
await user.roles().attach([5, 6, 7]);
// Add with pivot attributes
await user.roles().attach(5, { expires_at: new Date() });
`}
        />

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Detach
        </h3>
        <Code
          code={`
const user = await User.find(1);
// Remove a role
await user.roles().detach(5);
// Remove multiple roles
await user.roles().detach([5, 6, 7]);
// Remove all roles
await user.roles().detach();
`}
        />

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Sync</h3>
        <Code
          code={`
const user = await User.find(1);
// Ensure the user has only roles 1, 2, and 3
await user.roles().sync([1, 2, 3]);
`}
        />

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Toggle
        </h3>
        <Code
          code={`
const user = await User.find(1);
const result = await user.roles().toggle([1, 2, 3]);
console.log(result.attached); // IDs added
console.log(result.detached); // IDs removed
`}
        />

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Custom Pivot
        </h3>
        <Code
          code={`
const user = await User.find(1);
// Include additional columns from the pivot table
const roles = await user.roles()
  .withPivot("expires_at", "created_by")
  .get();

// Add timestamps to the pivot table
const rolesWithTimestamps = await user.roles()
  .withTimestamps()
  .get();

// Filter by the pivot table
const recentRoles = await user.roles()
  .wherePivot("created_at", ">", lastMonth)
  .get();
`}
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Soft Deletes
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Soft delete allows you to mark records as deleted without removing
          them from the database:
        </p>
        <Code
          code={`
import { Entity } from "focca";

export class Post extends Entity {
  protected static softDeletes = true;
  // ...other configurations...
}

// Usage:
const post = await Post.find(1);
await post.delete(); // Marks as deleted but keeps in the database

// Restoring a logically deleted record
await post.restore();
`}
        />
        <p className="mb-6 text-gray-700 leading-relaxed">
          When <code>softDeletes</code> is enabled, deleted records will have
          the <code>deleted_at</code> column filled with the date/time of
          deletion.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Timestamps
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          By default, the ORM automatically manages the <code>created_at</code>{" "}
          and <code>updated_at</code> fields:
        </p>
        <Code
          code={`
import { Entity } from "focca";

export class Comment extends Entity {
  protected static timestamps = true; // Enabled by default
  // ...other configurations...
}
`}
        />
        <p className="mb-6 text-gray-700 leading-relaxed">When enabled:</p>
        <ul className="list-disc list-inside mb-6 text-gray-700 leading-relaxed">
          <li>
            <code>created_at</code> is set when creating a new record.
          </li>
          <li>
            <code>updated_at</code> is updated whenever the record is modified.
          </li>
        </ul>
        <p className="mb-6 text-gray-700 leading-relaxed">
          To disable timestamps:
        </p>
        <Code
          code={`
protected static timestamps = false;
`}
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          JSON Conversion
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          The <code>toJson()</code> method converts a model to a JSON object:
        </p>
        <Code
          code={`
const user = await User.find(1);
const userJson = user.toJson();
`}
        />
        <p className="mb-6 text-gray-700 leading-relaxed">The method:</p>
        <ul className="list-disc list-inside mb-6 text-gray-700 leading-relaxed">
          <li>
            Excludes attributes listed in <code>hidden</code>.
          </li>
          <li>
            Includes attributes listed in <code>appends</code>.
          </li>
          <li>Recursively converts related models to JSON.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Best Practices
        </h2>
        <ul className="list-disc list-inside mb-6 text-gray-700 leading-relaxed">
          <li>
            <strong>Define fillable:</strong> Always define which fields can be
            mass-assigned to avoid mass assignment vulnerabilities.
          </li>
          <li>
            <strong>Use casting:</strong> Define types for your attributes to
            ensure data is in the correct format.
          </li>
          <li>
            <strong>Utilize events:</strong> Use model events to encapsulate
            business logic and keep models clean.
          </li>
          <li>
            <strong>Hide sensitive data:</strong> Use the <code>hidden</code>{" "}
            property to avoid exposing sensitive information when converting to
            JSON.
          </li>
          <li>
            <strong>Name relationships correctly:</strong> Use clear and
            descriptive names for relationship methods.
          </li>
          <li>
            <strong>Load relationships efficiently:</strong> Use eager loading
            when necessary to avoid the N+1 problem.
          </li>
          <li>
            <strong>Transactions:</strong> Use transactions for operations that
            modify multiple records to maintain data integrity.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Conclusion
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          The Entity class in FOCCA ORM provides a powerful and intuitive way to
          define and manage your database models. By leveraging the various
          features such as relationships, events, and soft deletes, you can
          create a well-structured application that interacts seamlessly with
          your database.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Next Steps
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          After understanding how to define models, you might want to learn
          about querying data using the ORM. You can find the Query Builder
          documentation
          <Link to="/docs/orm/query-builder" className="text-[#1ED9A4]">
            {" "}
            Query Builder{" "}
          </Link>{" "}
          or
          <Link to="/docs/orm/schema" className="text-[#1ED9A4]">
            {" "}
            Schema Builder
          </Link>
        </p>
      </div>
    </DocumentationLayout>
  );
};

export default EntityPage;
