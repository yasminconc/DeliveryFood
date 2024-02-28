
'use client'


import { useRouter } from "next/navigation";

export default function Page({ Component, pageProps }: any) {
  const router = useRouter();

  return router.push('/login')
}
