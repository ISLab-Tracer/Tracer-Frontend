import { Button } from '@mui/material';
import { EquipInfo } from 'Components';
import React from 'react';
import Barcode from 'react-barcode';

const BarcodePresenter = () => {
  /* Router */
  /* State */
  //   const [barcode, setBarcode] = useState();
  /* Hooks */
  /* Functions */
  /* Render */
  return (
    <div className="main-content-container">
      <div style={{ display: 'flex', flexWrap: 'nowrap' }}>
        <EquipInfo.Input label="바코드" />
        <Button variant="outlined" size="small" sx={{ width: 100, height: 40 }}>
          자동생성
        </Button>
      </div>
      <Barcode value="1604b772-adc0-4212-8a90-81186c57f598" />
      <hr style={{ marginBottom: 30 }} />
    </div>
  );
};

export default BarcodePresenter;
