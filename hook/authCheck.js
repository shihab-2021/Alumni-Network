import { useRouter } from "next/router";
import useAuth from "./useAuth";
import Loading from "../components/Shared/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const authCheck = (WrappedComponent) => {
  const PrivateRoute = () => {
    const router = useRouter();
    // user info
    // const user = useSelector((state) => state?.reducers?.user?.currentUser);
    const { user, isLoading } = useAuth();

    // useEffect(() => {
    //   if (!user?.email) {
    //     router.replace("/login");
    //   }
    // }, [router, user?.email]);

    if (isLoading) {
      return <Loading />;
    }
    if (user?.email) {
      return <WrappedComponent />;
    } else {
      toast.warn("Can't go without login!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      router.replace("/login");
    }

    return <Loading />;
  };
  return PrivateRoute;
};

export default authCheck;
