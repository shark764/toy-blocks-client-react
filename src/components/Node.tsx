import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Status from "./Status";
import { Node as NodeType } from "../types/Node";

type Props = {
  node: NodeType;
  expanded: boolean;
  toggleNodeExpanded: (node: NodeType) => void;
};

const AccordionRoot = styled(Accordion)({
  margin: "16px 0",
  boxShadow: "0px 3px 6px 1px rgba(0,0,0,0.15)",

  "&:before": {
    backgroundColor: "unset",
  },
});

const AccordionSummaryContainer = styled(AccordionSummary)(({ theme }) => ({
  padding: "0 24px",
  "& .MuiAccordionSummary-content": {
    margin: "10px 0 !important", // Avoid change of sizing on expanded
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: theme.palette.custom.icons,
  },
}));

const BoxSummaryContent = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  paddingRight: 20,
});

const TypographyHeading = styled(Typography)(({ theme }) => ({
  fontSize: 17,
  display: "block",
  color: theme.palette.text,
  lineHeight: 1.5,
}));

const TypographySecondaryHeading = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: theme.palette.custom.faded,
  lineHeight: 2,
}));

const PaperListItem = styled(Paper)(({ theme }) => ({}));

const BlocksList = styled(List)(({ theme }) => ({
  padding: 0,
  width: "100%",
  "& .MuiListItem-root": {
    padding: 0,
  },
  "& .MuiListItemText-root": {
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    borderRadius: "2px",
    padding: "8px",
    marginTop: "4px",
    marginBottom: 0,
    "& .MuiListItemText-primary": {
      lineHeight: "16px",
      fontWeight: 700,
      fontSize: "10px",
      color: theme.palette.primary.main,
    },
    "& .MuiListItemText-secondary": {
      lineHeight: "20px",
      fontWeight: 400,
      fontSize: "14px",
      color: theme.palette.text.primary,
      letterSpacing: "0.25px",
    },
  },
}));

const Node: React.FC<Props> = ({ node, expanded, toggleNodeExpanded }) => {
  return (
    <PaperListItem elevation={2}>
      <AccordionRoot
        elevation={3}
        expanded={expanded}
        onChange={() => toggleNodeExpanded(node)}
      >
        <AccordionSummaryContainer expandIcon={<ExpandMoreIcon />}>
          <BoxSummaryContent>
            <Box>
              <TypographyHeading variant="h5">
                {node.name || "Unknown"}
              </TypographyHeading>
              <TypographySecondaryHeading variant="subtitle1">
                {node.url}
              </TypographySecondaryHeading>
            </Box>
            <Status loading={node.loading} online={node.online} />
          </BoxSummaryContent>
        </AccordionSummaryContainer>
        <AccordionDetails>
          <BlocksList disablePadding>
            {(node.blocks ?? []).map((block) => (
              <ListItem
                alignItems="flex-start"
                key={block.attributes.hash}
                disableGutters
              >
                <ListItemText
                  primary={block.attributes.index.toString().padStart(3, "0")}
                  secondary={block.attributes.data}
                />
              </ListItem>
            ))}
          </BlocksList>
        </AccordionDetails>
      </AccordionRoot>
    </PaperListItem>
  );
};

export default Node;
