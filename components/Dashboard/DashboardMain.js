/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import useAuth from "../../hook/useAuth";
import Loading from "../Shared/Loading";

const DashboardMain = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userMark, setUserMark] = useState();
  const { user, db } = useAuth();

  const getItemsByEmail = async (email) => {
    const q = query(collection(db, "marks"), where("email", "==", email));
    const querySnapshot = await getDocs(q);

    const items = [];
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });

    if (items[0]) setUserMark(items[0]);
    setIsLoading(false);
  };

  useEffect(() => {
    if (user?.email) getItemsByEmail(user?.email);
  });
  return (
    <div className="bg-gray-100 py-8 min-h-[78.5vh]">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg px-8 py-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Dashboard
          </h2>
          {userMark ? (
            <div>
              <div className="mb-8">
                <div className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full mb-4 text-center">
                  Alumni Information
                </div>
              </div>
              <div className="mb-8 flex sm:flex-row flex-col justify-between">
                <div className="ml-6">
                  <div className="text-4xl font-semibold text-gray-800">
                    {userMark?.name}
                  </div>
                  <div className="text-gray-600">Alumni</div>
                  <div className="text-gray-600">{userMark?.email}</div>
                </div>
                <div className="rounded-full h-[6.2rem] w-[6.2rem] flex items-center justify-center bg-gradient-to-tr from-blue-500 to-purple-500">
                  <img
                    className="rounded-full h-24 w-24"
                    src={`${user?.photoURL}`}
                    alt=""
                  />
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  School History
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white shadow-lg rounded-lg px-6 py-4 text-center">
                    <div className="bg-blue-500 text-white font-bold py-1 px-2 rounded-full mb-2 inline-block">
                      {userMark?.schoolName}
                    </div>
                    <div className="text-gray-600">
                      {userMark?.schoolHistory}
                    </div>
                  </div>
                  <div className="bg-white shadow-lg rounded-lg px-6 py-4 text-center">
                    <div className="bg-blue-500 text-white font-bold py-1 px-2 rounded-full mb-2 inline-block">
                      {userMark?.collegeName}
                    </div>
                    <div className="text-gray-600">
                      {userMark?.collegeHistory}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Marksheet
                </h3>
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b text-left border-gray-300 font-semibold text-gray-700">
                        Subject
                      </th>
                      <th className="py-2 px-4 border-b text-left border-gray-300 font-semibold text-gray-700">
                        Marks
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-300">
                        English
                      </td>
                      <td className="py-2 px-4 border-b border-gray-300">
                        {userMark?.english}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-300">
                        Math
                      </td>
                      <td className="py-2 px-4 border-b border-gray-300">
                        {userMark?.math}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-300">
                        Science
                      </td>
                      <td className="py-2 px-4 border-b border-gray-300">
                        {userMark?.science}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div>
              <h1 className="text-4xl py-8">No marks added yet.</h1>
              <p className=" text-red-400">If you want to add marks please go to Add Marks page.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DashboardMain;
