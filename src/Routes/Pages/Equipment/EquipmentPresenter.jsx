import React, { useState } from 'react';
import '../../../Css/equipment.css';
import ViewListIcon from '@mui/icons-material/ViewList';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';

import { EquipHeader, EquipSearch, Equip } from './Components';

const EquipmentPresenter = (props) => {
  /* Router */

  /* State */

  const { test, zeroItem, listClick, itemid, handleOnClick, editOn } = props;

  const [search, setSearch] = useState('');
  const [emptycheck, setEmptycheck] = useState(false);

  /* Hooks */

  /* Functions */

  /* Render */
  return (
    <div className="main-content-container">
      <EquipHeader
        ViewListIcon={ViewListIcon}
        AddIcon={AddIcon}
        KeyboardArrowDownIcon={KeyboardArrowDownIcon}
        test={test}
      />

      <EquipSearch
        test={test}
        setSearch={setSearch}
        emptycheck={emptycheck}
        setEmptycheck={setEmptycheck}
      />

      {/* 메인 */}
      <div className="equip-page-mainbox">
        {zeroItem ? (
          /* 제품개수가 0일 경우 */
          <div className="equip-page-zeroitembox">
            <p className="equip-page-zeroitembox-p">
              등록된 제품이 없습니다. 제품을 추가해주세요.
            </p>
            <div className="equip-page-zeroitembox-button">
              <AddIcon />
              <p>제품추가</p>
            </div>
          </div>
        ) : (
          // 제품개수가 0이 아닐 경우
          <div className="equip-page-itembox">
            <div className="equip-page-itembox-left">
              <div className="equip-page-itembox-left-titlebox">
                <div className="equip-page-itembox-left-titleall">
                  <p className="equip-page-itembox-left-titleall-first">
                    전체보기
                  </p>
                  <p className="equip-page-itembox-left-titleall-second">
                    s <KeyboardArrowDownIcon />
                  </p>
                </div>
                <div className="equip-page-itembox-left-sortbox">
                  <FormatListNumberedRtlIcon />
                </div>
              </div>

              {emptycheck
                ? // 재고없는항목표시 체크
                  // eslint-disable-next-line
                  test.map((item) => {
                    if (item.count !== 0) {
                      if (item.title.indexOf(search) !== -1) {
                        // 포함되어있는 경우 출력

                        return (
                          <div
                            className="equip-page-itembox-left-listbox"
                            id={item.id}
                            name={item.id}
                            onClick={handleOnClick}
                          >
                            <Equip.List
                              img={item.img}
                              title={item.title}
                              price={item.price}
                              team={item.team}
                              category={item.category}
                              count={item.count}
                              charger={item.charger}
                            />
                          </div>
                        );
                      } else if (search.search === '') {
                        // 검색 입력 없을 시( 빈칸 )

                        return (
                          <div
                            className="equip-page-itembox-left-listbox"
                            id={item.id}
                            name={item.id}
                            onClick={handleOnClick}
                          >
                            <Equip.List
                              img={item.img}
                              title={item.title}
                              price={item.price}
                              team={item.team}
                              category={item.category}
                              count={item.count}
                              charger={item.charger}
                            />
                          </div>
                        );
                      }
                    }
                  })
                : // 재고없는항목표시 체크 X
                  // eslint-disable-next-line
                  test.map((item) => {
                    if (item.title.indexOf(search) !== -1) {
                      // 포함되어있는 경우 출력

                      return (
                        <div
                          className="equip-page-itembox-left-listbox"
                          id={item.id}
                          name={item.id}
                          onClick={handleOnClick}
                        >
                          <Equip.List
                            img={item.img}
                            title={item.title}
                            price={item.price}
                            team={item.team}
                            category={item.category}
                            count={item.count}
                            charger={item.charger}
                          />
                        </div>
                      );
                    } else if (search.search === '') {
                      // 검색 입력 없을 시( 빈칸 )

                      return (
                        <div
                          className="equip-page-itembox-left-listbox"
                          id={item.id}
                          name={item.id}
                          onClick={handleOnClick}
                        >
                          <Equip.List
                            img={item.img}
                            title={item.title}
                            price={item.price}
                            team={item.team}
                            category={item.category}
                            count={item.count}
                            charger={item.charger}
                          />
                        </div>
                      );
                    }
                  })}
            </div>

            {/* ****** 페이지 디자인 개편이 시급 ****** */}

            {!listClick ? (
              // 목록 클릭 안했을 경우
              <div className="equip-page-itembox-right">
                <div className="equip-page-itembox-zeroitem">
                  <p className="equip-page-itembox-zeroitem-p">
                    왼쪽목록에서 제품을 선택하면 자세히 볼 수 있습니다.
                  </p>
                </div>
              </div>
            ) : (
              // 목록 클릭 했을 경우
              // eslint-disable-next-line
              test.map((item) => {
                if (item.id === Number(itemid)) {
                  // == 박으면 워닝 뜸
                  // item.id => Number
                  // itemid => String
                  // 이렇게 하는게 맞는건지 ??

                  return (
                    <div className="equip-page-itembox-right">
                      <div className="equip-page-itembox-clickitembox">
                        <div className="equip-page-itembox-clickitembox-titlebox">
                          <p className="equip-page-itembox-clickitembox-title">
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
                          <div className="equip-page-itembox-clickitembox-infobox-imgbox">
                            <img
                              className="centerflex equip-page-itembox-clickitembox-infobox-img"
                              src={item.img}
                              alt="img"
                            />
                          </div>
                          <Equip.Text
                            title="제품명"
                            value={item.title}
                            style={{
                              paddingTop: '2%',
                              borderTop: '1px solid #cccdd4',
                            }}
                          />

                          <Equip.Text title="바코드" value={item.barcode} />

                          <Equip.Text title="가격" value={item.price} />

                          <Equip.Text title="소유자" value={item.charger} />

                          <Equip.Text title="팀" value={item.team} />
                        </div>

                        <div className="equip-page-itembox-clickitembox-changebox line">
                          <Equip.Text title="수량" value={item.count} />
                        </div>

                        {/* IF 종료 */}
                      </div>
                    </div>

                    // <div className="equip-page-itembox-right">
                    //     <div className="equip-page-itembox-clickitembox">
                    //         <div className="equip-page-itembox-clickitembox-titlebox">
                    //             <p  className="equip-page-itembox-clickitembox-title">
                    //                 제품 정보
                    //             </p>
                    //             <div className="equip-page-itembox-clickitembox-buttonbox">
                    //                 <p className="centerflex equip-page-itembox-clickitembox-button">
                    //                     인수
                    //                 </p>
                    //                 <p
                    //                     className="centerflex equip-page-itembox-clickitembox-button"
                    //                     onClick={editOn}
                    //                 >
                    //                     수정
                    //                 </p>
                    //                 <p className="centerflex equip-page-itembox-clickitembox-button">
                    //                     삭제
                    //                 </p>
                    //             </div>
                    //         </div>

                    //         <EquipCreate />

                    //     </div>
                    // </div>
                  );
                }
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EquipmentPresenter;
