import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { RegEmail } from '../../../Utils'
import SignUpPresenter from "./SignUpPresenter";

const SignUpContainer = () => {
  
  /* Router */
  const navigate = useNavigate();

  /* State */
  const initialState = {
    user_email: 'simon320@naver.com',
  };
  
  const [userInfo, setUserInfo] = useState(initialState);
  const [emailCheck, setEmailCheck] = useState(false);
  

  /* Hooks */
  
  
  /* Functions */
  // ** 깔끔하게 바꿀 예정

  const handleOnClick = () => {

    console.log( "MOVE" );
    navigate("/");
    return true;
  }
  
  const handleOnSubmit = e => {

    if( !emailCheck ) {
      e.preventDefault();
    }
  }

  const handleLoginAction = async e => {

    console.log( e.target.value );
  }

  const handleUserInfo = e => {

    setUserInfo( { ...userInfo, [e.target.name] : e.target.value } )

    const checkEmail = RegEmail( e.target.value );

    if( checkEmail ) {
      setEmailCheck( true );
    } else {
      setEmailCheck( false );
    }

  }

  /* Render */
  return (
    <SignUpPresenter
    handleLoginActoin = { handleLoginAction }
    handleOnSubmit = { handleOnSubmit }
    handleOnChange={ handleUserInfo }
    handleOnClick={ handleOnClick }
    emailCheck = { emailCheck }

    />
  );
};

export default SignUpContainer;
