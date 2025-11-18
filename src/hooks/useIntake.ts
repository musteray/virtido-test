import { useQuery } from "@tanstack/react-query";

export const getCatalogs = () => useQuery({
  queryKey: ["catalogs"],
  queryFn: async () => {
    const response = await fetch("/api/catalogs");

  }
})