import { Eye, EyeOff } from "lucide-react";
import Input from "./Input";
import type { UseFormRegister } from "react-hook-form";

interface PasswordInputProps {
  showPassword: boolean;
  setShowPassword: (param: boolean) => void;
  register: UseFormRegister<{ password: string }>;
}

const PasswordInput = ({
  showPassword,
  setShowPassword,
  register,
}: PasswordInputProps) => {
  return (
    <div className="relative flex items-center justify-end">
      <Input
        placeholder="Password"
        type={showPassword ? "text" : "password"}
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        })}
      ></Input>
      {showPassword ? (
        <Eye
          className="absolute right-2 text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        />
      ) : (
        <EyeOff
          className="absolute right-2 text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        />
      )}
    </div>
  );
};

export default PasswordInput;
