import React, { useState } from 'react';


const EquipMain = (props) => {

    /* Router */

    /* State */
    const { AddIcon, KeyboardArrowDownIcon, FormatListNumberedRtlIcon, Equip, test, search, emptycheck } = props;

    // 품목 개수가 0일 경우 == true
    const [ zeroItem ] = useState(false);

    // 전체 리스트에서 물품 클릭
    const [ listClick, setListClick ] = useState(false);

    const [ itemid, setItemid ] = useState( 0 );

    // 리스트( true ), 수정( false ) 모드
    // const [ mode, setMode ] = useState( true );


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

    // const editOff = () => {

    //     //setMode( true );
    // }

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

                    
                    { emptycheck ?
                        // eslint-disable-next-line
                        test.map( (item) => {

                            if( item.count !== 0 ) {
                                if( item.title.indexOf( search ) !== -1 ) {
                                    // 포함되어있는 경우 출력
    
                                    return (
                                        <div className="equip-page-itembox-left-listbox" id={item.id} name={item.id} onClick={handleOnClick}>
                                            <Equip.List
                                                img={ item.img }
                                                title={ item.title }
                                                price={ item.price }
                                                team={ item.team }
                                                category={ item.category } 
                                                count= { item.count }
                                            />
                                        </div>
                                    );
    
                                } else if ( search.serach === "" ) {
                                    // 검색 입력 없을 시( 빈칸 )
    
                                    return (
                                        <div className="equip-page-itembox-left-listbox" id={item.id} name={item.id} onClick={handleOnClick}>
                                            <Equip.List
                                                img={ item.img }
                                                title={ item.title }
                                                price={ item.price }
                                                team={ item.team }
                                                category={ item.category }
                                                count= { item.count }
                                            />
                                        </div>
                                    );
                                }
                            }

                        } )

                    :
                        // eslint-disable-next-line
                        test.map( (item) => {

                            if( item.title.indexOf( search ) !== -1 ) {
                                // 포함되어있는 경우 출력

                                return (
                                    <div className="equip-page-itembox-left-listbox" id={item.id} name={item.id} onClick={handleOnClick}>
                                        <Equip.List
                                            img={ item.img }
                                            title={ item.title }
                                            price={ item.price }
                                            team={ item.team }
                                            category={ item.category }
                                            count= { item.count }
                                        />
                                    </div>
                                );

                                
                            } else if ( search.serach === "" ) {
                                // 검색 입력 없을 시( 빈칸 )

                                return (
                                    <div className="equip-page-itembox-left-listbox" id={item.id} name={item.id} onClick={handleOnClick}>
                                        <Equip.List
                                            img={ item.img }
                                            title={ item.title }
                                            price={ item.price }
                                            team={ item.team }
                                            category={ item.category }
                                            count= { item.count }
                                        />
                                    </div>
                                );
                            }

                        } )
                    }
                    


                </div>

                {/* ****** 페이지 디자인 개편이 시급 ****** */}

                { !listClick ?
                // 목록 클릭 안했을 경우
                    <div className="equip-page-itembox-right">
                        <div className="equip-page-itembox-zeroitem">
                            <p className="equip-page-itembox-zeroitem-p">
                                왼쪽목록에서 제품을 선택하면 자세히 볼 수 있습니다.
                            </p>
                        </div>
                    </div>

                    :
                
                    // 목록 클릭 했을 경우
                    // eslint-disable-next-line
                    test.map( (item) => {


                        if( item.id === Number( itemid ) ) {
                            // item.id => Number
                            // itemid => String
                            // 이렇게 하는게 맞는건지 ??

                            return (
                                <div className="equip-page-itembox-right">
                                    <div className="equip-page-itembox-clickitembox">
                                        <div className="equip-page-itembox-clickitembox-titlebox">
                                            <p  className="equip-page-itembox-clickitembox-title">
                                                제품 정보
                                            </p>
                                            <div className="equip-page-itembox-clickitembox-buttonbox">
                                                <p className="centerflex equip-page-itembox-clickitembox-button">
                                                    인수
                                                </p>
                                                <p
                                                    className="centerflex equip-page-itembox-clickitembox-button"
                                                    onClick={editOn}
                                                >
                                                    수정
                                                </p>
                                                <p className="centerflex equip-page-itembox-clickitembox-button">
                                                    삭제
                                                </p>
                                            </div>
                                        </div>

                                        {/* 여기서 IF 써야됨 */}
                                        
                                        <div className="equip-page-itembox-clickitembox-infobox">
                                                <img
                                                    className="centerflex equip-page-itembox-clickitembox-infobox-img"
                                                    src={item.img}
                                                    alt="img"
                                                />
                                                <Equip.Text
                                                    title='제품명'
                                                    value={item.title}
                                                    style={{ 'paddingTop': '2%', 'borderTop': '1px solid #cccdd4' }}
                                                />

                                                <Equip.Text
                                                    title='바코드'
                                                    value={item.barcode}
                                                />

                                                <Equip.Text
                                                    title='가격'
                                                    value={item.price}
                                                />

                                                <Equip.Text
                                                    title='소유자'
                                                    value={item.charger}
                                                />

                                                <Equip.Text
                                                    title='팀'
                                                    value={item.team}
                                                />
                                            </div>

                                            <div className="equip-page-itembox-clickitembox-changebox line">
                                                <Equip.Text
                                                    title='수량'
                                                    value={item.count}
                                                />
                                            </div>
                                        

                                        {/* IF 종료 */}
                                    </div>
                                </div>
                            );
                        }
                    } )



                    
                }

                    

                    
            </div>
            }



            
        </div>
    );
}

export default EquipMain;