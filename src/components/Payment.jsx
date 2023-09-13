import { BsClockFill } from "react-icons/bs";
import { GiGreekTemple } from "react-icons/gi";
import { BsCashCoin } from "react-icons/bs";
import { Link as Anchor } from "react-router-dom";

export default function Payment() {
  return (
    <>
    <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
      <div className="flex flex-col justify-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Stack-Ecommerce
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          "Discover a world of possibilities with our exquisite collection.
          Elevate your style, redefine your space, and indulge in the art of
          luxury shopping. Unveil the extraordinary – shop now and transform
          the ordinary into the extraordinary!"
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Anchor
            to={"/register"}
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Register
          </Anchor>
          <Anchor
            to={"/signin"}
            type="button"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Login
          </Anchor>
        </div>
      </div>
      <div>
        <iframe
          className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
          src="https://www.youtube.com/embed/R-TNTVHvM3c"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </section>
    <div className="grid grid-cols-3 md:grid-cols-5 text-t_background gap-2.5 px-3 py-2">
      <div className="col-start-1 md:col-start-2 flex justify-center items-center p-2 h-16 md:p-4 bg-gradient-to-r from-t_background1 to-t_background3 rounded-lg transition-transform transform hover:scale-105 cursor-pointer">
        <BsClockFill className="w-10 h-10 text-white" />
        <span className="text-[16px] pl-2 capitalize font-semibold text-white">
          48 horas
        </span>
      </div>

      <div className="flex justify-center items-center  p-2 h-16 md:p-4 bg-gradient-to-r from-t_background1 to-t_background3 rounded-lg transition-transform transform hover:scale-105 cursor-pointer">
        <GiGreekTemple className="w-10 h-10 text-white" />
        <span className="text-[16px] pl-2 capitalize font-semibold text-white">
          wire transfer
        </span>
      </div>

      <div className="flex justify-center items-center p-2 h-16 md:p-4 bg-gradient-to-r from-t_background1 to-t_background3 rounded-lg transition-transform transform hover:scale-105 cursor-pointer">
        <BsCashCoin className="w-10 h-10 text-white" />
        <span className="text-[16px] pl-2 capitalize font-semibold text-white">
          Cash payment
        </span>
      </div>
    </div>
    </>
  );
  
}
