import React from "react";
import { ArrowDownIcon, GroupIcon } from "assets/icons";
import Bar from "../Common/Bar/Bar";

const GroupBar = () => (
  <Bar>
    <ArrowDownIcon />
    <GroupIcon />
    <span style={{ fontWeight: 500 }}>Group</span>
  </Bar>
);

export default GroupBar;
