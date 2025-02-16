import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logo: {
    fontSize: "29px", // Adjust size as needed
    fontWeight: "bold",
    fontFamily: "'Arial', sans-serif", // Change to any preferred font
    color: theme.palette.foreground.default,
    textAlign: "center",
    "&:hover": {
      color: theme.palette.primary.main,
    },
    transition: "color 0.3s ease",
  },
}));

export const Logo = () => {
  const classes = useStyles();

  return <div className={classes.logo}>CA</div>;
};
