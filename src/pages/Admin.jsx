import React from "react";

const Admin = () => {
  return (
    <>
<div className="bg-blue-500 py-16 text-white text-center mt-8">
  <div className="container mx-auto">
    <h1 className="text-4xl font-bold">Admin Panel</h1>
    <p className="text-xl mt-4">Welcome to your personal area!!</p>
  </div>
</div>

<div className="container mx-auto mt-8 p-4">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  text-white">
    <div className="bg-yellow-500 p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold">Pending Orders</h2>
      <p className="text-3xl font-bold mt-2">25</p>
    </div>

    <div className="bg-green-500 p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold">Completed Orders</h2>
      <p className="text-3xl font-bold mt-2">50</p>
    </div>

    <div className="bg-pink-500 p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold">Users</h2>
      <p className="text-3xl font-bold mt-2">1000</p>
    </div>

    <div className="bg-blue-500 p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold">Total Sold</h2>
      <p className="text-3xl font-bold mt-2">$10,000</p>
    </div>
  </div>

  <div className="mt-8 bg-white rounded shadow-md overflow-x-auto">
    <div className="flex w-full auto"></div>
    <table className="w-full table-auto">
      <thead>
        <tr className="bg-blue-500 text-white">
          <th className="px-4 py-2">Order</th>
          <th className="px-4 py-2">Date</th>
          <th className="px-4 py-2">Customer</th>
          <th className="px-4 py-2">Total</th>
          <th className="px-4 py-2">Status</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">1</td>
          <td className="border px-4 py-2">2023-09-12</td>
          <td className="border px-4 py-2">John Doe</td>
          <td className="border px-4 py-2">$100</td>
          <td className="border px-4 py-2">
            <span className="px-2 py-1 rounded bg-yellow-500 text-white">
              Pending
            </span>
          </td>
          <td className="border px-4 py-2">
            <a href="#" className="text-blue-500 hover:text-blue-700 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 5a6 6 0 00-6 6v2a6 6 0 006 6 6 6 0 006-6v-2a6 6 0 00-6-6z"
                />
              </svg>
            </a>
            <a href="#" className="text-red-500 hover:text-red-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </a>
          </td>
        </tr>
        <tr>
          <td className="border px-4 py-2">2</td>
          <td className="border px-4 py-2">2023-09-13</td>
          <td className="border px-4 py-2">Jane Smith</td>
          <td className="border px-4 py-2">$75</td>
          <td className="border px-4 py-2">
            <span className="px-2 py-1 rounded bg-green-500 text-white">
              Completed
            </span>
          </td>
          <td className="border px-4 py-2">
            <a href="#" className="text-blue-500 hover:text-blue-700 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 8.293a1 1 0 0 1 1.414 0L10 12.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="#" className="text-red-500 hover:text-red-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 6.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
    </>
  )
};

export default Admin;
