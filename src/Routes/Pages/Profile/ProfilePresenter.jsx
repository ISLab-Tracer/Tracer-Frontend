import React, { useCallback, useEffect, useState } from 'react';
import Properties from './Components/Properties';
import './profile.css';
const ProfilePresenter = ({ getUserInfo }) => {
  /* Router */
  /* State */
  const initialState = {
    user_nm: '',
  };
  const [userInfo, setUserInfo] = useState(initialState);

  /* Functions */
  const handleUserInfo = useCallback(async () => {
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
    handleUserInfo();
  }, [handleUserInfo]);

  /* Render */

  return (
    <div className="main-content-container">
      <Properties title="회원정보">
        <Properties.Input
          feildTitle="이름"
          name="이름"
          property="user_name"
          value={userInfo}
          setValue={setUserInfo}
          style={{ width: '50%' }}
          disabled={true}
          variant="filled"
        />
        <Properties.Input
          feildTitle="이메일"
          name="이메일"
          property="user_email"
          value={userInfo}
          setValue={setUserInfo}
          style={{ width: '50%' }}
          disabled={true}
          variant="filled"
        />
        <Properties.Input
          feildTitle="휴대폰"
          name="휴대폰"
          property="user_phone"
          value={userInfo}
          setValue={setUserInfo}
          style={{ width: '50%' }}
        />
      </Properties>

      <Properties title="팀정보">
        <Properties.Select
          feildTitle="팀명"
          name="팀명"
          property="user_team"
          value={userInfo}
          setValue={setUserInfo}
          style={{ width: '50%' }}
        ></Properties.Select>
      </Properties>
    </div>
  );
};

export default ProfilePresenter;
