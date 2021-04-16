import { GetStaticProps } from "next";
import useSWR from "swr";
import Link from "next/link";

import { User, ProfileData, Results } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import Layout from "../../components/Layout";
import List from "../../components/List";

type Props = {
  items: ProfileData[];
};

const UserPage = () => {
  const { data, error } = useSWR("/api/users", fetcher);
  return data ? (
    <Layout title="Users List | Next.js + TypeScript Example">
      <h1>Users List</h1>
      <p>
        Example fetching data from inside <code>getStaticProps()</code>.
      </p>
      <p>You are currently on: /users</p>
      <List items={data.results} />
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  ) : error ? (
    <div>error</div>
  ) : (
    <div>Loading...</div>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const data = await fetch("https://randomuser.me/api/?results=10");
//   const jsonData: Results = await data.json();
//   const items: ProfileData[] = jsonData.results;
//   return { props: { items } };
// };
const fetcher = (uri: string) => {
  console.log("hello");
  if (uri) {
    return fetch(uri).then((data) => data.json());
  } else {
    return false;
  }
};

export default UserPage;
