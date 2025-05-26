import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin()
{
    const qureClinet = useQueryClient();

    const { mutate: createCabin, isLoading: isCreating } = useMutation({
        mutationFn: createEditCabin,
        onSuccess: () =>
        {
            toast.success("New Cabin Successfully Created");
            qureClinet.invalidateQueries({ queryKey: ["cabins"] });

        },
        onError: (error) => toast.error(error.message),
    });
    return { isCreating, createCabin };
}