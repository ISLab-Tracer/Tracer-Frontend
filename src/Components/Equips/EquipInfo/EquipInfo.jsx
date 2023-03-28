import React from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import './equipinfo.css';

const EqipInfo = ({ title = 'title', children }) => {
  return (
    <div className="eqipInfo-container">
      <h3>{title}</h3>
      <hr />
      <div className="profile-details-container">{children}</div>
    </div>
  );
};

EqipInfo.Input = ({
  label = 'title',
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
    if (!setValue) {
      return;
    }
    setValue(e.target.name, e.target.value);
  };
  return (
    <div className="field-container">
      <h5>{label}</h5>
      <div className="property-feild">
        <TextField
          disabled={disabled}
          label={name}
          name={property}
          variant={variant}
          size={size}
          helperText={desc}
          style={style}
          fullWidth={true}
          value={value}
          onChange={handleValue}
        />
      </div>
    </div>
  );
};

EqipInfo.Menus = ({ name, value }) => {
  return (
    <MenuItem key={name} value={value}>
      {name}
    </MenuItem>
  );
};

EqipInfo.Select = ({
  feildTitle,
  name,
  property,
  value,
  setValue,
  style,
  disabled = false,
  items = [],
  render,
}) => {
  const handleValue = (e) => {
    if (!setValue) {
      return;
    }
    setValue(e.target.name, e.target.value);
  };

  const renderMenus = render
    ? items.map(render)
    : items.map((item) => {
        return (
          <EqipInfo.Menus key={item.value} value={item.value}>
            {item.name}
          </EqipInfo.Menus>
        );
      });

  return (
    <div className="feild-container">
      <h5>{feildTitle}</h5>
      <div className="property-feild">
        <FormControl fullWidth>
          <InputLabel>{feildTitle}</InputLabel>
          <Select
            name={property}
            value={value}
            label={name}
            onChange={handleValue}
            style={style}
            disabled={disabled}
          >
            {render ? renderMenus : <MenuItem value="0">선택</MenuItem>}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default EqipInfo;
