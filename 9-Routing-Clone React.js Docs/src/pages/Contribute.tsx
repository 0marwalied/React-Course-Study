import { useLocation } from "react-router";
import Button from "../components/ui/Button";
import Textarea from "../components/ui/Textarea";

const ContributePage = () => {
  const location = useLocation();
  const email = location.state?.email || null;
  return (
    <div>
      {email && (
        <h1 className="text-center py-4 w-fit m-auto font-bold text-2xl">
          Welcome {email}
        </h1>
      )}
      <h2 className="text-center mb-3">Issue: 🐛 Bug Report</h2>
      <form
        className="flex flex-col gap-3 w-full items-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <Textarea />
        <Button width="w-fit">Submit new issue</Button>
      </form>
    </div>
  );
};
export default ContributePage;
