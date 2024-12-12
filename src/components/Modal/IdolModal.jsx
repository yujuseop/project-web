export default function IdolModalChart({ imgUrl, name, totalVotes }) {
  return (
    <li>
      <div style={{ width: "588px", height: "70px" }}>
        <img src={imgUrl} alt={`${group}-이미지`} />

        <div>
          <p>{name}</p>
          <p>{totalVotes}표</p>
        </div>
      </div>
    </li>
  );
}
