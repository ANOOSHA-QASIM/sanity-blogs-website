import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
    <h1 className="text-4xl font-bold text-gray-800 mb-6 mt-14">Contact Us</h1>
    
    <p className="text-lg text-gray-700 mb-6">
      We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us.
    </p>
    
    <form className="space-y-4">
      <div>
        <label className="block text-lg font-medium text-gray-700" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your Name"
          required
        />
      </div>

      <div>
        <label className="block text-lg font-medium text-gray-700" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your Email"
          required
        />
      </div>

      <div>
        <label className="block text-lg font-medium text-gray-700" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your Message"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Send Message
      </button>
    </form>
  </div>
  )
}

export default Contact