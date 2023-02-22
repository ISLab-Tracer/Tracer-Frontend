import React from "react";
import LoginPresenter from "./LoginPresenter";
//import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
  /* Router */
  //const navigate = useNavigate();
  
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
    />
  );
  
};

export default LoginContainer;
