'use client'

import Image from "next/image";
import MotoCicle from "@/assets/moto.svg";
import Input from "@/Components/CustomInput/page";
import { useSignup } from "@/Hooks/useForm";
import { useData } from "@/Context/UserContext";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";



const Signup = () => {

  const {onSubmit, errors, register} = useSignup()

  const {error} = useData()
  const router = useRouter();

  return (
    <div className="flex flex-col h-screen">
    <div className="flex flex-col items-center pt-12">
      <Image src={MotoCicle} width={500} height={500} alt="Picture of the author" />
      <div className="flex items-center flex-col relative -top-5 backdrop-blur-md border-2 shadow-xl border-white rounded-md w-80 h-[26rem]">
        <div className="flex flex-col w-56 gap-2">
          <div className="flex items-center flex-col gap-2 pt-6">
            <h1 className="text-xl font-semibold">Lets Get Started</h1>
            <p className="text-base font-medium">Create an account</p>
          </div>

          <form onSubmit={onSubmit} className="mt-4  ">

            <Input 
              type="text" 
              placeholder="Name" 
              {...register('name')}
              error={errors.name?.message}
            />
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
            <Input 
              type="text" 
              placeholder="Confirm Password" 
              {...register('confirmPassword')}
              error={errors.confirmPassword?.message}
            />

            {error && <p className="text-sm font-semibold text-red-500 -mt-3 ">{error}</p>}

       
              <button 
                type="submit"
                onClick={onSubmit}
                className=" px-4 py-2 rounded bg-slate-950 hover:bg-slate-900 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-slate-950 focus:ring-opacity-80 ">
                Signup
              </button> 

          </form>
        </div>

        <div className=" mt-4 flex flex-col items-center gap-3 ">
          <p className="text-sm font-medium" onClick={ () => router.push('/login') }>
            Already have an account? <span className="font-bold cursor-pointer hover:text-slate-800">login</span>
          </p>
        </div>
      </div>
    </div>
    <Toaster richColors  />
  </div>
  )
}

export default Signup