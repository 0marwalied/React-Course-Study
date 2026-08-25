import type { ILoginForm, IRegisterForm, ITodoForm } from "../interfaces";

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
    name: "identifier",
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

export const TODO_FORM: ITodoForm[] = [
  {
    name: "title",
    placeholder: "Title",
    type: "text",
    validation: {
      required: true,
    },
  },
  {
    name: "description",
    placeholder: "Description",
    type: "text",
    validation: {
      required: false,
    },
  },
];
