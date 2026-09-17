import { useState } from "react";
import { useColorModeValue } from "@/components/ui/color-mode";
import {
  Flex,
  Box,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Field,
  Checkbox,
  InputGroup,
} from "@chakra-ui/react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import type { User } from "@/data";
import { BeatLoader } from "react-spinners";
import {
  loginSelector,
  setIsRemembered,
  userLogin,
} from "@/app/features/login/loginSlice";
import { useAppDispatch, type RootState } from "@/app/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isIdentifier, setIsIdentifier] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [user, setUser] = useState<User>({
    identifier: "",
    password: "",
  });
  const dispatch = useAppDispatch();
  const { loading, isRemembered } = useSelector((state: RootState) =>
    loginSelector(state),
  );
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser: User) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user.identifier) {
      setIsIdentifier(true);
      return;
    }
    setIsIdentifier(false);
    if (!user.password) {
      setIsPassword(true);
      return;
    }
    setIsPassword(false);

    try {
      dispatch(userLogin(user));
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      return error;
    }
  };

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading fontSize="4xl">Sign in to your account</Heading>
        </Stack>

        <form onSubmit={onSubmitHandler}>
          <Box
            rounded="lg"
            bg={useColorModeValue("white", "gray.700")}
            boxShadow="lg"
            mt={4}
            p={8}
          >
            <Stack gap={4}>
              <Field.Root invalid={isIdentifier}>
                <Field.Label>Email address</Field.Label>
                <Input
                  type="email"
                  value={user.identifier}
                  name="identifier"
                  onChange={onChangeHandler}
                />
                <Field.ErrorText>This email is required</Field.ErrorText>
              </Field.Root>

              <Field.Root invalid={isPassword}>
                <Field.Label>Password</Field.Label>

                <InputGroup
                  endElement={
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowPassword((value) => !value)}
                    >
                      {showPassword ? <LuEyeOff /> : <LuEye />}
                    </Button>
                  }
                >
                  <Input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    onChange={onChangeHandler}
                  />
                </InputGroup>
                <Field.ErrorText>Password is required</Field.ErrorText>
              </Field.Root>

              <Flex justify="space-between" align="center">
                <Checkbox.Root
                  checked={isRemembered}
                  onCheckedChange={(details) => {
                    dispatch(setIsRemembered(details.checked));
                  }}
                >
                  <Checkbox.HiddenInput />
                  <Checkbox.Control style={{ border: "1px solid gray" }} />
                  <Checkbox.Label>Remember me</Checkbox.Label>
                </Checkbox.Root>

                <Link color="blue.400" fontSize="sm">
                  Forgot password?
                </Link>
              </Flex>

              <Button
                loading={loading}
                colorPalette="blue"
                width="full"
                type="submit"
                spinner={<BeatLoader size={8} color="white" />}
              >
                Sign in
              </Button>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Flex>
  );
};

export default LoginPage;
