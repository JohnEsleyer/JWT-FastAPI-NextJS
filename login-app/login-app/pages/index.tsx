import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import React, {useState} from 'react';
import axios from 'axios';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login", {
        username,
        password,
      });
      if (response.data === "success") {
        setMessage("Login successful!");
      } else {
        setMessage("Login failed. Please try again.");
      }
    } catch (error) {
      setMessage("Login failed. Please try again.");
    }
  };


  return (
    <>
    <div className="bg-gray-800 h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-xl"
      >
        <h2 className="text-lg font-medium mb-4">Login</h2>
        <div className="mb-4">
          <label className="block font-medium mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-400 p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-400 p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-indigo-500 text-white p-2 rounded-full">
          Submit
        </button>
        {message && (
          <p className="text-center mt-4 text-sm text-green-500">{message}</p>
        )}
      </form>
    </div>
    </>
  )
}
