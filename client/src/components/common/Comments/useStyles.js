import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  list: {
    listStyle: "none",
    paddingLeft: 0,
  },
  commentBox: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    border: "1px solid",
    borderColor: theme.palette.secondary.light,
    minHeight: 80,
  },
  customerNameBox: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 16px 8px 16px",
    borderBottom: "1px solid",
    borderBottomColor: theme.palette.secondary.light,
  },
  customerName: {
    color: theme.palette.primary.main,
    fontSize: 14,
  },
  commentDate: {
    fontSize: 14,
    color: theme.palette.secondary.medium,
  },
  customerCommentBox: {
    padding: "16px",
  },
  customerComment: {
    color: theme.palette.secondary.main,
    fontSize: 14,
  },
  noComments: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: 500,
    marginTop: 60,
    marginBottom: 120,
    color: theme.palette.secondary.main,
    cursor: "default",
  },
  commentButtons: {
    margin: "4px 8px 16px 0px",
  },
  thanksBox: {
    position: "fixed",
    top: "20vh",
    left: "calc(50vw - 160px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 320,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 4,
  },
  thanksText: {
    fontSize: 18,
    fontWeight: 500,
    color: "white",
  },
  centeredBox: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default useStyles;
