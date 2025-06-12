import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginAPi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginAPi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      toast.success("Welcome");
      navigate("/dashboard", { replace: true });
    },
    onError: (erorr) => {
      toast.error(`${erorr}`);
      console.error(erorr);
    },
  });
  return { login, isPending };
}
