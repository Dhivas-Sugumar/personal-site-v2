import React from "react";
import { headerText } from "./Constants";
import { Row } from "@/design-system";
import { Icon } from "../Icon";

export type HeaderProps = {
  currentPage: string;
};

export const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  return (
    <Row contentJustify="between" className="bg-accent300 p-md">
      <h3>{headerText}</h3>
      <Icon iconAlt={"Dhivas Sugumar"} size={"small"} variant={"dhivasLogo"} />
      <h3>{currentPage}</h3>
    </Row>
  );
};
