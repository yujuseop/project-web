import { useEffect, useState } from "react";
import SponsorshipItem from "./SponsorShipItem";
import styles from "./SponsorshipList.module.css";
import { getSponsership } from "../../api";
import leftIcon from "../../assets/lefticon.png";
import rightIcon from "../../assets/righticon.png";

function SponsorshipList() {
  const [items, setItems] = useState([]);

  const handleLoad = async () => {
    const result = await getSponsership();
    const { list } = result;
    setItems(list);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <h1>후원을 기다리는 조공</h1>
      <div className={styles.card_wrap}>
        <div className={styles.card_handleButton}>
          <img
            className={styles.card_handleButton_img}
            src={leftIcon}
            alt="왼쪽 버튼"
          />
        </div>
        <div className={styles.card_list}>
          {items.map((item) => {
            return <SponsorshipItem key={item.id} item={item} />;
          })}
        </div>
        <div className={styles.card_handleButton}>
          <img
            className={styles.card_handleButton_img}
            src={rightIcon}
            alt="오른쪽 버튼"
          />
        </div>
      </div>
    </div>
  );
}

export default SponsorshipList;
