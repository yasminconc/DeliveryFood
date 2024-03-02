/* eslint-disable react/no-unescaped-entities */
'use client'

import Image from "next/image";
import MotoCicle from "@/assets/moto.svg";
import Input from "@/Components/CustomInput/page";
import { useLogin } from "@/Hooks/useForm";
import { useData } from "@/Context/UserContext";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";


function Login() {
  const {onSubmit, errors, register} = useLogin()

  const {error} = useData()
  const router = useRouter();

  
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col items-center pt-14">
        <Image priority src={MotoCicle} width={500} height={500} alt="Picture of the author" />
        <div className="flex items-center flex-col relative -top-5 backdrop-blur-md border-2 border-white rounded-md shadow-xl w-80 h-96">
          <div className="flex flex-col gap-4">
            <div className="flex items-center flex-col gap-4 pt-8">
              <h1 className="text-lg font-semibold">Welcome back!</h1>
              <p className="text-base font-medium">Login to your exiting account</p>
            </div>

            <form onSubmit={onSubmit} className="mt-4 ">

              <Input 
                type="email" 
                placeholder="Email" 
                {...register('email')}
                error={errors.email?.message}
              />

              <Input 
                type="text" 
                placeholder="Password" 
                {...register('password')}
                error={errors.password?.message}
              />

              {error && <p className="text-sm font-semibold text-red-500 -mt-3 ">{error}</p>}

         
              <div className="">
                <button 
                  type="submit"
                  onClick={onSubmit}
                  className=" mt-2 px-4 py-2 rounded bg-slate-950 hover:bg-slate-900 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-slate-950 focus:ring-opacity-80 ">
                  Login
                </button> 

              </div>
            </form>
          </div>

          <div className=" mt-4 flex flex-col items-center gap-3 ">
            <p className="text-xs font-medium cursor-pointer">forgot your password?</p>
            <p className="text-sm font-medium " onClick={ () => router.push('/signup') }>
              Don't have an account? <span className="font-bold cursor-pointer hover:text-slate-800">signup</span>
            </p>
          </div>
        </div>
      </div>
      <Toaster richColors  />
    </div>
  );
}

export default Login;
