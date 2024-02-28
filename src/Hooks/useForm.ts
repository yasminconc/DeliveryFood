
import { useForm } from 'react-hook-form'

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useData } from "../Context/UserContext";

import { FormPropsSignup, SignupType } from "../Types/SignupTypes";
import { FormPropsLogin, loginType } from '@/Types/LoginTypes';

import { useState } from 'react';

  export const formLogiValidate = z.object({
    email: z.string().nonempty("Preencha um valor").email("Email inválido"),

    password: z
      .string()
      .nonempty("Preencha um valor")
      .min(6, "A senha deve ter 6 dígitos")
      
      
  });

  export const useLogin = () => {
    const {
      register,
      handleSubmit,
      getValues,
      getFieldState,
      formState: { errors },
    } = useForm<FormPropsLogin>({mode: 'onBlur', resolver: zodResolver(formLogiValidate)})

    const { userLogin } = useData();

   

    const onSubmit = handleSubmit(async (data: loginType) => {
      const { email, password } = data;
      userLogin(email, password);
     
    });

    return {
      handleSubmit,
      register,
      useData,
      errors,
      onSubmit,
      useLogin,
      getValues,
      getFieldState,
    };
  };

  export const formValidateSignup = z
    .object({
      name: z.string().nonempty("Preencha um valor").min(5, "Informe um nome válido"),

      email: z.string().nonempty("Preencha um valor").email("Email inválido"),

      password: z
        .string()
        .nonempty("Preencha um valor")
        .min(6, "Sua senha deve ter 6 dígitos"),
        // eslint-disable-next-line no-useless-escape
        // .regex(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/i, {
        //   message:
        //     "Deve conter um número, uma letra maiúscula, e um caractere especial, ex: ! @ # $ % & *)",
        // }),

      confirmPassword: z.string(),
    })
    .refine((fields) => fields.password === fields.confirmPassword, {
      path: ["confirmPassword"],
      message: "As senhas precisam ser iguais",
    });

  export const useSignup = () => {
    const {
      register,
      handleSubmit,
      getValues,
      formState: { errors },
    } = useForm<FormPropsSignup>({ mode: "onBlur", resolver: zodResolver(formValidateSignup) });

    const { userSignup } = useData();

    const onSubmit = handleSubmit(async (data: SignupType) => {
      const { name, email, password, confirmPassword } = data;
      userSignup(name, email, password, confirmPassword);
    });

    return {
      handleSubmit,
      register,
      useData,
      errors,
      onSubmit,
      useSignup,
      getValues,
    };
  };
