import { BsClockFill } from "react-icons/bs";
import { GiGreekTemple } from "react-icons/gi";
import { BsCashCoin } from "react-icons/bs";
import { Link as Anchor } from "react-router-dom";

export default function Payment() {
  return (
    <div className="flex py-4 p-2 justify-around items-center text-t_background bg-white mb-4">
      <div className="flex items-center p-2 h-16 mr-2 md:p-4 bg-gradient-to-r from-t_background1 to-t_background3 rounded-lg transition-transform transform hover:scale-110 cursor-pointer">
        <BsClockFill className="w-10 h-10 text-white" />
        <span className="text-[16px] pl-2 capitalize font-semibold text-white">
          48 horas
        </span>
      </div>

      <div className="flex items-center  p-2 h-16 mr-2 md:p-4 bg-gradient-to-r from-t_background1 to-t_background3 rounded-lg transition-transform transform hover:scale-110 cursor-pointer">
        <GiGreekTemple className="w-10 h-10 text-white" />
        <span className="text-[16px] pl-2 capitalize font-semibold text-white">
          wire transfer
        </span>
      </div>

      <div className="flex items-center p-2 h-16 md:p-4 bg-gradient-to-r from-t_background1 to-t_background3 rounded-lg transition-transform transform hover:scale-110 cursor-pointer">
        <BsCashCoin className="w-10 h-10 text-white" />
        <span className="text-[16px] pl-2 capitalize font-semibold text-white">
          Cash payment
        </span>
      </div>
    </div>
  );
}
