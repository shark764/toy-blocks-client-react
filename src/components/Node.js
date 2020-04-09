import React from "react";
import PropTypes from "prop-types";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  makeStyles,
  Box,
} from "@material-ui/core";
import colors from "../constants/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "16px 0",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    display: "block",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(12),
    color: colors.faded,
  },
}));

const Node = ({ node, expanded, toggleNodeExpanded }) => {
  const classes = useStyles();
  return (
    <ExpansionPanel
      className={classes.root}
      expanded={expanded}
      onChange={() => toggleNodeExpanded(node)}
    >
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Box>
          <Typography className={classes.heading}>
            {node.name || "Unknown"}
          </Typography>
          <Typography className={classes.secondaryHeading}>
            {node.url}
          </Typography>
        </Box>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>Blocks go here</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

Node.propTypes = {
  node: PropTypes.shape({
    url: PropTypes.string,
    online: PropTypes.bool,
    name: PropTypes.string,
    loading: PropTypes.bool,
  }).isRequired,
  expanded: PropTypes.bool,
  toggleNodeExpanded: PropTypes.func.isRequired,
};

export default Node;
