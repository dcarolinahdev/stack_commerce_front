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
              // { to: "/", title: "Ho" },
              // { to: "/products", title: "Products" },
              // { to: "/category", title: "Category" },
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

      <nav class="bg-gradient-to-r from-t_background1 via-purple-500 to-t_background3  ">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Anchor to={"#"} class="flex items-center">
            <img
              className="w-10 h-10 mr-3 bg-t_main rounded-full  hover:bg-t_main hover:rounded-full cursor-pointer transition-transform transform hover:scale-105 "
              src={logo}
              onClick={() => setShow(!show)}
              alt="logo"
            ></img>

            <span class="self-center text-xl font-semibold whitespace-nowrap text-white dark:text-white">
              StackCommerce
            </span>
          </Anchor>
          <div class="flex items-center">
            <div className="flex items-center gap-2">
              {options?.map((option, index) => (
                <Anchor
                  key={index}
                  to={option.to}
                  className="hover:bg-t_main hover:rounded font-medium py-1 mr-1 hover:text-t_stroke text-t_main transition-transform transform hover:scale-105 "
                >
                  {option?.title}
                </Anchor>
              ))}
            </div>

            <button
              type="button"
              class="flex mr-3 text-sm ml-2 bg-gray-800 rounded-full hover:underline md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <img
                className="w-8 h-8 rounded-full object-fit"
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E"
                alt="user photo"
              />
            </button>
          </div>
        </div>
      </nav>
      <nav class="bg-gradient-to-r from-t_background1 via-purple-500 to-t_background3">
        <div class="max-w-screen-xl px-4 pb-2 mx-auto">
          <div class="flex items-center">
            <ul class="flex flex-row flex-wrap mt-2 justify-between font-medium space-x-8 text-sm">
              <li className="bg-white text-t_stroke p-1.5  decoration-slice rounded transition-transform transform hover:scale-105 cursor-pointer">
                <Anchor className="dark:text-white hover:underline">
                  Products
                </Anchor>
              </li>
              <li className="bg-white text-t_stroke p-1.5 rounded transition-transform transform hover:scale-105 cursor-pointer">
                <Anchor className=" dark:text-white hover:underline">
                  Category
                </Anchor>
              </li>
              <li className="bg-white text-t_stroke p-1.5 rounded transition-transform transform hover:scale-105 cursor-pointer">
                <Anchor className=" dark:text-white hover:underline">
                  Offers
                </Anchor>
              </li>
            </ul>
          </div>
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
