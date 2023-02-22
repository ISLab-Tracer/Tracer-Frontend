import React from "react";
import { useNavigate } from "react-router-dom"
import SignUpPresenter from "./SignUpPresenter";

const SignUpContainer = () => {
  
  /* Router */
  const navigate = useNavigate();

  /* State */
  
  
  /* Hooks */
  
  
  /* Functions */
  const handleOnClick = () => {

    console.log( "MOVE" );
    navigate("/");
    return true;
  }

  const handleKeyDown = e => {

    // eslint-disable-next-line
    const emailcheck = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    // 이메일 유효성 검사
    if( emailcheck.test( e.target.value ) === false ) {

      // 이메일이 유효성 검사를 통과못하면 Enter가 먹지 않음
      if( e.keyCode === 13 || e.keyCode === "Enter" ) {
        
        e.preventDefault();
      }
    } else {

      // **이메일 메일 전송 처리추가해야함**
    }

  }
  
  /* Render */
  return (
    <SignUpPresenter
      handleOnClick = { handleOnClick }
      handleKeyDown = { handleKeyDown }
    />
  );
};

export default SignUpContainer;
