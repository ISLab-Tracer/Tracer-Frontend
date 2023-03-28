import React from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

const times = [
  '00:00',
  '01:00',
  '02:00',
  '03:00',
  '04:00',
  '05:00',
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
];

const Properties = ({ title = 'title', children }) => {
  return (
    <div className="profile-properties-container">
      <h3>{title}</h3>
      <hr />
      <div className="profile-details-container">{children}</div>
    </div>
  );
};

Properties.Button = ({ fieldTitle }) => {
  return (
    <div className="property-button">
      <span className="property-button-span">{fieldTitle}</span>
    </div>
  );
};

Properties.Input = ({
  fieldTitle = 'title',
  name,
  value,
  setValue,
  desc = null,
  size = 'small',
  variant = 'outlined',
  style = { width: '100%' },
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
      <h5>{fieldTitle}</h5>
      <div className="property-field">
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

Properties.Menus = ({ name }) => {
  return (
    <MenuItem key={name} value={name}>
      {name}
    </MenuItem>
  );
};

Properties.Select = ({
  fieldTitle,
  name,
  property,
  value,
  setValue,
  style,
  disabled = false,
  items,
  render = times,
}) => {
  const handleValue = (e) => {
    if (!setValue) {
      console.log('HERE2');
      return;
    }
    console.log('HERE');
    setValue(e.target.value);
  };

  const renderMenus = render
    ? render.map((item) => {
        return (
          <Properties.Menus key={item} name={item} value={item}>
            {item}
          </Properties.Menus>
        );
      })
    : items.map((item) => {
        return <Properties.Menus key={item}>{item}</Properties.Menus>;
      });

  return (
    <div className="field-container">
      <h5>{fieldTitle}</h5>
      <div className="property-field">
        <FormControl fullWidth>
          <InputLabel>{fieldTitle}</InputLabel>
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

// 제일 상단 Header ( MainTitle, SubTitle 입력 후 출력 )
// 이미 만들어져있는걸 사용하기 위해 굳이 새로 만들지 않음
Properties.Header = ({ fieldTitle, name }) => {
  return (
    <div className="property-header-main">
      <div className="property-header-main-div">
        <span className="property-header-main-div-top">{name}</span>
      </div>
      <div className="property-header-main-div">
        <span className="property-header-main-div-bottom">{fieldTitle}</span>
      </div>
    </div>
  );
};

// 정보 Box ( ex: ProfilePage- 유저 정보, 이메일 알림 )
Properties.Box = ({ fieldTitle, children, help }) => {
  return (
    <div className="property-box-main">
      <div className="property-box-main-title">
        <span>{fieldTitle}</span>
        {help && <span className="property-box-main-title-help">{help}</span>}
      </div>
      {children}
    </div>
  );
};

export default Properties;
