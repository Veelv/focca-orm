import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Code from "../components/Code";
import {
  Edit,
  ArrowUpDown,
  Link,
  CheckCircle,
  Zap,
  DatabaseZap,
} from "lucide-react";
import Footer from "../components/Footer";
import Seo from "../components/Seo";

import foccaLogo from "../assets/focca.svg";
import foccaSchemaVideo from "../assets/SchemaExample.mp4";
import patternGrid from "../assets/pattern-grid.svg";

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Seo title="Modern ORM for Node.js" 
      description="FOCCA is a modern and flexible ORM for Node.js, designed to simplify interaction with relational and non-relational databases."
      keywords="FOCCA, ORM, Node.js, database, programming, development, JavaScript, TypeScript, flexible, modern" />
      {/* Header with fixed navigation */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-center items-center">
          <div className="flex items-center">
            <img
              src={foccaLogo}
              alt="FOCCA Logo"
              className="h-10 text-blue-500"
            />
          </div>
        </div>
      </header>

      {/* Hero Section with enhanced background */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 hero-background overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url(${patternGrid})`,
              backgroundSize: "50px 50px",
              transform: "rotate(-5deg) scale(1.2)",
            }}
          ></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white leading-tight"
            >
              Revolutionize your{" "}
              <span className="text-[#6BD9CE]">data interaction</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white text-opacity-90 mt-6 leading-relaxed"
            >
              FOCCA is a modern and flexible ORM for Node.js, designed to
              simplify interaction with relational and non-relational databases,
              speeding up your development with clean and intuitive code.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <a
                href="/docs"
                className="bg-white text-[#1ed9a4] px-8 py-4 rounded-lg font-medium hover:bg-[#1ed9a4]/30 transition duration-200 text-center shadow-lg"
              >
                Start Using
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-12 bg-opacity-10 rounded-lg p-3 backdrop-filter backdrop-blur-sm"
            >
              <Code
                tabs={[
                  { label: "npm", code: "npm install focca" },
                  { label: "yarn", code: "yarn add focca" },
                ]}
              />
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 text-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mx-auto text-white opacity-70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Schema Section with alternating layout */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2 md:pr-12 mb-10 md:mb-0"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Simplified Schema Creation
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                With FOCCA, creating database schemas is quick and efficient.
                Define your tables and relationships clearly and concisely,
                making data management in your applications easier.
              </p>
              <div className="bg-gray-100 rounded-lg p-4 border-l-4 border-[#1ed9a4]">
                <p className="text-gray-700 italic">
                  "The flexibility of FOCCA ensures that you can adapt your
                  schemas as needed, providing an agile and productive
                  development experience."
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="/docs/orm/schema"
                  className="inline-flex items-center text-[#1ED9A4] font-medium hover:text-[#6BD9CE] transition"
                >
                  See Examples
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
                <video className="w-full" autoPlay loop muted playsInline>
                  <source src={foccaSchemaVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section with card layout */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose FOCCA?
            </h2>
            <p className="text-xl text-gray-600">
              A complete solution for data management that simplifies your
              workflow
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Flexibility",
                description:
                  "Support for multiple databases with simplified configuration for connections and adapters.",
                icon: <DatabaseZap className="h-12 w-12 text-[#1ed9a4]" />,
              },
              {
                title: "Ease of Use",
                description:
                  "Intuitive API for CRUD operations and CLI commands for migrations, models, and seeders.",
                icon: <Edit className="h-12 w-12 text-[#1ed9a4]" />,
              },
              {
                title: "Migrations",
                description:
                  "Robust system for versioning database changes with efficient commands.",
                icon: <ArrowUpDown className="h-12 w-12 text-[#1ed9a4]" />,
              },
              {
                title: "Relationships",
                description:
                  "Support for complex relationships with intuitive methods for data manipulation.",
                icon: <Link className="h-12 w-12 text-[#1ed9a4]" />,
              },
              {
                title: "Data Validation",
                description:
                  "Integration with validation system to ensure data integrity.",
                icon: <CheckCircle className="h-12 w-12 text-[#1ed9a4]" />,
              },
              {
                title: "Performance",
                description:
                  "Optimizations for queries and bulk operations, ensuring exceptional performance.",
                icon: <Zap className="h-12 w-12 text-[#1ed9a4]" />,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Code Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <h2 className="text-3xl font-bold mb-6">
                Intuitive and Elegant Code
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                FOCCA is designed to make your code cleaner and more expressive.
                With intuitive syntax, you write less and achieve more.
              </p>
              <a
                href="/docs/orm/entity"
                className="inline-flex items-center bg-primary hover:bg-[#1ed9a4] text-white font-medium px-6 py-3 rounded-lg transition"
              >
                View More Examples
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-gray-400 text-sm">Entity.js</div>
                </div>
                <pre className="text-[#1ed9a4] font-mono text-sm leading-relaxed">
                  <code>
                    {`
import { Entity } from "focca";

export class Book extends Entity {
  protected static table = "books";
  protected static fillable = ["title", "author_id", "category_id"];
  protected static softDeletes = true;

  public static async getAuthor() {
    return this.belongsTo(Author, "author_id");
  }

  public static async getCategory() {
    return this.belongsTo(Category, "category_id");
  }
}

import { Entity } from "focca";

export class Author extends Entity {
  protected static table = "authors";
  protected static fillable = ["name"];

  public static async getBooks() {
    return this.hasMany(Book, "author_id");
  }
}

const author = await Author.create({ name: "J.K . Rowling" });
const category = await Category.create({ name: "Fantasy" });
const book = await Book.create({
    title: "Harry Potter and the Philosopher's Stone",
    author_id: author.getAttribute("id"),
    category_id: category.getAttribute("id"),
});

console.log("Book created:", book.toJson());`}
                  </code>
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#6BD9CE] to-[#1ed9a4] text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Ready to revolutionize your projects?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Join thousands of developers who are already using FOCCA to simplify
            and enhance their applications.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-4"
          >
            <a
              href="/docs"
              className="bg-white text-[#1ed9a4] px-8 py-4 rounded-lg font-medium transition duration-200 shadow-lg"
            >
              Get Started
            </a>
            <a
              href="https://github.com/Veelv/focca"
              className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-medium transition duration-200 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
                className="mr-2"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      
    </div>
  );
};

export default HomePage;
