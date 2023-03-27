import React from 'react';
import '../../../Css/equipment.css';
import ViewListIcon from '@mui/icons-material/ViewList';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';

import { EquipHeader, EquipSearch, Equip } from './Components';

const EquipmentPresenter = ({
  equipList,
  zeroItem,
  itemid,
  handleOnClick,
  editOn,
}) => {
  /* Router */

  /* State */

  /* Hooks */

  /* Functions */

  /* Render */
  const equipRender = equipList.map((item) => {
    const {
      equipment_id,
      equipment_nm,
      equipment_price,
      equipment_thumbnail,
      equipment_qty,
      team,
      category,
      user,
    } = item;
    const { team_nm } = team;
    const { category_nm } = category;
    const { user_nm } = user;
    return (
      <Equip.List
        key={equipment_id}
        id={equipment_id}
        img={equipment_thumbnail}
        title={equipment_nm}
        price={equipment_price}
        team={team_nm}
        category={category_nm}
        count={equipment_qty}
        charger={user_nm}
        onClick={handleOnClick}
      />
    );
  });

  const detailItem =
    itemid && equipList.filter((i) => i.equipment_id === itemid)[0];

  return (
    <div className="main-content-container">
      <EquipHeader
        ViewListIcon={ViewListIcon}
        AddIcon={AddIcon}
        KeyboardArrowDownIcon={KeyboardArrowDownIcon}
      />

      <EquipSearch
      // setSearch={setSearch}
      // emptycheck={emptycheck}
      // setEmptycheck={setEmptycheck}
      />

      {/* 메인 */}
      <div className="equip-page-mainbox">
        {zeroItem /* 제품개수가 0일 경우 */ && (
          <div className="equip-page-zeroitembox">
            <p className="equip-page-zeroitembox-p">
              등록된 제품이 없습니다. 제품을 추가해주세요.
            </p>
            <div className="equip-page-zeroitembox-button">
              <AddIcon />
              <p>제품추가</p>
            </div>
          </div>
        )}
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
            {equipRender}
          </div>

          {/* ****** 페이지 디자인 개편이 시급 ****** */}

          {itemid ? (
            <Equip.Detail
              id={detailItem.equipment_id}
              title={detailItem.equipment_nm}
              price={detailItem.equipment_price}
              qty={detailItem.equipment_qty}
              charger={detailItem.user.user_nm}
              team={detailItem.team.team_nm}
              thumbnail={detailItem.equipment_thumbnail}
              editOn={() => {}}
            />
          ) : (
            // 목록 클릭 안했을 경우
            <div className="equip-page-itembox-right">
              <div className="equip-page-itembox-zeroitem">
                <p className="equip-page-itembox-zeroitem-p">
                  왼쪽목록에서 제품을 선택하면 자세히 볼 수 있습니다.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EquipmentPresenter;
