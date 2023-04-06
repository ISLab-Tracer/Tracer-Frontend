import React, { useEffect, useState } from 'react';
import { EquipHeader, EquipSearch, Equip } from './Components';
import '../../../Css/equipment.css';
import {
  Add,
  FormatListNumbered,
  KeyboardArrowDown,
} from '@mui/icons-material';
import { BUCKET_URL } from 'Utils';
import { useNavigate } from 'react-router-dom';
import { useCommonData } from 'Hooks/CommonDataManager';

const EmptyEquipList = () => {
  return (
    <div className="equip-page-itembox-right">
      <div className="equip-page-itembox-zeroitem">
        <p className="equip-page-itembox-zeroitem-p">
          왼쪽목록에서 제품을 선택하면 자세히 볼 수 있습니다.
        </p>
      </div>
    </div>
  );
};

const EquipmentPresenter = ({
  equipList,
  zeroItem,
  itemid,
  handleOnClick,
  editOn,
}) => {
  /* Router */
  const navigate = useNavigate();
  /* State */
  const { teamList } = useCommonData();
  const [keyword, setKeyword] = useState('');
  const [filterList, setFilterList] = useState(equipList);
  /* Functions */
  const handleModify = (id) => {
    const path = `/equipment/modify/${id}`;
    navigate(path);
  };
  /* Hooks */
  useEffect(() => {
    // console.log(equipList);
    if (keyword === '') {
      setFilterList(equipList);
      return;
    }

    const temp = equipList.filter((item) => {
      const {
        team: { team_nm },
        equipment_nm,
        user: { user_nm },
        category: { category_nm },
        project: { project_title },
      } = item;
      const teamCond = team_nm.includes(keyword);
      const userCond = user_nm.includes(keyword);
      const equipCond = equipment_nm.includes(keyword);
      const categoryCond = category_nm.includes(keyword);
      const projectCond = project_title.includes(keyword);
      return teamCond || userCond || equipCond || categoryCond || projectCond;
    });
    setFilterList(temp);
  }, [keyword, equipList]);

  /* Render */
  const equipRender = filterList.map((item) => {
    const {
      equipment_id,
      equipment_nm,
      equipment_price,
      equipment_thumbnail,
      equipment_qty,
      category: { category_nm },
      project: { project_title },
      charge,
    } = item;
    const [charger] = charge.filter((item) => item.charge_status);
    const {
      user: { user_nm, team_id },
    } = charger;
    const [{ team_nm }] = teamList.filter((item) => item.team_id === team_id);
    const thumbnail = `${BUCKET_URL}${equipment_thumbnail}`;
    return (
      <Equip.List
        key={equipment_id}
        id={equipment_id}
        img={thumbnail}
        title={equipment_nm}
        price={equipment_price}
        team={team_nm}
        project={project_title}
        category={category_nm}
        count={equipment_qty}
        charger={user_nm}
        onClick={handleOnClick}
      />
    );
  });

  const detailItem =
    itemid && equipList.filter((i) => i.equipment_id === itemid)[0];

  const [charger] = detailItem
    ? detailItem.charge.filter((item) => item.charge_status)
    : [false];

  const [team] = charger
    ? teamList.filter((item) => item.team_id === charger.user.team_id)
    : [false];

  return (
    <div className="main-content-container">
      <EquipHeader />

      <EquipSearch keyword={keyword} setKeyword={setKeyword} />

      {/* 메인 */}
      <div className="equip-page-mainbox">
        {zeroItem /* 제품개수가 0일 경우 */ && (
          <div className="equip-page-zeroitembox">
            <p className="equip-page-zeroitembox-p">
              등록된 제품이 없습니다. 제품을 추가해주세요.
            </p>
            <div className="equip-page-zeroitembox-button">
              <Add />
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
                  <KeyboardArrowDown />
                </p>
              </div>
              <div className="equip-page-itembox-left-sortbox">
                <FormatListNumbered />
              </div>
            </div>
            <div className="equipment-list">{equipRender}</div>
          </div>

          {itemid ? (
            <Equip.Detail
              id={detailItem.equipment_id}
              title={detailItem.equipment_nm}
              price={detailItem.equipment_price}
              qty={detailItem.equipment_qty}
              buyer={detailItem.user.user_nm}
              charger={charger.user.user_nm}
              team={team.team_nm}
              project={detailItem.project.project_title}
              thumbnail={`${BUCKET_URL}${detailItem.equipment_thumbnail}`}
              editOn={handleModify}
              handeoverOn={console.log}
            />
          ) : (
            <EmptyEquipList />
          )}
        </div>
      </div>
    </div>
  );
};

export default EquipmentPresenter;
