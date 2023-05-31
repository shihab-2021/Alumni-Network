import React, { useState } from "react";
import Layout from "../components/Layout";
import useAuth from "../hook/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authCheck from "../hook/authCheck";

const AddMarks = () => {
  const { saveMarksToFirebase } = useAuth();
  const [marksData, setMarksData] = useState({
    email: "",
    name: "",
    schoolName: "",
    schoolHistory: "",
    collegeName: "",
    collegeHistory: "",
    english: "",
    math: "",
    science: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMarksData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveMarksToFirebase(marksData);
    // console.log(marksData);
    toast.success("Marks added to the database!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    // Reset form data
    setMarksData({
      email: "",
      name: "",
      schoolName: "",
      schoolHistory: "",
      collegeName: "",
      collegeHistory: "",
      english: "",
      math: "",
      science: "",
    });
  };
  return (
    <Layout>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="bg-gray-100 py-8">
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg px-8 py-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Add Marks
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={marksData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={marksData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="schoolName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                School Name
              </label>
              <input
                type="text"
                id="schoolName"
                name="schoolName"
                value={marksData.schoolName}
                onChange={handleChange}
                placeholder="Enter school name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="schoolHistory"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                School History
              </label>
              <input
                type="text"
                id="schoolHistory"
                name="schoolHistory"
                value={marksData.schoolHistory}
                onChange={handleChange}
                placeholder="Enter school history"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="collegeName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                College Name
              </label>
              <input
                type="text"
                id="collegeName"
                name="collegeName"
                value={marksData.collegeName}
                onChange={handleChange}
                placeholder="Enter college name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="collegeHistory"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                College History
              </label>
              <input
                type="text"
                id="collegeHistory"
                name="collegeHistory"
                value={marksData.collegeHistory}
                onChange={handleChange}
                placeholder="Enter college history"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="english"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                English
              </label>
              <input
                type="number"
                id="english"
                name="english"
                value={marksData.english}
                onChange={handleChange}
                placeholder="Enter english number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="math"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Math
              </label>
              <input
                type="number"
                id="math"
                name="math"
                value={marksData.math}
                onChange={handleChange}
                placeholder="Enter math number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="science"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Science
              </label>
              <input
                type="number"
                id="science"
                name="science"
                value={marksData.science}
                onChange={handleChange}
                placeholder="Enter science number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default authCheck(AddMarks);
