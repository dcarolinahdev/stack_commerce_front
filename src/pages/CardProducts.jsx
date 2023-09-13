import React from 'react'
import { Link as Anchor } from "react-router-dom";
import { RiShoppingCartFill } from "react-icons/ri";


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
<div className='mt-2 mb-2'>
<span className="text-sm font-bold ml-2 text-gray-900 dark:text-white">
       price: {price}
        </span>
        <span className="text-sm font-bold ml-2 text-gray-900 dark:text-white  border-2 border-black-600 p-1 rounded ">
       stock:  {stock}
        </span>
</div>
   
          <Anchor to={"/cart/" + id  }  className="inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center  bg-green-300 text-white rounded-lg transition-transform transform hover:bg-t_background1 focus:ring-4 focus:outline-none">
            Add
            <div className="ml-6">
                <RiShoppingCartFill></RiShoppingCartFill>
              </div>
          </Anchor>
         

      </div>

    
    </div>
  </>
  )
}

export default CardProducts