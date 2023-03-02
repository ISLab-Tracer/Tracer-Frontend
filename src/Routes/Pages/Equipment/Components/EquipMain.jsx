import React, { useState } from 'react';

const initial = [
    {
        id: 1,
        title: "Test1",
        price: "1000",
        category: "소모품",
        team: "Blockchain",
        img: "https://item.kakaocdn.net/do/c5c470298d527ef65eb52883f0f186c48f324a0b9c48f77dbce3a43bd11ce785",
        count: "1",
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
        count: "2",
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
        count: "3",
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
    count: "0",
    barcode: "00000",
    charger: "정한호"
}

const EquipMain = (props) => {

    /* Router */

    /* State */
    const { AddIcon, KeyboardArrowDownIcon, FormatListNumberedRtlIcon } = props;
    const [ check, setCheck ] = useState(false);
    const [ test, setTest ] = useState( initial );
    const [ change, setChange ] = useState( tt );
    const [ checkClick, setCheckClick ] = useState(false);
    const [ updateClick, setUpdateClick ] = useState( false );

    /* Hooks */

    /* Functions */
    const handleOnClick = () => {

        setCheckClick( !checkClick );
    }

    const changeUpdateClick = () => {

        setUpdateClick( !updateClick );

        console.log( updateClick )
    }
    
    /* Render */
    return (
        <div className="equip-page-mainbox">

            { check ?
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

                    <div className="equip-page-itembox-left-listbox" onClick={handleOnClick}>
                        <div className="equip-page-itembox-left-list">
                            <img
                                className="equip-page-itembox-left-img"
                                src={change.img}
                            />
                            <div className="equip-page-itembox-left-info">
                                <p className="equip-page-itembox-left-info-title">
                                    {change.title}
                                </p>
                                <p className="equip-page-itembox-left-info-property">
                                    {change.price}원 / {change.team} / {change.category}
                                </p>
                            </div>
                            <div className="equip-page-itembox-left-countbox">
                                <p>
                                    {change.count}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                { checkClick &&
                    <div className="equip-page-itembox-right">
                        <div className="equip-page-itembox-zeroitem">
                            <p className="equip-page-itembox-zeroitem-p">
                                왼쪽목록에서 제품을 선택하면 자세히 볼 수 있습니다.
                            </p>
                        </div>
                    </div>

                    

                    
                }

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
                                        복제
                                    </p>
                                    <p className="centerflex equip-page-itembox-clickitembox-button">
                                        삭제
                                    </p>
                                </div>
                            </div>
                            <div className="equip-page-itembox-clickitembox-infobox">
                                <img
                                    class="centerflex equip-page-itembox-clickitembox-infobox-img"
                                    src={change.img}
                                />
                                <div>
                                    <div className="equip-page-itembox-clickitembox-infobox-infobox line">
                                        <p className="equip-page-itembox-clickitembox-infobox-infobox-title">
                                            제품명
                                        </p>
                                        <p className="equip-page-itembox-clickitembox-infobox-infobox-content">
                                            {change.title}
                                        </p>
                                    </div>

                                    <div className="equip-page-itembox-clickitembox-infobox-infobox">
                                        <p className="equip-page-itembox-clickitembox-infobox-infobox-title">
                                            바코드
                                        </p>
                                        <p className="equip-page-itembox-clickitembox-infobox-infobox-content">
                                            {change.barcode}
                                        </p>
                                    </div>

                                    <div className="equip-page-itembox-clickitembox-infobox-infobox">
                                        <p className="equip-page-itembox-clickitembox-infobox-infobox-title">
                                            가격
                                        </p>
                                        <p className="equip-page-itembox-clickitembox-infobox-infobox-content">
                                            {change.price}
                                        </p>

                                    </div>

                                    <div className="equip-page-itembox-clickitembox-infobox-infobox">
                                        <p className="equip-page-itembox-clickitembox-infobox-infobox-title">
                                            팀
                                        </p>
                                        <p className="equip-page-itembox-clickitembox-infobox-infobox-content">
                                            {change.team}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="equip-page-itembox-clickitembox-changebox line">
                                <div className="equip-page-itembox-clickitembox-changebox-infobox">
                                    <p className="equip-page-itembox-clickitembox-infobox-infobox-title">
                                        수량
                                    </p>
                                    <p className="equip-page-itembox-clickitembox-infobox-infobox-content">
                                        {change.count}
                                    </p>
                                </div>

                                <div className="equip-page-itembox-clickitembox-changebox-buttonbox">
                                    <p className="equip-page-itembox-clickitembox-changebox-button leftbutton">
                                        입고
                                    </p>
                                    <p className="equip-page-itembox-clickitembox-changebox-button leftbutton">
                                        출고
                                    </p>
                                    <p
                                        className="equip-page-itembox-clickitembox-changebox-button"
                                        onClick={changeUpdateClick}
                                    >
                                        조정
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
            }
        </div>
    );
}

export default EquipMain;