import React from "react";
import Link from "next/link";

import { User, ProfileData } from "../interfaces";

type Props = {
  data: ProfileData;
};

const ListItem = ({ data }: Props) => (
  <Link href="/users/[id]" as={`/users/${Math.floor(Math.random() * 10000)}`}>
    <a>
      {data.name.first}: {data.email}
    </a>
  </Link>
);

export default ListItem;
