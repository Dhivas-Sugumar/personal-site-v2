import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";

export const ToastProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  );
};
