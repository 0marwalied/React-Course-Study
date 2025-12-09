import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";

function App() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <Navbar
        navList={["0marwalied", "Home", "About", "Contact"]}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      />
      {!isLogin ? (
        <LoginForm
          userData={userData}
          setUserData={setUserData}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
        />
      ) : (
        <h1 style={{ color: "white", textAlign: "center", marginTop: "50px" }}>
          Welcome, {userData.username}!
        </h1>
      )}
    </>
  );
}

export default App;
