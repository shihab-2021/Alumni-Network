import { useState } from "react";
import { writeToExcel } from "../utils/excelUtil";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import useAuth from "../hook/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import authCheck from "../hook/authCheck";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const { saveContactToFirebase } = useAuth();

  const handleSubmit = async (data) => {
    await saveContactToFirebase(data); // Save contact details to Firebase
    writeToExcel(data); // Save contact details to Excel file
    setSubmitted(true);
    toast.success("Contact added to the database!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    // console.log(data);
  };
  return (
    <Layout>
      <Head>
        <title>Alumni Network | Contact</title>
      </Head>
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
      <div className="bg-gray-100 min-h-[76.5vh] flex items-center">
        <div className="max-w-xl w-full mx-auto bg-white rounded-lg shadow-lg px-8 py-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Contact Us
          </h2>
          <ContactForm onSubmit={handleSubmit} />
        </div>
      </div>
    </Layout>
  );
};

export default authCheck(Contact);
