function IdolModalChart({ imgUrl, group, name, totalVotes }) {
  return (
    <li>
      <div style={{ width: "588px", height: "70px" }}>
        <img src={imgUrl} alt={`${group}-이미지`} />
        <div>
          <p>{group}</p>
          <p>{name}</p>
          <p>{totalVotes}표</p>
        </div>
      </div>
    </li>
  );
}

export default IdolModalChart;
