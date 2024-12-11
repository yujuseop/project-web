import Credit from "../../assets/credit.png";
import NewJeans from "../../assets/newjeans-img.png";
import styles from "./SponsorshipItem.module.css";

function SponsorshipItem() {
  return (
    <div className={styles.card}>
      <div className={styles.card_img_container}>
        <img className={styles.card_img} alt="아이돌 이미지" src={NewJeans} />
        <div className={styles.card_img_grdiant}></div>
        <button className={styles.card_button}>후원하기</button>
      </div>
      <div className={styles.card_description_container}>
        <div className={styles.card_title_container}>
          <span className={styles.card_advertising}>강남역 광고</span>
          <h1 className={styles.card_title}>뉴진스 민지 지하철 광고</h1>
        </div>
        <div className={styles.card_sponsor_container}>
          <div className={styles.card_credit_container}>
            <div className={styles.card_credit}>
              <img
                className={styles.card_credit_logo}
                alt="크레딧 로고"
                src={Credit}
              />
              <span className={styles.card_credit_count}>6,000</span>
            </div>
            <p className={styles.card_deadline}>5일 남음</p>
          </div>
          <div className={styles.card_goal}>
            <div className={styles.card_progress}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SponsorshipItem;
