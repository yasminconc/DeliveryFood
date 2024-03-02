"use client";

import Image from "next/image";
import MotoCicle from "@/assets/moto.svg";
import { useEffect, useState } from "react";
import Loading from '@/assets/loading.png'

const SplashScreen = () => {
  const [imagemCarregada, setImagemCarregada] = useState(false);

  useEffect(() => {
    setImagemCarregada(true);
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="flex flex-col items-center pt-32">
        {imagemCarregada ? (
          <Image
            priority
            className="h-80 duration-1000 ease-out animate-[wiggle_1.5s_ease-in-out]"
            src={MotoCicle}
            alt="motocicle"
          />
        ) : (
           <p>Loading ...</p>
        )}
      </div>
    </div>
  );
};

export default SplashScreen;
