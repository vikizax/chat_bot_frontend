import { createStyles, makeStyles } from '@material-ui/core/styles';
import { pxToRem } from '../../utils/themeUtils'

export interface IStyleProps {
    fontWeight?: 'normal' | 'bold' | 400 | 500 | 700,
    lineHeight?: number,
    fontSize?: number,
    color?: string,
    textAlign?: string
    position?: 'absolute' | 'relative'
}

export const useStyles = makeStyles(() => createStyles({
    font: {
        fontFamily: 'DM Sans',
        fontWeight: (props: IStyleProps) => props.fontWeight ?? 'inherit',
        lineHeight: (props: IStyleProps) => props.lineHeight ? pxToRem(props.lineHeight) : pxToRem(22),
        fontSize: (props: IStyleProps) => props.fontSize ? pxToRem(props.fontSize) : pxToRem(24),
        color: (props: IStyleProps) => props.color ?? '#2D2D2D',
        textAlign: (props: IStyleProps) => props.textAlign as any ?? 'inherit',
        position: (props: IStyleProps) => props.position ?? 'relative'
    }
}))