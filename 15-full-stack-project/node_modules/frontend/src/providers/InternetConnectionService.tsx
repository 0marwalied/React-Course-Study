import { networkMode } from "@/app/features/network/networkSlice";
import { useAppDispatch } from "@/app/store";
import { toaster } from "@/components/ui/toaster";
import { useEffect } from "react";
const InternetConnectionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const dispatch = useAppDispatch();
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
    const setOnline = () => {
      dispatch(networkMode(true));
      closeToast();
    };

    const setOffline = () => {
      dispatch(networkMode(false));
      showToast();
    };

    window.addEventListener("online", setOnline);
    window.addEventListener("offline", setOffline);
    return () => {
      window.removeEventListener("online", setOnline);
      window.removeEventListener("offline", setOffline);
    };
  }, [dispatch]);

  return children;
};

export default InternetConnectionProvider;
