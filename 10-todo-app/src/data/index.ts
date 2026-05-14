import type { ILoginForm, IRegisterForm } from "../interfaces";

export const REGISTER_FORM: IRegisterForm[] = [
  {
    name: "username",
    placeholder: "Username",
    type: "text",
    validation: {
      required: true,
      minLength: 3,
    },
  },
  {
    name: "email",
    placeholder: "Email",
    type: "text",
    validation: {
      required: true,
      pattern: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm,
    },
  },
  {
    name: "password",
    placeholder: "Password",
    type: "password",
    validation: {
      required: true,
      minLength: 6,
    },
  },
];

export const LOGIN_FORM: ILoginForm[] = [
  {
    name: "email",
    placeholder: "Email",
    type: "text",
    validation: {
      required: true,
      pattern: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm,
    },
  },
  {
    name: "password",
    placeholder: "Password",
    type: "password",
    validation: {
      required: true,
      minLength: 6,
    },
  },
];
