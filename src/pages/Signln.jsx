import React from "react";
import { Link as Anchor, useNavigate } from "react-router-dom";
import { useRef } from "react";
import apiUrl from "../api/ApiUrl";
import Swal from "sweetalert2";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();

  const signIn = async (event) => {
    event.preventDefault();

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
       
        setTimeout(() => {
          window.location.replace("/home");
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
    <main className="flex bg-t_main w-full min-h-full items-center mt-2">
      <div className="flex flex-col items-center justify-center gap-2 h-screen w-screen md:w-[50%]">
        <img src="/assets/logo23.png" alt="frame" className="w-[140px]" />
        <form className="flex flex-col">
          <input
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[40px] p-2 my-[8px] text-[12px] hover:border-t_background1 rounded-lg border-2 border-[#1F1F1F]"
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            ref={email}
          />
          <input
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[40px] p-2 my-[8px] text-[12px] hover:border-t_background1 rounded-lg border-2 border-[#1F1F1F]"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            ref={password}
          />
          <input
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[40px] p-2 my-[8px] text-xl text-white rounded-lg bg-t_background1 from-t_background1 hover:bg-t_background1 hover:text-[white] hover:border-[#4338CA] cursor-pointer"
            type="button"
            value="Sign In"
            onClick={signIn}
          />
          {/* <div className="relative">
            <a
              href="https://accounts.google.com/v3/signin/identifier?dsh=S-1945593188%3A1688431387052498&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=AeDOFXh333ESPpierC-U9AFHbwabu7NXKW3GDPpiyQmMsS8m6FCT5GG60vBW8FSn5d5WsW6re4P4&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
              type="button"
              className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[35px] p-2 my-[5px] hover:bg-[#4338CA] hover:text-[white] hover:border-[#4338CA] text-[13px] text-center rounded-lg border-2 border-[#1F1F1F]"
            >
              <img
                src="/assets/Google.png"
                alt=""
                className="absolute right-[285px] top-[13px] w-[22px] hidden lg:block"
              />
              <p>Sign in with Google</p>
            </a>
          </div> */}
  
        </form>
        <p className="font-semibold text-[12px] mt-[12px] p-2">
          You don't have an account yet?{" "}
          <Anchor to="/register" className="text-[#4338CA] hover:text-black">
            Sign up
          </Anchor>
          !
        </p>
        <p className="font-semibold text-[12px] p-2">
          Go back to{" "}
          <Anchor to="/" className="text-[#4338CA] hover:text-black">
            Home
          </Anchor>
          !
        </p>
      </div>
      <img
        className="hidden md:block h-screen w-[50%] object-cover"
        src="/assets/istockphoto-523788889-612x612.jpg"
        alt="register"
      />
    </main>
  );
};

export default SignIn;
