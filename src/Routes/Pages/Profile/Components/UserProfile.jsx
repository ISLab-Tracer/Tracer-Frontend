import React, { useState, useRef } from 'react';
import Properties from './Properties';
import { ImgError } from 'Utils';
import { i_team, i_rank } from './Initial';

//import ExcelParsing from 'Utils/ExcelParsing';

const UserProfile = ({ userinfo }) => {
  /* Router */

  /* State */

  // eslint-disable-next-line
  const init = {
    user_usage: userinfo.user_usage,
    user_tel: userinfo.user_tel,
    user_rank: userinfo.user_rank,
    user_password: userinfo.user_password,
    user_nm: userinfo.user_nm,
    user_id: userinfo.user_id,
    user_email: userinfo.user_email,
    user_divide: userinfo.user_divide,
    team_id: userinfo.user_id,
    team: {
      team_desc: userinfo.team.team_desc,
      team_id: userinfo.team.team_id,
      team_nm: userinfo.team.team_nm,
    },
  };

  // 첫 로딩 시 적용되게 해야 함
  const [userInfo, setUserInfo] = useState('');

  // useEffect(() => {
  //   setUserInfo(init);

  //   console.log('UserInfo1');
  //   console.log(userInfo);
  //   return;
  // }, []);

  const imgRef = useRef();

  const [imgSrc, setImgSrc] = useState('');

  const [userTeam, setUserTeam] = useState(userInfo.team_nm);
  const [userRank, setUserRank] = useState(userInfo.user_rank);

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

  // 수정 중
  // const handleState = (e) => {
  //   const e_title = e.target.settitle;
  //   const e_value = e.target.value;

  //   // setUserInfo((prevState) => ({
  //   //   ...prevState,
  //   //   e_title: e_value,
  //   // }));
  // };

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
              <Properties.Input
                fieldTitle="이름"
                name="이름"
                value={userInfo.user_nm}
                settitle="user_nm"
                // setvalue={setUserInfo}
                // onChange={handleState}
              />
              <Properties.Input
                fieldTitle="아이디"
                name="아이디"
                value={userInfo.user_id}
                settitle="user_id"
                setvalue={setUserInfo}
              />
              <Properties.Select
                fieldTitle="팀"
                name="팀"
                render={i_team}
                value={userTeam}
                settitle="team.team_nm"
                setValue={setUserTeam}
              />
              <Properties.Input
                fieldTitle="이메일"
                name="이메일"
                value={userInfo.user_email}
                settitle="user_email"
                setvalue={setUserInfo}
              />
              <Properties.Select
                fieldTitle="과정"
                name="과정"
                render={i_rank}
                value={userRank}
                settitle="user_rank"
                setValue={setUserRank}
              />
              <Properties.Input
                fieldTitle="전화번호"
                name="전화번호"
                // value={userInfo.user_tel}
                settitle="user_tel"
                setvalue={setUserInfo}
              />
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
            <Properties.Text
              fieldTitle="계정 생성일"
              value={userinfo.created_at}
            />
            <Properties.Text
              fieldTitle="마지막 변경일"
              value={userinfo.modified_at}
            />
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
