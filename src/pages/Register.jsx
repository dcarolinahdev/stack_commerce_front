import React from "react";
import { Link as Anchor, useNavigate } from "react-router-dom";
import { useRef } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import apiUrl from "../api/ApiUrl";
import headers from "../api/headers";

const Register = () => {
  const navigate = useNavigate();
  const email = useRef();
  const photo = useRef();
  const password = useRef();

  const register = async () => {
    let data = {
      email: email.current.value?.trim(),
      password: password.current.value?.trim(),
      photo: photo.current.value?.trim(),
    };
    try {
      let newUser = await axios.post(apiUrl + "/auth/signout", null, headers());

      if (newUser) {
        Swal.fire({
          icon: "success",
          html: `<p>Account User Registered!</p>`,
          timer: 2000,
        });
        navigate("/signin");
      }
    } catch (error) {
      Swal.fire({
        icon: "info",
        text: "¡Sign Up Failed!",
        html: error.response.data.messages
          .map((each) => `<p>${each}</p>`)
          .join(""),
      });
    }
  };

  return (
    <div className="bg-cover bg-center bg-no-repeat object-fit h-screen md:bg-[url('/assets/signIn.png')] ">
      <div className="md:flex object-cover bg-no-repeat w-screen">
        <div className="flex flex-col items-center justify-center bg-white gap-2 h-screen w-screen md:w-[50%]">
          <div className="flex flex-col items-center justify-center gap-2 h-screen w-screen md:w-[50%]">
            <img src="/assets/logo23.png" alt="frame" className="w-[140px]" />
            <p className="font-semibold text-[10px] mb-[1px] text-center p-1">
              Enjoy Free Shipping on stack commerce!
            </p>
            <p className="font-semibold text-[10px] mb-[1px] text-center p-1">
              For buyers, shop at ease and enjoy lower prices for your
              purchases.
            </p>
            <form className="flex flex-col">
              <input
                className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[40px] p-2 my-[8px] text-[12px] hover:border-t_background3 rounded-lg border-2 border-[#1F1F1F]"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                ref={email}
              />
              <input
                className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[40px] p-2 my-[8px] text-[12px] hover:border-t_background3 rounded-lg border-2 border-[#1F1F1F]"
                type="text"
                name="Photo"
                id="Photo"
                placeholder="URL Photo"
                ref={photo}
              />
              <input
                className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[40px] p-2 my-[8px] text-[12px] hover:border-t_background3 rounded-lg border-2 border-[#1F1F1F]"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                ref={password}
              />
              <input
                className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[40px] p-2 my-[8px] text-xl text-white rounded-lg bg-t_background3  hover:bg-t_background3 hover:text-[white] hover:border-t_background3 cursor-pointer"
                type="button"
                value="Sign up"
                onClick={register}
              />
              {/* <div className="relative">
            <a
                href="https://accounts.google.com/v3/signin/identifier?dsh=S-1945593188%3A1688431387052498&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=AeDOFXh333ESPpierC-U9AFHbwabu7NXKW3GDPpiyQmMsS8m6FCT5GG60vBW8FSn5d5WsW6re4P4&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                type="button"
                className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[35px] p-2 my-[5px] hover:bg-[#4338CA] hover:text-[white] hover:border-[#4338CA] text-[13px] text-center rounded-lg border-2 border-[#1F1F1F]"
              >
                <img src="/assets/Google.png" alt=""  className="absolute right-[285px] top-[13px] w-[22px] hidden lg:block  "/>
                <p>Sign in with Google</p> 
              </a>
          </div> */}

              <p className="font-semibold text-[12px] text-center pb-6">
                Go back to{" "}
                <Anchor to="/" className="text-[#4338CA] hover:text-black">
                  Home
                </Anchor>
                !
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
