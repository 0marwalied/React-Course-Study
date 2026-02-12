import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

const LoginPage = () => {
  return (
    <div>
      <h1 className="text-center mb-10 text-4xl font-bold">
        Login to Contribute
      </h1>
      <form className="space-y-5 max-w-sm mx-auto">
        <Input placeholder="Email address" />
        <Input placeholder="Password" type="password" />
        <Button>Login</Button>
      </form>
    </div>
  );
};
export default LoginPage;
