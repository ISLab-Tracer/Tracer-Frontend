import React from "react";
import LoginPresenter from "./LoginPresenter";
import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
  /* Router */
  const navigate = useNavigate();
  
  /* State */
  // 아마 변경 해야 됨
  // const initialState = {
  //   login_id: "",
  //   login_pw: "",
  // };

  //const [ userInfo, setUserInfo ] = useState( initialState );

  /* Hooks */
  // *************** 지금 작성 불가능 ***************
  // useEffect( () => {

  //   const session = getCookie("");
  //   if( session ) {
  //     navigate("/");
  //   } else {
  //     navigate("/login");
  //   }
  // }, [] );
  
  /* Functions */
  // const handleUserInfo = ( e ) => {

  //   // UserInfo State 변경 처리
  // }

  const handleOnClick = () => {

    console.log( "MOVE" );
    navigate("/");
    return true;
  }

  const handleKeyDown = e => {

    const inputemail = document.getElementById( "input" );
    const errorment = document.getElementById( "errorment" );
    const inputsubmit = document.getElementById( "submit" );

    // eslint-disable-next-line
    const emailcheck = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    // 이메일 유효성 검사
    if( e.target.value !== '' && emailcheck.test( e.target.value ) === false ) {

      inputemail.style.border = "2px solid red";
      inputemail.style.boxShadow = "none";
      errorment.style.display = "block";
      inputsubmit.style.cursor = "not-allowed";
      inputsubmit.style.backgroundColor = "#f1f1f4";
      inputsubmit.style.color = "#9c9da3";

      if( e.keyCode === 13 || e.keyCode === "Enter" ){

        e.preventDefault();
      }

    } else {
      
      inputemail.style.border = "1px solid #cbccd3";
      errorment.style.display = "none";
      inputsubmit.style.cursor = "auto";
      inputsubmit.style.backgroundColor = "#4f67ff";
      inputsubmit.style.color = "#fff";

      // **이메일 처리 후 메인 이동 처리 해야함
    }

  }

  const handleOnSubmit = () => {

    // 로그인 처리
    // 세션 처리
    // 메인 이동
    console.log( "Click Check" );
  }

  /* Render */
  return (
    <LoginPresenter 
            handleOnSubmit={ handleOnSubmit }
            handleOnClick={ handleOnClick }
            handleKeyDown={ handleKeyDown }
    />
  );
  
};

export default LoginContainer;
