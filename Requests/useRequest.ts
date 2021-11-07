import useSWR from "swr";


const baseUrl = "https://localhost:44362/api/";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useGetWallet = (path: string) => {
  if (!path) {
    throw new Error("Path is required");
  }

  const url = baseUrl + path;

  const { data: wallets, error } = useSWR(url, fetcher);

  return { wallets, error };
  
};
