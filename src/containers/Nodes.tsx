import React, { useState, useEffect } from "react";
import { Node as NodeType } from "../types/Node";
import Node from "../components/Node";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../store/configureStore";
import {
  checkNodesStatus,
  retrieveNodeBlocks,
  selectNodes,
} from "../reducers/nodes";

const TypographyHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "34px",
  lineHeight: "40px",
  letterSpacing: "0.25px",
  color: "#000000",
}));

export const Nodes: React.FC = () => {
  const [expandedNodeURL, setExpandedNodeURL] = useState<null | string>(null);
  const dispatch = useDispatch();
  const nodes = useAppSelector(selectNodes);

  useEffect(() => {
    dispatch(checkNodesStatus());
  }, [dispatch]);

  function toggleNodeExpanded(node: NodeType) {
    setExpandedNodeURL(node.url === expandedNodeURL ? null : node.url);
    dispatch(retrieveNodeBlocks(node));
  }

  return (
    <Box paddingTop={7}>
      <TypographyHeading variant="h4">Nodes</TypographyHeading>
      {nodes.map((node) => (
        <Node
          node={node}
          key={node.url}
          expanded={node.url === expandedNodeURL}
          toggleNodeExpanded={toggleNodeExpanded}
        />
      ))}
    </Box>
  );
};

export default Nodes;
