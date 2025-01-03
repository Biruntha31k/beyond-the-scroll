import React from 'react';
import BlogProfileImage from '../assets/Blog Website Design.jpg';
import CSS from '../assets/css-3.png';
import HTML from '../assets/html.png';
import DB from '../assets/data-server.png';
import JS from '../assets/js.png';
import REACTICON from '../assets/physics.png';
import NODE from '../assets/node-js.png';
import P1 from '../assets/p1.jpg';
import P2 from '../assets/p2.png';
import P3 from '../assets/p3.png';
import BlogImage from '../assets/blogImage.png';
import { useNavigate } from 'react-router-dom';
import Footer from './common/Footer';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-8 py-12 bg-gray-100">
        <div className="sm:w-1/2 text-center sm:text-left">
          <h2 className="text-4xl md:text-6xl font-serif mb-4">Hey! I Am</h2>
          <h2 className="text-5xl md:text-7xl font-serif text-blue-500 mb-4">Peter Parker</h2>
          <p className="text-lg font-light text-gray-700 mb-6">
            I create stunning websites for businesses. Check out my work and try my services for 7 days—satisfaction guaranteed.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-150 transform hover:scale-105">
            Hire Me
          </button>
        </div>
        <img src={BlogProfileImage} className="w-72 md:w-96 mt-6 sm:mt-0 rounded-lg shadow-lg" alt="Profile" />
      </div>

      {/* Skills Section */}
      <div className="flex justify-center items-center py-8 bg-white border-t">
        {[HTML, CSS, JS, REACTICON, DB, NODE].map((icon, index) => (
          <img key={index} src={icon} className="w-12 mx-4 hover:scale-110 transition-transform duration-300" alt="Technology icon" />
        ))}
      </div>

      {/* Experience Section */}
      <div className="flex flex-col sm:flex-row justify-around items-center py-12 bg-gray-50 px-8">
        <div className="flex flex-col items-center mb-8 sm:mb-0">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-300 to-blue-500 flex items-center justify-center text-white text-2xl font-bold mb-2">
            6
          </div>
          <p className="text-gray-700">Projects Completed</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-300 to-red-500 flex items-center justify-center text-white text-2xl font-bold mb-2">
            6
          </div>
          <p className="text-gray-700">Months of Experience</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="text-center py-12 px-8">
        <h2 className="text-4xl font-serif text-blue-500 mb-4">My Awesome</h2>
        <h2 className="text-4xl font-serif text-gray-800 mb-6">Services</h2>
        <p className="text-lg font-light text-gray-600 mb-6">
          I have attached my resume for your reference.
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-150 transform hover:scale-105">
          Download CV
        </button>
      </div>

      {/* Projects Section */}
      <div className="text-center py-12 bg-gray-100">
        <h2 className="text-4xl font-serif mb-8">Checkout My Live <span className="text-red-500">Projects</span> Here</h2>
        <div className="flex justify-center flex-wrap gap-8">
          {[P1, P2, P3].map((project, index) => (
            <img
              key={index}
              src={project}
              className="w-64 border rounded-md cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300"
              alt={`Project ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Blog Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-8 py-12 bg-white">
        <img src={BlogImage} className="w-72 md:w-96 mb-6 sm:mb-0 rounded-lg shadow-lg" alt="Blog" />
        <div className="sm:w-1/2 text-center sm:text-left">
          <h2 className="text-4xl md:text-6xl font-serif mb-4">I like to Write</h2>
          <h2 className="text-5xl md:text-7xl font-serif text-blue-500 mb-4">Blogs about tech</h2>
          <p className="text-lg font-light text-gray-700 mb-6">
            Explore my expertise and insights by reading my blogs.
          </p>
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-150 transform hover:scale-105"
            onClick={() => navigate('/blogs')}
          >
            Read My Blogs
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="text-center py-12 bg-gray-50">
        <h1 className="text-4xl font-serif mb-4">Join our Newsletter</h1>
        <p className="text-lg font-light text-gray-600 mb-6">
          Sign up to receive exclusive discounts, updates, and more.
        </p>
        <input
          type="text"
          placeholder="Enter your email"
          className="p-2 w-2/3 md:w-1/3 border border-gray-300 rounded-md focus:outline-none mb-4"
        />
        <br />
        <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition duration-150 transform hover:scale-105">
          Subscribe
        </button>
      </div>

      <Footer />
    </>
  );
}

export default Home;
