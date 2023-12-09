import { toast } from "react-hot-toast";
import { ToastCustomIcon } from "../components/reusableComponents/toast/ToastCustomIcon";

export const showMessageToast = (message) => {
  toast.success(`${message}`, {
    icon: <ToastCustomIcon />,
    duration: 3000,
    style: {
      marginTop: "30px",
      backgroundColor: "#eaedf1",
      color: "#173d33",
    },
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
};