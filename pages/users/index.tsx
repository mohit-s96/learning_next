import Link from "next/link";

import { PromiseData } from "../../interfaces";
import Layout from "../../components/Layout";
import List from "../../components/List";
import { useFetch } from "../../components/useFetch";

const fetcher = (uri: string): Promise<PromiseData> => {
  console.log("hello");
  if (uri) {
    return fetch(uri).then((data) => data.json());
  } else {
    return Promise.reject("No URI");
  }
};
const UserPage = () => {
  // const { data, error } = useSWR("/api/users", fetcher);
  const { data, error } = useFetch<typeof fetcher>(
    "/api/users",
    fetcher,
    true,
    5
  );
  return (
    <Layout title="Users List | Next.js + TypeScript Example">
      <h1>Users List</h1>
      <p>Example fetching data client side.</p>
      <p>You are currently on: /users</p>
      {data ? (
        <List items={data.results ? data.results : undefined} />
      ) : error ? (
        <div>error</div>
      ) : (
        <div>Loading...</div>
      )}
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const data = await fetch("https://randomuser.me/api/?results=10");
//   const jsonData: Results = await data.json();
//   const items: ProfileData[] = jsonData.results;
//   return { props: { items } };
// };

export default UserPage;
