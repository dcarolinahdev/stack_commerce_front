import React from "react";
import { Link as Anchor, useNavigate } from "react-router-dom";
import { useRef } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import apiUrl from "../api/ApiUrl";

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
      let newUser = await axios.post(apiUrl + "/auth/signup", data);

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
    <main className="flex bg-t_main w-screen min-h-screen items-center justify-between">
      <div className="flex flex-col md:top-0 md:right-[50%] items-center h-screen w-screen md:w-[50%]">
      <img src="/assets/logo23.png" alt="frame" className="mt-8 w-[140px]" />
        <p className="font-semibold text-[10px] mb-[1px] text-center p-1">
          Enjoy Free Shipping on stack commerce!
        </p>
        <p className="font-semibold text-[10px] mb-[1px] text-center p-1">
          For buyers, shop at ease and enjoy lower prices for your purchases.
        </p>
        <form className="flex flex-col my-[2px]">
          <input
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[40px] p-2 my-[8px] text-[12px] hover:border-[#4338CA] rounded-lg border-2 border-[#1F1F1F]"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            ref={email}
          />
          <input
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[40px] p-2 my-[8px] text-[12px] hover:border-[#4338CA] rounded-lg border-2 border-[#1F1F1F]"
            type="text"
            name="Photo"
            id="Photo"
            placeholder="URL Photo"
            ref={photo}
          />
          <input
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[40px] p-2 my-[8px] text-[12px] hover:border-[#4338CA] rounded-lg border-2 border-[#1F1F1F]"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            ref={password}
          />
          <input
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[40px] p-2 my-[8px] text-xl text-white rounded-lg bg-gradient-to-r bg-t_background from-[#4338CA] hover:bg-[#4348CA] hover:text-[white] hover:border-[#4338CA]"
            type="button"
            value="Sign up"
            onClick={register}
          />
          <div className="relative">
            <a
                href="https://accounts.google.com/v3/signin/identifier?dsh=S-1945593188%3A1688431387052498&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=AeDOFXh333ESPpierC-U9AFHbwabu7NXKW3GDPpiyQmMsS8m6FCT5GG60vBW8FSn5d5WsW6re4P4&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                type="button"
                className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[35px] p-2 my-[5px] hover:bg-[#4338CA] hover:text-[white] hover:border-[#4338CA] text-[13px] text-center rounded-lg border-2 border-[#1F1F1F]"
              >
                <img src="/assets/Google.png" alt=""  className="absolute right-[285px] top-[13px] w-[22px] hidden lg:block  "/>
                <p>Sign in with Google</p> 
              </a>
          </div>
          <div className="relative">
            <a
                href="https://appleid.apple.com/sign-in"
                type="button"
                className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[35px] p-2 my-[5px] hover:bg-[#4338CA] hover:text-[white] hover:border-[#4338CA] text-[13px] text-center rounded-lg border-2 border-[#1F1F1F]"
              >
                <img src="/assets/iphone-logo.png" alt="Apple"  className="absolute right-[280px] top-[7px] w-[30px] hidden lg:block"
                />
                <p>Sign in with Apple</p> 
              </a>
          </div>
          <p className="font-semibold text-[12px] text-center pb-6">
            Go back to{" "}
            <Anchor to="/" className="text-[#4338CA] hover:text-black">
              Home
            </Anchor>
            !
          </p>
        </form>
      </div>
      <img
        className="hidden md:block md:top-0 md:right-0 h-screen w-[50%] object-cover"
        src="/assets/ai-robot.png"
        alt="register"
      />
    </main>
  );
};

export default Register;
