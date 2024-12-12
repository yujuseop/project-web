import { useState } from "react";
import Header from "../components/Header/Header";
import MonthsList from "../components/MonthList/MonthsList";
import MyCredit from "../components/MyCredit/MyCredit";
import SponsorshipList from "../components/SponsorshipList/SponsorshipList";
import useScrollTop from "../hooks/useScrollTop";
import SponsorshipModal from "../components/SponsorshipList/SponsorshipModal";

function ListPage() {
  useScrollTop();
  const [sponsorModal, setSponsorModal] = useState(false);
  const handleSponsorModal = (item) => {};
  return (
    <div>
      <Header />
      <div>리스트 페이지</div>
      <MyCredit />
      <SponsorshipList />
      {sponsorModal && <SponsorshipModal />}
      <MonthsList />
    </div>
  );
}

export default ListPage;
