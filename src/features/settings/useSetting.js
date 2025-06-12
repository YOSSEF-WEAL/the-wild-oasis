import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings.js";

export function useSetting() {
  const {
    isPending,
    data: settings,
    error,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { isPending, settings, error };
}
