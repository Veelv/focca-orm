import Code from "../components/Code";
import DocumentationLayout from "../components/DocumentationLayout";
import { Link } from "react-router";

const GettingStartedPage = () => {
  return (
    <DocumentationLayout title="FOCCA Library Installation">
      <div className="prose prose-green max-w-none">
        <h1 className="text-3xl font-bold mb-6 text-tree">
          FOCCA Library Installation
        </h1>

        <p className="mb-6 text-gray-700 leading-relaxed">
          To start using the FOCCA library in your project, follow the steps
          below to install it correctly.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Main Features
        </h2>
        
        <h3 className="font-medium text-tree text-xl">Prerequisites</h3>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Before installing FOCCA, make sure you have the following
          prerequisites:
        </p>
        
        <div className="space-y-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 rounded-full bg-[#1ED9A4] mr-3"></div>
            </div>
            <div>
              <p className="text-gray-700">
                <span className="font-bold">Node.js:</span> The FOCCA library is compatible with Node.js. You can
                download the latest version of Node.js from
                <a
                  className="text-[#1ED9A4]"
                  href="https://nodejs.org"
                  target="_blank"
                >
                  nodejs.org
                </a>
                .
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
                <span className="font-bold">Package Manager:</span> You can use npm (which comes with Node.js) or Yarn to manage your dependencies.
              </p>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Step 1: Create a New Project
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          If you don’t have a project yet, create a new directory and initialize a new Node.js project:
        </p>
        <Code tabs={[{ label: "Bash", code: `mkdir my-project\ncd my-project\nnpm init -y` }]} />
        
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Step 2: Install the FOCCA Library
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          To install the FOCCA library, run the following command in the terminal:
        </p>
        <Code tabs={[
          { label: "NPM", code: "npm install focca" },
          { label: "YARN", code: "yarn add focca" },
        ]} />

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Next Steps
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          After installing the FOCCA library, the next step is to configure the ORM. You can find the configuration guide 
          <Link to="/docs/configuration" className="text-[#1ED9A4]"> here</Link>.
        </p>
      </div>
    </DocumentationLayout>
  );
};

export default GettingStartedPage;