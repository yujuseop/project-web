function VotePage() {
  const [LackModal, setLackModal] = useState(false);

  return (
    <>
      <div>
        <img src={credit} alt="creditImg" />앗 투표하기 위한 크레딧이 부족해요
        <button>확인</button>
      </div>
    </>
  );
}

export default LackModal;
