import * as React from "react";
import ListItem from "./ListItem";
import { User, ProfileData } from "../interfaces";

type Props = {
  items?: ProfileData[];
};

const List = ({ items }: Props) => (
  <ul>
    {items?.map((item, idx) => (
      <li key={idx}>
        <ListItem data={item} idx={idx} />
      </li>
    ))}
  </ul>
);

export default List;
