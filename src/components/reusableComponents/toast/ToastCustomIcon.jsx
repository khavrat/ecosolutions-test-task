import toastImg from '../../../images/icons/toast.png';

export const ToastCustomIcon = () => {
    return (
      <img
        src={toastImg}
        alt="notification icon"
        style={{ width: 30, height: 20 }}
      />
    );
}