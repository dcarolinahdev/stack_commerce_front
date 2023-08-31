import React from "react";

const Admin = () => {
  return (
    <>
      <section className="bg-center bg-no-repeat bg-[url('https://www.esic.edu/sites/default/files/2020-09/optimizar-tu-ecommerce.jpg')] bg-[#7f5af0] bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            ADMIN PANEL
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            commodi dicta, autem possimus earum in optio sequi veniam, fugiat
            at, officiis aut ad? Magni animi laborum facilis, quod sequi
            pariatur.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"></div>
        </div>
      </section>

      <div className="overflow-x-auto m-10">
        <table className="w-full text-sm text-left text-gray-800 bg-white border dark:text-gray-300 dark:bg-gray-800 dark:border-gray-700">
          <thead className="text-xs bg-gray-100 dark:bg-gray-700">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 font-semibold text-3xl text-gray-900 dark:text-white text-center"
              >
                Product
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-semibold text-3xl text-gray-900 dark:text-white text-center"
              >
                ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-semibold text-3xl text-gray-900 dark:text-white text-center"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-semibold text-3xl text-gray-900 dark:text-white text-center"
              >
                State
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50 dark:bg-gray-900 text-center">
              <td className="px-6 py-4">Apple MacBook Pro 17"</td>
              <td className="px-6 py-4">65265</td>
              <td className="px-6 py-4">28-08-2023</td>
              <td className="px-6 py-4">Sent</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-900 text-center">
              <td className="px-6 py-4">Microsoft Surface Pro</td>
              <td className="px-6 py-4">365345345</td>
              <td className="px-6 py-4">28-08-2023</td>
              <td className="px-6 py-4">Sent</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-900 text-center">
              <td className="px-6 py-4">Magic Mouse 2</td>
              <td className="px-6 py-4">3345354354</td>
              <td className="px-6 py-4">28-08-2023</td>
              <td className="px-6 py-4">Sent</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Admin;
