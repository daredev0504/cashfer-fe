import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const baseUrl = "https://jsonplaceholder.typicode.com";
const base = "https://localhost:44362";

export const useGetPosts = (path: string) => {
  if (!path) {
    throw new Error("Path is required");
  }

  const url = baseUrl + path;
  const { data: posts, error } = useSWR(url, fetcher);

  return { posts, error };
};

export const useUser = (path:string, id: string) => {
  const url = baseUrl + path;
  const { data, error } = useSWR(url, fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};

//`/api/user/${id}