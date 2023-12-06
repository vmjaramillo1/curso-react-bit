import ModuleService from "../service/module-service";
import { useQuery } from "@tanstack/react-query";

export default function useModules() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["modules"],
    queryFn: ModuleService.getModules,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  return {
    modules: data,
    isLoading,
    error,
  };
}
