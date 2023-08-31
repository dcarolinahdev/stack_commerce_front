import { BiLogoFacebook, BiLogoInstagramAlt } from "react-icons/bi"
import { RiWhatsappFill } from "react-icons/ri"
import { HiMail } from "react-icons/hi"

export default function Footer() {
  return (
    <div className='flex flex-col justify-center px-12 py-10 gap-6 bg-t_background text-t_main'>

        <div className='flex items-center justify-between'>
            <span className="text-[24px]">Contact us</span>

            <div className='flex flex-col justify-around items-end'>
                <span className="flex text-[20px]">
                    stack commerce
                </span>
                <div className="flex gap-2">
                    <HiMail className="w-6 h-6 rounded-full p-1 bg-t_main text-t_stroke" />
                    <BiLogoFacebook className="w-6 h-6 rounded-full p-1 bg-t_main text-t_stroke" />
                    <BiLogoInstagramAlt className="w-6 h-6 rounded-full p-1 bg-t_main text-t_stroke" />
                    <RiWhatsappFill className="w-6 h-6 rounded-full p-1 bg-t_main text-t_stroke" />
                </div>
            </div>
        </div>

        <span className='text-center'>
            © 2023 Team Yellow™.
        </span>

    </div>
  )
}
