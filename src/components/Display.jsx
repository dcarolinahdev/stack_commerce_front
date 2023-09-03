import { useEffect, useState } from "react";
import { Link as Anchor } from "react-router-dom";
import axios from "axios";
import apiUrl from "../api/ApiUrl";
import headers from "../api/headers";

export default function Display({ show, setShow }) {
  const [options, setOptions] = useState([]);
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      axios
        .post(apiUrl + "/auth/token", null, headers())
        .then((res) => {
          if (res.data.response.user.role === 1) {
            setOptions([
              {
                to: "/",
                title: "Home",
                onClick: () => showDisplay({ show, setShow }),
              },
              {
                to: "/products",
                title: "Products",
                onClick: () => showDisplay({ show, setShow }),
              },
              {
                to: "/category",
                title: "Category",
                onClick: () => showDisplay({ show, setShow }),
              },
              {
                to: "/cart",
                title: "Cart",
                onClick: () => showDisplay({ show, setShow }),
              },
              {
                to: "/",
                title: "Sign Out",
                onClick: () => {
                  signOut_token(), () => showDisplay({ show, setShow });
                },
              },
            ]);
          } else if (res.data.response.user.role === 2) {
            setOptions([
              {
                to: "/",
                title: "Home",
                onClick: () => showDisplay({ show, setShow }),
              },
              {
                to: "/admin",
                title: "Admin",
                onClick: () => showDisplay({ show, setShow }),
              },
              {
                to: "/",
                title: "Sign Out",
                onClick: () => {
                  signOut_token(), () => showDisplay({ show, setShow });
                },
              },
            ]);
          }
          setEmail(res.data.response.user.email);
          setName(res.data.response.user.name);
          setPhoto(res.data.response.user.photo);
        })
        .catch(() => signOut_token(setOptions));
    } else {
      signOut_token(setOptions);
      setOptions([
        {
          to: "/",
          title: "Home",
          onClick: () => showDisplay({ show, setShow }),
        },
        {
          to: "/signin",
          title: "SignIn",
          onClick: () => showDisplay({ show, setShow }),
        },
        {
          to: "/register",
          title: "SignUp",
          onClick: () => showDisplay({ show, setShow }),
        },
      ]);
    }
  }, []);

  return (
    <div className="fixed z-20 top-0 left-0 w-full h-full lg:w-[430px] bg-t_background">
      <div className="flex items-center justify-around text-t_main py-2 px-4">
        <div className="flex flex-col gap-2 py-2">
          <img
            className="w-[46px] h-[46px] rounded-[50px]"
            src={
              photo?.value ||
              "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
            }
            alt="Profile"
          />
        </div>
        <div>
          <p className="text-sm font-medium"> {name} </p>
          <p className="text-sm font-medium"> {email} </p>
        </div>
        <div onClick={() => setShow(!show)} className="cursor-pointer">
          <span className="cursor-pointer p-1 px-2 font-medium rounded-full bg-t_main text-t_stroke hover:bg-t_main transition-transform transform hover:scale-105 ">
            X
          </span>
        </div>
      </div>

      <div className="w-full lg:w-[400px] h-full flex flex-col items-center">
        {options?.map((option, index) => (
          <Anchor
            onClick={option?.onClick}
            key={index}
            to={option?.to}
            className="w-full rounded-lg py-1 text-t_main
                            cursor-pointer text-center text-[15px] font-semibold
                            hover:bg-t_secondary hover:text-t_stroke transition-transform transform hover:scale-105 "
          >
            {option?.title}
          </Anchor>
        ))}
      </div>
    </div>
  );
}

function signOut_token(setOptions) {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  setOptions([
    { to: "/", title: "Home", onClick: () => showDisplay({ show, setShow }) },
    {
      to: "/signin",
      title: "SignIn",
      onClick: () => showDisplay({ show, setShow }),
    },
    {
      to: "/register",
      title: "SignUp",
      onClick: () => showDisplay({ show, setShow }),
    },
  ]);
}

function showDisplay({ show, setShow }) {
  return setShow(!show);
}
