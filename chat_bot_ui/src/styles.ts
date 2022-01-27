import { createStyles, makeStyles } from "@material-ui/core/styles";
import { pxToRem } from "./utils/themeUtils";

export const useStyles = makeStyles((theme) =>
    createStyles({
        banner: {
            background: "linear-gradient(123.75deg, #F5821F 1.87%, #FF5C00 120.46%)",
            padding: `${pxToRem(20)} ${pxToRem(400)}`,
            height: "30%",
            overflow: "auto",
            [theme.breakpoints.down("md")]: {
                padding: `${pxToRem(20)} ${pxToRem(300)}`,
            },
            [theme.breakpoints.down("sm")]: {
                padding: `${pxToRem(20)} ${pxToRem(100)}`,
            },
            [theme.breakpoints.down("xs")]: {
                padding: `${pxToRem(20)} ${pxToRem(55)}`,
            },
        },
        contentBody: {
            position: "absolute",
            top: `${pxToRem(180)}`,
            width: "100%",
            display: "flex",
            height: "calc(100% - 200px)",
            justifyContent: "center",
        },
        contentContainer: {
            background: "#FFF",
            width: `calc(100% - ${pxToRem(600)})`,
            borderRadius: "8px",
            border: `${pxToRem(1)} solid #E4E4E4`,
            [theme.breakpoints.down("md")]: {
                width: `calc(100% - ${pxToRem(400)})`,
            },
            [theme.breakpoints.down("sm")]: {
                width: `calc(100% - ${pxToRem(100)})`,
            },
            [theme.breakpoints.down("xs")]: {
                width: `calc(100% - ${pxToRem(20)})`,
            },
        },
        botIconContainer: {
            background: "linear-gradient(180deg, #FF7600 0%, #FF5C00 100%)",
            boxShadow: `0px 0px ${pxToRem(15)} rgba(0, 0, 0, 0.15)`,
            height: pxToRem(67),
            width: pxToRem(67),
            borderRadius: "50%",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            position: "absolute",
            top: pxToRem(145),
            zIndex: 100,
            left: pxToRem(370),
            [theme.breakpoints.down("md")]: {
                left: pxToRem(270),
            },
            [theme.breakpoints.down("sm")]: {
                left: pxToRem(70),
            },
            [theme.breakpoints.down("xs")]: {
                left: pxToRem(25),
            },
        },
        content: {
            margin: `${pxToRem(20)} ${pxToRem(55)} `,
            // height: `calc(100% - ${pxToRem(100)})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            [theme.breakpoints.down("sm")]: {
                margin: `${pxToRem(20)} ${pxToRem(25)} `,
            },
            [theme.breakpoints.down("xs")]: {
                margin: `${pxToRem(15)} ${pxToRem(20)} `,
            },
        },
        contentTitle: {
            margin: `${pxToRem(45)} ${pxToRem(75)} 0 ${pxToRem(75)}`,
            [theme.breakpoints.down("sm")]: {
                margin: `${pxToRem(45)} ${pxToRem(40)} 0 ${pxToRem(40)}`,
            },
            [theme.breakpoints.down("xs")]: {
                margin: `${pxToRem(45)} ${pxToRem(30)} 0 ${pxToRem(30)}`,
            },
        },
    })
);