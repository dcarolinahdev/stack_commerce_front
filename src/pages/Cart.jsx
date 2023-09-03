import React from "react";
import {
  RiAddCircleLine,
  RiIndeterminateCircleLine,
  RiCloseCircleLine,
} from "react-icons/ri";

const Cart = () => {
  return (
    <div className="pt-4">
      <section className="">
        <div className="py-4 px-4 mx-auto max-w-screen-xl  text-center lg:py-16 z-10 relative">
          <h1 className="mb-4 text-4xl text-t_stroke font-extrabold tracking-wider leading-none md:text-5xl lg:text-6xl">
            Shopping Cart
          </h1>
          <p className="mb-0 text-lg tracking-wider text-t_stroke font-normal lg:text-xl sm:px-16 lg:px-48">
            The best way to predict the future is to invent it
            <hr className="my-0.5 bg-t_stroke " />
          </p>
          <form className="w-full max-w-md mx-auto"></form>
        </div>
      </section>

      <div className="mx-7 lg:mx-24 mb-7 lg:mb-24">
        <div className="relative overflow-x-auto shadow-md sm:rounded-t-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3 text-t_stroke">
                  Product
                </th>
                <th scope="col" className="px-6 py-3 text-t_stroke">
                  Qty
                </th>
                <th scope="col" className="px-6 py-3 text-t_stroke">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-t_stroke">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-[15%] p-4">
                  <img
                    src="https://www.homecrux.com/wp-content/gallery/smart-mirror/smart-mirror-1.jpg"
                    alt="img"
                  />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  Smart Mirror 2.0
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <RiIndeterminateCircleLine className=" text-[150%]" />
                    <div>
                      <input
                        type="number"
                        id="first_product"
                        className="bg-gray-50 w-14 pl-[35%] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="1"
                        required
                      />
                    </div>

                    <RiAddCircleLine className="text-[150%]" />
                  </div>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  $599
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Remove
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-[55px] py-3"></th>
                <th scope="col" className="px-[8%] py-3">
                  Total : $ 00000
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="relative overflow-x-auto sm:rounded-b-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-[38px] py-3">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Empty Cart
                  </button>
                </th>
                <th scope="col" className="px-6 py-3">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r transition-transform transoform hover:scale-105 from-t_background via-blue-600 to-t_background hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Buy
                  </button>
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
