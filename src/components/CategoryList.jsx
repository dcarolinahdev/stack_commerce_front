export default function CategoryList() {
    return (
        <div className="bg-t_background1 p-[15px] flex flex-col mt-2 rounded-lg">

            <button type="button" className="text-white bg-gradient-to-r bg-t_background3 hover:rounded-xl cursor-pointer transition-transform transform hover:scale-105 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center  mb-6">Computers and Accessories</button>
            <button type="button" className="text-white bg-gradient-to-r bg-t_background3 hover:rounded-xl cursor-pointer transition-transform transform hover:scale-105 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-6">Innovative Gadgets</button>
            <button type="button" className="text-white bg-gradient-to-r bg-t_background3 hover:rounded-xl cursor-pointer transition-transform transform hover:scale-105 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-6">Smart Home Appliances</button>
            <button type="button" className="text-white bg-gradient-to-r bg-t_background3 hover:rounded-xl cursor-pointer transition-transform transform hover:scale-105 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-6">Smartphones and Accessories</button>
            <button type="button" className="text-white bg-gradient-to-r bg-t_background3 hover:rounded-xl cursor-pointer transition-transform transform hover:scale-105 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-6">Household Appliances</button>
            <button type="button" className="text-white bg-gradient-to-r bg-t_background3 hover:rounded-xl cursor-pointer transition-transform transform hover:scale-105 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-6">Tablets and Smartwatches</button>
                
            <button type="button" className="text-black bg-gradient-to-r bg-white hover:bg-gradient-to-br focus:ring-4 cursor-pointer transition-transform transform hover:scale-105 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Search Filter</button>
        </div>
    )
}