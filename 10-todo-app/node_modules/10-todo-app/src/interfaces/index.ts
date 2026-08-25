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

export interface ITodoForm {
  name: "title" | "description";
  placeholder: string;
  type: string;
  validation: {
    required?: boolean | string;
  };
}

export interface ITodo {
  id: number;
  documentId: string;
  title: string;
  description?: string;
}
