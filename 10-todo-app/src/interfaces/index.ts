export interface IRegisterForm {
  name: "username" | "email" | "password";
  placeholder: string;
  type: string;
  validation: {
    required?: boolean | string;
    minLength?: number;
    pattern?: RegExp;
  };
}

export interface ILoginForm {
  name: "identifier" | "password";
  placeholder: string;
  type: string;
  validation: {
    required?: boolean | string;
    minLength?: number;
    pattern?: RegExp;
  };
}

export interface IErrorMessage {
  error: {
    message?: string;
  };
}
