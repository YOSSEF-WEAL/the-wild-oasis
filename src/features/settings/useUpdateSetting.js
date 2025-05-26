
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingAPI } from "../../services/apiSettings";


export function useUpdateSetting()
{

    const qureClinet = useQueryClient();
    const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
        mutationFn: updateSettingAPI,
        onSuccess: () =>
        {
            toast.success("Setting Successfully Updated");
            qureClinet.invalidateQueries({ queryKey: ["settings"] });
        },
        onError: (error) => toast.error(error.message),
    });

    return { isUpdating, updateSetting }
}
