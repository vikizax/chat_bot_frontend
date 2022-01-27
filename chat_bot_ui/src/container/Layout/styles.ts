import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles(() =>
  createStyles({
    layoutContainer: {
      height: "100vh",
      position: "relative",
      background: "#FFF",
    },
  })
);
