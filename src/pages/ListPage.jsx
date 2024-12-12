import { useState } from "react";
import Header from "../components/Header/Header";
import MonthsList from "../components/MonthList/MonthsList";
import MyCredit from "../components/MyCredit/MyCredit";
import SponsorshipList from "../components/SponsorshipList/SponsorshipList";
import useScrollTop from "../hooks/useScrollTop";
import SponsorshipModal from "../components/SponsorshipList/SponsorshipModal";
import ModalWrap from "../components/Modal/ModalWrap";

function ListPage() {
  const [isSponsorModal, setIsSponsorModal] = useState(false);
  const [sponsorData, setSponsorData] = useState();
  useScrollTop();

  //후원 모달 팝업 true,false
  const handleSponsorModal = (data) => {
    setIsSponsorModal(true);
    setSponsorData(data);
  };

  //모달 팝업 X버튼 클릭시 닫기
  const handleDeleteModal = () => {
    setIsSponsorModal(false);
    setSponsorData();
  };

  return (
    <div>
      <Header />
      <div>리스트 페이지</div>
      <MyCredit />
      <SponsorshipList handleSponsorModal={handleSponsorModal} />
      {isSponsorModal && (
        <ModalWrap handleDeleteModal={handleDeleteModal}>
          <SponsorshipModal data={sponsorData} />
        </ModalWrap>
      )}
      <MonthsList />
    </div>
  );
}

export default ListPage;
