import { BiLogoFacebook, BiLogoInstagramAlt } from "react-icons/bi";
import { RiWhatsappFill } from "react-icons/ri";
import { HiMail } from "react-icons/hi";
import { Link as Anchor } from "react-router-dom";
import logo from "/assets/logo.ico";

export default function Footer() {
  return (
    <footer className="flex flex-col mt-[1%]   justify-center px-12 py-10 gap-6">
      <div className="bottom-0   hidden xl:block overflow-x-hidden    ">
          <img
            src="/assets/footer.png"
            alt=""
            className="mx-auto w-[90%]"
            style={{ borderRadius: "0 0 140% 140%" }}
          /></div>
          <hr className="border-b border-[#3BE2AB] my-4 w-[75%] mx-auto mt-[2%]   " />
      <div className="flex items-center justify-between">
        <span className="text-xl md:text-2xl mx-[15%] font-extrabold font-serif text-[#3BE2AF]">Contact us</span>

        <div className="flex flex-col justify-around items-end">
          <Anchor to={"#"} className="flex items-center">
            <img
              className="w-10 h-10 mr-20 bg-t_main rounded-full  hidden md:block hover:bg-t_main hover:rounded-full cursor-pointer transition-transform transform hover:scale-105 "
              src={logo}
              alt="logo"
            ></img>
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white dark:text-white">
              StackCommerce
            </span>
          </Anchor>
          <div className="flex gap-2 mx-[70%]">
            <Anchor>
              <HiMail className="w-6 h-6 rounded-full p-1 bg-t_main bg-[#3BE2AB] text-t_stroke text-[white] transition-transform transform hover:scale-105  " />
            </Anchor>
            <Anchor>
              <BiLogoFacebook className="w-6 h-6 rounded-full p-1 bg-t_main bg-[#3BE2AB] text-t_stroke text-[white] transition-transform transform hover:scale-105  " />
            </Anchor>
            <Anchor>
              <BiLogoInstagramAlt className="w-6 h-6 rounded-full p-1 bg-t_main bg-[#3BE2AB] text-t_stroke text-[white] transition-transform transform hover:scale-105 " />
            </Anchor>
            <Anchor>
              <RiWhatsappFill className="w-6 h-6 rounded-full p-1 bg-t_main bg-[#3BE2AB] text-t_stroke text-[white] transition-transform transform hover:scale-105 " />
            </Anchor>
          </div>
        </div>
      </div>
      <span className="text-center font-extrabold font-serif text-[#3BE2AF]">© 2023 StackCommerce</span>
    </footer>
  );
}
