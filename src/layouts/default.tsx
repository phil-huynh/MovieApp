import { Outlet } from "react-router-dom";
import { TopBar } from "~/components/common/TopBar";
import { NavigationMenu } from "~/components/common/NavigationMenu";
import styles from "./default.module.css";

function Layout() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.layout}>
        <TopBar />
        <NavigationMenu />
        <div className={styles.mainWrapper}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
