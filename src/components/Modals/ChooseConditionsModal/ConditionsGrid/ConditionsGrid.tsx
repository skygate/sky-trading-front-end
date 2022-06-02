import React, { useState } from "react";
import styles from "./ConditionsGrid.module.scss";
import cx from "classnames";
import { OptionsInterface } from "../ChooseConditionsModal";

interface ConditionsGridProps {
  data: OptionsInterface[];
}

const ConditionsGrid = ({ data }: ConditionsGridProps) => {
  const [activeOption, setActiveOption] = useState(0);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        {data.length ? (
          data.map((item, index) => (
            <div
              className={cx(
                styles.headerElement,
                activeOption === index && styles.active
              )}
              onClick={() => setActiveOption(index)}
            >
              {item.name}
            </div>
          ))
        ) : (
          <div className={styles.noData}>Comming soon</div>
        )}
      </div>
      <div className={styles.list}>
        {data.length > 0 &&
          data[activeOption].elements.map((item) => (
            <div className={styles.listElement}>{item}</div>
          ))}
      </div>
    </div>
  );
};

export default ConditionsGrid;
