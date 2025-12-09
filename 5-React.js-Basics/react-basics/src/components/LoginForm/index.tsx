import type { userData } from "../../types";

const LoginForm = ({
  userData,
  setUserData,
  isLogin,
  setIsLogin,
}: {
  userData: userData;
  setUserData: React.Dispatch<React.SetStateAction<userData>>;
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
      style={{ margin: 30 }}
    >
      <div className="input-wrapper">
        <label htmlFor="username" style={{ color: "white" }}>
          Username:
        </label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password" style={{ color: "white" }}>
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="email" style={{ color: "white" }}>
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          required
        />
      </div>
      <button
        className="loginButton"
        type="button"
        onClick={() => {
          if (userData.username && userData.password && userData.email)
            setIsLogin(!isLogin);
        }}
      >
        {isLogin ? "Logout" : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
