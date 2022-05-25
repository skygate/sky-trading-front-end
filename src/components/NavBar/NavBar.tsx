import React from "react";
import styles from "./NavBar.module.scss";
import {
  ArrowDownIcon,
  CompasIocn,
  EditIcon,
  HelpIcon,
  MyWalleticon,
  ProfileIcon,
  SygnetIcon,
} from "../../assets/icons";
import Button, { ButtonSize } from "../Common/Button/Button";

const NavBar = () => (
  <div className={styles.wrapper}>
    <div className={styles.leftWrapper}>
      <SygnetIcon />
      <div className={styles.middleWrapper}>
        <div className={styles.row}>
          <MyWalleticon />
          MyWallet
        </div>
        <div className={styles.row}>
          <CompasIocn />
          <span>Explore</span>
        </div>
        <Button size={ButtonSize.SMALL}>
          <EditIcon />
          <span>Create</span>
          <ArrowDownIcon />
        </Button>
      </div>
    </div>
    <div className={styles.rightWrapper}>
      <div className={styles.smallRow}>
        <HelpIcon />
        <span>Help</span>
      </div>
      <div className={styles.smallRow}>
        <ProfileIcon />
        <ArrowDownIcon />
      </div>
    </div>
  </div>
);

export default NavBar;
