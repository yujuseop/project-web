import credit from "../../assets/icons/credit.png";
import { useState } from "react";

function ChargeCredit({ onCharge }) {
  const [selectedCredit, setSelectedCredit] = useState(0); //크레딧의 현재상태표시
  //크레딧충전하기

  const handleCreditSelect = (credit) => {
    setSelectedCredit(credit);
  };

  const handleCharge = () => {
    if (selectedCredit > 0) {
      onCharge(selectedCredit); //충전금액 전달
      setSelectedCredit(0); //입력초기화
    }
  };
  return (
    <div>
      <h2>크레딧 충전하기</h2>
      <div>
        <img src={credit} alt="creditImg" /> 100{" "}
      </div>
      <div>
        <img src={credit} alt="creditImg" /> 500{" "}
      </div>
      <div>
        <img src={credit} alt="creditImg" /> 1000{" "}
      </div>
    </div>
  );
}
