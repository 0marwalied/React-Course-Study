import Button from "../components/ui/Button";
import Textarea from "../components/ui/Textarea";

const ContributePage = () => {
  return (
    <div>
      <h2 className="text-center mb-3">Issue: 🐛 Bug Report</h2>
      <form className="flex flex-col gap-3 w-full items-center">
        <Textarea />
        <Button width="w-fit">Submit new issue</Button>
      </form>
    </div>
  );
};
export default ContributePage;
