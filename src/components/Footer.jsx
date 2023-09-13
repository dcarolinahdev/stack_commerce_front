import { BiLogoFacebook, BiLogoInstagramAlt } from "react-icons/bi";
import { RiWhatsappFill } from "react-icons/ri";
import { HiMail } from "react-icons/hi";
import { Link as Anchor } from "react-router-dom";
import logo from "/assets/logo.ico";

export default function Footer() {
  return (
    <footer className="flex flex-col mt-[1%]   justify-center px-12 py-10 gap-6 bg-gradient-to-r from-t_background1  to-t_background3 text-t_main">
      <div className="flex items-center justify-between">
        <span className="text-xl md:text-2xl font-medium">Contact us</span>

        <div className="flex flex-col justify-around items-end">
          <Anchor to={"#"} className="flex items-center">
            <img
              className="w-10 h-10 mr-3 bg-t_main rounded-full  hidden md:block  hover:bg-t_main hover:rounded-full cursor-pointer transition-transform transform hover:scale-105 "
              src={logo}
              alt="logo"
            ></img>
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white dark:text-white">
              StackCommerce
            </span>
          </Anchor>
          <div className="flex gap-2">
            <Anchor>
              <HiMail className="w-6 h-6 rounded-full p-1 bg-t_main text-t_stroke transition-transform transform hover:scale-105  " />
            </Anchor>
            <Anchor>
              <BiLogoFacebook className="w-6 h-6 rounded-full p-1 bg-t_main text-t_stroke transition-transform transform hover:scale-105  " />
            </Anchor>
            <Anchor>
              <BiLogoInstagramAlt className="w-6 h-6 rounded-full p-1 bg-t_main text-t_stroke transition-transform transform hover:scale-105 " />
            </Anchor>
            <Anchor>
              <RiWhatsappFill className="w-6 h-6 rounded-full p-1 bg-t_main text-t_stroke transition-transform transform hover:scale-105 " />
            </Anchor>
          </div>
        </div>
      </div>
      <span className="text-center font-medium">© 2023 StackCommerce</span>
    </footer>
  );
}
