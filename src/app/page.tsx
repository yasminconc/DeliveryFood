


import { useRouter } from "next/router";
import Login from "./login/page";

export default function Page({ Component, pageProps }: any) {
  const router = useRouter();

  // Verifique se a rota atual é a raiz (`/`)
  if (router.pathname === "/") {
    return <Login />; // Renderize a página de login se for a raiz
  }

  // Caso contrário, renderize o layout padrão
  return <Component {...pageProps} />;
}
