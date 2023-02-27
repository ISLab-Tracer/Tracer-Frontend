import React, { useState } from 'react';
import LoginPresenter from './LoginPresenter';
import { useNavigate } from 'react-router-dom';
import { RegEmail } from '../../../Utils';

const LoginContainer = () => {
  /* Router */
  const navigate = useNavigate();

  /* State */
  const initialState = {
    user_email: 'simon320@naver.com',
  };
  // ** 변수명 알아볼수있게 변경
  const [userInfo, setUserInfo] = useState(initialState);
  const [emailCheck, setEmailCheck] = useState(false);

  /* Hooks */

  /* Functions */
  const handleOnClick = () => {
    console.log('MOVE');
    navigate('/');
    return true;
  };

  // css 말고 class 변경 방법도 있음
  const handleKeyDown = (e) => {
    // if( !check && e.keyCode === 13 ) {
    //   e.preventDefault();
    // }
  };

  const handleLoginAction = async (e) => {
    // 세션 처리
    console.log(e.target.value);
    // 로그인 처리
    // 지금은 이렇게 두고 나중에 user DB정보에 없는 유저가 나오면 error 문구에 등록되지 않은 사용자라고 알려주자
    // 어차피 이메일양식 체크만 되면 버튼 활성화/비활성화가 되니깐 따로 공백체크는 안해도 될거 같아
    navigate('/');
  };

  const handleUserInfo = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    // 한호야 우선 지금 유저정보에 이메일만 다루고 있어서 바로 이렇게 유효성 검사 할게
    // 유저정보에 항목 추가되면 이게 이메일일 경우에만 사용해야해
    const checkEmail = RegEmail(e.target.value);
    console.log(e.target.value);
    if (checkEmail) {
      console.log(checkEmail);
      setEmailCheck(true);
    } else {
      setEmailCheck(false);
    }
  };

  /* Render */
  return (
    <LoginPresenter
      handleLoginAction={handleLoginAction}
      handleUserInfo={handleUserInfo}
      handleOnClick={handleOnClick}
      handleKeyDown={handleKeyDown}
      userInfo={userInfo}
      emailCheck={emailCheck}
    />
  );
};

export default LoginContainer;
