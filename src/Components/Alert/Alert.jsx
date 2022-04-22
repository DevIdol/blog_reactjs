import React from "react";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const AlertMessage = ({alert, message}) => (
  <Alert severity={alert}>{message}</Alert>
);

