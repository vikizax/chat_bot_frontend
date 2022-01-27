import { createStyles, makeStyles } from '@material-ui/core/styles';
import { pxToRem } from "../../utils/themeUtils";

export interface IStyleProps {
    margin?: string;
    borderRadius?: string;
    padding?: string;
    boxShadow?: string;
    width?: string;
    textAlign?: string;
    justifyContent?: string
}

export const useStyles = makeStyles(() => createStyles({
    container: {
        width: (props: IStyleProps) => props.width ?? '100%',
        display: 'flex',
        justifyContent: (props: IStyleProps) => props.justifyContent ?? 'start',
        alignItems: 'center',
        padding: (props: IStyleProps) => props.padding ?? `${pxToRem(14)} ${pxToRem(5)}`,
        border: `${pxToRem(1)} solid #E1E1E1`,
        borderRadius: (props: IStyleProps) => props.borderRadius ?? `${pxToRem(8)}`,
        margin: (props: IStyleProps) => props.margin ?? '0',
        boxShadow: (props: IStyleProps) => props.boxShadow ?? `0px 0px ${pxToRem(8)} rgba(0, 0, 0, 0.05)`,
        textAlign: (props: IStyleProps) => props.textAlign as any ?? 'inherit'
    }
}))