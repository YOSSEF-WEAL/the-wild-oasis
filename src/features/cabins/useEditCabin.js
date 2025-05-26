import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";


export function useEditCabin()
{

    const qureClinet = useQueryClient();
    const { mutate: editCabin, isLoading: isEditing } = useMutation({
        mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
        onSuccess: () =>
        {
            toast.success("Cabin Successfully Edited");
            qureClinet.invalidateQueries({ queryKey: ["cabins"] });
        },
        onError: (error) => toast.error(error.message),
    });

    return { isEditing, editCabin }
}