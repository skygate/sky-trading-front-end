import { AddConditionIcon } from "assets/icons";
import { StrategyInterfaceElements } from "constant";
import { pushAssetAction } from "store/assetsSlice";
import { pushConditionAction } from "store/conditionsSlice";
import {
  useAppDispatch,
  useNewAssetsIndex,
  useNewConditionIndex,
} from "store/hooks";
import { pushStrategyConditionElementAction } from "store/strategyCreationSlice";
import styles from "./AddConditionButton.module.scss";

interface AddConditionButtonProps {
  parentId?: string;
}

const AddConditionButton = ({ parentId }: AddConditionButtonProps) => {
  const dispatch = useAppDispatch();
  const newConditionIndex = useNewConditionIndex();
  const newAssetIndex = useNewAssetsIndex();
  const handleAddCondition = () => {
    if (parentId) {
      dispatch(
        pushStrategyConditionElementAction({
          parentId,
          element: {
            id: ["condition", newConditionIndex].join("-"),
            isExpanded: false,
            type: StrategyInterfaceElements.CONDITION,
            elements: [
              {
                id: ["asset", newConditionIndex].join("-"),
                isExpanded: false,
                type: StrategyInterfaceElements.ASSETS,
                elements: [
                  {
                    id: ["assetBar", newAssetIndex].join("-"),
                    isExpanded: true,
                    type: StrategyInterfaceElements.ASSETS_BAR,
                    elements: [],
                  },
                ],
              },
              {
                id: ["addCondition", newConditionIndex].join("-"),
                isExpanded: false,
                type: StrategyInterfaceElements.ADD_CONDITION,
                elements: [],
              },
            ],
          },
        })
      );
      dispatch(
        pushConditionAction({
          id: ["condition", newConditionIndex].join("-"),
          index: newConditionIndex,
          details: {
            if_0: null,
            if_1: null,
            if_2: null,
            then: null,
            chart: null,
            interval: null,
          },
          optimize: false,
          isAssetSet: false,
          indicators: {
            EMA: null,
            SMA: null,
          },
          intervals: {
            day: null,
          },
          indicatorSet: null,
          intervalSet: null,
        })
      );
      dispatch(
        pushAssetAction({
          id: ["assetBar", newAssetIndex].join("-"),
          index: newAssetIndex,
          asset: null,
          set: false,
        })
      );
    }
  };

  return (
    <div className={styles.wrapper} onClick={handleAddCondition}>
      <AddConditionIcon />
    </div>
  );
};

export default AddConditionButton;
