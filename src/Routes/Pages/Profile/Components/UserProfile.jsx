import React, { useState, useRef } from 'react';
import Properties from './Properties';
import { ImgError } from 'Utils';
import { i_team, i_rank } from './Initial';

//import ExcelParsing from 'Utils/ExcelParsing';

const UserProfile = () => {
  /* Router */

  /* State */
  const imgRef = useRef();

  const [imgSrc, setImgSrc] = useState('');

  const [userTeam, setUserTeam] = useState(i_team[0]);
  const [userRank, setUserRank] = useState(i_rank[1]);

  // Excel Parsing을 위한 State
  // // Excel Rows
  // const [excel, setExcel] = useState();
  // // Excel Header
  // const [excelfield, setExcelfield] = useState();

  /* Functions */
  const ClickUpload = () => {
    imgRef.current.click();
  };

  const ChangeImg = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgSrc(reader.result);
    };
  };

  // 엑셀 파싱 함수( 최적화 가능할 것 같음 )
  // const SelectExcel = (e) => {
  //   ExcelParsing(setExcelfield, setExcel, e.target.files[0]);
  // };

  /* Hooks */
  /* Render */
  return (
    <div className="main-content-container">
      <div className="profile-page-main">
        <Properties.Header fieldTitle="유저 설정" name="결제 및 설정" />
        {/* 유저 정보 */}
        <Properties.Box fieldTitle="유저 정보" style={{ marginTop: '0' }}>
          <div className="profile-page-main-mainbox flexrow">
            <div className="profile-page-main-mainbox-leftbox">
              <Properties.Input fieldTitle="이름" name="이름" />
              <Properties.Input fieldTitle="아이디" name="아이디" />
              <Properties.Select
                fieldTitle="팀"
                name="팀"
                render={i_team}
                value={userTeam}
                setValue={setUserTeam}
              />
              <Properties.Input fieldTitle="이메일" name="이메일" />
              <Properties.Select
                fieldTitle="과정"
                name="과정"
                render={i_rank}
                value={userRank}
                setValue={setUserRank}
              />
              <Properties.Input fieldTitle="전화번호" name="전화번호" />
            </div>
            <div
              className="profile-page-main-mainbox-rightbox"
              onClick={ClickUpload}
            >
              <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                ref={imgRef}
                onChange={ChangeImg}
              />
              <img
                src={imgSrc}
                alt="img"
                className="profile-page-main-mainbox-rightbox-img"
                onError={ImgError}
              />
            </div>
          </div>
          <Properties.Button fieldTitle="저장" />
        </Properties.Box>

        <Properties.Box fieldTitle="계정 정보">
          <div className="profile-page-main-mainbox flexcolumn">
            <Properties.Text fieldTitle="계정 생성일" name="22.03.02" />
            <Properties.Text fieldTitle="마지막 변경일" name="22.03.03" />
          </div>
        </Properties.Box>

        <Properties.Box fieldTitle="데이터 삭제">
          <Properties.Delete
            fieldTitle="팀에서 나갈 수 있으며, 관리자의 초대로 다시 합류할 수 있습니다."
            name="팀 나가기"
          />
          <Properties.Delete
            fieldTitle="탈퇴 후에는 계정을 복구할 수 없으니 신중하게 선택해 주세요."
            name="회원 탈퇴"
            style={{ marginTop: '20px' }}
          />
        </Properties.Box>

        {/* 이메일 알림 */}
      </div>
    </div>
  );
};

export default UserProfile;
