import { useEffect, useState } from "react";
import styles from "./NavBar.module.scss";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CompasIocn,
  EditIcon,
  GroupIcon,
  HelpIcon,
  MyWalleticon,
  NewStrategyIcon,
  ProfileIcon,
  SygnetIcon,
} from "assets/icons";
import cx from "classnames";
import { NavLink, useLocation } from "react-router-dom";
import DarkOverlay from "components/DarkOverlay";

const NavBar = () => {
  const [isCreateListExpanded, setCreateListExpanded] = useState(false);
  const [isCreateViewDisplayed, setCreateViewDisplayed] = useState(false);
  const [isDraftsDisplayed, setDraftsDisplayed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setCreateViewDisplayed(
      location.pathname.includes("/create") ||
        location.pathname.includes("/drafts")
    );
    setDraftsDisplayed(location.pathname.includes("/drafts"));
  }, [location.pathname]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftWrapper}>
        <SygnetIcon />
        <div className={styles.middleWrapper}>
          <NavLink
            className={({ isActive }) =>
              cx(styles.navLink, isActive && styles.active)
            }
            to="/wallet"
          >
            <MyWalleticon />
            MyWallet
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cx(styles.navLink, isActive && styles.active)
            }
            to="/explore"
          >
            <CompasIocn />
            <span>Explore</span>
          </NavLink>
          <ul className={cx(styles.createList)}>
            <li
              className={cx(
                styles.listHeader,
                isCreateViewDisplayed && !isCreateListExpanded && styles.active,
                isCreateListExpanded && styles.headerExpanded
              )}
              onClick={() => setCreateListExpanded((prev) => !prev)}
            >
              <div className={styles.listHeaderRow}>
                <EditIcon />
                {isDraftsDisplayed ? "Drafts" : "Create"}
              </div>
              {isCreateListExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </li>
            {isCreateListExpanded && (
              <>
                <DarkOverlay onClick={() => setCreateListExpanded(false)} />
                <div className={styles.dropDown}>
                  <NavLink className={cx(styles.listNavLink)} to="/drafts">
                    <li className={styles.crateListElement}>
                      <GroupIcon />
                      Drafts
                    </li>
                  </NavLink>
                  <NavLink className={cx(styles.listNavLink)} to="/create">
                    <li className={styles.crateListElement}>
                      <NewStrategyIcon />
                      New strategy
                    </li>
                  </NavLink>
                </div>
              </>
            )}
          </ul>
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
};

export default NavBar;
