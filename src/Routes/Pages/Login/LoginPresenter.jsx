import React from "react";

const LoginPresenter = (props) => {
  /* Router */
  /* State */
  const { handleOnSubmit } = props;
  /* Hooks */
  /* Functions */
  /* Render */

  return (
    <div class="login-page-container">
      <div class="login-page-box">
        <div class="login-page-">
          <div class="login-page-backbox">
            <button>back</button>
          </div>
          <div class="login-page-commentbox">
            <label class="login-page-title">이메일로 로그인</label>
            <label class="login-page-ment">서비스를 가입하신 이메일 주소로 로그인하세요.</label>
            <label class="login-page-ment">이메일로 로그인 코드를 보내드립니다.</label>
          </div>
          <form class="login-page-form">
            <label class="login-page-label">이메일 주소</label>
            <div class="flex">
              <div class="flex login-page-inputbox">
                <input
                  type="email"
                  class="login-page-email"
                  placeholder="Enter the Email"
                />
              </div>
            </div>
            <div class="flex">
              <button class="login-page-submit" onClick={handleOnSubmit}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPresenter;
