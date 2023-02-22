import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const LoginPresenter = (props) => {
  /* Router */
  /* State */
  const { handleOnSubmit, handleOnClick, handleKeyDown } = props;
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
        <h1 class="login-page-title">이메일로 로그인</h1>
        <p class="login-page-ment">서비스를 가입하신 이메일 주소로 로그인하세요.</p>
        <p class="login-page-ment">이메일로 로그인 코드를 보내드립니다.</p>
      </div>
      <form class="login-page-form">
        <label class="login-page-label">이메일 주소</label>
        <div class="flex">
          <div class="flex login-page-inputbox">
            <input
              id="input"
              type="email"
              class="login-page-email"
              placeholder="이메일 주소를 입력해주세요."
              onKeyDown={ handleKeyDown }
            />
            <p id="errorment" class="login-page-errorment">올바른 형태의 이메일 주소를 입력해주세요.</p>
            <div class="loing-page-error">
              <p></p>
            </div>
          </div>
        </div>
        <div class="flex">
          <button id="submit" class="login-page-submit" onClick={handleOnSubmit}>보내기</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPresenter;
