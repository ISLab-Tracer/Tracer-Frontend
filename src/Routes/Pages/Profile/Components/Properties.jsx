import React from 'react';
import {
  //   Checkbox,
  //   FormControl,
  //   FormControlLabel,
  //   FormHelperText,
  //   InputLabel,
  //   MenuItem,
  //   Select,
  TextField,
} from '@mui/material';

const Properties = ({ title = 'title', children }) => {
  return (
    <div className="profile-properties-container">
      <h3>{title}</h3>
      <hr />
      <div className="profile-details-container">{children}</div>
    </div>
  );
};

Properties.Input = ({
  feildTitle = 'title',
  name,
  value,
  setValue,
  desc = null,
  size = 'small',
  variant = 'outlined',
  style,
  property,
  disabled = false,
}) => {
  const handleValue = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    console.log(value);
  };
  return (
    <div className="feild-container">
      <h5>{feildTitle}</h5>
      <div className="property-feild">
        <TextField
          disabled={disabled}
          label={name}
          name={property}
          variant={variant}
          size={size}
          helperText={desc}
          style={style}
          value={value[property]}
          onChange={handleValue}
        />
      </div>
    </div>
  );
};

export default Properties;
