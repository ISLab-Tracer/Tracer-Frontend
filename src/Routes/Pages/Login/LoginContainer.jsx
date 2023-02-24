import React, { useState } from "react";
import LoginPresenter from "./LoginPresenter";
import { useNavigate } from "react-router-dom";


const LoginContainer = () => {

  /* Router */
  const navigate = useNavigate();
  
  /* State */
  const initialState = {
    user_email: "",
  }
  // ** 변수명 알아볼수있게 변경
  const [ userInfo, setUserInfo ] = useState(initialState);
  const [ input, setInput ] = useState("");
  const [ check, setCheck ] = useState(false);
  

  /* Hooks */
  
  
  /* Functions */

  // ** 깔끔하게 바꿀 예정
  const handleOnChange = e => {

    // useRef()
    const inputemail = document.getElementById( "input" );
    const errorment = document.getElementById( "errorment" );
    const inputsubmit = document.getElementById( "submit" );

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

    // if( !check && e.keyCode === 13 ) {

    //   e.preventDefault();
    // }
  }

  const handleOnSubmit = e => {

    // 세션 처리

    // 로그인 처리
    if( input === initialState.email ) {
      
      navigate( "/" );
    }

  }


  
  const handleUserInfo = e => {

    setUserInfo( { ...userInfo, [e.target.name] : e.target.value } )

    // 비동기 처리
    console.log( userInfo );
  }


  /* Render */
  return (
    <LoginPresenter 
            handleOnSubmit={ handleOnSubmit }
            handleUserInfo={ handleUserInfo }
            handleOnClick={ handleOnClick }
            handleKeyDown={ handleKeyDown }
            userInfo= {userInfo}
    />
  );
  
};

export default LoginContainer;
