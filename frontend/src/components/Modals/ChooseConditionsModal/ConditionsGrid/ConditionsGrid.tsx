import { Dispatch, SetStateAction } from "react";
import styles from "./ConditionsGrid.module.scss";
import cx from "classnames";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { ConditionsType } from "constant/conditions";
import Condition from "components/Condition";

interface ConditionsGridProps {
  data: ConditionsType;
  activeOption: number;
  setActiveOption: Dispatch<SetStateAction<number>>;
  id: string;
}

const ConditionsGrid = ({
  data,
  id,
  activeOption,
  setActiveOption,
}: ConditionsGridProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        {data.length !== 0 ? (
          data.map((item, index) => (
            <div
              className={cx(
                styles.headerElement,
                activeOption === index && styles.active
              )}
              onClick={() => setActiveOption(index)}
              key={index}
            >
              {item.name}
            </div>
          ))
        ) : (
          <div className={styles.noData}>Comming soon</div>
        )}
      </div>

      <Droppable droppableId={`droppable-choose-${activeOption}`}>
        {(provided) => (
          <div
            className={styles.list}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {data.length > 0 &&
              data[activeOption].elements.map((item, index) => (
                <Draggable draggableId={item.id} index={index} key={item.id}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Condition id={id} condition={item} />
                    </div>
                  )}
                </Draggable>
              ))}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default ConditionsGrid;
