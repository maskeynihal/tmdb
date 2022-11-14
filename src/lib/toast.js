import { toast } from "react-toastify";

const basicConfig = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

export const toastSuccess = (message) => {
  toast.success(message, basicConfig);
};

export const toastError = (message) => {
  toast.error(message, basicConfig);
};
