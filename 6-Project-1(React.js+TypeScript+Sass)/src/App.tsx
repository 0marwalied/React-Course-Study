import { BellRing } from "lucide-react";
import "./App.css";
import Alert from "./components/ui/Alert/Alert";

function App() {
  return (
    <>
      <Alert
        type="alert-warning"
        message="Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        title="Upgrade your plan"
        icon={<BellRing />}
      />
      <Alert
        type="alert-error"
        message="Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        title="Upgrade your plan"
        icon={<BellRing />}
      />
      <Alert type="alert-info" title="Upgrade your plan" icon={<BellRing />}>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum,
          dolor sit amet consectetur adipisicing elit."
        </div>
      </Alert>
      <Alert type="alert-success" title="Upgrade your plan" icon={<BellRing />}>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum,
          dolor sit amet consectetur adipisicing elit."
        </div>
      </Alert>
      <Alert type="alert-note" title="Upgrade your plan" icon={<BellRing />}>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum,
          dolor sit amet consectetur adipisicing elit."
        </div>
      </Alert>
    </>
  );
}

export default App;
