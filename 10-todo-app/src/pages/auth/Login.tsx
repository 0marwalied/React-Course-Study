import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Form from "../../components/ui/Form";
import { useForm, type SubmitHandler } from "react-hook-form";
import React from "react";
import ErrorMessage from "../../components/errors/ErrorMessage";
import { LOGIN_FORM } from "../../data";
import { loginSchema } from "../../validation";
import { yupResolver } from "@hookform/resolvers/yup/src/index.js";
import axiosInstance from "../../config/axios.config";
import { errorNotify, successNotify } from "../../components/notification";
import { useNavigate } from "react-router-dom";
import type { AxiosError } from "axios";
import type { IErrorMessage } from "../../interfaces";
import { Toaster } from "react-hot-toast";

interface IFormInput {
  identifier: string;
  password: string;
}

const LoginPage = () => {
  // Handlers
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(loginSchema) });
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsLoading(true);
    try {
      const { status, data: dataRes } = await axiosInstance.post(
        "/auth/local",
        data,
      );
      console.log(dataRes);
      if (status === 200) {
        successNotify("Login successful! Redirecting...");
        localStorage.setItem("loggedInUser", JSON.stringify(dataRes));
        setTimeout(() => {
          location.replace("/");
        }, 2000);
      }
    } catch (e) {
      const err = e as AxiosError<IErrorMessage>;
      errorNotify(
        `${err.response?.data.error.message || "Something went wrong!"}`,
      );
      setTimeout(() => {
        location.reload();
      }, 1000);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(errors);

  // Renders
  const renderLoginForm = LOGIN_FORM.map(
    ({ name, placeholder, type, validation }, idx) => (
      <div key={idx}>
        <Input
          placeholder={placeholder}
          type={type}
          {...register(name, validation)}
        />
        {errors?.[name] && <ErrorMessage error={errors[name].message} />}
      </div>
    ),
  );

  return (
    <Form
      className="flex flex-col space-y-3 justify-center p-4 w-100"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="font-semibold text-2xl text-center">
        Login to get access!
      </h1>

      {renderLoginForm}

      <Button
        status="send"
        className="font-semibold w-full"
        isLoading={isLoading}
      >
        {isLoading ? "Loading..." : "Login"}
      </Button>

      <span className="text-sm text-gray-500 text-center">
        No account?{" "}
        <button
          type="button"
          className="text-blue-500 hover:underline"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </span>
      <Toaster />
    </Form>
  );
};

export default LoginPage;
