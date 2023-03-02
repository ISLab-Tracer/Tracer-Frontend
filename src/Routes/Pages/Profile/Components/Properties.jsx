import React from 'react';
import {
  //   Checkbox,
  FormControl,
  //   FormControlLabel,
  //   FormHelperText,
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
    setValue({ ...value, [e.target.name]: e.target.value });
    console.log( "Input" );
    console.log( value );
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
        >
        </TextField>
      </div>
    </div>
  );
};

Properties.Select = ({
  feildTitle,
  name,
  property,
  value,
  setValue,
  style,
  disabled= false,
  team
}) => {

  const handleValue = e => {
    setValue( { ...value, [ e.target.name ] : e.target.value });
    console.log( "Select" );
    console.log( value );
  }
  
  console.log( "TEAM" );
  console.log( team );

  return (
    <div className="feild-container">
      <h5>{feildTitle}</h5>
      <div className="property-feild">
        <FormControl fullWidth>
          <InputLabel>{feildTitle}</InputLabel>
          <Select
            name={property}
            value={value[property]}
            label={name}
            onChange={handleValue}
            style={ style }
            disabled={disabled}
          >
            {/* Map 수정 */}
            {/* Team State를 Map 작성 */}
            <MenuItem name="user_email"  value="AI">AI</MenuItem>
            <MenuItem name="user_email" value="Blockchain">Blockchain</MenuItem>
            <MenuItem name="user_email"  value="Hardware">Hardware</MenuItem>
            <MenuItem name="user_email"  value="Quantum">Quantum</MenuItem>
          </Select>
      </FormControl>
      </div>
    </div>
    
  );


}



export default Properties;
