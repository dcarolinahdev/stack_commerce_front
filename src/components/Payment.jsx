import { AiFillCreditCard } from "react-icons/ai"
import { GiGreekTemple } from "react-icons/gi"
import { BsCashCoin } from "react-icons/bs"

export default function Payment() {
  return (
    <div className="flex py-4 px-6 justify-around items-center text-t_background bg-[#EDEDED] mb-4">

        <div className="flex items-center">
            <AiFillCreditCard className="w-10 h-10" />
            <span className="text-[14px] pl-2 uppercase">48 horas</span>
        </div>

        <div className="flex items-center">
            <GiGreekTemple className="w-10 h-10" />
            <span className="text-[14px] pl-2 uppercase">wire transfer</span>
        </div>

        <div className="flex items-center">
            <BsCashCoin className="w-10 h-10" />
            <span className="text-[14px] pl-2 uppercase">cash payment</span>
        </div>

    </div>
  )
}
