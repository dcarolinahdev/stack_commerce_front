import Display from "./Display";
import logo from "/assets/logo.ico";
import { useState, useEffect } from "react";
import { Link as Anchor } from "react-router-dom";
import axios from "axios";
import apiUrl from "../api/ApiUrl";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import headers from "../api/headers";
import {
  RiShoppingCartFill,
  RiHome3Fill,
  RiDoorOpenFill,
  RiUserAddFill,
  RiAccountPinCircleFill,
  RiUserSettingsFill,
} from "react-icons/ri";

export default function Navbar() {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      axios
        .post(apiUrl + "/auth/token", null, headers())
        .then((res) => {
          if (res.data.response.user.role === 1) {
            setOptions([
              { to: "/", title: "Home" },
              { to: "/products", title: "Products" },
              { to: "/category", title: "Category" },
              {
                to: "/cart",
                title: (
                  <div data-tooltip-id="cart" data-tooltip-content="Cart">
                    <RiShoppingCartFill className="font-bold text-xl"></RiShoppingCartFill>
                    <Tooltip id="cart" />
                  </div>
                ),
              },
              {
                to: "/profile",
                title: (
                  <div data-tooltip-id="profile" data-tooltip-content="Profile">
                    <RiUserSettingsFill className="font-bold text-xl"></RiUserSettingsFill>
                    <Tooltip id="profile" />
                  </div>
                ),
              },
            ]);
          } else if (res.data.response.user.role === 2) {
            setOptions([
              { to: "/", title: "Home" },
              { to: "/products", title: "Products" },
              { to: "/category", title: "Category" },
              {
                to: "/admin",
                title: (
                  <div
                    data-tooltip-id="admin"
                    data-tooltip-content="Admin Panel"
                  >
                    <RiAccountPinCircleFill className="font-bold text-xl"></RiAccountPinCircleFill>
                    <Tooltip id="admin" />
                  </div>
                ),
              },
            ]);
          } else {
            setOptions([
              { to: "/signin", title: "SignIn" },
              { to: "/register", title: "SignUp" },
            ]);
          }
        })
        .catch(() => signOut_token(setOptions));
    } else {
      signOut_token(setOptions);
    }
  }, []);

  const [show, setShow] = useState(false);
  return (
    <>
      {show && <Display options={options} show={show} setShow={setShow} />}
      <nav className="flex items-center justify-between w-full h-16 px-4 bg-t_background text-t_secondary">
        <div className="flex items-center text-white justify-between">
          <img
            className="w-10 h-10 bg-t_main rounded-full mr-2 hover:bg-t_main hover:rounded-full cursor-pointer transition-transform transform hover:scale-105 "
            src={logo}
            onClick={() => setShow(!show)}
            alt="logo"
          ></img>
          <Anchor to={"/"}>
            <p className="cursor-pointer font-bold">Stack Commerce</p>
          </Anchor>
        </div>
        <div className="flex items-center gap-2">
          {options?.map((option, index) => (
            <Anchor
              key={index}
              to={option.to}
              className="hover:bg-t_main hover:rounded font-medium py-1 hover:text-t_stroke text-t_main transition-transform transform hover:scale-105 "
            >
              {option?.title}
            </Anchor>
          ))}
        </div>
      </nav>
    </>
  );
}

function signOut_token(setOptions) {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  setOptions([
    {
      to: "/",
      title: (
        <div data-tooltip-id="home" data-tooltip-content="Home">
          <RiHome3Fill className="font-bold text-xl"></RiHome3Fill>
          <Tooltip id="home" />
        </div>
      ),
      onClick: () => showDisplay({ show, setShow }),
    },
    {
      to: "/signin",
      title: (
        <div data-tooltip-id="login" data-tooltip-content="Login">
          <RiDoorOpenFill className="font-bold text-xl"></RiDoorOpenFill>
          <Tooltip id="login" />
        </div>
      ),
      onClick: () => showDisplay({ show, setShow }),
    },
    {
      to: "/register",
      title: (
        <div data-tooltip-id="register" data-tooltip-content="Register">
          <RiUserAddFill className="font-bold text-xl"></RiUserAddFill>
          <Tooltip id="register" />
        </div>
      ),
      onClick: () => showDisplay({ show, setShow }),
    },
  ]);
}
