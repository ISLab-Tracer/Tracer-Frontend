import React, { useCallback, useEffect, useState } from 'react';
import Properties from './Components/Properties';
import './profile.css';
const ProfilePresenter = ({ teams, getUserInfo }) => {
  /* Router */
  /* State */
  const initialState = {
    user_nm: '',
    user_email: '',
    team_id: '',
    team: {
      team_id: '',
      team_nm: '',
    },
  };
  const [userInfo, setUserInfo] = useState(initialState);

  /* Functions */
  const handleGetUserInfo = useCallback(async () => {
    if (userInfo.user_id) {
      return;
    }
    const result = await getUserInfo();
    if (result) {
      setUserInfo(result);
      return true;
    }
    return false;
  }, [userInfo, getUserInfo]);

  /* Hooks */
  useEffect(() => {
    handleGetUserInfo();
  }, [handleGetUserInfo]);

  /* Render */

  return (
    <div className="main-content-container">
      <Properties title="회원정보">
        <Properties.Input
          feildTitle="이름"
          name="이름"
          property="user_nm"
          value={userInfo.user_nm}
          style={{ width: '50%' }}
          disabled={true}
          variant="filled"
        />
        <Properties.Input
          feildTitle="이메일"
          name="이메일"
          property="user_email"
          value={userInfo.user_email}
          style={{ width: '50%' }}
          disabled={true}
          variant="filled"
        />
      </Properties>

      <Properties title="팀정보">
        <Properties.Input
          feildTitle="팀명"
          name="팀명"
          property="team_id"
          value={userInfo.team.team_nm}
          style={{ width: '50%' }}
          variant="filled"
          disabled
        />
      </Properties>
    </div>
  );
};

export default ProfilePresenter;
