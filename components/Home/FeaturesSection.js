import React from "react";

const FeaturesSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 class="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text pb-16 pt-8 text-center">
          Key Features
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-white  via-white to-teal-100 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Problem Solvers Club (XPSC)
            </h3>
            <p className="text-gray-600 text-lg">
              Want to be a master at problem solving? Then finish first and
              second semester well on time. 50% or more marks in all
              examinations (assignment, midterm, final) separately. And if the
              average marks obtained in all tests are 80 or more, they will get
              a chance in the Special Problem Solvers Club (xettabyte).
            </p>
          </div>
          <div className="bg-gradient-to-r from-white  via-white to-teal-100   rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Unlimited support
            </h3>
            <p className="text-gray-600 text-lg">
              We will continue to help until you understand. All questions will
              be answered within 24 hours. 2/3 times a day except holidays can
              come to Google Hangouts and solve problems by skinsharing. If you
              do not understand then get live conceptual session.
            </p>
          </div>
          <div className="bg-gradient-to-r from-white  via-white to-teal-100  rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Basic to Job Placement
            </h3>
            <p className="text-gray-600 text-lg">
              Those who will seriously work hard. Special interview cracking
              training will be given to those who finish well on-time up to Data
              Structure, Algorithm and Software Engineering tracks.Their
              CV/resumé will be sent to various domestic/foreign companies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
