import { ReactNode } from "react";
import { useStyle } from "./styles";
const Layout = ({ children }: { children: ReactNode }) => {
  const styles = useStyle();
  return <div className={styles.layoutContainer}>{children}</div>;
};
export default Layout;
