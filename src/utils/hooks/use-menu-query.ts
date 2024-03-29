import { client } from "@/sanity/lib/client";
import { FETCH_ALL_MENU_DATA } from "../queries";
import { useSuspenseQuery } from "@tanstack/react-query";

function useMenuQuery() {
  const queryFn = async () => {
    return client({ query: FETCH_ALL_MENU_DATA }).then((res) => res.data);
  };
  const queryKey = ["menuItems"];

  return useSuspenseQuery({ queryKey, queryFn });
}

export default useMenuQuery;
