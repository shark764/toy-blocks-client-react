import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

type Props = {
  online: boolean;
  loading: boolean;
};

const SpanDot = styled("span", {
  shouldForwardProp: (prop: string) => !["online", "loading"].includes(prop),
})<{ online: boolean; loading: boolean }>(({ online, loading, theme }) => {
  const color = loading
    ? theme.palette.warning.main
    : online
    ? theme.palette.success.main
    : theme.palette.custom.danger;
  return {
    borderRadius: "50%",
    display: "inline-block",
    width: 5,
    height: 5,
    backgroundColor: color,
  };
});

const SpanText = styled("span", {
  shouldForwardProp: (prop) => prop !== "online",
})<{ online: boolean }>(({ online, theme }) => ({
  fontSize: 10,
  display: "block",
  lineHeight: "16px",
  fontWeight: 500,
  letterSpacing: "1.5px",
  paddingLeft: 5,
  color: online ? theme.palette.text.primary : theme.palette.custom.faded,
}));

const Status: React.FC<Props> = ({ online, loading }) => {
  return (
    <Box display="flex" alignItems="center">
      <SpanDot online={online} loading={loading} />
      <SpanText online={online}>
        {loading ? "LOADING" : online ? "ONLINE" : "OFFLINE"}
      </SpanText>
    </Box>
  );
};

export default Status;
