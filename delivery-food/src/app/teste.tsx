// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    // Redireciona para a página de boas-vindas após o componente ser montado
    router.push('/login');
  }, []);

  // Renderização vazia, pois a navegação ocorre no useEffect
  return null;
};

export default Index;
