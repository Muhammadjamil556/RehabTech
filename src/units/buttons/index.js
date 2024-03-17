import { alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

/**
 * @dev Custom button designed upon Material UI's Button component. It accepts all props the MUI button accepts.
 * Moreover, the following props have been overridden. The default styles are contained primary.
 * @props variant can be either contained or outlined
 * @props color can be primary or secondary
 */

const CustomButton = styled(Button)(({ theme }) => ({
  borderWidth: 1,
  fontSize: 12,
  textAlign: "center",
  fontWeight: 700,
  fontsize: 18,

  "&.MuiButton-outlined": {
    color: "#000",
    background: "#fff",
    margin: "0px 5px",
    borderRadius: 41,
    "&:hover": {
      backgroundColor: alpha("#fff", 0.9),
    },
  },

  "&.MuiButton-contained": {
    color: "#fff",
    border: "1px solid #fff",
    backgroundColor: "#174468",
    borderRadius: 25,
    "&:hover": {
      backgroundColor: alpha("#365B6D", 0.9),
    },
  },
}));

export default CustomButton;
