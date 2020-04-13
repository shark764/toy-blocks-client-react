import React from "react";
import PropTypes from "prop-types";
import { Chip, CircularProgress, makeStyles } from "@material-ui/core";
import colors from "../constants/colors";

function Status({ online, loading }) {
  const classes = useStyles({ online, loading });
  return (
    <Chip
      variant="outlined"
      className={classes.root}
      classes={{ icon: classes.icon }}
      icon={loading && <CircularProgress size={20} color="inherit" />}
      label={loading ? "Loading" : online ? "Online" : "Offline"}
    />
  );
}

const useStyles = makeStyles({
  root: ({ online, loading }) => {
    const color = loading
      ? colors.warning
      : online
      ? colors.success
      : colors.danger;
    return {
      borderColor: color,
      color,
    };
  },
  icon: {
    color: colors.warning,
  },
});

Status.propTypes = {
  online: PropTypes.bool,
  loading: PropTypes.bool,
};

export default Status;
