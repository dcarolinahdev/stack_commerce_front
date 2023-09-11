import React from 'react'
import { Link as Anchor } from "react-router-dom";


const CardProducts = ({name,image,description,price,stock,id}) => {
  return (
    <>
  <div  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={image}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
<p>{description}</p>
        <span className="text-3xl font-bold ml-12 text-gray-900 dark:text-white">
       price: {price}
        </span>
        <span className="text-3xl font-bold ml-12 text-gray-900 dark:text-white">
       stock:  {stock}
        </span>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <Anchor to={"/cart/" + id  } className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Buy
          </Anchor>
        </button>
      </div>

    
    </div>
  </>
  )
}

export default CardProducts