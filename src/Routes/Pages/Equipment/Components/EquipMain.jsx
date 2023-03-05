import React, { useState } from 'react';

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
        img: "https://item.kakaocdn.net/do/c5c470298d527ef65eb52883f0f186c48f324a0b9c48f77dbce3a43bd11ce785",
        count: 2,
        barcode: "22222",
        charger: "정한호"
    },
    {
        id: 3,
        title: "Test3",
        price: "3000",
        category: "소모품",
        team: "Blockchain",
        img: "https://item.kakaocdn.net/do/c5c470298d527ef65eb52883f0f186c48f324a0b9c48f77dbce3a43bd11ce785",
        count: 3,
        barcode: "33333",
        charger: "정한호"
    },
]

const tt = {
    id: 0,
    title: "TEST",
    price: "500",
    category: "소모품",
    team: "Blockchain",
    img: "https://item.kakaocdn.net/do/c5c470298d527ef65eb52883f0f186c48f324a0b9c48f77dbce3a43bd11ce785",
    count: 10,
    barcode: "00000",
    charger: "정한호"
}

const EquipMain = (props) => {

    /* Router */

    /* State */
    const { AddIcon, KeyboardArrowDownIcon, FormatListNumberedRtlIcon, EquipText } = props;

    // 품목 개수가 0일 경우 == true
    const [ zeroItem ] = useState(false);
    
    const [ test, setTest ] = useState( initial );
    
    const [ equipInfo, setEquipInfo ] = useState( tt );

    // 전체 리스트에서 물품 클릭
    const [ listClick, setListClick ] = useState(false);

    // 입고, 출고, 조정 클릭 확인
    const [ whatTodo, setWhatTodo ] = useState( 0 );

    // 업데이트할 카운트
    const [ updateCount, setUpdateCount ] = useState( equipInfo.count );

    /* Hooks */

    /* Functions */
    const handleOnClick = () => {

        setListClick( !listClick );
    }

    // 확인 버튼 클릭 시
    const offchangeUpdateClick = e => {

        setEquipInfo( { ...equipInfo, [`count`] : updateCount * 1 } );

        setWhatTodo( 0 );
    }

    const handleOnUpdateCount = e => {
        // 입고, 출고, 조정 관리
        
        const id = e.target.id;

        // 1을 안쓰는 이유 => 동작을 안함 ( 왜? )
        id === 'set' ? setWhatTodo( 3 ) : setWhatTodo( 2 );

        if( whatTodo === 2 ) {
            // 입고, 출고 상태에서 각각 입고, 출고, 조정 클릭

            if( id === 'set' ) { setUpdateCount( equipInfo.count ); }
            else if( id === 'plus' ) { setUpdateCount( Number( updateCount ) + 1 ); }
            else { setUpdateCount( Number( updateCount ) - 1 ); }

        } else if( whatTodo === 3 ) {
            // 조정 상태에서 각각 입고, 출고, 조정 클릭
            
            if( id === 'plus' || id === 'minus' ) { setUpdateCount( equipInfo.count ); }
        }
    }
    
    // 조정 입력 시
    const hadleOnChange = e => {

        setUpdateCount( e.target.value );

        console.log( typeof( Number( updateCount) ) );
        console.log( updateCount )
    }

    /* Render */
    return (
        <div className="equip-page-mainbox">

            { zeroItem ?
            /* 제품개수가 0일 경우 */
            <div className="equip-page-zeroitembox">
                <p className="equip-page-zeroitembox-p">
                    등록된 제품이 없습니다. 제품을 추가해주세요.
                </p>
                <div className="equip-page-zeroitembox-button">
                    <AddIcon />
                    <p>
                        제품추가
                    </p>
                </div>
            </div>

            :

            // 제품개수가 0이 아닐 경우
            <div className="equip-page-itembox">
                <div className="equip-page-itembox-left">
                    <div className="equip-page-itembox-left-titlebox">
                        <div className="equip-page-itembox-left-titleall">
                            <p className="equip-page-itembox-left-titleall-first">
                                전체보기
                            </p>
                            <p className="equip-page-itembox-left-titleall-second">
                                <KeyboardArrowDownIcon />
                            </p>
                        </div>
                        <div className="equip-page-itembox-left-sortbox">
                            <FormatListNumberedRtlIcon />
                        </div>
                    </div>

                    {
                    /* 제품 리스트 */
                    test.map( (item) => {
                        console.log( item );
                        console.log( item.img );
                        console.log( item.title );

                        return (
                            <div className="equip-page-itembox-left-listbox" onClick={handleOnClick}>
                                <div className="equip-page-itembox-left-list">
                                    <img
                                        className="equip-page-itembox-left-img"
                                        src={item.img}
                                        alt="img"
                                    />
                                    <div className="equip-page-itembox-left-info">
                                        <p className="equip-page-itembox-left-info-title">
                                            {item.title}
                                        </p>
                                        <p className="equip-page-itembox-left-info-property">
                                            {item.price}원 / {item.team} / {item.category}
                                        </p>
                                    </div>
                                    <div className="equip-page-itembox-left-countbox">
                                        <p>
                                            {item.count}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    } )
                    }


                </div>

                { !listClick ?
                // 목록 클릭했을 경우
                    <div className="equip-page-itembox-right">
                        <div className="equip-page-itembox-zeroitem">
                            <p className="equip-page-itembox-zeroitem-p">
                                왼쪽목록에서 제품을 선택하면 자세히 볼 수 있습니다.
                            </p>
                        </div>
                    </div>

                    :
                
                    <div className="equip-page-itembox-right">
                        <div className="equip-page-itembox-clickitembox">
                            <div className="equip-page-itembox-clickitembox-titlebox">
                                <p  className="equip-page-itembox-clickitembox-title">
                                    제품 정보
                                </p>
                                <div className="equip-page-itembox-clickitembox-buttonbox">
                                    <p className="centerflex equip-page-itembox-clickitembox-button">
                                        수정
                                    </p>
                                    <p className="centerflex equip-page-itembox-clickitembox-button">
                                        삭제
                                    </p>
                                </div>
                            </div>
                            <div className="equip-page-itembox-clickitembox-infobox">
                                <img
                                    className="centerflex equip-page-itembox-clickitembox-infobox-img"
                                    src={equipInfo.img}
                                    alt="img"
                                />
                                <div>
                                    <EquipText
                                        title='제품명'
                                        value={equipInfo.title}
                                        style={{ 'paddingTop': '2%', 'borderTop': '1px solid #cccdd4' }}
                                    />

                                    <EquipText
                                        title='바코드'
                                        value={equipInfo.barcode}
                                    />

                                    <EquipText
                                        title='가격'
                                        value={equipInfo.price}
                                    />

                                    <EquipText
                                        title='담당자'
                                        value={equipInfo.charger}
                                    />

                                    <EquipText
                                        title='팀'
                                        value={equipInfo.team}
                                    />
                                </div>
                            </div>

                            <div className="equip-page-itembox-clickitembox-changebox line">

                                <EquipText
                                        title='수량'
                                        value={equipInfo.count}
                                    />

                                <div className="equip-page-itembox-clickitembox-changebox-buttonbox">
                                    <p 
                                        className="equip-page-itembox-clickitembox-changebox-button leftbutton"
                                        id="plus"
                                        onClick={ handleOnUpdateCount }
                                    >
                                        입고
                                    </p>
                                    <p
                                        className="equip-page-itembox-clickitembox-changebox-button leftbutton"
                                        id="minus"
                                        onClick={ handleOnUpdateCount }
                                    >
                                        출고
                                    </p>
                                    <p
                                        className="equip-page-itembox-clickitembox-changebox-button"
                                        id="set"
                                        onClick={ handleOnUpdateCount }
                                    >
                                        조정
                                    </p>
                                </div>

                                { whatTodo === 3 && 
                                // 조정 버튼 클릭 시
                                
                                /* 조정 */
                                <div className="centerflex equip-page-itembox-clickitembox-updatebox">
                                    <p className="equip-page-itembox-clickitembox-updatebox-count">
                                        {equipInfo.count}
                                    </p>
                                    <p className="equip-page-itembox-clickitembox-updatebox-changecount">
                                        {`>`}
                                    </p>
                                    <input
                                        name="changecount"
                                        type="text"
                                        className="equip-page-itembox-clickitembox-updatebox-input"
                                        placeholder={equipInfo.count}
                                        onChange={hadleOnChange}
                                    />
                                    <p
                                        className="equip-page-itembox-clickitembox-updatebox-button"
                                        onClick={offchangeUpdateClick}
                                    >
                                        확인
                                    </p>
                                </div>
                                        
                                }

                                { whatTodo === 2 && 
                                // 입고, 출고 버튼 클릭 시

                                    /* 입고 */
                                    <div className="centerflex equip-page-itembox-clickitembox-updatebox">
                                        <p className="equip-page-itembox-clickitembox-updatebox-count">
                                            {equipInfo.count}
                                        </p>
                                        <p className="equip-page-itembox-clickitembox-updatebox-changecount">
                                            {`>`}
                                        </p>
                                        <p className="equip-page-itembox-clickitembox-updatebox-updown">
                                            {updateCount}
                                        </p>
                                        <p
                                            className="equip-page-itembox-clickitembox-updatebox-button"
                                            onClick={offchangeUpdateClick}
                                        >
                                            확인
                                        </p>
                                    </div>
                                }
                                
                            </div>
                        </div>
                    </div>


                    
                }

                    

                    
            </div>
            }



            
        </div>
    );
}

export default EquipMain;