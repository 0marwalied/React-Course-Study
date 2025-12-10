import { X } from "lucide-react";
import "./index.scss";
import { type ReactNode } from "react";

type alertTypes =
  | "alert-header"
  | "alert-info"
  | "alert-error"
  | "alert-success"
  | "alert-warning"
  | "alert-note";

interface Iprops {
  children?: ReactNode;
  message?: string;
  title: string;
  icon: ReactNode;
  type: alertTypes;
}

const Alert = ({ type, message, icon, title, children }: Iprops) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="header">
          {icon}
          <h4>{title}</h4>
        </div>
        <X />
      </div>
      {children ? children : <p>{message}</p>}
    </div>
  );
};
export default Alert;
