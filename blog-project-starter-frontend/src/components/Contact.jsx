import React from 'react';
import Footer from './common/Footer';

function Contact() {
  return (
    <div>

      <section className="flex bg-gray-50">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md rounded-md bg-white shadow-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-serif text-center text-[#c57ff4]">Contact Me</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-800 sm:text-xl font-sans">
            We'd love to hear from you! Whether you have questions, feedback, or need assistance, feel free to reach out. Our team is here to help and will get back to you as soon as possible. Let’s stay connected!
          </p>
          <form action="#" className="space-y-8">

            <div>
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 font-serif">Name</label>
              <input 
                type="text" 
                id="name" 
                className="shadow-sm bg-gray-50 border border-[#c57ff4] text-gray-900 text-sm rounded-lg focus:ring-[#22C6F0] focus:border-[#22C6F0] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#22C6F0] dark:focus:border-[#22C6F0]" 
                placeholder="Enter your name" 
                required 
              />
            </div>

            <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 font-serif">Email</label>
              <input 
                type="email" 
                id="email" 
                className="shadow-sm bg-gray-50 border border-[#c57ff4] text-gray-900 text-sm rounded-lg focus:ring-[#22C6F0] focus:border-[#22C6F0] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#22C6F0] dark:focus:border-[#22C6F0]" 
                placeholder="name@domain.com" 
                required 
              />
            </div>

            <div>
              <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 font-serif">Phone</label>
              <input 
                type="text" 
                id="phone" 
                className="shadow-sm bg-gray-50 border border-[#c57ff4] text-gray-900 text-sm rounded-lg focus:ring-[#22C6F0] focus:border-[#22C6F0] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#22C6F0] dark:focus:border-[#22C6F0]" 
                placeholder="Enter your mobile number" 
                required 
              />
            </div>

            <div>
              <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 font-serif">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-[#c57ff4] shadow-sm focus:ring-[#c57ff4] focus:border-[#22C6F0] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#22C6F0] dark:focus:border-[#22C6F0]" 
                placeholder="Let us know how we can help you" 
                required 
              />
            </div>

            <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-gray-900 font-serif">Your message</label>
              <textarea 
                id="message" 
                rows="6" 
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-[#c57ff4] focus:ring-[#22C6F0] focus:border-[#c57ff4] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#c57ff4] dark:focus:border-[#c57ff4]" 
                placeholder="Leave a comment..." 
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="py-3 px-5 text-sm font-medium text-center bg-[#FF0000] rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 text-white focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 hover:bg-[#c57ff4]"
            >
              Send message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
