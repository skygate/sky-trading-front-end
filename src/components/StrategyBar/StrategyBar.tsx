import React from "react";
import { ArrowDownIcon, ArrowUpIcon, GroupIcon } from "../../assets/icons";
import Bar from "../Common/Bar/Bar";

interface StrategyBarProps {
  strategyName?: string;
  isExpanded: boolean;
}

const StrategyBar = ({ strategyName, isExpanded }: StrategyBarProps) => (
  <Bar>
    {isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
    <GroupIcon />
    <span style={{ fontWeight: 500 }}>
      {strategyName ? strategyName : "Strategy name"}
    </span>
  </Bar>
);

export default StrategyBar;
