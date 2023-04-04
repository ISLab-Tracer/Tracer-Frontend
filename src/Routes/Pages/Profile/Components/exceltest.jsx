<Properties.Box fieldTitle="테스트" name="테스트">
  {/* 엑셀 파싱 */}
  <div>
    <input type="file" accept=".xlsx,.xls" onChange={SelectExcel} />
  </div>
  <div>
    <div className="flexrow">
      {excel &&
        excelfield.map((field, index1) => {
          // 필드명 추출 ( 최적화 필요 )
          return <div key={index1}>{field}</div>;
        })}
    </div>
    {excel &&
      excel.map((row, index1) => {
        // 각행 추출
        return (
          <div key={index1} className="flexrow">
            {excelfield.map((field, index2) => {
              // 하나의 행에서 Field값 추출
              return (
                <div key={index2} className="flex">
                  <div className="">{row[field]}</div>
                </div>
              );
            })}
          </div>
        );
      })}
  </div>
</Properties.Box>;
