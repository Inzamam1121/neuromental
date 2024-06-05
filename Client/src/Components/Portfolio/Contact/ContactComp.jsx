import React from 'react'

const ContactComp = () => {
  return (
    <div>
          <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 p-4 lg:p-10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-1/2 lg:mr-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in <span className="text-purple-600">Touch</span></h1>
        <p className="mb-6 text-gray-700">
          If you have any questions about our training offerings or would like to speak to us personally, please feel free to contact us. We are happy to answer your questions.
          <br />
          Your team at the ACADEMY FOR NEUROMENTAL TRAINING
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name *"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <input
            type="tel"
            placeholder="Phone number *"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <div className="relative">
            <input
              type="text"
              placeholder="Book your appointment"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <button className="absolute right-3 top-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 2a2 2 0 00-2 2v1H6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-8a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H8zM6 5h8v1H6V5zm2 3h4v1H8V8zm-3 6h10v1H5v-1zm5-5h4v1H8V9zm-3 2h2v1H5v-1z" />
              </svg>
            </button>
          </div>
          <button type="submit" className="w-full bg-purple-600 text-white p-3 rounded-md hover:bg-purple-700">BOOK NOW</button>
        </form>
      </div>
      <div className="mt-6 lg:mt-0 lg:w-1/2">
        <img
          src="https://via.placeholder.com/400"  // Replace with actual image URL
          alt="Contact"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
    </div>
  )
}

export default ContactComp