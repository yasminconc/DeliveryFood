'use client'
import { UserRequest } from "@/Requests/UserRequest";
import axios from "axios";
import React, { ReactNode, createContext, useState } from "react";

type GlobalContextProps = {
  userLogin: (email: string, password: string) => void;
  userSignup: (name: string, email: string, password: string, confirmPassword: string) => void;
  data: any | null;
  error: any | null;
  login: boolean | null;
  loading: boolean | null;
};

type GlobalStorageProps = {
  children: ReactNode;
};

const userRequest = new UserRequest();

export const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

export const useData = () => {
  const context = React.useContext(GlobalContext);
  if (!context) throw new Error("useData precisa estar em DataContextProvider");
  return context;
};

const UserContext: React.FC<GlobalStorageProps> = ({ children }) => {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<any | null>(null);
  const [login, setLogin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean | null>(null);

  const userLogin = React.useCallback(async (email: string, password: string) => {
    let req;
    try {
      setData(null);
      setError(null);
      setLoading(true);

      const body = {
        email,
        password,
      };

      const { url } = userRequest.USER_LOGIN();
      req = await axios.post(url, body);

      window.localStorage.setItem("token", req.data);

      setLogin(true);
    } catch (err: any) {
      setData(null);
      setError(err.response.data);
      console.log(err.response.data);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, []);

  const userSignup = React.useCallback(async (name: string, email: string, password: string) => {
    let req;
    try {
      setData(null);
      setError(null);
      setLoading(true);

      const body = {
        name,
        email,
        password,
      };

      const { url } = userRequest.USER_SIGNUP();
      req = await axios.post(url, body);

      window.localStorage.setItem("token", req.data);

      setLogin(true);
    } catch (err: any) {
      setData(null);
      setError(err.response.data);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        userLogin,
        userSignup,
        data,
        error,
        login,
        loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default UserContext;
