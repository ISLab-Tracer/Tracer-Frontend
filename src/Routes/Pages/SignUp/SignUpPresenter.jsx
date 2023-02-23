import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const SignUpPresenter = ( props ) => {
  /* Router */
  
  /* State */
  const { handleOnSubmit, handleOnChange, handleOnClick, handleKeyDown } = props;

  /* Hooks */
  /* Functions */
  /* Render */
  return (
    <div class="">
      <div class="login-page-backbox">
        <ArrowBackIcon 
          sx={{ color: "#8f91a0" }}
          onClick = { handleOnClick }
        />
      </div>
      <div class="login-page-commentbox">
        <h1 class="login-page-title">이메일로 회원가입</h1>
      </div>
      <form class="login-page-form">
        <label class="register-page-label">이메일 주소</label>
        <div class="flex">
          <div class="flex register-page-inputbox">
            <input
              id="input"
              type="email"
              class="login-page-email"
              placeholder="이메일 주소를 입력해주세요."
              onChange={ handleOnChange }
              onKeyDown={ handleKeyDown }
            />
            <p id="errorment" class="login-page-errorment">올바른 형태의 이메일 주소를 입력해주세요.</p>
          </div>
        </div>
        <div class="flex">
          <button id="submit" class="login-page-submit-failed" onClick={ handleOnSubmit }>보내기</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPresenter;
