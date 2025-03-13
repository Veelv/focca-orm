import { Link } from "react-router";
import DocumentationLayout from "../components/DocumentationLayout";
import Code from "../components/Code";

const UtilsPage = () => {
  return (
    <DocumentationLayout title="Detailed Documentation on Utility Classes in FOCCA ORM">
      <div className="prose prose-green max-w-none">
        <h1 className="text-3xl font-bold mb-6 text-tree">
          Detailed Documentation on Utility Classes in FOCCA ORM
        </h1>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Introduction
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          FOCCA ORM provides several utility classes that simplify common tasks
          such as string manipulation, UUID generation, and password hashing.
          This documentation covers the `Str`, `Uuid`, and `Hash` utility
          classes, detailing their methods and usage.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Str Class
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          The `Str` class provides methods for manipulating strings, including
          formatting and validation.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Available Methods
        </h3>
        <ul className="list-disc list-inside mb-6 text-gray-700 leading-relaxed">
          <li>
            <strong>camelCase(value: string): string</strong> - Converts a
            string to camelCase format.
          </li>
          <li>
            <strong>kebabCase(value: string): string</strong> - Converts a
            string to kebab-case format.
          </li>
          <li>
            <strong>snakeCase(value: string): string</strong> - Converts a
            string to snake_case format.
          </li>
          <li>
            <strong>contains(value: string, search: string): boolean</strong> -
            Checks if a string contains a specified substring.
          </li>
          <li>
            <strong>startsWith(value: string, search: string): boolean</strong>{" "}
            - Checks if a string starts with a specified substring.
          </li>
          <li>
            <strong>endsWith(value: string, search: string): boolean</strong> -
            Checks if a string ends with a specified substring.
          </li>
          <li>
            <strong>trim(value: string): string</strong> - Trims whitespace from
            both ends of a string.
          </li>
          <li>
            <strong>removeSpaces(value: string): string</strong> - Removes all
            spaces from a string.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Example Usage
        </h3>
        <Code
          code={`
import { Str } from 'focca';

const exampleString = " Hello World ";

console.log(Str.camelCase(exampleString)); // helloWorld
console.log(Str.kebabCase(exampleString)); // hello-world
console.log(Str.snakeCase(exampleString)); // hello_world
console.log(Str.contains(exampleString, "World")); // true
console.log(Str.startsWith(exampleString, " Hello")); // true
console.log(Str.endsWith(exampleString, "World ")); // true
console.log(Str.trim(exampleString)); // "Hello World"
console.log(Str.removeSpaces(exampleString)); // "HelloWorld"
`}
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Uuid Class
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          The `Uuid` class is used for generating and manipulating UUIDs
          (Universally Unique Identifiers).
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Available Methods
        </h3>
        <ul className="list-disc list-inside mb-6 text-gray-700 leading-relaxed">
          <li>
            <strong>generate(): string</strong> - Generates a new UUID v4.
          </li>
          <li>
            <strong>isValid(uuid: string): boolean</strong> - Validates if a
            string is a valid UUID.
          </li>
          <li>
            <strong>toHex(uuid: string): string</strong> - Converts a UUID to a
            hexadecimal string.
          </li>
          <li>
            <strong>fromHex(hex: string): string</strong> - Converts a
            hexadecimal string back to a UUID.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Example Usage
        </h3>
        <Code
          code={`
import { Uuid } from 'focca';

const newUuid = Uuid.generate();
console.log(newUuid); // Example: "f47ac10b-58cc-4372-a567-0e02b2c3d479"

console.log(Uuid.isValid(newUuid)); // true
console.log(Uuid.toHex(newUuid)); // "f47ac10b58cc4372a5670e02b2c3d479"
console.log(Uuid.fromHex(Uuid.toHex(newUuid))); // "f47ac10b-58cc-4372-a567-0e02b2c3d479"
`}
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Hash Class
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          The `Hash` class is used for password hashing and verification.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Available Methods
        </h3>
        <ul className="list-disc list-inside mb-6 text-gray-700 leading-relaxed">
          <li>
            <strong>make(password: string, algorithm: HashAlgorithm): </strong>
            <span>Promise&lt;string&gt;</span> - Hashes a password using the
            specified algorithm.
          </li>
          <li>
            <strong>
              check(password: string, hashedPassword: string, algorithm:
              HashAlgorithm):{" "}
            </strong>
            <span>Promise&lt;boolean&gt;</span> - Verifies a password against a
            hashed password.
          </li>
          <li>
            <strong>generateRandomPassword(length: number): </strong>
            <span>string</span> - Generates a random password of a specified
            length.
          </li>
          <li>
            <strong>validatePasswordStrength(password: string): </strong>
            <span>Promise&lt;boolean&gt;</span> - Validates the strength of a
            password.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Example Usage
        </h3>
        <Code
          code={`
import { Hash, HashAlgorithm } from 'focca';

const password = "MySecurePassword!123";

// Hashing a password
const hashedPassword = await Hash.make(password, HashAlgorithm.BCRYPT);
console.log(hashedPassword);

// Checking a password
const isMatch = await Hash.check(password, hashedPassword, HashAlgorithm.BCRYPT);
console.log(isMatch); // true

// Generating a random password
const randomPassword = Hash.generateRandomPassword(16);
console.log(randomPassword); // Example: "aB3!dEfG7hIjKlMn"

// Validating password strength
const isStrong = await Hash.validatePasswordStrength(password);
console.log(isStrong); // true ou false
`}
        />

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Using Bcrypt and Argon2
        </h3>
        <p className="mb-6 text-gray-700 leading-relaxed">
          The `Hash` class supports two hashing algorithms: Bcrypt and Argon2.
          You can specify which algorithm to use when hashing a password by
          passing the appropriate enum value from <code>HashAlgorithm</code>.
        </p>
        <Code
          code={`
import { Hash, HashAlgorithm } from 'focca';

// Hashing with Bcrypt
const bcryptHashed = await Hash.make(password, HashAlgorithm.BCRYPT);
console.log(bcryptHashed);

// Hashing with Argon2
const argon2Hashed = await Hash.make(password, HashAlgorithm.ARGON2);
console.log(argon2Hashed);

// Verifying with Bcrypt
const isBcryptMatch = await Hash.check(password, bcryptHashed, HashAlgorithm.BCRYPT);
console.log(isBcryptMatch); // true

// Verifying with Argon2
const isArgon2Match = await Hash.check(password, argon2Hashed, HashAlgorithm.ARGON2);
console.log(isArgon2Match); // true
`}
        />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Conclusion
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          The utility classes `Str`, `Uuid`, and `Hash` in FOCCA ORM provide
          essential functionalities for string manipulation, UUID generation,
          and password management. By utilizing these utilities, you can
          streamline common tasks and enhance the security of your application.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Next Steps
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          After familiarizing yourself with the utility classes, you may want to
          explore the Entity class documentation to learn how to define and
          manage your database models effectively.
          <Link to="/docs/orm/entity" className="text-[#1ED9A4]">
            {" "}
            Entity Class{" "}
          </Link>
          documentation for more details.
        </p>
      </div>
    </DocumentationLayout>
  );
};

export default UtilsPage;
