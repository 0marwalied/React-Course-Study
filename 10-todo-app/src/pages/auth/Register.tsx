import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Form from "../../components/ui/Form";
import ErrorMessage from "../../components/errors/ErrorMessage";
import { REGISTER_FORM } from "../../data";
import { registerSchema } from "../../validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { Toaster } from "react-hot-toast";
import axiosInstance from "../../config/axios.config";
import React from "react";
import { errorNotify, successNotify } from "../../components/notification";
import { AxiosError } from "axios";
import type { IErrorMessage } from "../../interfaces";
import { useNavigate } from "react-router";

type IFormInput = {
  username: string;
  email: string;
  password: string;
};

const RegisterPage = () => {
  // Handlers
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(registerSchema) });
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsLoading(true);
    try {
      const { status } = await axiosInstance.post("/auth/local/register", data);
      if (status === 200) {
        successNotify();
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (e) {
      const err = e as AxiosError<IErrorMessage>;
      errorNotify(`${err.response?.data.error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Renders
  const renderRegisterForm = REGISTER_FORM.map(
    ({ name, placeholder, type, validation }, idx) => (
      <div key={idx}>
        <Input
          type={type}
          placeholder={placeholder}
          {...register(name, validation)}
        />
        {errors[name] && <ErrorMessage error={errors[name].message} />}
      </div>
    ),
  );

  return (
    <Form
      className="flex flex-col space-y-3 justify-center p-4 w-100"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="font-semibold text-2xl text-center">
        Register to get access!
      </h1>

      {renderRegisterForm}

      <Button
        status="send"
        type="submit"
        className="font-semibold w-full text-center flex items-center justify-center"
        isLoading={isLoading}
      >
        {isLoading ? "Loading..." : "Register"}
      </Button>
      <Toaster />
    </Form>
  );
};

export default RegisterPage;
