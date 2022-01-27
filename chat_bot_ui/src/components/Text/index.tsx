import { ReactNode } from "react";
import { useStyles, IStyleProps } from "./styles";
export interface IProps extends IStyleProps {
  children: ReactNode;
}

export const DMSansGeneric = ({
  color,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  position,
  children,
}: IProps) => {
  const styles = useStyles({
    color,
    fontSize,
    fontWeight,
    lineHeight,
    textAlign,
    position,
  });
  return <div className={styles.font}>{children}</div>;
};
