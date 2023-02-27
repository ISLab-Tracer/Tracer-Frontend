import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const SignUpPresenter = (props) => {
  /* Router */

  /* State */
  const { handleOnChange, handleOnClick, emailCheck, handleOnSubmit } = props;

  /* Hooks */
  /* Functions */
  /* Render */
  return (
    <div>
      <div className="login-page-backbox">
        <ArrowBackIcon sx={{ color: '#8f91a0' }} onClick={handleOnClick} />
      </div>
      <div className="login-page-commentbox">
        <h1 className="login-page-title">이메일로 회원가입</h1>
      </div>
      <form className="login-page-form">
        <label className="register-page-label">이메일 주소</label>
        <div className="flex">
          <div className="flex register-page-inputbox">
            <input
              id="input"
              type="email"
              className="login-page-email"
              placeholder="이메일 주소를 입력해주세요."
              onChange={handleOnChange}
            />
            <p id="errorment" className="login-page-errorment" style={{display:'none'}}>
              올바른 형태의 이메일 주소를 입력해주세요.
            </p>
          </div>
        </div>
        <div className="flex">
          <button
            id="submit"
            className={
              emailCheck ? 'login-page-submit' : 'login-page-submit-failed'
            }
            onClick = { handleOnSubmit }
          >
            보내기
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPresenter;
