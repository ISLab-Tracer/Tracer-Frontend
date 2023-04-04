import React, { useState, useRef } from 'react';
import Properties from './Properties';
import { ImgError } from 'Utils';
import { i_times, i_money, i_set } from './Initial';

const TeamProfile = ({ info }) => {
  /* Router */

  /* State */

  const clickRef = useRef();

  // 도움말 Click 감지
  const [clickHelp, setClickHelp] = useState(false);

  // 팀 정보 > 시간대/이미지용 State
  const [testState, setTestState] = useState(info.team_time);
  const [testImg, setTestImg] = useState(info.team_img);

  // 표시설정 > 통화/제품정보 Select용 State
  const [testMoney, setTestMoney] = useState(info.set_money);
  const [testSet, setTestSet] = useState(info.set_set);

  const imgRef = useRef();

  /* Functions */
  const ClickUpload = () => {
    imgRef.current.click();
  };

  const ChangeImg = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setTestImg(reader.result);
    };
  };
  /* Hooks */
  /* Render */
  return (
    <div className="main-content-container overflow">
      <div className="profile-page-main">
        <Properties.Header fieldTitle="팀 설정" name="결제 및 설정" />
        <Properties.Box fieldTitle="팀 정보" style={{ marginTop: '0' }}>
          <div className="profile-page-main-mainbox flexrow">
            <div className="profile-page-main-mainbox-leftbox">
              <Properties.Input
                fieldTitle="이름"
                name="이름"
                value={info.team_name}
                style={{ width: '100%' }}
              />

              <Properties.Input
                fieldTitle="팀 메모"
                name="팀 메모"
                value={info.team_memo}
                style={{ width: '100%' }}
                multiline={true}
                rows={4}
                h5style={{ alignItems: 'flex-start' }}
              />

              <Properties.Select
                fieldTitle="시간대"
                name="시간대"
                style={{ width: '100%' }}
                value={testState}
                setValue={setTestState}
                render={i_times}
              />
            </div>
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              ref={imgRef}
              onChange={ChangeImg}
            />
            <div
              className="profile-page-main-mainbox-rightbox"
              onClick={ClickUpload}
            >
              <img
                src={testImg}
                alt="img"
                className="profile-page-main-mainbox-rightbox-img"
                onError={ImgError}
              />
            </div>
          </div>
          <Properties.Button fieldTitle="저장" />
        </Properties.Box>

        <Properties.Box
          fieldTitle="회사 정보"
          help={true}
          value={clickHelp}
          setValue={setClickHelp}
        >
          <div className="profile-page-main-mainbox flexcolumn">
            <Properties.Input
              fieldTitle="상호"
              name="상호"
              value={info.com_name}
            />
            <Properties.Input
              fieldTitle="등록번호"
              name="등록번호"
              value={info.com_id}
            />
            <Properties.Input
              fieldTitle="주소"
              name="주소"
              value={info.com_location}
              multiline={true}
              rows={4}
            />
            <Properties.Input
              fieldTitle="대표자명"
              name="대표자명"
              value={info.com_boss}
            />
            <Properties.Input
              fieldTitle="전화번호"
              name="전화번호"
              value={info.com_phone}
            />
          </div>
          <div>
            <Properties.Button fieldTitle="저장" />
          </div>
        </Properties.Box>

        <Properties.Box fieldTitle="표시 설정">
          <div className="profile-page-main-mainbox flexcolumn">
            {/* Select로 변경 해야 함 */}
            <Properties.Select
              fieldTitle="통화"
              name="통화"
              value={testMoney}
              setValue={setTestMoney}
              render={i_money}
            />
            <Properties.Select
              fieldTitle="제품정보"
              name="제품정보"
              value={testSet}
              setValue={setTestSet}
              render={i_set}
            />
          </div>
          <div>
            <Properties.Button fieldTitle="저장" />
          </div>
        </Properties.Box>

        <Properties.Box fieldTitle="데이터 삭제">
          <Properties.Delete
            fieldTitle="팀 정보 및 데이터가 모두 삭제됩니다."
            name="팀 삭제"
          />
        </Properties.Box>
      </div>
      <Properties.Alert
        // 더보기로 제어 해야 함 Default => display: none
        Header="도움말"
        Title="회사 정보"
        Sub="회사 정보는 발주서, 거래명세서 등을 인쇄할 때 사용됩니다."
        clickHelp={clickHelp}
        setValue={setClickHelp}
        clickRef={clickRef}
      />
    </div>
  );
};

export default TeamProfile;
