import React from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "./Material";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 5,
  },
  label: {
    fontSize: 12,
  },
}));

function CustomRadioGroup({ id, label, controls, defaultValue, onChange }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(defaultValue);

  const handleChange = (e) => {
    const { value: selectedValue } = e.target;
    setValue(selectedValue);
    onChange(id, selectedValue);
  };

  return (
    <FormControl component="fieldset" className={classes.root}>
      <FormLabel
        data-testid="label"
        component="legend"
        className={classes.label}
      >
        {label}
      </FormLabel>
      <RadioGroup
        row
        aria-label="Size"
        name="size"
        value={value}
        onChange={handleChange}
      >
        {controls.map(
          ({ id: controlID, value: controlValue, label: controlLabel }) => (
            <FormControlLabel
              data-testid={`control-${controlID}`}
              key={controlID}
              value={controlValue}
              control={<Radio color="secondary" size="small" />}
              label={controlLabel}
              classes={{ label: classes.label }}
            />
          )
        )}
      </RadioGroup>
    </FormControl>
  );
}

CustomRadioGroup.propTypes = {
  /**
   * Id of the item
   */
  id: PropTypes.number.isRequired,
  /**
   * Label for the radio group
   */
  label: PropTypes.string.isRequired,
  /**
   * Radio Controls
   */
  controls: PropTypes.array,
  /**
   * Default option to select
   */
  defaultValue: PropTypes.any,
  /**
   * onChange handler
   */
  onChange: PropTypes.func.isRequired,
};

export default CustomRadioGroup;
