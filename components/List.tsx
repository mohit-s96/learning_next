import * as React from "react";
import ListItem from "./ListItem";
import { User, ProfileData } from "../interfaces";

type Props = {
  items: ProfileData[];
};

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={Math.floor(Math.random() * 10000)}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);

export default List;
