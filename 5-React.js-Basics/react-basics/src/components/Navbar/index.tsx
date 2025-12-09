import "./index.scss";

const Navbar = ({
  navList,
  isLogin,
  setIsLogin,
}: {
  navList: string[];
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <nav>
        <ul>
          {navList.map((navItem, index) => (
            <li key={index}>{navItem}</li>
          ))}
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Logout" : "Login"}
          </button>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
