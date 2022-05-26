import React from "react";
import { AddAssetIcon, OkIcon, SeparatorIcon } from "../../assets/icons";
import Bar from "../Common/Bar/Bar";

interface AssetsBarProps {
  acronym?: string;
  asset?: string;
  market?: string;
}

const AssetsBar = ({ acronym, asset, market }: AssetsBarProps) => (
  <Bar>
    {acronym && asset && market ? (
      <>
        <OkIcon /> <span style={{ paddingLeft: "2px" }}>{acronym}</span>{" "}
        <span>{asset}</span>
        <SeparatorIcon />
        <span>{market}</span>
      </>
    ) : (
      <>
        <AddAssetIcon />{" "}
        <span style={{ paddingLeft: "2px" }}>Add an asset</span>
      </>
    )}
  </Bar>
);

export default AssetsBar;
