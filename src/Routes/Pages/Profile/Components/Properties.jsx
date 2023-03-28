import React from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
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
    if (!setValue) {
      return;
    }
    setValue(e.target.name, e.target.value);
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
          value={value}
          onChange={handleValue}
        ></TextField>
      </div>
    </div>
  );
};

Properties.Menus = ({ name, value }) => {
  return (
    <MenuItem key={name} value={value}>
      {name}
    </MenuItem>
  );
};

Properties.Select = ({
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
          <Properties.Menus key={item.value} value={item.value}>
            {item.name}
          </Properties.Menus>
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

Properties.Header = () => {
  return (
    <div className="profile-page-mainbox-header">
      <div className="profile-page-mainbox-header-div">
        <span className="profile-page-mainbox-header-div-top">
          결제 및 설정
        </span>
      </div>
      <div className="profile-page-mainbox-header-div">
        <span className="profile-page-mainbox-header-div-bottom">
          유저 설정
        </span>
      </div>
    </div>
  );
};

Properties.Box = ({ feildTitle, children }) => {
  return (
    <div className="property-box-main">
      <div className="property-box-main-title">
        <span>{feildTitle}</span>
      </div>
      {children}
    </div>
  );
};

export default Properties;
