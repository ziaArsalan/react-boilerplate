import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { ColorSchemeCode } from '../enums/ColorScheme';

const useStylesElement = makeStyles(() => ({
  root: {
    border: '1px solid ' + ColorSchemeCode.inactiveNav,
    overflow: 'hidden',
    color: ColorSchemeCode.subText,
    borderRadius: 15,
    backgroundColor: ColorSchemeCode.white,
    fontSize: '16px',
    fontFamily: 'Poppins',
    '&:hover': {
      backgroundColor: ColorSchemeCode.white,
    },
    '&$focused': {
      backgroundColor: ColorSchemeCode.white,
      borderColor: ColorSchemeCode.activeTab,
      color: ColorSchemeCode.subText
    },
  },
  focused: {},
}));

const useStylesInputElement = makeStyles(() => ({
  root: {
    paddingLeft: '20px',
  }
}));

const useStylesLabelElement = makeStyles(() => ({
  root: {
    paddingLeft: '8px',
  }
}));

export default function CustomizedInput(props) {
  const classes = useStylesElement();
  const inputClasses = useStylesInputElement();
  const labelClasses = useStylesLabelElement();

  return <TextField variant="filled" inputProps={{ className: inputClasses.root }} InputLabelProps={{ className: labelClasses.root }}  InputProps={{ classes, disableUnderline: true }} {...props} />;
}



