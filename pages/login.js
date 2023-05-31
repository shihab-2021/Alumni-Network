/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import useAuth from "../hook/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { signInWithGoogle } = useAuth();

  const handleGoogleSignIn = (response) => {
    // Handle Google Sign-In response
    console.log(response);
    // TODO: Implement your logic for handling the response
  };

  const handleGoogleButtonClick = () => {
    // Trigger Google Sign-In flow
    window.google.accounts.id.prompt();
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
      <div className="flex items-center justify-center min-h-[78.5vh]">
        <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Alumni Network Login
          </h2>
          <form>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none"
              >
                Sign In
              </button>
              <a href="#" className="text-gray-600 hover:underline text-sm">
                Forgot Password?
              </a>
            </div>
            <div className="flex items-center justify-center mt-10">
              <button
                type="button"
                onClick={() => signInWithGoogle()}
                className="flex items-center justify-center bg-white text-gray-700 font-bold py-3 px-6 rounded-lg focus:outline-none border border-gray-300 hover:bg-gray-100"
              >
                <img
                  className="mr-2"
                  src="https://i.ibb.co/2cHy5Xg/image.png"
                  alt=""
                />
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
