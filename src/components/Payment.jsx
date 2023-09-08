import { BsClockFill } from "react-icons/bs";
import { GiGreekTemple } from "react-icons/gi";
import { BsCashCoin } from "react-icons/bs";
import { Link as Anchor } from "react-router-dom";

export default function Payment() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 text-t_background gap-1 px-3 py-2">
      <div className="col-start-1 md:col-start-2 flex justify-center items-center p-2 h-16 md:p-4 bg-gradient-to-r from-t_background1 to-t_background3 rounded-lg transition-transform transform hover:scale-110 cursor-pointer">
        <BsClockFill className="w-10 h-10 text-white" />
        <span className="text-[16px] pl-2 capitalize font-semibold text-white">
          48 horas
        </span>
      </div>

      <div className="flex justify-center items-center  p-2 h-16 md:p-4 bg-gradient-to-r from-t_background1 to-t_background3 rounded-lg transition-transform transform hover:scale-110 cursor-pointer">
        <GiGreekTemple className="w-10 h-10 text-white" />
        <span className="text-[16px] pl-2 capitalize font-semibold text-white">
          wire transfer
        </span>
      </div>

      <div className="flex justify-center items-center p-2 h-16 md:p-4 bg-gradient-to-r from-t_background1 to-t_background3 rounded-lg transition-transform transform hover:scale-110 cursor-pointer">
        <BsCashCoin className="w-10 h-10 text-white" />
        <span className="text-[16px] pl-2 capitalize font-semibold text-white">
          Cash payment
        </span>
      </div>
    </div>
  );
}
