import React, { useEffect, useRef, useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "assets/icons";
import styles from "./DetailsDropDown.module.scss";
import { useAppDispatch, useStrategyDetailsSelector } from "store/hooks";
import { editDescription, editName } from "store/strategyDetailsSlice";

const DetailsDropDown = () => {
  const [isListShown, setListShown] = useState(false);
  const [isNameInputActive, setNameInputActive] = useState(false);
  const [isDescriptionInputActive, setDescriptionInputActive] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const nameRef: React.RefObject<HTMLInputElement> = useRef(null);
  const descriptionRef: React.RefObject<HTMLTextAreaElement> = useRef(null);
  const dispatch = useAppDispatch();
  const details = useStrategyDetailsSelector();

  useEffect(() => {
    setName(details.name);
    setDescription(details.description);
  }, [details.name, details.description]);

  useEffect(() => {
    if (nameRef.current && isNameInputActive) nameRef.current.focus();
  }, [isNameInputActive]);

  useEffect(() => {
    if (descriptionRef.current && isDescriptionInputActive)
      descriptionRef.current.focus();
  }, [isDescriptionInputActive]);

  const handleNameFocusOff = () => {
    setNameInputActive(false);
    dispatch(editName(name));
  };

  const handleDescriptionFocusOff = () => {
    setDescriptionInputActive(false);
    dispatch(editDescription(description));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div
          className={styles.dropWrapper}
          onClick={() => setListShown((prev) => !prev)}
        >
          {isListShown ? <ArrowUpIcon /> : <ArrowDownIcon />}
          Details
        </div>
      </div>
      {isListShown && (
        <>
          <div className={styles.listElement}>
            <span>Name</span>
            {isNameInputActive ? (
              <input
                className={styles.input}
                placeholder="New strategy"
                value={name}
                onChange={(e) => setName(e.target.value)}
                ref={nameRef}
                onBlur={handleNameFocusOff}
              />
            ) : (
              <span
                onClick={() => setNameInputActive(true)}
                className={styles.inputSpan}
              >
                {name ? name : "New strategy"}
              </span>
            )}
          </div>
          <div className={styles.listElement}>
            <span>Description</span>
            {isDescriptionInputActive ? (
              <textarea
                className={styles.textArea}
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                ref={descriptionRef}
                onBlur={handleDescriptionFocusOff}
              />
            ) : (
              <span
                onClick={() => setDescriptionInputActive(true)}
                className={styles.inputSpan}
              >
                {description
                  ? description
                  : "Write something more about your strategy"}
              </span>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default DetailsDropDown;
