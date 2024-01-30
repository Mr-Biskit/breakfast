import { client } from "@/sanity/lib/client";
import { FETCH_ALL_OPENING_HOURS_DATA } from "../queries";
import { useSuspenseQuery } from "@tanstack/react-query";

function useOpenTimesQuery() {
  const queryFn = async () => {
    return client({ query: FETCH_ALL_OPENING_HOURS_DATA }).then(
      (res) => res.data
    );
  };
  const queryKey = ["openTimes"];

  return useSuspenseQuery({ queryKey, queryFn });
}

export default useOpenTimesQuery;
