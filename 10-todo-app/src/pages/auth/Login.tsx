import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Form from "../../components/ui/Form";
import { useForm, type SubmitHandler } from "react-hook-form";
import React from "react";
import ErrorMessage from "../../components/errors/ErrorMessage";
import { LOGIN_FORM } from "../../data";
import { loginSchema } from "../../validation";
import { yupResolver } from "@hookform/resolvers/yup/src/index.js";

interface IFormInput {
  email: string;
  password: string;
}

const LoginPage = () => {
  // Handlers
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(loginSchema) });
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

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

      <Button status="send" className="font-semibold w-full">
        Login
      </Button>
    </Form>
  );
};

export default LoginPage;
