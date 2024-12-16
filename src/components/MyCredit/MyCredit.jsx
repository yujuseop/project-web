import { useState } from "react";
import ModalWrap from "../Modal/ModalWrap";

function MyCredit() {
  const [credit, setCredit] = useState(0); //크레딧 초기값 0
  const [isModalOpen, setIsModalOpen] = useState(false); //모달창 나오게하기
  const [selectedAmount, setSelectedAmount] = useState(0);
  //localstorage로 연결하는 코드를 만들어야함.

  const openModal = () => {
    setIsModalOpen(true);
  };
  //충전 창 열기
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAmount(0);
  };
  const selectAmount = (amount) => {
    setSelectedAmount(amount);
  };

  //충전 창 닫기, 선택한 금액 초기화시키기
  const handleReCharge = () => {
    if (selectedAmount > 0) {
      const newCredit = credit + selectedAmount;
      setCredit(newCredit);
      localStorage.setItem("credit", newCredit);
      closeModal();
    } else {
      alert("충전 금액을 선택해주세요!");
    }
  };

  return (
    <div>
      <div>내크레딧:{credit}</div>
      <button onClick={openModal}>충전하기</button>
      {isModalOpen && (
        <ModalWrap handleDeleteModal={closeModal}>
          <div>
            <h2>크레딧 충전하기</h2>
            <div>
              <button onClick={() => selectAmount(100)}>100 크레딧</button>
              <button onClick={() => selectAmount(500)}>500 크레딧</button>
              <button onClick={() => selectAmount(1000)}>1000 크레딧</button>
            </div>
            <button onClick={handleReCharge}>충전하기</button>
          </div>
        </ModalWrap>
      )}
    </div>
  );
}

export default MyCredit;
