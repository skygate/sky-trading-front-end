import React from "react";
import "./App.scss";
import AllocationButton from "./components/AllocationButton/AllocationButton";
import AssetsBar from "./components/AssetsBar/AssetsBar";
import AssetsButton from "./components/AssetsButton/AssetsButton";
import Calculate from "./components/Calculate/Calculate";
import ChooseConditionsModal from "./components/ChooseConditionsModal/ChooseConditionsModal";
import ConditionButton from "./components/Common/Button/ConditionButton/ConditionButton";
import TextInput from "./components/Common/Input/TextInput";
import ToggleButton from "./components/Common/ToggleButton/ToggleButton";
import DragBox from "./components/DargBox/DragBox";
import EditGroup from "./components/EditGroups/EditGroups";
import GroupBar from "./components/GroupBar/GroupBar";
import NavBar from "./components/NavBar/NavBar";
import OpenCloseButton from "./components/OpenCloseButton/OpenCloseButton";
import SearchAssetsModal from "./components/SearchAssetsModal/SearchAssetsModal";
import SetConditionsModal from "./components/SetConditionsModal/SetConditionsModal";
import DetailsDropDown from "./components/SideBar/DetailsDropDown/DetailsDropDown";
import OptimizeDropDown from "./components/SideBar/OptimizeDropDown/OptimizeDropDown";
import StrategyBar from "./components/StrategyBar/StrategyBar";
import TestPreview from "./components/TestPreview/TestPreview";
import ToolsBar from "./components/ToolsBar/ToolsBar";

function App() {
  return (
    <>
      <NavBar />
      <TextInput />
      <ToggleButton isToggleActive />
      <Calculate />
      <OptimizeDropDown />
      <DetailsDropDown />
      <ToolsBar />
      <TestPreview />
      <DragBox />
      <OpenCloseButton>close</OpenCloseButton>
      <ConditionButton>set condition</ConditionButton>
      <AssetsButton />
      <AllocationButton>set type</AllocationButton>
      <EditGroup />
      <AssetsBar acronym="ETH" asset="Ethereum" market="CRYPTO" />
      <StrategyBar />
      <GroupBar />
      <SetConditionsModal />
      <ChooseConditionsModal />
      <SearchAssetsModal />
    </>
  );
}

export default App;
