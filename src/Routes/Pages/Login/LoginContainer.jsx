import React, { useCallback, useLayoutEffect, useState } from 'react';
import LoginPresenter from './LoginPresenter';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { RegEmail, setCookie } from '../../../Utils';
import { useLoading } from '../../../Utils/LoadingManager';
import { AuthAPI } from 'API';

const LoginContainer = () => {
  const { handleLoading, handleLoadingTimer } = useLoading();
  /* Router */
  const navigate = useNavigate();
  const { login_id } = useParams();

  /* State */
  const initialState = {
    user_email: '',
  };

  const [userInfo, setUserInfo] = useState(initialState);
  const [emailCheck, setEmailCheck] = useState(false);
  const [isSend, setIsSend] = useState(false);

  /* Functions */
  const handleUserInfo = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    // 한호야 우선 지금 유저정보에 이메일만 다루고 있어서 바로 이렇게 유효성 검사 할게
    // 유저정보에 항목 추가되면 이게 이메일일 경우에만 사용해야해
    const checkEmail = RegEmail(e.target.value);
    if (checkEmail) {
      setEmailCheck(true);
    } else {
      setEmailCheck(false);
    }
  };

  const handleSendMail = async () => {
    if (!emailCheck) {
      return;
    }
    handleLoading(true);
    const result = await AuthAPI.createSignin(userInfo);
    if (result) {
      handleLoading(false);
      setIsSend(
        <div>
          위의 주소로 메일을 전송하였습니다. <br />
          메일을 확인해주세요
        </div>
      );
      return true;
    }

    handleLoadingTimer(1500, () => {
      setIsSend(
        <div>
          존재하지 않는 이메일입니다. <br />
          <Link to="/register">회원가입</Link> 후에 이용해주세요.
        </div>
      );
    });
    return false;
  };

  const handleLoginAction = useCallback(async () => {
    if (!login_id) {
      // 추후 404 페이지로 이동
      navigate('/');
      return;
    }

    const postData = {
      login_id,
    };
    handleLoading(true);
    const result = await AuthAPI.requestSignin(postData);
    if (result) {
      handleLoadingTimer(1000, () => {
        const { access_token, ...user } = result;
        setCookie('ISLAB_TRACER', access_token);
        setCookie('TRACER_USER', JSON.stringify(user));
        navigate('/');
      });
      return false;
    }

    handleLoadingTimer(3000, () => {
      alert('로그인정보가 정확하지 않습니다.');
      navigate('/login');
    });
    return;

    // 세션 처리
    // 로그인 처리
    // 지금은 이렇게 두고 나중에 user DB정보에 없는 유저가 나오면 error 문구에 등록되지 않은 사용자라고 알려주자
    // 어차피 이메일양식 체크만 되면 버튼 활성화/비활성화가 되니깐 따로 공백체크는 안해도 될거 같아
    // handleLoadingTimer(3000, () => {
    //   navigate('/');
    // });
  }, [login_id, navigate, handleLoading, handleLoadingTimer]);

  /* Hooks */
  useLayoutEffect(() => {
    if (login_id) {
      handleLoginAction();
    }
  }, [login_id, handleLoginAction]);

  /* Render */
  return (
    <LoginPresenter
      isSend={isSend}
      userInfo={userInfo}
      emailCheck={emailCheck}
      handleLoginAction={handleLoginAction}
      handleUserInfo={handleUserInfo}
      handleLogin={handleSendMail}
    />
  );
};

export default LoginContainer;
