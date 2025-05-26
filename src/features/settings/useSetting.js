

import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings.js";

export function useSetting()
{
    const { isLoading, data: settings, error } = useQuery({
        queryKey: ["settings"],
        queryFn: getSettings,
    });

    return { isLoading, settings, error };
}


