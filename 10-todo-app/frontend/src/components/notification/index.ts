import toast from "react-hot-toast";

export const successNotify = (message: string) =>
  toast.success(message, {
    position: "bottom-center",
    duration: 1500,
    style: {
      background: "black",
      color: "white",
      width: "fit-content",
    },
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

export const errorNotify = (message: string) =>
  toast.error(message, {
    position: "bottom-center",
    duration: 1500,
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
