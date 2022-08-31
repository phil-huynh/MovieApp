import { Outlet } from "react-router-dom";
import { TopBar } from "../components/common/TopBar";
import styles from "./default.module.css";

function Layout() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.layout}>
        <TopBar />
        <div className={styles.mainWrapper}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
