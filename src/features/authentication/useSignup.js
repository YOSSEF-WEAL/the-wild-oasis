import { useMutation } from "@tanstack/react-query";
import { signup as signupAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupAPI,
    onSuccess: (user) => {
      toast.success(
        "Account successfully created! please verufy the new account from the user's email address."
      );
    },
  });

  return { signup, isPending };
}
