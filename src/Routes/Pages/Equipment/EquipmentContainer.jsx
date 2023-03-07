import React, { useState } from 'react';
import EquipmentPresenter from './EquipmentPresenter';

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

const EquipmentContainer = () => {

  
  /* Router */


  /* State */
  const [ test ] = useState( initial );
  
  // Main 에서 사용
  // 품목 개수가 0일 경우 == true
  const [ zeroItem ] = useState(false);

  // 전체 리스트에서 물품 클릭
  const [ listClick, setListClick ] = useState(false);

  const [ itemid, setItemid ] = useState( 0 );
  // Main 에서 사용


  /* Hooks */
  
  
  /* Functions */
  const handleOnClick = e => {
    // 제품 목록 클릭시

        if( listClick === true && e.currentTarget.id === itemid ) {
            setListClick( false );
            return;
        }

        if( listClick === true ) {
        
            setItemid( e.currentTarget.id );
        
        } else {
            setItemid( e.currentTarget.id );
            setListClick( true );
        }
    }

    const editOn = () => {

        //setMode( false );
    }
    



  /* Render */
  return (
    <EquipmentPresenter
      test = { test }
      zeroItem = { zeroItem }
      listClick = { listClick }
      itemid = { itemid }
      handleOnClick = { handleOnClick }
      editOn = { editOn }
    />
  );
};

export default EquipmentContainer;
