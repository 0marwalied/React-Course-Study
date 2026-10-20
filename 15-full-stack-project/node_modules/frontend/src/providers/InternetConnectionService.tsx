import { toaster } from "@/components/ui/toaster";
import { useEffect, useState } from "react";

const InternetConnectionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  const closeToast = () => {
    toaster.dismiss();
  };
  const showToast = () => {
    toaster.dismiss();
    toaster.info({
      title: "No internet connection",
      description: "You are currently offline",
      duration: Infinity,
      closable: true,
    });
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOnline(navigator.onLine);
  }, []);

  window.addEventListener("online", () => {
    setIsOnline(true);
    closeToast();
  });

  window.addEventListener("offline", () => {
    setIsOnline(false);
  });

  if (isOnline === false) {
    return (
      <>
        {children}
        {showToast()}
      </>
    );
  }

  return children;
};

export default InternetConnectionProvider;
