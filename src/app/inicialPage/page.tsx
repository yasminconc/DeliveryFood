"use client";

import React from "react";
import Image from "next/image";
import MotoCicle from "@/assets/moto.svg";
import Mail from '@/assets/gmail.png'
import white from  '@/assets/envelope-of-white-paper.png'
import M from '@/assets/google.png'
import C from '@/assets/communication.png'
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


const InicialPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col items-center mt-32 h-auto">
        <Image priority src={MotoCicle} width={300} height={300} alt="Picture of the author" />
        <h1 className="font-semibold text-3xl ">
          Delivery <span className="text-red-600">Food</span>
        </h1>
        <div className="flex items-center flex-col ">
          <div className="flex flex-col items-center gap-5 mt-16">
            <div className="flex flex-col pt-5 text-center ">
              <h1 className="text-xl font-medium text-slate-900">Welcome! Choose your</h1>
              <h1 className="text-xl  font-medium text-slate-900">
                 favorite food quickly and easily
              </h1>
            </div>

            <div className="flex flex-col w-80 items-center">
                <Image className=" w-5 relative top-10 right-[8.5rem]"
                  src={Mail}
                  alt="mail"
                />
              <button className=" mt-2 px-6 py-2.5 mb-5 rounded bg-slate-950 hover:bg-slate-900 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-slate-950 focus:ring-opacity-80 ">
                Login with Google
              </button>

              <GoogleLogin width='320' size="large" text="signin_with" 
                  onSuccess={(credentialResponse) => {
                    const decoded = jwtDecode(credentialResponse?.credential);
                    console.log(decoded);
                }}
                  onError={() => {
                  console.log('Login Failed');
                }}
              />
     
            </div>

            <footer className=" flex flex-col items-center font-medium from-neutral-500 mt-2">
              <p>
                Alredy have an account?{" "}
                <span className="font-bold cursor-pointer hover:text-slate-800">Log in</span>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InicialPage;
