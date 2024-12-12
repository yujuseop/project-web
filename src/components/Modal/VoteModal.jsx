import { getVote } from "../../api";
import React, { useState } from "react";
import credit from "../../assets/credit.png";
import styles from "./Modal.module.scss";

function VotePage() {
  const [voteModal, setVoteModal] = useState(false);
  const [lackModal, setLackModal] = useState(false);

  return (
    <>
      <div className={styles.Modal}>
        {voteModal && (
          <div>
            <h1>이달의 여자 아이돌</h1>
            <div>
              숫자 뉴진스 민지 표숫자 체크표시
              <img />
            </div>
            <div> 버튼 투표하기</div>
            <div> 투표하는데 1000 크레딧이 소모됩니다.</div>
          </div>
        )}
      </div>
      <div>
        {}
        <img src={credit} alt="creditImg" />앗 투표하기 위한 크레딧이 부족해요
        <button>확인</button>
      </div>
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
    </>
  );
}

export default Modal;

//차트 투표하기를 누르면 투표하는창을
//투표하는 창에서 선택하면 빨간색 표시가 나게
//투표하기 누르면 1000크레딧이 있으면 투표수가 올라가게, 크레딧이 없으면 크레딧부족창이 뜨게
//충전하기 누르면 충전모달창 뜨고 체크하고 충전하기 누르면 숫자 올라가게끔하기..
