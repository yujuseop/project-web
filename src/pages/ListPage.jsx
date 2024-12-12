import { useState } from "react";
import Header from "../components/Header/Header";
import MonthsList from "../components/MonthList/MonthsList";
import MyCredit from "../components/MyCredit/MyCredit";
import SponsorshipList from "../components/SponsorshipList/SponsorshipList";
import useScrollTop from "../hooks/useScrollTop";
import SponsorshipModal from "../components/SponsorshipList/SponsorshipModal";

function ListPage() {
  const [isSponsorModal, setIsSponsorModal] = useState(false);
  const [sponsorData, setSponsorData] = useState();
  useScrollTop();

  //후원 모달 팝업 true,false (작업중)
  const handleSponsorModal = (data) => {
    setIsSponsorModal(!isSponsorModal);
    setSponsorData(data);
  };

  return (
    <div>
      <Header />
      <div>리스트 페이지</div>
      <MyCredit />
      <SponsorshipList handleSponsorModal={handleSponsorModal} />
      {isSponsorModal && (
        <SponsorshipModal
          data={sponsorData}
          handleSponsorModal={handleSponsorModal}
        />
      )}
      <MonthsList />
    </div>
  );
}

export default ListPage;
