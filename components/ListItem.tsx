import React from "react";
import Link from "next/link";

import { User, ProfileData } from "../interfaces";

type Props = {
  data: ProfileData;
  idx: number;
};

const ListItem = ({ data, idx }: Props) => (
  <Link href="/users/[id]" as={`/users/${idx}`}>
    <a>
      {data.name.first}: {data.email}
    </a>
  </Link>
);

export default ListItem;
