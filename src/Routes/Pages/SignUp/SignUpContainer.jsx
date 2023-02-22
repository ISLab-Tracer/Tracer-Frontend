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

    // 입력창에서 Enter 누르면 강제 submit 처리 해제
    // ** 입력값 유효성 검증 추가해야함
    if( e.keyCode === 13 || e.keyCode === "Enter" ) {
      e.preventDefault();
    } else {
      console.log( e.keyCode );
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
