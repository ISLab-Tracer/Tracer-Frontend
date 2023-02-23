import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import SignUpPresenter from "./SignUpPresenter";

const SignUpContainer = () => {
  
  /* Router */
  const navigate = useNavigate();

  /* State */
  const [ input, setInput ] = useState("");
  const [ check, setCheck ] = useState(false);
  
  const initialState = {
    email: "admin@naver.com",
  }

  /* Hooks */
  
  
  /* Functions */
  // ** 깔끔하게 바꿀 예정
  const handleOnChange = e => {

    const inputemail = document.getElementById( "input" );
    const errorment = document.getElementById( "errorment" );
    const inputsubmit = document.getElementById( "submit" );

    setInput( e.target.value );

    // eslint-disable-next-line
    const emailcheck = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    // 이메일 유효성 검사
    if( e.target.value === '' ) {

      inputemail.className = "login-page-email"
      errorment.style.display = "none";
      inputsubmit.className = "login-page-submit-failed";
      
    } else {

      if( emailcheck.test( e.target.value ) === false ) {

        setCheck(false);

        inputemail.className = "login-page-email-failed"
        errorment.style.display = "block";
        inputsubmit.className = "login-page-submit-failed";
  
      } else {
    
        setCheck(true);

        inputemail.className = "login-page-email"
        errorment.style.display = "none";
        inputsubmit.className = "login-page-submit";
        
        // 자동으로 OnSubmit 해줌
      }
    }
  }

  const handleOnClick = () => {

    console.log( "MOVE" );
    navigate("/");
    return true;
  }

  // css 말고 class 변경 방법도 있음
  const handleKeyDown = e => {

    if( !check && e.keyCode === 13 ) {

      e.preventDefault();
    }
  }

  const handleOnSubmit = e => {

    // 세션 처리

    // 로그인 처리
    if( input === initialState.email ) {
      
      navigate( "/" );
    }

  }
  
  /* Render */
  return (
    <SignUpPresenter
    handleOnSubmit={ handleOnSubmit }
    handleOnChange={ handleOnChange }
    handleOnClick={ handleOnClick }
    handleKeyDown={ handleKeyDown }
    />
  );
};

export default SignUpContainer;
