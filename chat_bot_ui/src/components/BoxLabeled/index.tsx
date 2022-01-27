import { DMSansGeneric } from "../Text";
import { useStyles, IStyleProps } from "./styles";
import { pxToRem } from "../../utils/themeUtils";

export interface IProps extends IStyleProps {
  label: string;
  startIcon?: string;
  fontWeight?: "normal" | "bold" | 400 | 500 | 700;
  style?: { [key: string]: any };
}

const BoxLabeled = ({
  label,
  margin,
  borderRadius,
  padding,
  startIcon,
  boxShadow,
  width,
  fontWeight,
  justifyContent,
  style,
}: IProps) => {
  const styles = useStyles({
    margin,
    borderRadius,
    padding,
    boxShadow,
    width,
    justifyContent,
  });
  return (
    <div className={styles.container} style={style}>
      <img
        src={startIcon}
        alt="dot-icon"
        style={{
          height: pxToRem(14),
          width: pxToRem(14),
          marginRight: pxToRem(8),
        }}
      />
      <DMSansGeneric
        fontWeight={fontWeight ?? 400}
        fontSize={12}
        lineHeight={21}
      >
        {label}
      </DMSansGeneric>
    </div>
  );
};
export default BoxLabeled;
