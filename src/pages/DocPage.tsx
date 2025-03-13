import React from "react";
import DocumentationLayout from "../components/DocumentationLayout";
import { Link } from "react-router";

const DocPage: React.FC = () => {
  return (
    <DocumentationLayout title="Introduction to the FOCCA Library">
      <div className="prose prose-green max-w-none">
        <h1 className="text-3xl font-bold mb-6 text-tree">
          Introduction to the FOCCA Library
        </h1>

        <p className="mb-6 text-gray-700 leading-relaxed">
          The FOCCA library is a modern and flexible ORM (Object-Relational
          Mapping) for Node.js, designed to simplify interaction with relational
          and non-relational databases. With an intuitive and powerful API,
          FOCCA enables developers to build robust and scalable applications
          with ease.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Principais Características
        </h2>

        <div className="space-y-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 rounded-full bg-[#1ED9A4] mr-3"></div>
            </div>
            <div>
              <h3 className="font-medium text-tree">
                Multiple Database Support
              </h3>
              <p className="text-gray-700">
                FOCCA supports a variety of databases, including MySQL,
                PostgreSQL, SQLite, MongoDB, and SQL Server, allowing you to
                choose the best option for your needs.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 rounded-full bg-[#1ED9A4] mr-3"></div>
            </div>
            <div>
              <h3 className="font-medium text-tree">Ease of Use</h3>
              <p className="text-gray-700">
                The library is designed to be easy to use, with a clear and
                concise syntax that reduces code complexity and improves
                readability.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 rounded-full bg-[#1ED9A4] mr-3"></div>
            </div>
            <div>
              <h3 className="font-medium text-tree">Migrations and Seeders</h3>
              <p className="text-gray-700">
                FOCCA includes integrated tools for managing database migrations
                and seeders, making it easy to create and maintain your database
                structure.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 rounded-full bg-[#1ED9A4] mr-3"></div>
            </div>
            <div>
              <h3 className="font-medium text-tree">Data Validation</h3>
              <p className="text-gray-700">
                The library provides a robust validation system that helps
                ensure the integrity of data before it is saved to the database.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 rounded-full bg-[#1ED9A4] mr-3"></div>
            </div>
            <div>
              <h3 className="font-medium text-tree">Relationship Management</h3>
              <p className="text-gray-700">
                FOCCA allows you to define and manage relationships between
                entities in a simple way, supporting relationships such as
                one-to-one, one-to-many and many-to-many.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Why Use FOCCA?
        </h2>

        <div className="bg-[#6BD9CE]/30 p-6 rounded-lg border border-[#6BD9CE]/30 mb-8">
          <p className="text-gray-700 leading-relaxed">
            If you are developing an application that requires efficient
            interaction with a database, FOCCA is the ideal choice. Its
            flexibility and ease of use allow you to focus on developing
            functionality, while the library takes care of the complexity of
            communicating with the database. With FOCCA, you can speed up
            development and ensure that your application is scalable and
            maintainable.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Next Steps
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
        Let's get started, time to expand your project in a simple and professional way. You can find the installation guide
          <Link to="/docs/getting-started" className="text-[#1ED9A4]"> here</Link>.
        </p>
      </div>
    </DocumentationLayout>
  );
};

export default DocPage;
