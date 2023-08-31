import React from "react";
import { Link as Anchor, useNavigate } from "react-router-dom";
import { useRef } from "react";


const SingIn = () => {

  const navigate = useNavigate();
  const email = useRef()
  const password = useRef()
 

  const SingIn = async ()=>{

    let data = {
      email: email.current.value?.trim(),
      password: password.current.value?.trim(),
      
     }
    //  console.log(data);
     try {
      await axios.post(apiUrl + '/auth/register', data)
      Swal.fire({
        icon: 'success',
        text: 'are you registered !'
      });
      navigate('/singin');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: '¡Sing up!',
        html: error.response.data.messages.map(each=>`<p>${each}</p>`).join('')
      });
    }
    
  }



  return (
    <main className="flex w-full min-h-screen items-center justify-between">
      <div className="flex flex-col md:absolute md:top-0 md:right-[50%] justify-center items-center h-screen w-full md:w-[50%]">
      <img src="../../src/assets/images/logo23.png" alt="frame" className="w-[160px]" />
        <p className="font-semibold text-[18px] mb-[2px] text-center p-2">
        
        </p>
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
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-xl text-white rounded-lg bg-gradient-to-r from-[#4338CA] to-[#4338CA]"
            type="button"
            value="Login In"
            onClick={SingIn}
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
              src="../../src/assets/images/Google.png"
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
              src="../../src/assets/images/iphone-logo.png"
              alt="Apple"
              className="absolute right-[320px] top-[24px] w-[22px] hidden lg:block"
            />
          </div>
        </form>
        <p className="font-semibold text-[12px] text-center p-2">
          Go back to{" "}
          <Anchor
            to='/'
            className="text-[#4338CA] hover:text-black"
          >
            Home
          </Anchor>
          !
        </p>
      </div>
      <img
        className="hidden md:block md:absolute md:top-0 md:right-0 h-screen w-[50%] object-cover"
        src="../../src/assets/images/istockphoto-523788889-612x612.jpg"
        alt="register"
      />
    </main>
  );
};

export default SingIn;