import React from "react";
import { headerText } from "./Constants";
import { Icon } from "../Icon";
import { GlassMorphismContainer } from "../glass-morphism/glass-morphism-container";

export type HeaderProps = {
  currentPage: string;
};

export const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  return (
    <div className="mx-20">
      <GlassMorphismContainer>
        <div className="flex flex-row px-2 py-4 justify-between content-center">
          <h3 className="text-accent300">{headerText}</h3>
          <Icon size={"small"} variant={"dhivasLogo"} />
          <h3 className="text-accent300">{currentPage}</h3>
        </div>
      </GlassMorphismContainer>
    </div>
  );
};
