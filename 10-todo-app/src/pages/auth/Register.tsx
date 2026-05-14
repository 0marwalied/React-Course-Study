import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Form from "../../components/ui/Form";
import ErrorMessage from "../../components/errors/ErrorMessage";
import { REGISTER_FORM } from "../../data";
import { registerSchema } from "../../validation";
import { yupResolver } from "@hookform/resolvers/yup";

type IFormInput = {
  username: string;
  email: string;
  password: string;
};

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(registerSchema) });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  // Renders
  const renderRegisterForm = REGISTER_FORM.map(
    ({ name, placeholder, type, validation }) => (
      <div>
        <Input
          type={type}
          placeholder={placeholder}
          {...register(name, validation)}
        />
        {errors[name]?.type === "required" && (
          <ErrorMessage error={errors[name].message} />
        )}
        {errors[name]?.type === "matches" && (
          <ErrorMessage error={errors[name].message} />
        )}
        {errors[name]?.type === "min" && (
          <ErrorMessage error={errors[name].message} />
        )}
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

      <Button status="send" type="submit" className="font-semibold w-full">
        Register
      </Button>
    </Form>
  );
};

export default RegisterPage;
