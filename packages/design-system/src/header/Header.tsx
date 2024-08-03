import { Icon } from "../Icon";
import { headerName } from "./Constants";

export type HeaderProps = {
  currentPage: string;
};

export const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  return (
    <div className="flex justify-between">
      <h2>{headerName}</h2>
      <Icon
        variant="dhivasLogo"
        iconAlt={"Dhivas Sugumar Logo"}
        size={"small"}
      />
      <h2>{currentPage}</h2>
    </div>
  );
};
