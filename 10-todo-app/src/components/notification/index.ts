import toast from "react-hot-toast";

export const successNotify = () =>
  toast.success(
    "You will navigate to the login page after 4 seconds to login!",
    {
      position: "bottom-center",
      duration: 4000,
      style: {
        background: "black",
        color: "white",
        width: "fit-content",
      },
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    },
  );

export const errorNotify = (message: string) =>
  toast.error(message, {
    position: "bottom-center",
    duration: 4000,
    style: {
      background: "black",
      color: "white",
      width: "fit-content",
    },
    ariaProps: {
      role: "alert",
      "aria-live": "polite",
    },
  });
