import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

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
            <ArrowBackIcon 
              sx={{ color: "#8f91a0" }}
            />
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
                {/* <input
                  type="email"
                  class="login-page-email"
                  placeholder="Enter the Email"
                /> */}
                <BootstrapInput id="bootstrap-input" placeholder="Enter your email"/>
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
