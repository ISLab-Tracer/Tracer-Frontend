import React from 'react';
import Properties from './Properties';
import { ImgError } from 'Utils';
import * as XLSX from 'xlsx';

const UserProfile = () => {
  /* Router */
  /* State */
  /* Functions */
  const testChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      console.log(jsonData);
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
          <div>
            <input type="file" accept=".xlsx,.xls" onChange={testChange} />
          </div>
        </Properties.Box>
        {/* 이메일 알림 */}
      </div>
    </div>
  );
};

export default UserProfile;
