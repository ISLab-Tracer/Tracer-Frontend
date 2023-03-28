import React from 'react';

const UserProfile = () => {
  /* Router */
  /* State */
  /* Functions */
  /* Hooks */
  /* Render */
  return (
    <div className="main-content-container">
      <div className="profile-page-main">
        <Properties.Header fieldTitle="팀 설정" name="결제 및 설정" />
        <Properties.Box fieldTitle="팀 정보">
          <div className="profile-page-main-mainbox flexrow">
            <div className="profile-page-main-mainbox-leftbox">
              <Properties.Input
                fieldTitle="이름"
                name="이름"
                style={{ width: '100%' }}
              />

              {/* textArea로 수정 해야 함 */}
              <Properties.Input
                fieldTitle="팀 메모"
                name="팀 메모"
                style={{ width: '100%' }}
                multiline={true}
                rows={4}
                h5style={{ alignItems: 'flex-start' }}
              />

              {/* Select 수정 해야 함 */}
              <Properties.Select
                fieldTitle="시간대"
                style={{ width: '100%' }}
                setValue
              />
            </div>
            <div className="profile-page-main-mainbox-rightbox">
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

        <Properties.Box fieldTitle="회사 정보" help="t">
          <div className="profile-page-main-mainbox flexcolumn">
            <Properties.Input fieldTitle="상호" name="상호" />
            <Properties.Input fieldTitle="등록번호" name="등록번호" />
            <Properties.Input fieldTitle="주소" name="주소" />
            <Properties.Input fieldTitle="대표자명" name="대표자명" />
            <Properties.Input fieldTitle="전화번호" name="전화번호" />
          </div>
          <div>
            <Properties.Button fieldTitle="저장" />
          </div>
        </Properties.Box>

        <Properties.Box fieldTitle="표시 설정">
          <div className="profile-page-main-mainbox flexcolumn">
            {/* Select로 변경 해야 함 */}
            <Properties.Input fieldTitle="통화" name="통화" />
            <Properties.Input fieldTitle="제품정보" name="제품정보" />
          </div>
          <div>
            <Properties.Button fieldTitle="저장" />
          </div>
        </Properties.Box>

        <Properties.Box fieldTitle="데이터 삭제"></Properties.Box>
      </div>
    </div>
  );
};
