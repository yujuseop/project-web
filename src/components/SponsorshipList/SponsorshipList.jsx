import SponsorshipItem from "./SponsorShipItem";
import styles from "./SponsorshipList.module.css";

function SponsorshipList() {
  return (
    <div>
      <h1>후원을 기다리는 조공</h1>
      <div className={styles.card_list}>
        <SponsorshipItem />
        <SponsorshipItem />
        <SponsorshipItem />
        <SponsorshipItem />
      </div>
    </div>
  );
}

export default SponsorshipList;
