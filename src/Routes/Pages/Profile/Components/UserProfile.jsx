import React, { useState } from 'react';
import Properties from './Properties';
import { ImgError } from 'Utils';
import * as XLSX from 'xlsx';

// 이거 원래 이게 맞나?
import img from 'Assets/img/logo.png';

const UserProfile = () => {
  /* Router */

  /* State */
  const [excel, setExcel] = useState();
  const [check, setCheck] = useState(false);

  /* Functions */

  // 엑셀 파싱 함수
  const testChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });

      // Sheet 구분
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      // jsonData => 엑셀 파싱 값
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 0 });
      setExcel(jsonData);
      setCheck(true);
    };
    reader.readAsBinaryString(file);
  };

  /* Hooks */
  /* Render */
  return (
    <div className="main-content-container">
      <div className="profile-page-main">
        <Properties.Header fieldTitle="유저 설정" name="결제 및 설정" />
        {/* 유저 정보 */}
        <Properties.Box fieldTitle="유저 정보" style={{ marginTop: '0' }}>
          <div className="profile-page-main-mainbox flexrow">
            <div className="profile-page-main-mainbox-leftbox">
              <Properties.Input fieldTitle="이름" name="이름" />
              <Properties.Input fieldTitle="언어" name="언어" />
              <div className="field-container">
                <h5>로그인 방식</h5>
                <div className="property-field">
                  <div>
                    <img src={img} alt="img" />
                  </div>
                  <div>
                    <span>ISLAB</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-page-main-mainbox-rightbox">
              <input type="file" accept="image/*" style={{ display: 'none' }} />
              <img
                src=""
                alt="img"
                className="profile-page-main-mainbox-rightbox-img"
                onError={ImgError}
              />
            </div>
          </div>
          <Properties.Button fieldTitle="저장" />
        </Properties.Box>

        <Properties.Box fieldTitle="테스트" name="테스트">
          {/* 엑셀 파싱 */}
          <div>
            <input type="file" accept=".xlsx,.xls" onChange={testChange} />
          </div>
          <div>
            {check &&
              excel.map((row, index) => {
                return (
                  // 현재 특정 연구비 카드만 들고와야 map 돌릴 수 있음
                  // 추후 필드명이 들어있는 row 가져와 props로 넘길 예정
                  <div key={index} className="flexrow">
                    <div>{row['순번']}</div>
                    <div>{row['과제명']}</div>
                    <div>{row['과제담당자']}</div>
                    <div>{row['비밀번호']}</div>
                    <div>{row['소유주']}</div>
                    <div>{row['원/년']}</div>
                    <div>{row['일반결제비밀번호']}</div>
                    <div>{row['카드 소유주 생년월일']}</div>
                    <div>{row['카드번호']}</div>
                    <div>{row['카드종류']}</div>
                  </div>
                );
              })}
          </div>
        </Properties.Box>
        {/* 이메일 알림 */}
      </div>
    </div>
  );
};

export default UserProfile;
