import React, { useState } from 'react';
import Equip from './Components/Equip'
import '../../../Css/equipment.css'
import ViewListIcon from '@mui/icons-material/ViewList';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';

import { EquipHeader, EquipMain, EquipSearch } from './Components';


const initial = [
  {
      id: 1,
      title: "Test1",
      price: "1000",
      category: "소모품",
      team: "Blockchain",
      img: "https://item.kakaocdn.net/do/c5c470298d527ef65eb52883f0f186c48f324a0b9c48f77dbce3a43bd11ce785",
      count: 1,
      barcode: "11111",
      charger: "정한호"
  },
  {
      id: 2,
      title: "Test2",
      price: "2000",
      category: "소모품",
      team: "Hardware",
      img: "https://item.kakaocdn.net/do/c5c470298d527ef65eb52883f0f186c49f5287469802eca457586a25a096fd31",
      count: 0,
      barcode: "22222",
      charger: "정한호"
  },
  {
      id: 3,
      title: "WOW3",
      price: "3000",
      category: "소모품",
      team: "Blockchain",
      img: "https://item.kakaocdn.net/do/c5c470298d527ef65eb52883f0f186c46fb33a4b4cf43b6605fc7a1e262f0845",
      count: 3,
      barcode: "33333",
      charger: "정한호"
  },
  {
      id: 4,
      title: "HANHO",
      price: "4000",
      category: "소모품",
      team: "Blockchain",
      img: "https://item.kakaocdn.net/do/c5c470298d527ef65eb52883f0f186c415b3f4e3c2033bfd702a321ec6eda72c",
      count: 0,
      barcode: "44444",
      charger: "정한호"
  },
  {
      id: 5,
      title: "Test5",
      price: "5000",
      category: "소모품",
      team: "Blockchain",
      img: "https://item.kakaocdn.net/do/c5c470298d527ef65eb52883f0f186c4960f4ab09fe6e38bae8c63030c9b37f9",
      count: 5,
      barcode: "55555",
      charger: "정한호"
  },
]

const EquipmentPresenter = (props) => {

  const { check, handleOnFocus } = props;
  const [ test ] = useState( initial );
  const [ search, setSearch ] = useState( "" );
  const [ emptycheck, setEmptycheck ] = useState( false );

  return (
    <div className="main-content-container">
      <EquipHeader
        ViewListIcon={ViewListIcon}
        AddIcon={AddIcon}
        KeyboardArrowDownIcon={KeyboardArrowDownIcon}
        test={ test }
      />      

      <EquipSearch
        check={ check }
        handleOnFocus={ handleOnFocus }
        test={ test }
        setSearch={ setSearch }
        emptycheck= { emptycheck }
        setEmptycheck={ setEmptycheck  }
      />
      
      <EquipMain
        AddIcon={AddIcon}
        KeyboardArrowDownIcon={KeyboardArrowDownIcon}
        FormatListNumberedRtlIcon={FormatListNumberedRtlIcon}
        Equip={Equip}
        test={ test }
        search={ search }
        emptycheck={ emptycheck }
      />
    </div>
  );
};

export default EquipmentPresenter;
