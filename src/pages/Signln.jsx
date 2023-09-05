import React from "react";
import { Link as Anchor, useNavigate } from "react-router-dom";
import { useRef } from "react";
import apiUrl from "../api/ApiUrl";
import Swal from "sweetalert2";
import axios from "axios";
import Navbar from "../components/Navbar";

const SignIn = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();

  const signIn = async () => {
    let data = {
      email: email.current.value?.trim(),
      password: password.current.value?.trim(),
    };

    try {
      let user = await axios.post(apiUrl + "/auth/signin", data);

      if (user) {
        localStorage.setItem("token", user.data.response.token);
        localStorage.setItem("user", JSON.stringify(user.data.response.user));

        Swal.fire({
          icon: "success",
          text: "Welcome to StackCommerce !",
          timer: 1500,
          allowOutsideClick: false,
          showConfirmButton: false,
        });

        navigate("/");
        setTimeout(() => {
          window.location.replace("/");
        }, 1500);
      }
    } catch (error) {
      Swal.fire({
        icon: "info",
        text: "¡Sign In Failed!",
        html: error.response.data.messages
          .map((each) => `<p>${each}</p>`)
          .join(""),
      });
    }
  };

  return (
    <main className="flex bg-t_main w-screen min-h-screen items-center justify-between">
      <div className="flex flex-col md:top-0 md:right-[50%] items-center h-screen w-screen md:w-[50%]">
        <img src="/assets/logo23.png" alt="frame" className="mt-4 w-[160px]" />
        <p className="font-semibold text-[18px] mb-[2px] text-center p-2"></p>
        <form className="flex flex-col my-[2px]">
          <input
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]"
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            ref={email}
          />
          <input
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            ref={password}
          />
          <input
            className="w-[260px] cursor-pointer md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-xl text-white rounded-lg bg-gradient-to-r bg-t_background1"
            type="button"
            value="Sign In"
            onClick={signIn}
          />
          <div className="relative">
            <input
              className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[18px] text-center rounded-lg border-2 border-[#1F1F1F]"
              type="password"
              name="password"
              id="password"
              placeholder="Continue in with Google"
            />
            <img
              src="/assets/Google.png"
              alt="google"
              className="absolute right-[320px] top-[24px] w-[22px] hidden lg:block"
            />
          </div>
          <div className="relative">
            <input
              className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-[18px] text-center rounded-lg border-2 border-[#1F1F1F]"
              type="password"
              name="password"
              id="password"
              placeholder="Continue with Apple"
            />
            <img
              src="/assets/iphone-logo.png"
              alt="Apple"
              className="absolute right-[320px] top-[24px] w-[22px] hidden lg:block"
            />
          </div>
        </form>
        <p className="font-semibold text-[12px] text-center p-2">
          Go back to{" "}
          <Anchor to="/" className="text-[#4338CA] hover:text-black">
            Home
          </Anchor>
          !
        </p>
      </div>
      <img
        className="hidden md:block md:top-0 md:right-0 h-screen w-[50%] object-cover"
        src="/assets/istockphoto-523788889-612x612.jpg"
        alt="register"
      />
    </main>
  );
};

export default SignIn;
