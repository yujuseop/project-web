import { useState } from "react";
import CustomButton from "../CustomButtom/CustomButton";
import Credit from "../../assets/icons/credit.png";
import styles from "./MyCredit.modul.scss";

function MyCredit() {
  const [credit, setCredit] = useState(0); //크레딧 초기값 0
  const [selectedAmount, setSelectedAmount] = useState(0);
  //localstorage로 연결하는 코드를 만들어야함.

  const selectAmount = (amount) => {
    setSelectedAmount(amount);
  };

  return (
    <div>
      <div>내크레딧:{credit}</div>
      <button onClick={handleModal}>충전하기</button>
    </div>
  );
}

export default MyCredit;
