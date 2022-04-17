import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(() => ({
  "& .MuiPaper-root": {
    borderRadius: "0.625rem",
    boxShadow: "0px 0px 0.625rem rgb(20,20,20)",
  },
  "& .MuiDialogContent-root": {},
}));
const PEllipis = styled.p`
  font-size: 13px;
  color: rgb(180, 180, 180);
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle
      sx={{
        m: 0,
        p: 1,
        padding: "8px 24px",
      }}
      {...other}
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 3,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Dialogs(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <PEllipis onClick={handleClickOpen}>简介:{props.description}</PEllipis>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          简介
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography>{props.description}</Typography>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
