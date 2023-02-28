import React, { useState } from 'react';
import Properties from './Components/Properties';
import './profile.css';
const ProfilePresenter = () => {
  const initialState = {
    user_name: '오시몬',
    user_email: 'simon@islab.re.kr',
    user_phone: '010-2914-9302',
    user_team: 'Blockchain',
  };
  const [userInfo, setUserInfo] = useState(initialState);
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
          style={{width: '50%'}}
        >
        </Properties.Select>
      </Properties>
    </div>
  );
};

export default ProfilePresenter;
