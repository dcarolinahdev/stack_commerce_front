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
    <main className="flex w-full min-h-screen items-center justify-between">
      <div className="flex flex-col md:top-0 md:right-[50%] justify-center items-center h-screen md:w-[50%]">
        <img src="/assets/logo23.png" alt="frame" className="mt-14 w-[160px]" />
        <p className="font-semibold text-[12px] mb-[2px] text-center p-2">
          Enjoy Free Shipping on stack commerce!
        </p>
        <p className="font-semibold text-[12px] mb-[10px] text-center p-1">
          For buyers, shop at ease and enjoy lower prices for your purchases.
        </p>
        <form className="flex flex-col my-[2px]">
          <input
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            ref={email}
          />
          <input
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]"
            type="text"
            name="Photo"
            id="Photo"
            placeholder="URL Photo"
            ref={photo}
          />
          <input
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            ref={password}
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              id="myCheckbox"
              className="form-checkbox text-indigo-600 h-5 w-5"
            />
            <label id="myCheckbox" className="ml-2 text-gray-700">
              Send notificacion to my email
            </label>
          </div>
          <input
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-xl text-white rounded-lg bg-gradient-to-r from-[#4338CA] to-[#4338CA]"
            type="button"
            value="Sign up"
            onClick={register}
          />
          <div className="relative">
            <input
              className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[18px] text-center rounded-lg border-2 border-[#1F1F1F]"
              type="password"
              name="password"
              id="password"
              placeholder="Sign in with Google"
            />
            <img
              src="/assets/Google.png"
              alt="google"
              className="absolute right-[310px] top-[24px] w-[22px] hidden lg:block"
            />
          </div>
          <div className="relative">
            <input
              className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[18px] text-center rounded-lg border-2 border-[#1F1F1F]"
              type="password"
              name="password"
              id="password"
              placeholder="Sign in with Apple"
            />
            <img
              src="/assets/iphone-logo.png"
              alt="Apple"
              className="absolute right-[310px] top-[24px] w-[22px] hidden lg:block"
            />
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
