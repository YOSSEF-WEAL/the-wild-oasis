import { useMutation } from "@tanstack/react-query";
import { login as loginAPi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginAPi({ email, password }),
    onSuccess: (user) => {
      toast.success("Welcome");
      navigate("/dashboard");
      console.log(user);
    },
    onError: (erorr) => {
      toast.error(`${erorr}`);
      console.error(erorr);
    },
  });
  return { login, isLoading };
}
