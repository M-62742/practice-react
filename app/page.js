'use client'

import axios from "axios";
import React, {  useEffect, useState } from "react";

const Page = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      setError("Error fetching data. Please try again later.");
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
useEffect(() => {
 

 getUsers()
  }
, [])

  return (
    <>
      <button
        className="bg-green-600 text-white px-4 py-2 my-10 mx-10 rounded font-bold"
        onClick={getUsers}
        disabled={loading} // Disable button while loading
      >
        {loading ? "Loading..." : "Get DATA"}
      </button>

      <h1 className="text-2xl font-bold">This is home page</h1>
      <a href="/Contact">Contact</a>
      <div className="p-8 bg-slate-100 mt-5">
        {error && <p className="text-red-600">{error}</p>}
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user.id || user.name}>{user.name} <a href={`/${user.id}`}>page</a>

            </li>
            ))}
          </ul>
        ) : (
          !loading && <p>No data available.</p>
        )}
      </div>
    </>
  );
};

export default Page;