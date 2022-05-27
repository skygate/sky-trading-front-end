import React from "react";
import { ArrowDownIcon, GroupIcon } from "../../assets/icons";
import Bar from "../Common/Bar/Bar";

interface StrategyBarProps {
  strategyName?: string;
}

const StrategyBar = ({ strategyName }: StrategyBarProps) => (
  <Bar>
    <ArrowDownIcon />
    <GroupIcon />
    <span style={{ fontWeight: 500 }}>
      {strategyName ? strategyName : "Strategy name"}
    </span>
  </Bar>
);

export default StrategyBar;
